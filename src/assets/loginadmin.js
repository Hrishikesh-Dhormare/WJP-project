import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.jpg";
import title from "./title.png";
import { Link } from "react-router-dom";
import React from "react";
import MyRegistration from "./registration";

function AdminLogin() {
  const navigate = useNavigate();
  let formRef = useRef();
  let [isSuccess, setIsSuccess] = useState(false);
  let [isError, setIsError] = useState(false);

  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let handlerPasswordAction = (e) => {
    let newuser = { ...user, password: e.target.value };
    setUser(newuser);
  };

  let handlerEmailAction = (e) => {
    let newuser = { ...user, email: e.target.value };
    setUser(newuser);
  };

  let loginAction = async () => {
    try {
      formRef.current.classList.add("was-validated");
      let formStatus = formRef.current.checkValidity();
      if (!formStatus) {
        return;
      }

      // BACKEND :: ...
      let url = `http://localhost:4000/login-by-get?email=${user.email}&password=${user.password}`;
      let res = await fetch(url);

      if (res.status == 500) {
        let erroMessage = await res.text();
        throw new Error(erroMessage);
      }

      localStorage.setItem("loginStatus", "true");
      navigate("/home", { replace: true });
    } catch (err) {
      alert(err.message);
      setIsError(true);
    } finally {
      setTimeout(() => {
        setIsError(false);
        setIsSuccess(false);
      }, 5000);
    }
  };

  return (
    <>
      {/* navigation */}
      <section id="header">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-light fixed-top mb-1"
        //   style={{ backgroundImage: `url(${rgb(191, 175, 153)})` }}
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
                        {/* <b>Home</b> */}
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
                    User List
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
          <div className="fs-2">Admin Login</div>

          <form ref={formRef} className="needs-validation">
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

            <input
              type="button"
              value="Login"
              className="w-100 btn btn-lg btn-secondary"
              onClick={loginAction}
            />
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
