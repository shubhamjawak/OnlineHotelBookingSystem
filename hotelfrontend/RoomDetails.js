import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';


export default function RoomDetails() {

    // let [searchParams] = useSearchParams();
    //let [hotelid, setHotelid = searchParams.get('hotelid')

    const param = new URLSearchParams(window.location.search)
    const hotelid = param.get("hotelid")
    let navigate = useNavigate();
    const [roomtype, setRoomtype] = useState("");

    const [rateperday, setRateperday] = useState("");



    const [file, setFile] = useState();

    // const hotelid=JSON.parse(localStorage.getItem("loggedhotel")).hotelid

    console.log(hotelid)
    const Onformsubmit = (e) => {
        //e.preventDefault();
        console.log(roomtype)
        console.log(rateperday)

        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data',

            },
            body: JSON.stringify({
                roomtype: roomtype,
                rateperday: rateperday,
             
        
              })


        }

        const url = "http://localhost:8080/roomimages?hotelid=" + hotelid+"&roomtype="+roomtype+"&rateperday="+rateperday;
        axios.post(url, formData, config)
            .then((Response) => {
                alert('Room image uploaded successfully')
                navigate("/")

            })
            .catch((err) => {
                console.log('err', err)
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
            <div><h3>Step 3: Enter Room Details</h3></div>
            <form enctype="multipart/form-data">
                <div className='mb-3'>

                    <div>
                        Select RoomType:<br/>
                        <input type="radio" name="roomtype" value="ac" onChange={(e) => setRoomtype(e.target.value)} />Ac Room <br/>
                        <input type="radio" name="roomtype" value="nonac" onChange={(e) => setRoomtype(e.target.value)} />Non Room
                        <br />
                    </div>

                    <div className='mb-3'>
                        <label htmlFor='rateperday'>Enter Room rate</label>
                        <input
                            className='form-control'
                            placeholder='rateperday'
                            type='text'
                            name='rateperday'
                            noValidate
                            onChange={(e) => setRateperday(e.target.value)}
                        />
                    </div>
                    <div className='mb-3'>

                        <label htmlFor='image1'>Upload Room Image  </label>
                        <input
                            className='form-control'
                            placeholder='image1'
                            type='file'
                            name='file'
                            noValidate
                            onChange={(e) => setFile(e.target.files[0])}
                        />
                    </div>
                </div>

            </form>



            <div className='mb-3'>
                <button type='submit' onClick={Onformsubmit}>Add Hotel</button>
            </div>
        </div>
    )
}