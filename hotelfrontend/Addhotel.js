import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';




export default function Addhotel() {
  const [hname, setHname] = useState("");
  const [hotelregno, setHotelRegno] = useState("");
  const [email, setEmail] = useState("");
  const [cityname, setCityName] = useState("");
  const [contact_no, setContact_no] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const [address, setAddress] = useState("");

  const [ac_room, setAc_room] = useState("");
  const [non_ac_room, setNon_ac_room] = useState("");
  const [uid, setUid] = useState("");
  const isValid = hname != null && email.trim().length > 0;
  const isValid1 = inputValues !=null;


  const [inputValues, setInputValue] = useState({
    hname: '',
    hotelregno: '',
    email: '',
    cityname: '',
    contact_no: '',
    address:'',
    ac_room:'',
    non_ac_room:'',
  });

  const [validation, setValidation] = useState({
    hname: '',
    hotelregno: '',
    email: '',
    cityname: '',
    contact_no: '',
    address:'',
    ac_room:'',
    non_ac_room:'',
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setInputValue({ ...inputValues, [name]: value });
  }



  let navigate = useNavigate();

  function userState() {
    setUid(JSON.parse(localStorage.getItem("loggedinuser")).uid)
    //uid=JSON.parse(localStorage.getItem("loggedinuser")).uid

  }

 /* const checkValidation=()=> {
    let errors=validation;

    if (!inputValues.hname.trim()) {
      errors.hname = 'Hotel name is required';
    } else {
      errors.fName = '';
    }

    if (!inputValues.hotelregno.trim()) {
      errors.hotelregno = 'Hotel Reg.No is required';
    } else {
      errors.hotelregno = '';
    }

    if (!inputValues.email.trim()) {
      errors.email = 'Hotel email is required';
    } else {
      errors.email = '';
    }

    if (!inputValues.cityname.trim()) {
      errors.cityname = 'Hotel city is required';
    } else {
      errors.cityname = '';
    }

    if (!inputValues.contact_no.trim()) {
      errors.contact_no = 'Hotel contact no. is required';
    } else {
      errors.contact_no = '';
    }
    
    if (!inputValues.address.trim()) {
      errors.address = 'Hotel address is required';
    } else {
      errors.address = '';
    }

    if (!inputValues.ac_room.trim()) {
      errors.ac_room = 'Enter valid ac room';
    } else {
      errors.ac_room = '';
    }

    if (!inputValues.non_ac_room.trim()) {
      errors.non_ac_room = 'Enter valid nonac room';
    } else {
      errors.non_ac_room = '';
    }

     setValidation(errors);
    //console.log(firstName);
    




  }
  useEffect(() => {
    checkValidation();
  }, [inputValues]);
*/

  const dispMsg = (e) => {
    e.preventDefault();
    const reqData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        hname: hname,
        hotelregno: hotelregno,
        email: email,

        contact_no: contact_no,
        // aadhar_no:aadhar_no,
        address: address,
        cityname: cityname,
        ac_room: ac_room,
        non_ac_room: non_ac_room

      })
    };

    fetch("http://localhost:8080/addhotel?uid=" + uid, reqData)
      //.then(resp => resp.json())
      //.then(data => this.setState({st: data, success: true}));
      .then(resp => resp.text())
      .then(data => {
        if (data.length != 0) {
          const json = JSON.parse(data)
          console.log(data)
          console.log(json)
          localStorage.setItem("loggedhotel", JSON.stringify(json))
          console.log("success")
          alert("Hotel Added succesfully");
          navigate("/images?hotelid="+json)
        }

        else
          console.log("failed");
      })
  };


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
      <table class="table table-success">
      <div className='App container col-6'>
        <h3>Welcome {JSON.parse(localStorage.getItem("loggedinuser")).fname}</h3><br />
        <h3>Step 1:Enter Hotel Details</h3>
        <div>
          <form noValidate onSubmit={dispMsg} >
            <div className='row'>
              <div className='col-md-6'>
                <label htmlFor='hname'>Hotel Name</label>
                <input
                  className='form-control'
                  placeholder='Hotel Name'
                  type='text'
                  name='hname'
                  required
                
                  onChange={(e) => setHname(e.target.value)}

                  
                />
              </div>

              <div className='col-md-6'>
                <label htmlFor='regno'>Hotel Registration Number</label>
                <input
                  className='form-control'
                  placeholder='Reg No'
                  type='text'
                  name='regno'
                  required
                  
                  onChange={(e) => setHotelRegno(e.target.value)}

                />
              </div>
            </div>

            <div className='mb-3'>
              <label htmlFor='email'>Hotel Email</label>
              <input
                className='form-control'
                placeholder='Email'
                type='email'
                name='email'
                noValidate
                onChange={(e) => setEmail(e.target.value)}

              />
            </div>


            <div className='mb-3'>
              <label htmlFor='city'>City</label>
              <input
                className='form-control'
                placeholder='city'
                type='text'
                name='cityname'
                noValidate
                onChange={(e) => setCityName(e.target.value)}

              />
            </div>

            <div className='mb-3'>
              <label htmlFor='address'>Address</label>
              <input
                className='form-control'
                placeholder='address'
                type='text'
                name='address'
                noValidate
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor='contact_no'>Contact no</label>
              <input
                className='form-control'
                placeholder='contact_no'
                type='text'
                name='contact_no'
                noValidate
                onChange={(e) => setContact_no(e.target.value)}
              />
            </div>

            {/* <div className='mb-3'>
            <label htmlFor='image1'>Upload Hotel Image 1 </label>
            <input
              className='form-control'
              placeholder='image1'
              type='file'
              name='image1'
              noValidate
              onChange={(e) => setImage1(e.target.value)}
            />
          </div>

          <div className='mb-3'>
            <label htmlFor='image2'>Upload Hotel Image 2 </label>
            <input
              className='form-control'
              placeholder='image2'
              type='file'
              name='image2'
              noValidate
              onChange={(e) => setImage1(e.target.value)}
            />
    </div>*/}

            <div className='mb-3'>
              <label htmlFor='ac'>Enter Total Ac Rooms </label>
              <input
                className='form-control'
                placeholder='ac_room'
                type='text'
                name='ac_room'
                noValidate
                onChange={(e) => setAc_room(e.target.value)}
              />
            </div>

            <div className='mb-3'>
              <label htmlFor='nac'>Enter Total Non Ac Rooms </label>
              <input
                className='form-control'
                placeholder='non_ac_room'
                type='text'
                name='non_ac_room'
                noValidate
                onChange={(e) => setNon_ac_room(e.target.value)}
              />
            </div>



            <div className='mb-3'>
              <button type='submit' onClick={userState} disabled={!isValid}>Add Hotel</button>
            </div>

          </form>
         
        </div>
        
      </div>
      </table>
    </div>
     
  );

}