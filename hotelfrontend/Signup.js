import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';



                                         
export default function Signup() {
  const      [firstName, setFirstName] = useState("");
  const      [lastName, setLastName] = useState("");
  const      [email, setEmail] = useState("");
  const      [password, setPassword] = useState("");
  const      [contact_no, setContact_no] = useState("");
  const      [aadhar_no, setAadhar_no] = useState("");
  const      [address, setAddress] = useState("");
  const      [usertype, setUsertype] = useState("");
  const      [registerstatus, setRegisterStatus] = useState("");

  
 let navigate=useNavigate();
 function dispMsg(ev){
    ev.preventDefault();
    
    console.log(firstName);
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname:firstName,
            lname:lastName,
            email:email,
            password:password,
            contact_no:contact_no,
            aadhar_no:aadhar_no,
            address:address,
            usertype:usertype
           
        })
    };

    fetch("http://localhost:8080/register",reqData)
    //.then(resp => resp.json())
    //.then(data => this.setState({st: data, success: true}));
    .then(resp=>{if(resp.status==200)
                {
                    console.log("success")
                    alert("Registered Successfully");
                    navigate("/")
                }

                else
                    console.log("failed");  })




      }                                                         
 
        
    return (

      <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="/">Online Hotel Booking System</a>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>
     

      <div className='App container col-6'>
        <h3>New User Registration Form</h3>
        <form noValidate onSubmit={dispMsg}>
          <div className='row'>
            <div className='col-md-6'>
              <label htmlFor='firstName'>First Name</label>
              <input
                className='form-control'
                placeholder='First Name'
                type='text'
                name='firstName'
                noValidate
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className='col-md-6'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                className='form-control'
                placeholder='Last Name'
                type='text'
                name='lastName'
                noValidate
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
 
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              placeholder='Email'
              type='email'
              name='email'
              noValidate
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              placeholder='Password'
              type='password'
              name='password'
              noValidate
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='address'>Address</label>
            <input
              className='form-control'
              placeholder='address'
              type='text'
              name='address'
              noValidate
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='contact_no'>Contact no</label>
            <input
              className='form-control'
              placeholder='contact_no'
              type='text'
              name='contact_no'
              noValidate
              onChange={(e) => setContact_no(e.target.value)}
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='aadhar_no'>Aadhar No</label>
            <input
              className='form-control'
              placeholder='aadhar_no'
              type='text'
              name='aadhar_no'
              noValidate
              onChange={(e) => setAadhar_no(e.target.value)}
            />
          </div>
            <div>
            Select UserType:
                      <input type="radio" name="usertype" value="customer" onChange={(e) => setUsertype(e.target.value)} />Customer                   
                      <input  type="radio" name="usertype" value="service" onChange={(e) => setUsertype(e.target.value)}/>Service
                      <br/>
            </div>

          <div className='mb-3'>
            <button type='submit'>Create Account</button>
          </div>
         
        </form>
      </div>
      </div>
    );
        
}