import { useRef, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
//import title from "./title.png";
import "./login.css";
import axios from "axios";

function MyRegistration() {
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    name: "",
    role: "",
    password: "",
    email: "",
    contact: "",
    address: "",
  });

  function handleInput(event) {
    setUser((prevValue) => {
      return {
        ...prevValue,
        [event.target.name]: event.target.value,
      };
    });
  }

  function registerAction(event) {
    event.preventDefault();
    console.log(user);
    let url = "http://localhost:9595/add-customer";
    axios.post(url, user).then((response) => {
      console.log(response.data);
      alert("registration successful");
    });
  }

  return (
    <>
      {/* navigation */}
      <section id="header">
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1">
          <div className="container-fluid">
            <Link to="/home" className="navbar-brand">
              <img
                src={logo}
                alt="Logo"
                className="img-fluid"
                style={{ maxHeight: "35px", mixBlendMode: "multiply" }}
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
                  <Link to="/login" className="nav-link"></Link>
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
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      {/* registration */}
      <div
        className="row justify-content-center mt-10"
        style={{ marginTop: "100px" }}
      >
        <div className="col-sm-12 col-md-6 ">
          <div className="fs-2" style={{ textAlign: "center" }}>
            Registration Form
          </div>

          <form onSubmit={registerAction} className="needs-validation">
            <input
              type="text"
              className="form-control form-control-lg mb-2 mt-1"
              placeholder="Enter name"
              name="name"
              pattern="^[A-Za-z\s]+$"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2 mt-1"
              placeholder="Role"
              name="role"
              onChange={handleInput}
              required
            />
            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              name="password"
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
              onChange={handleInput}
              required
            />
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              name="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter mobile"
              name="contact"
              // pattern="^ [0-9]{10}$"
              onChange={handleInput}
              required
            />
            <input
              type="text"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Address"
              name="address"
              onChange={handleInput}
              required
            />
            {/* <input>
              <button type="radio" name="admin" onChange={handleInput}>
                Admin
              </button>
              <button type="radio" name="admin" onChange={handleInput}>
                User
              </button>
            </input> */}
            <button
              type="submit"
              value="Register"
              className="w-100 btn btn-lg btn-secondary"
            >
              Submit
            </button>
            <br/>
            <p>Already User  <a href="/login"> click here</a></p>
          </form>
        </div>
      </div>
    </>
  );
}

export default MyRegistration;
