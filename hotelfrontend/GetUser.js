import React from "react";
import { Link } from "react-router-dom";
function GetUser(){

    const [User,setUser]=useState([]);
  
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


    
    <h3>Hello from Admin home page </h3>
    <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/getuser`}
                >
                  View Users
                </Link>
    </div>
    )
}
export default GetUser;