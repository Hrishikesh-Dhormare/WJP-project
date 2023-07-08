import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
import aboutImage from "./about.png";

function About() {
  return (
    <div style={{ backgroundColor: "" }}>
      {/* Navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-3">
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
                    <b>Contact us</b>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* About */}
      <div className="row justify-content-center mt-5">
        <div className="col-md-8 mt-5">
          <strong>
            <b>
              <p style={{ fontFamily: "cursive", fontSize: "70px" }}>
                About us
              </p>
            </b>
          </strong>

          <div style={{ fontFamily: "cursive", fontSize: "40px" }}>
            Welcome to Polar Bear...!
          </div>
          <p style={{ fontFamily: "cursive", fontSize: "20px" }}>
            We are exactly what you are looking for. Yes, we are an FSSAI
            certified online cake and Bakery Company that specializes in
            delivering absolutely lip-smacking delicacies. Currently, we are
            delivering cakes in Gurgaon, Delhi, Noida, Ghaziabad, Bangalore and
            Hyderabad. We are not just a bakery, we are not just bakers. In
            fact, we are just like you, a bunch of food lovers fascinated with
            sweet indulgence, who dreamt of creating an appetizing fairy land of
            divine delicacies that relishes the utmost desires.
          </p>
        </div>
      </div>

      {/* Image */}
      <div className="col-md-4 ml-20 mr-5">
        <img
          src=".\image\front top chocolate_cake_PNG62.png"
          alt=""
          className="img-fluid ml-20"
        />
      </div>
    </div>
  );
}

export default About;
