import "../styles/about.css";
import aboutMe from "../images/about-me-trans.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faChartBar,
  faCode,
  faComment,
  faDesktop,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faGithub,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

function AboutMe() {
  const handleDownload = () => {
    const googleDriveLink =
      "https://drive.google.com/your-google-drive-link/view";

    const downloadLink = `${googleDriveLink}&export=download`;

    const link = document.createElement("a");
    link.href = downloadLink;
    link.download = "your-cv.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };

  const skillsSet1 = [
    { name: "React Development", percentage: 65 },
    { name: "JavaScript", percentage: 70 },
    { name: "HTML", percentage: 85 },
    { name: "CSS", percentage: 70 },
    { name: " Tailwind CSS", percentage: 50 },
  ];

  const skillsSet2 = [
    { name: "WordPress", percentage: 80 },
    { name: "Content Marketing", percentage: 50 },
    { name: "Facebook ads", percentage: 55 },
    { name: "Instagram ads", percentage: 55 },
    { name: "SEO", percentage: 65 },
  ];
  const services = [
    {
      icon: faDesktop,
      work: "web design",
      content: `
      Revamp your online presence with expert web design services—WordPress, WooCommerce, Elementor, and more. I create visually stunning, tailored websites for your business success with a proven track record and ongoing support.
      `,
    },
    {
      icon: faCode,
      work: "web development",
      content: `
       Enhance your online presence with my comprehensive web development services. Specializing in proficient frontend and backend technologies, I craft dynamic and efficient web solutions. Collaborate with me for standout digital success.
      `,
    },
    {
      icon: faChartBar,
      work: "digital marketing",
      content: `
      Boost your brand with my digital marketing expertise. Specializing in targeted social media, SEO, and online presence optimization, I offer comprehensive services. Collaborate with me for a thriving digital presence
      `,
    },
  ];

  return (
    <div className="about-section">
      <div className="introduction">
        <h2>About Me</h2>
        <div className="box-container">
          <div className="abt-img">
            <img src={aboutMe} alt="" />
          </div>
          <div className="about-content">
            <p>
              Hello, I'm Oluwamomi Akinbote, known in the digital space as
              Maxonex. A versatile professional, I wear the hats of a web
              designer, web developer, and digital marketer. With a passion for
              crafting engaging online experiences, I bring creativity and
              technical expertise to every project. Let's collaborate to elevate
              your digital presence!
            </p>
            <div className="clicks">
              <div>
                <button onClick={handleDownload}>Download CV</button>
              </div>
              <div className="social-links">
                <div className="about-links">
                  <a
                    href="https://www.linkedin.com/in/oluwamomi-akinbote"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                  <div className="about-links">
                    <a
                      href="https://wa.me/+2348149492012"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faComment} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://www.facebook.com/Oluwamomiakinbote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faFacebook} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://www.instagram.com/maxonex7/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>
                  </div>
                  <div className="about-links">
                    <a
                      href="https://github.com/OluwamomiAkinbote"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills section */}
      <div className="skill-progress-container">
        <h3>Proficiencies</h3>
        <div className="skill-set-container">
          <div className="skill-set">
            {skillsSet1.map((skill) => (
              <div key={skill.name} className="skill-progress">
                <h2>
                  {skill.name} : {skill.percentage}%
                </h2>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          <div className="skill-set">
            {skillsSet2.map((skill) => (
              <div key={skill.name} className="skill-progress">
                <h2>
                  {skill.name} : {skill.percentage}%
                </h2>
                <div className="progress-bar-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="services">
        <h2>Services</h2>
        <div className="services-box">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="icon-box">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.work}</h3>
              <p>{service.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
