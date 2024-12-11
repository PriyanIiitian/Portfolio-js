import React from "react";
import "./Contact.css";

const Contact = () => {
  <section id="contact" className="contact">
    <div className="contact-container">
      <h2>Contact </h2>
      <ul className="contact-list">
        <li>
          <a href="https://www.instagram.com/priyaniiitiank/" target="_blank" rel="noopener noreferrer" >
            <img src="/images/instagram.png" alt="Instagram" className="contact-icon"/>
            Instagram </a>
        </li>
        <li>
          <a href="tel:6379638505">
            <img src="/images/phone.png" alt="Phone" className="contact-icon" />
            +91 6379638505
          </a>
        </li>
        <li>
          <a href="mailto:priyaniiitiank@gmail.com">
            <img src="/images/gmail.png" alt="Gmail" className="contact-icon" />
            priyaniiitiank@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/https://www.linkedin.com/in/priyadharsan-nagarajan-500411322/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/linkedin.png"
              alt="LinkedIn"
              className="contact-icon"
            />
            LinkedIn
          </a>
        </li>
      </ul>
      <br />
      <br />
      <br />
    </div>
  </section>;
};

export default Contact;
