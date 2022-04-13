import React from "react";

import { useState } from 'react';


export default function Register() {

// States for registration
const [fname, setFname] = useState('');
const [lname, setLname] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [cno, setCno] = useState('');
const [ano, setAno] = useState('');
const [add, setAdd] = useState('');


// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleFname = (e) => {
	setFname(e.target.value);
	setSubmitted(false);
};

const handleLname = (e) => {
	setLname(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the contact no change
const handleCno = (e) => {
	setCno(e.target.value);
	setSubmitted(false);
};

// Handling the Aadhar no change
const handleAno = (e) => {
	setAno(e.target.value);
	setSubmitted(false);
};

// Handling the address no change
const handleAdd = (e) => {
	setAdd(e.target.value);
	setSubmitted(false);
};


// Handling the form submission
const handleSubmit=(ev)=>{
    
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

       
        
    
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {fname} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};


return (
	<div className="form">
	<div>
		<h3>User Registration</h3>
	</div>

	{/* Calling to the methods */}
	<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>
    <div class="container col-sm-4 my-5 border border-dark border-5">
	<form class="row g-3 needs-validation " novalidate>
		{/* Labels and inputs for form data */}
		
		<label className="label">Enter Your First Name</label>
		<input onChange={handleFname} className="input"
		value={fname} type="text" name='fname' class="input-group has-validation"/><br/>

        <label className="label">Enter Last Name</label>
		<input onChange={handleLname} className="input"
		value={lname} type="text" name='lname'/> <br/>

		<label className="label">Enter Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" name='email'/><br/>

		<label className="label">Enter Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" name='password'/><br/>

        <label className="label">Enter Contact No</label>
		<input onChange={handleCno} className="input"
		value={cno} type="text" name='cno'/><br/>

        <label className="label">Enter Aadhar No</label>
		<input onChange={handleAno} className="input"
		value={ano} type="text" name='ano'/><br/>

        <label className="label">Enter Address</label>
		<input onChange={handleAdd} className="input"
		value={add} type="text" name='add'/><br/>

		<div class="form-check">
        <input type="radio" value="customer" name="usertype" /> Customer
        <input type="radio" value="service" name="usertype" /> Service Provider <br/>

		<div class="col-12">
            <div class="form-check my-3 float-left">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="invalidCheck"
                required
              />
              <label class="form-check-label" for="invalidCheck">
                Agree to terms and conditions
              </label>
              <div class="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>

		</div>

		<button onClick={handleSubmit} className="btn" type="submit" class="btn btn-primary float-left">
		Submit
		</button>
	</form>
    </div>
	</div>
);
}
