import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
export default function PaymentDetails(props) {







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

      <div className='App container col-8'>
        <table class="table table-success">
          <thead>
            <tr>
              <th>Payment id</th>
              <th>Payment Mode</th>
              <th>Booking id</th>

              <th>Card No</th>
              <th>CVV</th>
              <th>Expiry</th>
              <th>Amount paid</th>


            </tr>

          </thead>
          <tbody>
            <tr>
              <td> {JSON.parse(localStorage.getItem("payment")).paymentid}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).paymentmode}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).bookingid}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).cardno}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).cvv}</td>
              <td>{JSON.parse(localStorage.getItem("payment")).expiry}</td>
              <td>{JSON.parse(localStorage.getItem("totalcost"))}</td>



            </tr>



          </tbody>

        </table>
        <div>
          <h3>Thank you for booking</h3>
          <a href="/customerhome">Click here to browse hotels</a>
        </div>
      </div>
    </div>
  )
}