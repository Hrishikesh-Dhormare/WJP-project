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
                style={{ maxHeight: "35px" }}
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
      <section>
        <div className="review container">
          <div className="content">
            <h3>
              <strong>What Customers Say</strong>
            </h3>
          </div>

          <div className="row">
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Dr. C P Johnson </h6>
                <img src={img1} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Kiran Waghmare</h6>
                <img src={img2} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Aditya Kansana</h6>
                <img src={img3} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Shilbhushan Khanderao</h6>
                <img src={img4} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Manoj More</h6>
                <img src={img5} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-sm-4">
              <div className="box">
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non
                  neque alias est? Magni perferendis nemo tempore at, itaque
                  eligendi. Iure!
                </p>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star rating-color"></i>
                <i className="fa fa-star"></i>
                <h6>Malkeet Singh</h6>
                <img src={img6} className="img-fluid" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Review;
