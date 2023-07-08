import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
import aboutImage from "./about.png";

function AboutAdmin() {
  return (
    <div style={{ background: "rgb(191, 175, 153)" }}>
      {/* navigation */}
      <section id="header">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1"
          style={{ backgroundImage: "${background}" }}
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
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/loginadmin" className="nav-link">
                    <b>Login</b>
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
                    Reviews
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/userlist" className="nav-link">
                    {/* <b>Order list</b> */}
                    Order List
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
            Welcome to JSA Bakery...!
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

export default AboutAdmin;
