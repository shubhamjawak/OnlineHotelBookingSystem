import React, {useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { URLSearchParamsInit } from "react-router-dom";
function DeleteUser(){

  //const uid=JSON.parse(localStorage.getItem("loggedinuser")).uid

  /*const [searchParams] = useSearchParams(window.location.search);
  const [hotelid, setHotelid] = searchParams.get('hotelid')*/
  const param=new URLSearchParams(window.location.search)
  const uid=param.get("uid")
  const [user,setUser]=useState([]);
  let navigate=useNavigate();


  useEffect(() => {

    console.log(uid);
    loadUsers();
    
  }, []);

  function loadUsers(event) {

    //event.preventDefault();
    const reqData = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
        
    };

    fetch("http://localhost:8080/deleteuserbyuid?uid="+uid,reqData)
    .then(resp => resp.text())
    .then(data => {if(data.length!=0)
                    {
                    
                      const json=JSON.parse(data)
                      console.log(json)
                      
                      alert("user deleted successfully")

                      navigate('/adminhome')

                      

                        
                        
                    }
                   

        
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
          <a class="nav-link active" aria-current="page" href="/adminhome">Home</a>
        </li>
       
        <li class="nav-item">
        <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/update?uid=${uid}`}
                >
                  Profile
                </Link>
        </li>
        <li>
        <Link
                  class="btn btn-outline-primary mr-2"
                  to={`/gethotelbyid`}
                  >
                  View Hotels
                </Link>
        </li>
        
       
      </ul>
      
    </div>
  </div>
</nav>



   
<div className='mb-2'>


               
               
               
                
    <div>
    {
      user.map((oj)=>(
        <div className='App container col-10' >
        <table class="table table-success">
        <thead>
            <tr>
            <th>User Id</th>
              <th>User First Name</th>
              <th>User Last Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>contact no</th>
              <th>Aadhar no</th>
              <th>Address</th>
              <th>usertype</th>
              
             
              <th></th>
            </tr>
      
        </thead>
        <tbody>
      
        <tr key={oj.uid}>
        <td>{oj.uid}</td>
            <td>{oj.fname}</td>
            <td>{oj.lname}</td>
            <td>{oj.email}</td>
            <td>{oj.password}</td>
            <td>{oj.contact_no}</td>
            <td>{oj.aadhar_no}</td>
            <td>{oj.address}</td>
            <td>{oj.usertype}</td>
            
            <td><Link class="btn btn-primary mr-2" to={`/deleteuser?uid=${oj.uid}`}>
                    Delete user
                  </Link></td>
        </tr>
        </tbody>

</table>
</div>
      ))
    }
    </div>
    </div>
    
    </div>
    
    )
}
export default DeleteUser;