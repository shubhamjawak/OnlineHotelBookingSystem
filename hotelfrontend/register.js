import React from "react";
import { Navigate } from "react-router-dom";
import { withRouter } from "./WithRouter";
export default class Register extends React.Component
{
	
    constructor(props){
        super(props);
        this.state = {
            
            firstname:"",
			lastname:"",
			email:"",
			password:"",
            address:"",
            contact_no:"",
            
            aadhar_no:"",
            usertype:"",
			redirect:false,

            errors:{
                firstnameError:"",
				lastnameError:"",
				emailError:"",
				passwordError:"",
                addressError:"",
                contact_noError:"",
                
                aadhar_noError:"",
                dobError:"",
                genderError:"",
                usertypeError:""
            },

            formValid:false,
            firstnameValid:false,
			lastnameValid:false,
			emaliValid:false,
			passwordValid:false,
            addressValid:false,
            contact_noValid:false,
            
            aadhar_noValid:false,
            usertypeValid:false,

           msg:""
        }

    }
	 
   
    handleInput=(ev)=>{
        const nm = ev.target.name;
        const val = ev.target.value;
        let errors=this.state.errors;

        let formV=this.state.formValid;
        let firstnameV=this.state.firstnameValid;
		let lastnameV=this.state.lastnameValid;
		let emailV=this.state.emaliValid;
		let passwordV=this.state.passwordValid;
        let contact_noV=this.state.contact_noValid;
        let addressV=this.state.addressValid;
        
        let aadhar_noV=this.state.aadhar_noValid;
        let usertypeV=this.state.usertypeValid;
        
        
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;
        const firstnameregexp=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
		const lastnameregexp=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/;
        const contactregexp=/^(\+\d{1,3}[- ]?)?\d{10}$/;
        const aadharregexp=/^\d{12}$/;
        const pwdregexp= /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%^&*])[A-Za-z0-9!@#$%^&*]{5,15}$/;
        const accnoregexp=/^\d{8}$/;
       

        switch(nm)
        {
            case 'firstname':
                if(!firstnameregexp.test(val))
                {
                    errors.firstnameError="Invalid Firstname";
                    firstnameV=false;
                }
                else
                {
                    errors.firstnameError="";
                    firstnameV=true;

                }
                break;
			case 'lastname':
                if(!lastnameregexp.test(val))
                {
                    errors.lastnameError="Invalid Lastname";
                    lastnameV=false;
                }
                else
                {
                    errors.lastnameError="";
                    lastnameV=true;

                }
                break;
            case 'address':
                if(val.length==0)
                {
                    errors.addressError="Plz fill address";
                    addressV=false;
                }
                else{
                    errors.addressError="";
                    addressV=true;
                }
                break;
            case 'contact_no':
                if(!contactregexp.test(val))
                {
                    errors.contact_noError="Invalid Contact no";
                    contact_noV=false;
                }
                else{
                    errors.contact_noError="";
                    contact_noV=true;
                }
                break;
            case 'email':
                if(!emailregexp.test(val))
                {
                    errors.emailError="Invalid Email ";
                    emailV=false;
                }
                else{
                    errors.emailError="";
                    emailV=true;
                }
                break;
            case 'aadhar_no':
                if(!aadharregexp.test(val))
                    {
                        errors.aadhar_noError="Invalid Aadhar no";
                        aadhar_noV=false;
                    }
                    else{
                        errors.aadhar_noError="";
                        aadhar_noV=true;
                    }
                    break;
            
                    
            case 'usertype':
                if(val.length==0)
                {
                    errors.usertypeError="Plz select usertype";
                    usertypeV=false;
                }
                else{
                    errors.usertypeError="";
                    usertypeV=true;
                }
                break;
            case 'password':
                if(!pwdregexp.test(val))
                {
                    errors.passwordError="plz create password";
                    passwordV=false;
                }
                else
                {
                    errors.passwordError="";
                    passwordV=true;
                }
                break;
           

                
        }

        
        

        this.setState({errors,[nm]: val,firstnameValid:firstnameV,lastnameValid:lastnameV,addressValid:addressV,contact_noValid:contact_noV,emaliValid:emailV,aadhar_noValid:aadhar_noV,usertypeValid:usertypeV,passwordValid:passwordV},()=>{this.setState({formValid:this.state.firstnameValid&&this.state.lastname&&this.state.addressValid&&this.state.contact_noValid&&this.state.emaliValid&&this.state.aadhar_noValid&&this.state.usertypeValid&&this.state.passwordValid})});
    }

    

    sendData=(ev)=>{
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
               
                fname: this.state.firstname,
				lname: this.state.lastname,
                address: this.state.address,
                contact_no: this.state.contact_no,
                email: this.state.email,
                aadhar_no: this.state.aadhar_no,
            
                password:this.state.password,
                usertype:this.state.usertype
            })
            
        }

        fetch("http://localhost:8080/register",reqData)
		.then(resp => resp.text())
        .then(data => this.setState({redirect: true}))
        alert("registered succesfully")
        
        
    }


    render(){
        return (
            <div className="container" style={{backgroundColor:"gray"} }>
                <h1 style={{textAlign:"center"}}>Stay Safe! Stay Healthy!</h1>
				{this.state.redirect && <Navigate to='/login' replace={true} />}
                <form style={{padding:"100px" }} action="/payment">
                    <table>
                        <tr>
                            <td> Enter Name :</td>
                            <td><input type="text" name="firstname" value={this.state.firstname}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.firstnameError}</h4></td>
                        </tr>
						<tr>
                            <td> Enter Lastname :</td>
                            <td><input type="text" name="lastname" value={this.state.lastname}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.lastnameError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Address :</td>
                            <td><input type="text" name="address" value={this.state.address}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.addressError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Contact :</td>
                            <td><input type="text" name="contact_no" value={this.state.contact_no}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.contact_noError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Email :</td>
                            <td> <input type="text" name="email" value={this.state.email}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.emailError}</h4></td>
                        </tr>
                        <tr>
                            <td>Enter Aadhar No. :</td>
                            <td><input type="text" name="aadhar_no" value={this.state.aadhar_no}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.aadhar_noError}</h4></td>
                        </tr>
                       
                        <tr>
                            <td> Select usertype :</td>
                            <td><input type="radio" id="customer" name="usertype" value="customer" onChange={this.handleInput}/>
                            <label for="customer">customer</label>
                            <input type="radio" id="service" name="usertype" value="service" onChange={this.handleInput}/>
                            <label for="service">service</label><br/></td>
                           
                            <td><h4>{this.state.errors.genderError}</h4></td>
                        </tr>
                        
                        <tr>
                            <td> Create Password :</td>
                            <td><input type="text" name="password" value={this.state.password}
                    onChange={this.handleInput} /> <br/></td>
                            <td><h4>{this.state.errors.passwordError}</h4></td>
                        </tr>
                       
                        
                        <tr>
                            <td><input type="submit" value="Save" 
                    onClick={this.sendData} disabled={!this.state.formValid}/></td>
                    
                        </tr>
                    
                    </table>
                </form>
				
               
               
                
                <a href="/login">LOGIN</a>
               
            </div>
        )
    }
	
}
