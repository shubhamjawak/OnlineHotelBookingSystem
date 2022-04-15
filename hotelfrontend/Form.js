import React from "react";

export default class Regn extends React.Component{
    constructor(props){
        super(props)
        this.state={
            fname:"",
            lname:"",
            emailid:"",
            password:"",
            cno:"",
            ano:"",
            add:"",
            usertype:false
        }
        this.dispMsg = this.dispMsg.bind(this);
    }
 /*
   changeInpText=(event)=>{
        const fname=event.target.fname;
		const lname=event.target.lname;
		const emailid=event.target.emailid;
		const address=event.target.address;
		const cno=event.target.cno;
        const ano=event.target.ano;
		const type=event.target.type;

        let val;
        if(type==="checkbox"){
             val=event.target.checked;
             
        }
        else
          val=event.target.value;
        
        this.setState({[fname]:val})
         
    


    }*/
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
                lname: this.state.lname,
                pwd:this.state.pwd,
                email:this.state.email,
				password:this.state.password,
				cno:this.state.cno,
				ano:this.state.ano,
				add:this.state.add,
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
            <div>
              
                  <form>
				  Enter First Name:
                      <input  type="text" name="fname" value={this.state.fname} ></input><br/>
					  Enter Last Name:
                      <input  type="text" name="lname" value={this.state.lname} ></input><br/>
                      Enter EmailID:
                      <input  type="text" name="emailid" value={this.state.emailid} ></input><br/>
                      Enter Address:
                      <input  type="text" name="add" value={this.state.add} ></input><br/>
					  Enter Password:
                      <input  type="text" name="pwd" value={this.state.pwd}  ></input><br/>
                      
					  Enter Contact No:
                      <input  type="number" name="cno" value={this.state.cno}  ></input><br/>
                      
					  Enter Aadhar No:
                      <input  type="number" name="ano" value={this.state.ano} ></input><br/>
                      <br/>
                      Select UserType:
                      <input type="radio" name="usertype" value="customer" />customer                     
                      <input  type="radio" name="usertype" value="service" />service
                      <br/>
                      
                      <input type="checkbox" name="ch" value={this.state.ch} /> I Agree
                      <br/>
                     
                      <input type="submit" value="SUBMIT"  onClick={this.dispMsg} /> 

                  
                  </form>
                
                 
            </div>
        )
    }
}