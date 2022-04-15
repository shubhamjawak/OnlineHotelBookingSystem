import React from "react";
import { Link } from "react-router-dom";
function Servicehome() {

  const uid=JSON.parse(localStorage.getItem("loggedinuser")).uid
  console.log(uid);
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
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/servicehome`}
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
              <li class="nav-item">
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/addhotel`}
                >
                  Add Hotel
                </Link>
              </li>

              <li class="nav-item">
                <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/hotelbyid`}
                >
                  View Hotel
                </Link>
              </li>
              <li class="nav-item">
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

      <div><h3>Hello from service home page </h3>
        <h3>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname}</h3><br />
      </div>
    </div>
  )

}
export default Servicehome;