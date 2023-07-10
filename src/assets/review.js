import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
import img1 from "./img1.jpeg";
import img2 from "./img2.jpeg";
import img3 from "./img3.jpeg";
import img4 from "./img4.jpg";
import img5 from "./img5.jpg";
import img6 from "./img6.jpg";
import "./review.css";

function Review() {
  return (
    <div>
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "35px",mixBlendMode: 'multiply' }}
              />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link
                    to="/home"
                    className="nav-link active"
                    aria-current="page"
                  >
                    {/* <b>Home</b> */}
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    {/* <b>Login</b> */}
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    {/* <b>Products</b> */}
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    {/* <b>Reviews</b> */}
                    <b>Reviews</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" className="nav-link">
                    {/* <b>Contact us</b> */}
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* review section starts */}
      <div>
      <section class="bg-light mt-5" id="tourist">    
     <div class="container">
      <div class="row text-center">
        <div class="col-sm-12 col-md-12 mb-4">
            <h3 class="text-center mt-4 text-secondary">Customer Opinions</h3>
         </div>
        <div class="col-md-4">
          <div class="testimonial mb-5">
           <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Anna Deynah</h4>
          <h6 class="font-weight-bold blue-text my-3">Customer</h6>
          <p class="font-weight-normal dark-grey-text">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod
            eos id officiis hic tenetur quae quaerat ad velit ab hic tenetur.</p>
        </div>
      </div>
 
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(8).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">John Doe</h4>
          <h6 class="font-weight-bold blue-text my-3">Customer</h6>
          <p class="font-weight-normal dark-grey-text">Ut enim ad minima veniam, quis nostrum exercitationem ullam
            corporis suscipit laboriosam, nisi ut aliquid commodi.</p>
        </div>
 
      </div>
      <div class="col-md-4">
        <div class="testimonial mb-5">
          <div class="avatar mx-auto">
            <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg" class="rounded-circle z-depth-1 img-fluid"/>
          </div>
          <h4 class="font-weight-bold dark-grey-text mt-4">Maria Kate</h4>
          <h6 class="font-weight-bold blue-text my-3">Customer</h6>
          <p class="font-weight-normal dark-grey-text">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti.</p>
        </div>
        </div>
      </div>
    </div> 
   </section>  
    </div>
    </div>
  );
}

export default Review;
