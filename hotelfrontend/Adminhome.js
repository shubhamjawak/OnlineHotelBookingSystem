import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Adminhome() {

  const uid = JSON.parse(localStorage.getItem("loggedinuser")).uid
  const [user, setUser] = useState([]);
  const [Hotel, setHotel] = useState([]);


  function useEffect(event) {

    event.preventDefault();
    const reqData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    };

    fetch("http://localhost:8080/getuser", reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {

          const json = JSON.parse(data)
          console.log(json)
          console.log(user)
          setUser(json);
          console.log(user)





        }



      })

  }

  function useEffect1(event) {

    event.preventDefault();
    const reqData = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },

    };

    fetch("http://localhost:8080/gethotels", reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {

          const json = JSON.parse(data)
          console.log(json)
          console.log(user)
          setHotel(json);
          console.log(user)





        }



      })

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
              <li>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/adminhome`}
                >
                  Home
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/update?uid=${uid}`}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/gethotels`}
                >
                  View Hotels
                </Link>
              </li>
             
              <li>
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/logout`}
                   >
                  Logout
                </Link>

              </li>


            </ul>

          </div>
        </div>
      </nav>



      <h3>Hello from Admin home page </h3>
      <div className='mb-2'>

        <Link
          class="btn btn-outline-primary mr-2"
          to={`/getuser`}
          onClick={useEffect} >
          View Users
        </Link>



        {
          user.map((oj) => (
            <div className='App container col-10' >
              <table class="table table-success">
                <thead>
                  <tr>
                    <th>User Id</th>
                    <th>User First Name</th>
                    <th>User Last Name</th>
                    <th>Email</th>
                    <th>Password</th>
                    <th>contact no</th>
                    <th>Aadhar no</th>
                    <th>Address</th>
                    <th>usertype</th>


                    <th></th>
                  </tr>

                </thead>
                <tbody>

                  <tr key={oj.uid}>
                    <td>{oj.uid}</td>
                    <td>{oj.fname}</td>
                    <td>{oj.lname}</td>
                    <td>{oj.email}</td>
                    <td>{oj.password}</td>
                    <td>{oj.contact_no}</td>
                    <td>{oj.aadhar_no}</td>
                    <td>{oj.address}</td>
                    <td>{oj.usertype}</td>

                    <td><Link class="btn btn-primary mr-2" to={`/deleteuser?uid=${oj.uid}`}>
                      Delete user
                    </Link></td>
                  </tr>
                </tbody>

              </table>
            </div>
          ))
        }
        <div>
          {
            Hotel.map((oj) => (
              <div className='App container col-10' >
                <table class="table table-success">
                  <thead>
                    <tr>
                      <th>Hotel Regn No</th>
                      <th>Hotel Name</th>
                      <th>Hotel Address</th>
                      <th>Hotel Email</th>
                      <th>Hotel contact no</th>
                      <th>Total Ac Rooms</th>
                      <th>Total Non-Ac Rooms</th>
                      <th>uid</th>
                      <th>cityname</th>

                      <th></th>
                    </tr>

                  </thead>
                  <tbody>

                    <tr key={oj.hotelid}>
                      <td>{oj.hotelregno}</td>
                      <td>{oj.hname}</td>
                      <td>{oj.address}</td>
                      <td>{oj.email}</td>
                      <td>{oj.contact_no}</td>
                      <td>{oj.ac_room}</td>
                      <td>{oj.non_ac_room}</td>
                      <td>{oj.uid}</td>
                      <td>{oj.cityname}</td>
                      <td><Link class="btn btn-primary mr-2" to={`/viewhotel?hotelid=${oj.hotelid}`}>
                        Delete Hotel
                      </Link></td>
                    </tr>
                  </tbody>

                </table>
              </div>
            ))
          }
        </div>
      </div>

    </div>

  )
}
export default Adminhome;