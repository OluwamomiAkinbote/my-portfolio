import { React, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

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
  return (
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
          Feel free to reach out with any questions or assistance needed. Our
          team is here to help and looks forward to hearing from you soon!
        </p>

        <form ref={form} onSubmit={sendEmail}>
          <div className="input">
            <input type="text" name="user_name" placeholder="Your name" />
            <input type="text" name="phone_number" placeholder="phone number" />
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
          <button className="contact-btn" type="submit" value="Send">
            send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
