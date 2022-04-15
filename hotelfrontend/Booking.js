import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSearchParams } from 'react-router-dom';
export default function Booking() {

  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [no_of_rooms, setNoofrooms] = useState("");
  const [bookingid, setBookingid] = useState("");
  const [totalcost, setTotalcost] = useState("");

  //const[status1,setStatus1]=useState(0);
  let [searchParams] = useSearchParams();
  let [rid, setRid] = searchParams.get('rid')
  const uid = JSON.parse(localStorage.getItem("loggedinuser")).uid
  //const rid=JSON.parse(localStorage.getItem("room"))

  //let rid=useParams("rid");


  const navigate = useNavigate();

  console.log(searchParams.get('rid'));


  function loadcost(){
   
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
     
    };
  
    fetch("http://localhost:8080/getcost?bookingid="+JSON.parse(localStorage.getItem("bookingid")), reqData)
      //.then(resp => resp.json())
      //.then(data => this.setState({st: data, success: true}));
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data)
  
          console.log(json)
          localStorage.setItem("totalcost",JSON.stringify(json))
          setTotalcost(json)
          console.log(totalcost)
          console.log(JSON.parse(localStorage.getItem("totalcost")))
  
        }
  
        else
          console.log("failed");
      })
   }


  function dispMsg(ev) {
    ev.preventDefault();

    console.log(uid);

    const conbox = window.confirm("confirm order");
    console.log(conbox);
    if (conbox == true) {

      //setStatus('confirm');

    }

    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        checkin: checkin,
        checkout: checkout,
        no_of_rooms: no_of_rooms,


      })
    };

    fetch("http://localhost:8080/booking?rid=" + searchParams.get('rid') + "&uid=" + uid, reqData)
      //.then(resp => resp.json())
      //.then(data => this.setState({st: data, success: true}));
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data)

          localStorage.setItem("bookingid",JSON.stringify(json))

          console.log(data)
          console.log(json)
          console.log(JSON.parse(localStorage.getItem("bookingid")))

          loadcost()


          console.log("success")

          navigate("/payment?bookingid=" + json + "&uid=" + uid);
        }

        else
          console.log("failed");
      })




  }

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
                <a class="nav-link active" aria-current="page" href="/customerhome">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/logout">Logout</a>
              </li>


            </ul>
          



          </div>
        </div>
      </nav>
      <div className='App container col-6'>
        <div className='mb-3'>
          <label htmlFor='ac'>Select check in date </label>
          <input
            className='form-control'
            placeholder='checkin'
            type='date'
            name='checkin'
            noValidate
            onChange={(e) => setCheckin(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='ac'>Select checkout date </label>
          <input
            className='form-control'
            placeholder='checkout'
            type='date'
            name='checkout'
            noValidate
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='ac'>Enter No of Rooms</label>
          <input
            className='form-control'
            placeholder='no_of_rooms'
            type='number'
            name='no_of_rooms'
            noValidate
            onChange={(e) => setNoofrooms(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <button type='submit' onClick={dispMsg} >confirm Room Booking</button>
        </div>

      </div>

    </div>
  )
}