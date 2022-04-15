import React from "react";

export default class RForm2 extends React.Component{
    constructor(props){
        super(props)
        this.state={
            
            email:"",
            fname:"",
            lname:"",
            usertype:"",
            password:"",
            contact_no:"",
            aadhar_no:"",
            address:"",
            ch:false
        }
    }
    changeInpText=(event)=>{
        const en=event.target.name;
        const type=event.target.type;
        let val;
        if(type==="checkbox"){
             val=event.target.checked;
             
        }
        else
          val=event.target.value;
        
        this.setState({[en]:val})
         
    


    }
    dispMsg=(ev)=>{
        ev.preventDefault();
        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fname: this.state.fname,
                lname:this.state.lname,
				email:this.state.email,
				password:this.state.password,
				contact_no:this.state.contact_no,
				aadhar_no:this.state.aadhar_no,
				address:this.state.address,
				usertype:this.state.usertype
               
            })
        };

        fetch("http://localhost:8080/register",reqData)
        //.then(resp => resp.json())
        //.then(data => this.setState({st: data, success: true}));
        .then(resp=>{if(resp.status==200)
                        console.log("success")
                    else
                        console.log("failed");  })

    
    

          }
   
    render(){
        return(
            <div class="container col-sm-4 my-5 border border-dark border-5">
              
                  <form>
                      <h3>User Registration</h3>
                      <div className="mb-1">
                      Enter EmailID:
                      <input  type="email" name="email" value={this.state.email} onChange={this.changeInpText} ></input></div><br/>
                      <div className="mb-1">
                      Enter Fname:
                      <input  type="text" name="fname" value={this.state.fname} onChange={this.changeInpText} ></input></div><br/>
                      <div className="mb-1">
                      Enter Lname:
                      <input  type="text" name="lname" value={this.state.lname} onChange={this.changeInpText} ></input></div><br/>
                      <div className="mb-1">
                      
                      Enter Password:
                      <input  type="password" name="password" value={this.state.password} onChange={this.changeInpText} ></input></div>
                      <br/>
                      <div className="mb-1">
                      Enter Contact no:
                      <input  type="text" name="contact_no" value={this.state.contact_no} onChange={this.changeInpText} ></input></div><br/>
                      <div className="mb-1">
                      Enter Aadhar No:
                      <input  type="text" name="aadhar_no" value={this.state.aadhar_no} onChange={this.changeInpText} ></input></div><br/>
                      <div className="mb-1">
                      Enter Address:
                      <input  type="text" name="address" value={this.state.address} onChange={this.changeInpText} ></input></div><br/>

                      Select UserType:
                      <input type="radio" name="usertype" value="customer" onChange={this.changeInpText} />Customer                   
                      <input  type="radio" name="usertype" value="service" onChange={this.changeInpText} />Service
                      <br/>
                      <input type="checkbox" name="ch" value={this.state.ch} onChange={this.changeInpText}/> I Agree
                      <br/>
                     
                      <input type="submit" value="SUBMIT"  onClick={this.dispMsg} className="btn btn-outline-primary float-left ml-4"/> 

                  
                  </form>
                
                 
            </div>
        )
    }
}