import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import title from "./title.png";
import { Link } from "react-router-dom";
import React from "react";
import MyRegistration from "./registration";
import axios from "axios";

function AdminLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
    role: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  function loginAction(event) {
    // BACKEND :: ...
    event.preventDefault();
    let url = `http://localhost:9595/app-login?email=${user.email}&password=${user.password}`;
    axios.get(url).then((response) => {
      console.log(user.email + " " + user.password);
      setUser(response.data);
    });
  }
  alert(user.email + " " + user.password);

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
                    <b>Login</b>
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
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>

      <div
        className="row justify-content-center "
        style={{ marginTop: "100px" }}
      >
        <div className="col-sm-12 col-md-6">
          <div className="fs-2 text-center">User Login</div>

          <form onSubmit={loginAction} className="needs-validation">
            <input
              type="email"
              className="form-control form-control-lg mb-2"
              placeholder="Enter Email"
              value={user.email}
              onChange={handlerEmailAction}
              required
            />

            <input
              type="password"
              className="form-control form-control-lg mb-2"
              placeholder="Enter password"
              value={user.password}
              onChange={handlerPasswordAction}
              required
            />
            <button type="submit" className="w-100 btn btn-lg btn-secondary">
              Login
            </button>
            {/* <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-secondary"
              onClick={loginAction}
            /> */}
            <a href="/forget">forgot password</a>
            <div className="mt-3">Don't have an account? Click on Register</div>
            <Link to="/registration">
              <button
                type="button"
                className="btn btn-outline-primary btn-rounded p-2 mt-2 form-control"
              >
                Register
              </button>
            </Link>
          </form>

          {isSuccess && <div className="alert alert-success">Success</div>}
          {isError && <div className="alert alert-danger">Error</div>}
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
