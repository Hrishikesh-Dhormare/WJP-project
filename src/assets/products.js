import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React from "react";
import logo from "./logo.jpg";
import alto800 from "./alto800.jpg";
import baleno from "./baleno.jpg";
import dzire from "./dzire.jpg";
import ecco from "./ecco.jpg";
import ertiga from "./ertiga.jpg";
import grandVitara from "./grand vitara.jpg";

function Products() {
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
                style={{ maxHeight: "50px" }}
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
                    <b>Products</b>
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

      {/* Products */}
      <section
        style={{
          backgroundImage:
            "linearGradient(rgba(201,83,83,0.5),rgba(85,79,79,0.5))",
        }}
      >
        <div className="text-center container py-5">
          <h4 className="mt-5 mb-5">
            <strong>Our Products</strong>
          </h4>

          <div className="row">
            <div className="col-lg-4 col-md-12 mb-4">
              {/*  */}
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={alto800} className="w-100 h-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5
                      className="card-title mb-3"
                      style={{ fontfamily: "sans-seri" }}
                    >
                      <strong>Butter Scotch</strong>
                    </h5>
                  </a>
                  <a href="" className="text-reset">
                    <h6 className="mb-3">Rs. 555</h6>
                  </a>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={baleno} className="w-100 h-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">
                            Trending
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">
                      <strong>Choco Chip</strong>
                    </h5>
                  </a>

                  <h6 className="mb-3">Rs. 500</h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={dzire} className="w-100 h-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">
                      <strong>Coconut</strong>
                    </h5>
                  </a>

                  <h6 className="mb-3">
                    <s>Rs. 600</s>
                    <strong className="ms-2 text-danger">Rs. 550</strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={ecco} className="w-100 h-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-success ms-2">
                            BestSelling
                          </span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">
                      <strong>Mango</strong>
                    </h5>
                  </a>
                  <a href="" className="text-danger">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs. 400</s>
                    <strong className="ms-2 text-danger">Rs. 350</strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/* ertiga */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={ertiga} className="w-100 h-80" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                          <span className="badge bg-success ms-2">
                            Trending
                          </span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">
                      <strong>Pista</strong>
                    </h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3">Rs. 850</h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image " data-mdb-ripple-color="light">
                  <img src={grandVitara} className="w-100 h-100" alt="" />
                  <a href="#!">
                    <div className="mask">
                      <div className="d-flex justify-content-start align-items-end h-100">
                        <h5>
                          <span className="badge bg-primary ms-2">New</span>
                          <span className="badge bg-success ms-2">
                            BestSeller
                          </span>
                          <span className="badge bg-danger ms-2">-10%</span>
                        </h5>
                      </div>
                    </div>
                    <div className="hover-overlay">
                      <div
                        className="mask"
                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                      ></div>
                    </div>
                  </a>
                </div>
                <div className="card-body">
                  <a href="" className="text-reset">
                    <h5 className="card-title mb-3">
                      <strong>Strawberry</strong>
                    </h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs. 130</s>
                    <strong className="ms-2 text-danger">Rs. 120</strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
              ©️ 2023 letsscoop.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Products;
