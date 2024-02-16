// Home.js
import React from "react";
import { Link } from "react-router-dom";
// import "../styles/home.css";
import about from "../images/about-me-edit.png";
import { ProjectsDatas } from "../components/ProjectsDatas";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
const Home = () => {
  return (
    <div className="home">
      <div className="hero__container">
        <Hero />
      </div>
      <div className="preview-sections">
        <div className="home__abt">
          <h2 className="heading">About Me</h2>
          <div className="home__abt-box">
            <div className="home__abt-image">
              <img src={about} alt="" loading="lazy" />
            </div>
            <div className="home__abt-content">
              <p>
                Welcome to my digital space! I'm a web professional with a
                passion for creating captivating online experiences. As an
                expert in web design, development, and marketing, I specialize
                in crafting visually appealing websites. I stay on top of
                industry trends to ensure your project is cutting-edge. If you
                want to learn more about me and my journey, dive into my story
                on the About Me page. Let's connect and explore the exciting
                world of digital possibilities together.
              </p>
              <Link to="/about">Read more</Link>
            </div>
          </div>
        </div>

        <div className="projects">
          <h2 className="heading">projects</h2>

          <div className="project-container">
            <ProjectsDatas />
          </div>
        </div>

        <div className="contact">
          <h2 className="contact-heading">contact me</h2>
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default Home;
