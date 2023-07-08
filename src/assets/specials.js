import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
//import './1.css';
import sj3 from "./vintage/sj3.png";
import sj1 from "./vintage/sj1.png";
import sj2 from "./vintage/sj2.png";
import sj4 from "./vintage/sj4.png";

function Specials() {
  return (
    <div>
      {/* Navigation */}
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
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/products" className="nav-link">
                    Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/review" className="nav-link">
                    Reviews
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

      {/* Specials */}
      <div className="text-center container py-5 mt-3">
        <h3>
          <strong>Our Nearby Outlets</strong>
        </h3>
        <br />
        <br/>
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card" style={{ height: "600px" }}>
              <img src={sj3} className="card-img-top" alt="sj3" />
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <p className="card-text">
                  Polar Bear Mahatma Phule Rd, Hanuman Chowk, Mulund East,
                  Mumbai, Maharashtra 400081
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card " style={{ height: "600px" }}>
              <img src={sj1} className="card-img-top" alt="sj1" />
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <p className="card-text">
                  Shop No 2, Sai Elegance, Near Mc Donalds Mahakali Caves Road
                  Andheri East Mumbai, Maharashtra 400093 India
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ height: "600px" }}>
              <img src={sj2} className="card-img-top" alt="sj2" />
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <p className="card-text">
                  360A, Wagle Industrial Estate, Road No. 27, Thane West, Thane,
                  Maharashtra, 400604
                </p>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" style={{ height: "600px" }}>
              <img src={sj4} className="card-img-top" alt="vitara" />
              <div className="card-body">
                <h5 className="card-title">Location</h5>
                <p className="card-text">
                  Polar Bear Brabourne Stadium, 86, Veer Nariman Rd, Churchgate,
                  Mumbai, Maharashtra 400020
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="my-5">
        <section>
          <footer
            className="text-center text-white"
            style={{ backgroundColor: "rgb(64, 64, 64)" }}
          >
            <div className="container p-4 pb-0">
              <section>
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register now</span>
                  <Link to="/registration">
                    <button
                      type="button"
                      className="btn btn-outline-light btn-rounded"
                    >
                      Register
                    </button>
                  </Link>
                </p>
              </section>
            </div>

            <div
              className="text-center p-3"
              style={{ backgroundColor: "grey" }}
            >
              ©️ 2023 Polarbear.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Specials;
