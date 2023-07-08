//import React from 'react';
import "./App.css";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import React from "react";
import About from "./assets/about";
import Contact from "./assets/contact";
import ForgetPassword from "./assets/forget";
import Bakery from "./assets/home";
import EmailLogin from "./assets/login";
import Products from "./assets/products";
import Review from "./assets/review";
import Specials from "./assets/specials";
import EmailRegistration from "./assets/registration";
import OrderList from "./assets/OrderList";
import AdminHome from "./assets/adminhome";
import UserList from "./assets/UserList";
import AboutAdmin from "./assets/aboutadmin";
import AdminLogin from "./assets/loginadmin";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Bakery />} />
          <Route path="/home" element={<Bakery />} />
          <Route path="/login" element={<EmailLogin />} />
          <Route path="/products" element={<Products />} />
          <Route path="/review" element={<Review />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/specials" element={<Specials />} />
          <Route path="/orderList" element={<OrderList />} />
          <Route path="/forget" element={<ForgetPassword />} />
          <Route path="/registration" element={<EmailRegistration />} />
          <Route path="/adminhome" element={<AdminHome />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/aboutadmin" element={<AboutAdmin />} />
          <Route path="/loginadmin" element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
