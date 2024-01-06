// Home.js
import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import TextTransition, { presets } from "react-text-transition";
import "../styles/home.css";
import hero from "../images/hero-edit.png";
import about from "../images/about-me-edit.png";
import realEstate from "../images/real-estate.jpg";
import calculator from "../images/calculator.png";
import addToCart from "../images/add-to-cart (1).png";

import todo from "../images/todo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  const form = useRef();
  const [isMessageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3zq89x5",
        "template_hlqqtwa",
        form.current,
        "LFxMmZBzDDgxPBd3D"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setMessageSent(true);
        },
        (error) => {
          console.log(error.text);
          setMessageSent(false);
        }
      );
  };
  const projects = [
    {
      title: "Real Estate",
      image: realEstate,
      description: "Description for Project 1",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS3"],
    },
    {
      title: "Simple Calculator",
      image: calculator,
      description:
        "A stylish HTML5 calculator with JavaScript for real-time arithmetic. Enhanced by CSS, it offers a user-friendly interface for quick and efficient calculations, accessible seamlessly across various devices.",
      technologies: ["HTML5", "JavaScript", "CSS3"],
    },
    {
      title: "Ecommerce",
      image: addToCart,
      description:
        "HTML, JS, CSS3 power a dynamic e-commerce site, ensuring seamless shopping. Intuitive design, responsive layout, and Add to Cart container optimize user convenience for effortless product selection and purchase.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
    },
    {
      title: "Ecommerce",
      image: todo,
      description: "Description for Project 1",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS3"],
    },
    {
      title: "Ecommerce",
      image: todo,
      description: "Description for Project 1",
      technologies: ["ReactJS", "JavaScript", "HTML", "CSS3"],
    },
  ];
  const contacts = [
    {
      icon: faPhone,
      type: "Phone Number",
      address: "+2348149492012",
    },
    {
      icon: faEnvelope,
      type: "Email Address",
      address: "oluwamomis@gmail.com",
    },
    {
      icon: faMapMarker,
      type: "Location",
      address: "Lekki, Lagos, Nigeria",
    },
  ];
  const TEXTS = [
    " Web Developer",
    " Web Designer",
    " Web Enthusiast",
    " Digital Marketer",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className="home">
      <div className="hero">
        <div className="hero-content">
          <h4>
            Hello, I'm <span>Oluwamomi</span>
          </h4>
          <h2>
            A
            <span>
              <TextTransition springConfig={presets.wobbly} inline>
                {TEXTS[index % TEXTS.length]}
              </TextTransition>
            </span>
          </h2>
          <p>
            {" "}
            Web professional skilled in design, development, and marketing. I
            create engaging websites, track industry trends, and innovate
            digital projects.
          </p>
        </div>
        <div className="image">
          <img src={hero} alt="" />
        </div>
      </div>
      {/* about section start here */}

      <div className="preview-sections">
        <div className="about-me">
          <h2 className="heading">About Me</h2>
          <div className="box">
            <div className="image">
              <img src={about} alt="" />
            </div>
            <div className="content">
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
          <div className="heading-box">
            <h2 className="headings">projects</h2>
            <Link to="/project">View all</Link>
          </div>

          <div className="project-container">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p>Technologies: {project.technologies.join(", ")}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="contact">
          <div className="heading-box">
            <h2 className="contact-heading">contact me</h2>
          </div>
          <div className="contact-container">
            <div className="contact-link">
              {contacts.map((contact, index) => (
                <div key={index} className="contact-link-container">
                  <div className="icon">
                    {contact.icon && <FontAwesomeIcon icon={contact.icon} />}
                  </div>
                  <div className="link-content">
                    <h4>{contact.type}</h4>
                    <p>{contact.address}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="message">
              <h3>Send message</h3>
              <p>
                Feel free to reach out with any questions or assistance needed.
                Our team is here to help and looks forward to hearing from you
                soon!
              </p>
              {isMessageSent && <p>Your message has been sent successfully.</p>}
              <form ref={form} onSubmit={sendEmail}>
                <div className="input">
                  <input type="text" name="user_name" placeholder="Your name" />
                  <input
                    type="text"
                    name="phone_number"
                    placeholder="phone number"
                  />
                </div>
                <div className="input">
                  <input type="email" name="user_email" placeholder="email" />
                  <input type="text" name="subject" placeholder="subject" />
                </div>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="2"
                  placeholder="message..."
                ></textarea>
                <button type="submit" value="Send">
                  send message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
