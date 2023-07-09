import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "./slide1.jpg";
import slide2 from "./slide2.jpg";
import slide3 from "./slide3.jpg";

import logo from "./logo.jpg";
import background from "./bg.jpg";
import "./home.css";
import Products from "./products";

function AdminHome() {
  return (
    <div style={{ background: "rgb(191, 175, 153)" }}>
      {/* navigation */}
      <section id="header">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1"
          style={{ backgroundImage: `url(${background})` }}
        >
          <div className="container-fluid ">
            <Link to="/adminhome" className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                className="my-0 p-0"
                style={{ maxHeight: "77px" }}
              />
            </Link>
            <h1 style={{ fontFamily: "cursive" }}>Polar Bear</h1>
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
                    to="/adminhome"
                    className="nav-link active"
                    aria-current="page"
                  >
                    <b>Home</b>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                {/* <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li> */}
                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/userlist" className="nav-link">
                    {/* <b>Order list</b> */}
                    Order list
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/OrderList" className="nav-link">
                    {/* <b>User list</b> */}
                    User list
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* carousel */}
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="1000">
            <img src={slide1} className="d-block w-100 h-100" alt="slide1" />
            <div className="carousel-caption d-none d-md-block">
              <b>
                <h3 className="text-dark">Scooping Happiness</h3>
                <h5 className="text-dark pb-5">
                  ALL YOU NEED IS LOVE & ICECREAM
                </h5>
              </b>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img src={slide2} className="d-block w-100 h-100" alt="slide2" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-white">Bear Special</h3>
              <h5 className="text-white pb-5">
                DONT WASTE SWEET TIME ENJOY EVERY MOMENT.
              </h5>
            </div>
          </div>
          <div className="carousel-item">
            <img src={slide3} className="d-block w-100 h-100" alt="slide3" />
            <div className="carousel-caption d-none d-md-block">
              <h3 className="text-darwhitek">Chocolate Kulfi</h3>
              <h5 className="text-white pb-5">
                CLOSE YOUR EYES AND TASTE FIRST.
              </h5>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <br />

      {/* button */}
      <div className="text-center p-3">
        <Link to="/specials">
          <button type="button" className="btn btn-success">
            Our Outlets
          </button>
        </Link>
      </div>
      <br />

      {/* alert */}
      <div>
        <div
          className="alert alert-success alert-dismissible fade show"
          role="alert"
        >
          <strong>
            <b>Exciting News!</b> We're currently having a sale. Don't miss out
            on our amazing offers!
          </strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      </div>
      {/* <Products/> To add product on which sale is live */}
      <br />

      {/* footer */}
      <div className="my-5">
        <section>
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "rgb(64, 64, 64)" }}
          >
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">To know more About Us</span>
                  <Link to="/about">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-rounded"
                    >
                      Click here
                    </button>
                  </Link>
                </p>
              </section>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "grey" }}
            >
              © 2023 Polarbear.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default AdminHome;
