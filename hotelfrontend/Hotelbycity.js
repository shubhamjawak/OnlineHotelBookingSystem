import React, { useEffect, useState } from "react";
export default function HotelByCity(){


    //const [Hotel,setHotel]=useState([]);

    const [Hotel,setHotel]=useState([]);


    useEffect(() => {

              const getHotel=async()=>{
                const res=await fetch('http://localhost:8080/city?cityname=');
                const getdata=await res.json();
                setHotel(getdata);
                console.log(getdata)
              }
              getHotel();

      }, []);

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
          <a class="nav-link" href="/login">Login</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/register">Register</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>

<div>
<table class="table">
  <thead>
      <tr>
        <th>Hotel name</th>
        <th>Hotel address</th>
        <th>Hotel contact no</th>
      </tr>

  </thead>
  <tbody>

    {
      Hotel.map((obj)=>(
        <tr key={obj.hoteid}>
            <td>obj.hname</td>
            <td>obj.address</td>
            <td>obj.contact_no</td>
        </tr>
      ))
    }

  </tbody>

</table>
</div>
</div>
    )
}