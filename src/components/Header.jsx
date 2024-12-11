import React from "react";
import "./Header.css"; 
const Header = () => (
  <header className="header">
    <div className="header-content">
      <img src="/images/profile.png" alt="Profile" className="profile-pic" />
      <h1>My Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
