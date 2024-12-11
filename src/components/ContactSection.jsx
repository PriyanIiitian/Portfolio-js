import React from "react";
import "./ContactSection.css"; 

const ContactSection = () => {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <div className="contact-info">
        <ul>
          <li>
            <a href="mailto:your-email@example.com" className="contact-link">
              <i className="fas fa-envelope"></i> Email
            </a>
          </li>
          <li>
            <a href="tel:+1234567890" className="contact-link">
              <i className="fas fa-phone"></i> Phone
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default ContactSection;
