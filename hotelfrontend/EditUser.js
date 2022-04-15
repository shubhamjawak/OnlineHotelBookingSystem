import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link, useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
    let navigate = useNavigate();
    const uid=JSON.parse(localStorage.getItem("loggedinuser")).uid
   // const { uid } = useParams();
    const [user, setUser] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
        contact_no: "",
        aadhar_no: "",
        address: "",
    });

    const { fname, lname, email, password, contact_no, aadhar_no, address } = user;
    const onInputChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    useEffect(() => {
        loadUser();
    }, []);

    const onSubmit = async e => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/update`, user);

        alert("success");
        navigate("/login");
    };

    const loadUser = async () => {
        const result = await axios.post(`http://localhost:8080/getuserbyid?uid=`+uid);
        setUser(result.data);
        console.log(result.data);
    };
    return (
        <div >
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
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/update?uid=${uid}`}
                >
                  Profile
                </Link>
              </li>

            </ul>

          </div>
        </div>
      </nav>

      <table class="table table-success">
            <div className='App container col-6'>
                <h2 className="text-center mb-4">Update User Details</h2>
                <form onSubmit={e => onSubmit(e)}>
                    <div className="form-group">
                        <h5>Enter First Name</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Name"
                            name="fname"
                            value={fname}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <h5>Enter Last Name</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Username"
                            name="lname"
                            value={lname}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <h5>Enter Email</h5>
                        <input
                            type="email"
                            className="form-control form-control-lg"
                            placeholder="Enter Your E-mail Address"
                            name="email"
                            value={email}
                            onChange={e => onInputChange(e)}
                        />
                    </div>
                    <div className="form-group">
                    <h5>Enter  Password</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Passeord"
                            name="password"
                            value={password}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                    <h5>Enter Address</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Address "
                            name="address"
                            value={address}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                    <h5>Enter Contact No</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your contact no"
                            name="contact_no"
                            value={contact_no}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                    <div className="form-group">
                    <h5>Enter Aadhar No</h5>
                        <input
                            type="text"
                            className="form-control form-control-lg"
                            placeholder="Enter Your Aadhar no"
                            name="aadhar_no"
                            value={aadhar_no}
                            onChange={e => onInputChange(e)}
                        />
                    </div>

                  
                    <button className="btn btn-warning btn-block">Update User</button>
                </form>
            </div>
            </table>
        </div>
    );
};

export default EditUser;