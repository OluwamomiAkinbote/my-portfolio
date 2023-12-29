import React from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className="links">
            <Link to="/">Home</Link>
            <Link to="/about">About Me</Link>
            <Link to="/project">Projects</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </nav>

        <Outlet />
      </div>
    </header>
  );
};

export default Header;
