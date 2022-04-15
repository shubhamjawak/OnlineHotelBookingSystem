import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



                                         
export default function Signup() {
  /*const      [firstName, setFirstName] = useState("");
  const      [lastName, setLastName] = useState("");
  const      [email, setEmail] = useState("");
  const      [password, setPassword] = useState("");
  const      [contact_no, setContact_no] = useState("");
  const      [aadhar_no, setAadhar_no] = useState("");
  const      [address, setAddress] = useState("");
  const      [usertype, setUsertype] = useState("");
  const      [registerstatus, setRegisterStatus] = useState("");*/

  const initialValues = { firstname: "",lastname:"", email: "", password: "",address:"",contact_no:"",aadhar_no:"",usertype:"" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


  
 let navigate=useNavigate();

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormValues({ ...formValues, [name]: value });
};
 function dispMsg(ev){
    ev.preventDefault();
    
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues.firstName);
    const reqData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fname:formValues.firstName,
            lname:formValues.lastName,
            email:formValues.email,
            password:formValues.password,
            contact_no:formValues.contact_no,
            aadhar_no:formValues.aadhar_no,
            address:formValues.address,
            usertype:formValues.usertype
           
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
      useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          console.log(formValues);
        }
      }, [formErrors]);
      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.username) {
          errors.username = "Username is required!";
        }
        if (!values.email) {
          errors.email = "Email is required!";
        } else if (!regex.test(values.email)) {
          errors.email = "This is not a valid email format!";
        }
        if (!values.password) {
          errors.password = "Password is required";
        } else if (values.password.length < 4) {
          errors.password = "Password must be more than 4 characters";
        } else if (values.password.length > 10) {
          errors.password = "Password cannot exceed more than 10 characters";
        }
        return errors;
      };
                                                            
 
        
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

        {Object.keys(formErrors).length === 0 && isSubmit ? (
        <div className="ui message success">Signed in successfully</div>
      ) : (
        <pre>{JSON.stringify(formValues, undefined, 2)}</pre>
      )}
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
                value={formValues.firstName}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.firstName}</p>
            <div className='col-md-6'>
              <label htmlFor='lastName'>Last Name</label>
              <input
                className='form-control'
                placeholder='Last Name'
                type='text'
                name='lastName'
                noValidate
                value={formValues.lastname}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.lastName}</p>
          </div>
 
          <div className='mb-3'>
            <label htmlFor='email'>Email</label>
            <input
              className='form-control'
              placeholder='Email'
              type='email'
              name='email'
              noValidate
              value={formValues.email}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.email}</p>
          <div className='mb-3'>
            <label htmlFor='password'>Password</label>
            <input
              className='form-control'
              placeholder='Password'
              type='password'
              name='password'
              noValidate
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.password}</p>
          <div className='mb-3'>
            <label htmlFor='address'>Address</label>
            <input
              className='form-control'
              placeholder='address'
              type='text'
              name='address'
              noValidate
              value={formValues.address}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.address}</p>
          <div className='mb-3'>
            <label htmlFor='contact_no'>Contact no</label>
            <input
              className='form-control'
              placeholder='contact_no'
              type='text'
              name='contact_no'
              noValidate
              value={formValues.contact_no}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.contact_no}</p>
          <div className='mb-3'>
            <label htmlFor='aadhar_no'>Aadhar No</label>
            <input
              className='form-control'
              placeholder='aadhar_no'
              type='text'
              name='aadhar_no'
              noValidate
              value={formValues.aadhar_no}
              onChange={handleChange}
            />
          </div>
          <p>{formErrors.aadhar_no}</p>
            <div>
            Select UserType:
                      <input type="radio" name="usertype" value={formValues.usertype} onChange={handleChange}/>Customer                   
                      <input  type="radio" name="usertype" value={formValues.usertype} onChange={handleChange}/>Service
                      <br/>
            </div>
            <p>{formErrors.usertype}</p>

            

          <div className='mb-3'>
            <button type='submit'>Create Account</button>
          </div>
         
        </form>
      </div>
      </div>
    );
        
}