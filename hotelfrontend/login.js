import React from "react";

export default class Login extends React.Component{

    constructor(props){
        super(props)
        this.state={
            
            email:"",
            
            password:"",
            loginerror:"",
            user:"",
            errors:{
                uiderror:"",
                pwderror:""
            },
            uidvalid:false,
            pwdvalid:false,
            formvalid:false
            
        }
        this.routeChange = this.routeChange.bind(this);
    }
    handleInput=(ev)=>{
        const emailregexp = /^[A-Za-z0-9._-]{5,}@[A-Za-z0-9.]{5,12}\.[a-z]{2,3}$/;

        const nm = ev.target.name;
        const val = ev.target.value;
        let errors = errors;
        let uidflag = this.state.uidvalid;
        let pwdflag = this.state.pwdvalid;
        switch(nm)
        {
            case 'email':
                if( !emailregexp.test(val) )
                {
                    errors.uiderror = "Email is invalid";
                    uidflag = false;
                }    
                else
                {
                    errors.uiderror = "";
                    uidflag=true;
                }    
                break;
            case 'password':
                if(val.length < 5)
                {
                    errors.pwderror = "Password too short";
                    pwdflag = false;
                }
                else
                {
                    errors.pwderror ="";
                    pwdflag= true;

                }
                break;    
        }
    
        this.setState({errors,[nm]: val,uidvalid: uidflag, pwdvalid: pwdflag} , ()=>{ this.setState({formvalid: this.state.uidvalid && this.state.pwdvalid})});
    }
   
    routeChange=(ev)=>{
        ev.preventDefault();

        console.log(this.state);
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: this.state.email,
                password:this.state.password,
               
            })
        };

        fetch("http://localhost:8080/login",reqData)
        .then(resp => resp.text())
        .then(data => {if(data.length!=0)
                        {
                        

                            const json=JSON.parse(data)
                            if(json.usertype=="customer")
                            {
                                
                                this.setState({customer:json})
                                localStorage.setItem("loggedinuser",JSON.stringify(this.state.customer))
                                this.setState({user:json.usertype})
                                //navigate('/customerhome');
                                //useNavigate("/customerhome")
                                //this.props.navigate("/customerhome")
                               // navigate("http://localhost:3000/login")
                            }
                            if(json.usertype=="service")
                            {
                                this.setState({service:json})
                                localStorage.setItem("loggedinuser",JSON.stringify(this.state.service))
                                //this.props.history.push("/customerhome")
                                this.setState({user:json.usertype})

                            }
                            if(json.usertype=="admin")
                            {
                                this.setState({admin:json})
                                localStorage.setItem("loggedinuser",JSON.stringify(this.state.admin))
                                //this.props.history.push("/customerhome")
                                this.setState({user:json.usertype})

                            }
                            
                        }
                        else
                        {
                                this.setState({loginerror:"Wrong email and password"})
                        }

            
        })
        

       
        
      }
    

    render(){
        return(
            <div className="container col-sm-6 bg-light mt-5 border border-dark border-5" >
                <h3>Sign in</h3>
                  <form method="post" >
                      <div className="mb-1">
                  Enter Email Id : 
                    <input type="text" name="email" value={this.state.email}
                    onChange={this.handleInput} /> </div>{this.state.errors.uiderror}<br/>
                     
                    <div className="mb-3">
                    Enter Password : 
                    <input type="password" name="password" value={this.state.password}
                    onChange={this.handleInput} /> </div>{this.state.errors.pwderror}<br/>
                    
                     
                      <input type="submit" value="SUBMIT"  disabled={!this.state.formvalid} onClick={this.routeChange} className="btn btn-outline-primary float-left ml-4"/> 
                        <p>{this.state.loginerror}</p>
                        <p>{this.state.user}</p>
                  
                  </form>
                  <a href="/register">New user Registration</a>
                  
                
                 
                 
            </div>
        )
    }
}