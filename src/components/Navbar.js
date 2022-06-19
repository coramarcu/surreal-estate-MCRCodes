import React from "react";
import "../styles/navbar.css";
import logo from "../assets/home.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src={logo} alt="Surreal Estate Logo" />
      <ul className="navbar-links">
        <li className="navbar-links-item">
          <a href="/">View Properties</a>
        </li>
        <li className="navbar-links-item">
          <a href="/">Add a Property</a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
