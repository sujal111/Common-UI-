import React from 'react';
import './Navbar.css';
import attLogo from '../assets/ATT-Logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={attLogo} alt="AT&T Logo" className="logo" />
        <span className="logo-name">AT&T</span>
      </div>
      <ul className="navbar-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Features</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
