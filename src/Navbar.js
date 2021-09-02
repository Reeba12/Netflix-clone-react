import React from "react";
import "./App.css";
import img from "./images/logo.png";

const Navbar = () => {
  return (
    <div className="Navbar">
      <img src={img} alt="netflix_logo" className="logo" />
      <button className="sign_in_btn">Sign in</button>
    </div>
  );
};

export default Navbar;
