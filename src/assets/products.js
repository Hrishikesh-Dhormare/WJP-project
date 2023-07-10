import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "./logo.jpg";
import venella from "./venella.jpg";
import chocochip from "./chocochip.jpg";
import coconut from "./coconut.jpg";
import mango from "./mango.jpg";
import pista from "./pista.jpg";
import strawberry from "./strawberry.jpg";
import handeladdToCart from "./MyCart";
import Cart from "./MyCart";
import axios from "axios";
import Navuser from "./NavUser";
import Cookies from "js-cookies";

function Products() {
  const [cart, setCart] = useState([]);
  const [error, setError] = useState(null);
  const [product, setProduct] = useState({
    name: "",
    price: "",
    customer: "",
  });
  const [customer, setCustomer] = useState({
    customerId: "",
    name: "",
    email: "",
    customer: "",
    contact: "",
    address: "",
  });
  let totalAmt = 0;
  let productData = {
    name: "",
    price: "",
    customer: "",
  };

  // const addToCart = (name, price) => {
  //   // const email = sessionStorage.getItem("useremail");
  //   // let url1 = `http://localhost:9595/find-by-email?email=${email}`;
  //   // axios.get(url1, { email: email }).then((response) => {
  //   //   console.log(response.data);
  //   //   const customer =JSON.parse(JSON.stringify(response.data));
  //   //   const productData = {
  //   //     name: name,
  //   //     price: price,
  //   //     customer: customer,
  //   //   };
  //   // })

  //   //
  //   let url = "http://localhost:9595/add-product";
  //   try {
  //       axios.post(url, productData).then((response) => {
  //         console.log(response.data);
  //         setCart([...cart, productData]);
  //         alert("Product added to cart!");
  //       });
  //    } catch (error) {
  //      console.error("Error retrieving user list:", error);
  //    }
   
  // };

  const addToCart = (name, price) => {
    
        // Adding product to DB
        let url = "http://localhost:9595/add-product";
        axios
          .post(url, productData)
          .then((response) => {
            console.log(response.data);
            setCart([...cart, productData]);
            alert("Product added to cart!");
          })
          .catch((error) => {
            setError("Error adding product to cart: " + error.message);
            console.error(error);
          });
      
  };

  function addProductToDB(event) {
    event.preventDefault();
    console.log(product);
    let url = "http://localhost:9595/add-product";
    axios.post(url, product).then((response) => {
      console.log(response.data);
      alert("registration successful");
    });
  }

  return (
    <div>
      <Navuser />

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
              <form onClick={addProductToDB}>
                <div className="card">
                  <div className="bg-image" data-mdb-ripple-color="light">
                    <img src={venella} className="w-100 h-100" alt="" />
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
                          style={{
                            backgroundColor: "rgba(251, 251, 251, 0.15)",
                          }}
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
                        <strong name="name">Butter Scotch</strong>
                      </h5>
                    </a>
                    <a href="" className="text-reset">
                      <h6 className="mb-3" name="price">
                        Rs. 555
                      </h6>
                    </a>
                    <input
                      type="button"
                      value="Add to Cart"
                      className="bg-warning"
                      onClick={() => addToCart("Butter Scotch", 555)}
                      style={{ borderRadius: "5px" }}
                    />
                  </div>
                </div>
              </form>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={chocochip} className="w-100 h-100" alt="" />
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
                      <strong name="name">Choco Chip</strong>
                    </h5>
                  </a>

                  <h6 className="mb-3" name="price" value="500">
                    Rs. 500
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    onClick={() => addToCart("Choco Chip", 500)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={coconut} className="w-100 h-100" alt="" />
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
                      <strong name="name">Coconut</strong>
                    </h5>
                  </a>

                  <h6 className="mb-3">
                    <s>Rs. 600</s>
                    <strong className="ms-2 text-danger" name="price">
                      Rs. 550
                    </strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    onClick={() => addToCart("Coconut ", 550)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-12 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={mango} className="w-100 h-100" alt="" />
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
                      <strong name="name">Mango</strong>
                    </h5>
                  </a>
                  <a href="" className="text-danger">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs. 400</s>
                    <strong className="ms-2 text-danger" name="price">
                      Rs. 350
                    </strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    onClick={() => addToCart("Mango", 350)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/* pista */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image" data-mdb-ripple-color="light">
                  <img src={pista} className="w-100 h-80" alt="" />
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
                      <strong name="name">Pista</strong>
                    </h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3" name="price">
                    Rs. 850
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    onClick={() => addToCart("Pista", 850)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>

            {/*  */}
            <div className="col-lg-4 col-md-6 mb-4">
              <div className="card">
                <div className="bg-image " data-mdb-ripple-color="light">
                  <img src={strawberry} className="w-100 h-100" alt="" />
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
                      <strong name="name">Strawberry</strong>
                    </h5>
                  </a>
                  <a href="" className="text-reset">
                    <p>Deal of the Day</p>
                  </a>
                  <h6 className="mb-3">
                    <s>Rs. 130</s>
                    <strong className="ms-2 text-danger" name="price">
                      Rs. 120
                    </strong>
                  </h6>
                  <input
                    type="button"
                    value="Add to Cart"
                    className="bg-warning"
                    onClick={() => addToCart("Strawberry", 120)}
                    style={{ borderRadius: "5px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* My Cart */}
      <div className="cart">
        <h2>Cart</h2>
        {cart.length === 0 ? (
          <p>No items in the cart</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price}
                <br />
                totalAmt=${totalAmt + item.price}
              </li>
            ))}
          </ul>
        )}
        <br />
        <p>Total Amount : ${totalAmt}</p>
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
              ©️ 2023 letsscoop.in
            </div>
          </footer>
        </section>
      </div>
    </div>
  );
}

export default Products;
