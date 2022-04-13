import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useSearchParams } from 'react-router-dom';
export default function Payment() {

const[cardno,setCardno]=useState("");
const[cvv,setCvv]=useState("");
const[expiry,setExpiry]=useState("");
const[paymentmode,setMode]=useState("");

const param=new URLSearchParams(window.location.search)
  const bookingid=param.get("bookingid")
  const uid=param.get("uid")
  let navigate=useNavigate();
 
//const[status1,setStatus1]=useState(0);
/* let [searchParams] = useSearchParams();
let [rid, setRid] = searchParams.get('rid')
const uid=JSON.parse(localStorage.getItem("loggedinuser")).uid
//const rid=JSON.parse(localStorage.getItem("room"))

//let rid=useParams("rid");



 
console.log(searchParams.get('rid'));
*/


function dispMsg(ev) {
    ev.preventDefault();

    console.log(uid);
    console.log(bookingid);

   
    
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
            cardno:cardno,
            cvv:cvv,
            expiry:expiry,
            bookingid:bookingid,
            uid:uid,
            paymentmode:paymentmode

        

      })
    };

    fetch("http://localhost:8080/payment", reqData)
      //.then(resp => resp.json())
      //.then(data => this.setState({st: data, success: true}));
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data)
          
          localStorage.setItem("payment",JSON.stringify(json))
            console.log(json)
          console.log("success")
          alert("payment succesfull")
          
         navigate("/paymentdetails");
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
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>


            </ul>



          </div>
        </div>
      </nav>
        <div className='App container col-6'>
            <div>
                Payment Mode:
            <input type="radio" name="mode" value="online" onChange={(e) => setMode(e.target.value)} />online 
            </div>
        <div className='mb-3'>
              <label htmlFor='cardno'>Enter Card No. </label>
              <input
                className='form-control'
                placeholder='Card NO'
                type='text'
                name='cardno'
                noValidate
                onChange={(e) => setCardno(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='cvv'>Enter Card CVV </label>
              <input
                className='form-control'
                placeholder='cvv'
                type='text'
                name='cvv'
                noValidate
                onChange={(e) => setCvv(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='expiry'>Enter Expiry Date</label>
              <input
                className='form-control'
                placeholder='MM/YYYY'
                type='text'
                name='expiry'
                noValidate
                onChange={(e) => setExpiry(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <button type='submit' onClick={dispMsg} >confirm Room Booking</button>
            </div>

        </div>
      
    </div>
  )
}