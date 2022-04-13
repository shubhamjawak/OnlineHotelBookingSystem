import React, { useState } from 'react';
import { BrowserRouter ,Link,Route, Routes} from "react-router-dom";
//import Signup from "./components/hotelfrontend/Signup";
//import Signin from "./components/hotelfrontend/Signin";
import mystore from './Store';
import Customerhome from './Customerhome';
import Login from './Signin';
import Signup from './Signup';
//import Customerhome from "./components/hotelfrontend/Customerhome";
export default function MainMenu(){

    const [state,setState]=useState(false);

    //mystore.subscribe(()=>{setState({state:mystore.getState().loggedin})})

    console.log(state);

    return(
//<div>



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

</div>

  
    

    
    

    

      

    )
}