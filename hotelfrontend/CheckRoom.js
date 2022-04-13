import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';
export default function CheckRoom() {




    const [Room, setRoom] = useState([]);
    //const [hname, setHname] = useState("");
    var [post, setPost] = useState([]);
    const [searchParams] = useSearchParams();
    const [hid, setHotelid] = searchParams.get('hotelid')
    console.log(searchParams.get('hotelid'));
    const hname = ""
    const hotelregno = ""
    const contact_no = ""
    const email = ""
    const address = ""
    const ac_room = ""
    const non_ac_room = ""


    useEffect(() => {

        loadRoom();
        console.log(hid);
        console.log("in effect");

    }, []);
    //loadRoom();
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


    function loadRoom(ev) {
        // ev.preventDefault();

        console.log("in room");
        const reqData = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                hid: hid

            })
        };

        fetch("http://localhost:8080/checkroom?hotelid=" + hid, reqData)
            .then(resp => resp.text())
            .then(data => {
                if (data.length != 0) {
                    const json = JSON.parse(data)
                    //localStorage.setItem("room",JSON.stringify(json))
                    // hname=data.hname;
                    /*hotelregno = json.hotelregno;
                     contact_no = json.contact_no;
                     email = json.email;
                    address = json.address;
                     ac_room = json.ac_room;
                     non_ac_room = json.non_ac_room;*/
                    console.log(data) 
                    setRoom(json);
                    console.log(data)

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
                            <th>Room type</th>
                            <th>Rate per Day</th>

                            <th>Action</th>

                        </tr>

                    </thead>
                    <tbody>
                        {
                            Room.map((obj) => (
                                <tr key={obj.rid}>
                                    <td>{obj.roomtype}</td>
                                    <td>{obj.rateperday}</td>
                                    <td><Link class="btn btn-primary mr-2" to={`/booking?rid=${obj.rid}`} >
                                        Book Room
                                        {localStorage.setItem("room",JSON.stringify(obj))}
                                    </Link></td>
                                </tr>
                            ))
                        }



                    </tbody>

                </table>
            </div>
        </div>
    )
}