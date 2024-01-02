import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/logo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className={`header ${menuOpen ? "open" : ""}`}>
      <div className="container">
        <nav>
          <div className="logo">
            <img src={logo} alt="" />
          </div>

          <div className={`links ${menuOpen ? "open" : ""}`}>
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
            <Link to="/about" onClick={toggleMenu}>
              About Me
            </Link>
            <Link to="/project" onClick={toggleMenu}>
              Projects
            </Link>
            <Link to="/contact" onClick={toggleMenu}>
              Contact
            </Link>
          </div>

          <div className="menu-toggle" onClick={toggleMenu}>
            <div className={`bar ${menuOpen ? "open" : ""}`} />
            <div className={`bar ${menuOpen ? "open" : ""}`} />
            <div className={`bar ${menuOpen ? "open" : ""}`} />
          </div>
        </nav>

        <Outlet />
      </div>
    </header>
  );
};

export default Header;
