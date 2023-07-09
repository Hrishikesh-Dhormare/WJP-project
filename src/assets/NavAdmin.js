
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
//import title from "./title.png";
import "./login.css";

 function NavAdmin(){
    return (
        <>
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
                style={{ maxHeight: "77px",mixBlendMode: 'multiply' }}
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
                  <Link to="/loginadmin" className="nav-link">
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
      </>
  );
}
export default NavAdmin;