import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
export default function ViewHotel(props) {


   
  const [Hotel, setHotel] = useState([]);
  //const [hname, setHname] = useState("");
  var [post, setPost] = useState([]);
  const [searchParams] = useSearchParams();
  const [hid, setHotelid] = searchParams.get('hotelid')
  console.log(searchParams.get('hotelid'));
  const hname=""
  const hotelregno=""
  const contact_no=""
  const email=""
  const address=""
  const ac_room=""
  const non_ac_room=""


  useEffect(() => {

    loadBooking();
    console.log(hid);
  }, []);

  console.log(hid);
  /*const loadHotel =async  () => {
   // const res = await axios.get("http://localhost:8080/viewhotel?hotelid="+hid);
    //const res = fetch("http://localhost:8080/viewhotel?hotelid="+hid);

    axios.get("http://localhost:8080/viewhotel?hotelid="+hid).then((response) => {
      setPost(response.data);
      console.log(response.data);
      console.log(post);

  });
    
   // console.log(post.hname);
    
  };*/


  function Booking(ev) {
    //ev.preventDefault();

    console.log(hid);
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hid: hid

      })
    };

    fetch("http://localhost:8080/viewhotel?hotelid=" + hid, reqData)
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
           const json = JSON.parse(data)
           localStorage.setItem("hotels",JSON.stringify(json))
         // hname=data.hname;
          /*hotelregno = json.hotelregno;
           contact_no = json.contact_no;
           email = json.email;
          address = json.address;
           ac_room = json.ac_room;
           non_ac_room = json.non_ac_room;*/
 
           
          console.log(json.hname);

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

      <div className='App container col-8'>
        <table class="table table-success">
          <thead>
            <tr>
              <th>Hotel Name</th>
              <th>Hotel Email</th>
              <th>Hotel Reg. No</th>
              <th>Hotel Address</th>
              <th>Hotel contact no</th>
              <th>Total Ac Room</th>
              <th>Hotel Non Ac room</th>
              <th>Action</th>
              
            </tr>

          </thead>
          <tbody>
            <tr>
              <td> {JSON.parse(localStorage.getItem("hotels")).hname}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).email}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).hotelregno}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).address}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).contact_no}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).ac_room}</td>
              <td>{JSON.parse(localStorage.getItem("hotels")).non_ac_room}</td>
              <td><Link class="btn btn-primary mr-2" to={`/checkroom?hotelid=`+JSON.parse(localStorage.getItem("hotels")).hotelid}>
                    Check Room
                  </Link></td>

            </tr>



          </tbody>

        </table>
      </div>
    </div>
  )
}