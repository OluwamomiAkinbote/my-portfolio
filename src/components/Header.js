import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import "../styles/header.css";
import logo from "../images/20240116_065043.png";
import { motion } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <motion.header
      className={`header ${menuOpen ? "open" : ""}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.6 }}
    >
      <div className="container">
        <nav>
          <motion.div
            className="logo"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 2 }}
          >
            <img src={logo} alt="" />
          </motion.div>

          <motion.div
            className={`links ${menuOpen ? "open" : ""}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 3 }}
          >
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <Link to="/" onClick={toggleMenu}>
                Home
              </Link>
            </motion.div>
            {/* *******************header links********* */}
            <motion.div
              initial={{ opacity: 0, x: 70 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 2 }}
            >
              <Link to="/about" onClick={toggleMenu}>
                About Me
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 3, delay: 3 }}
            >
              <Link to="/project/:id" onClick={toggleMenu}>
                Projects
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="menu-toggle"
            onClick={toggleMenu}
            initial={{ opacity: 0, x: 70 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 3, delay: 3 }}
          >
            <div className={`bar ${menuOpen ? "open" : ""}`} />
            <div className={`bar ${menuOpen ? "open" : ""}`} />
            <div className={`bar ${menuOpen ? "open" : ""}`} />
          </motion.div>
        </nav>

        <Outlet />
      </div>
    </motion.header>
  );
};

export default Header;
