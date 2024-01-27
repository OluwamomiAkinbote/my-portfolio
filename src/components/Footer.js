import React from "react";
import image from "../images/logo2.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer__nav">
        <div className="footer__logo">
          <div className="footer__image">
            <img src={image} alt="" />
          </div>
          <p className="tagline">The rhythm behind the Cosmic dance</p>
        </div>
        {/* footer tabs */}
        <div className="footer__tabs">
          <h2>Tabs</h2>
          <a href="/" rel="noopener noreferrer">
            home
          </a>
          <a href="/about" rel="noopener noreferrer">
            About Me
          </a>
          <a href="/contact" rel="noopener noreferrer">
            Contact
          </a>
        </div>
        {/* footer services */}
        <div className="footer__services">
          <h2>what I offer</h2>
          <p>web development</p>
          <p>web design</p>
          <p>frontend development</p>
          <p>digital Marketing</p>
          <p>UX design</p>
        </div>
        {/* footer social */}
        <div className="footer__socials">
          <h2>Follow Me</h2>

          <a
            href="https://wa.me/+2348149492012"
            target="_blank"
            rel="noopener noreferrer"
          >
            Whatsapp
          </a>
          <a
            href="https://www.linkedin.com/in/oluwamomi-akinbote"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/OluwamomiAkinbote"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
          &copy; 2024 <span>Oluwamomi S.A.</span> All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
