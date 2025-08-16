import React from 'react';
import Section from './Section';
import './Contact.css';

const Contact = () => {
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/akashkothari2007",
      icon: "📁",
      color: "#333"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/akash-kothari-8b1a38277/",
      icon: "💼",
      color: "#0077b5"
    },
    {
      name: "Email",
      url: "mailto:akash@kotharigroup.com?subject=Hello%20Akash&body=Hi%20Akash%2C",
      icon: "✉️",
      color: "#ea4335"
    },
    
    {
        name: "Resume (PDF)",
        url: "/Akash_Kothari_Resume.pdf",
        icon: "📝",
        color: "#6c63ff"
    }
  ];

  return (
    <Section
      id="contact"
      title="Get In Touch"
      subtitle="I'm always open to new opportunities and collaborations"
      className="contact-section"
    >
      <div className="contact-content">
        <div className="contact-info">
          <div className="contact-text">
            <h3>Let’s Connect</h3>
            <p>
              I’m a Computer Engineering student at Waterloo who enjoys building practical,
              end-to-end systems—cloud pipelines, embedded projects, and clean UIs.
              If you’re hiring, looking to collaborate, or just want to chat tech, reach out.
            </p>
            <p>
              I’m open to part-time, co-op, and project opportunities.
            </p>
          </div>

          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon" aria-hidden>📍</span>
              <div>
                <h4>Location</h4>
                <p>Waterloo / Mississauga, ON</p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden>✉️</span>
              <div>
                <h4>Email</h4>
                <p><a href="mailto:akash@kotharigroup.com">akash@kotharigroup.com</a></p>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon" aria-hidden>📱</span>
              <div>
                <h4>Phone</h4>
                <p><a href="tel:+19052268698">+1 (905) 226-8698</a></p>
              </div>
            </div>
          </div>

          <div className="contact-cta">
            <a className="btn btn-primary" href="#projects">View My Work</a>
            <a className="btn btn-secondary" href="mailto:a27kotha@uwaterloo.ca?subject=Project%20Opportunity">Email Me</a>
          </div>
        </div>

        <div className="social-links">
          <h3>Follow Me</h3>
          <div className="social-grid">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                style={{ '--hover-color': social.color }}
                aria-label={social.name}
              >
                <span className="social-icon">{social.icon}</span>
                <span className="social-name">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;