import React from "react";
import { Link } from "react-router-dom";

const Footer = (props) => {
  return (
    <div class="mt-5">
      <footer class="container-fluid bg-dark my-0 py-3 text-light">
        <h4 class="mb-2 text-center">Thanks For using</h4>

        <div class="container col-sm-6 mt-1">
          <p class="float-left">
            <h5>About Us</h5>
            <p>This is about us content</p>
          </p>
          <p class="float-right">
            <h5>Contact Us</h5>
            <p>This is Contact us content</p>
         
          </p>
        </div>
        <br></br>
        <br></br>
        <div class="container col-sm-10 mt-5">
          <p class="mb-0 text-center">
            <Link to="/">Home |</Link>
            <Link to="/login">Login Here |</Link>
            <Link to="/register">Register Here</Link>
          </p>
          <p class="mb-0 text-center">© 2020-2021 Accomodation.com</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
