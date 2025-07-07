import React from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import profilePic from "../assets/profile.jpg"
import Socials from "./Socials";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="left-section">
        <img
          src={profilePic}
          alt="Prashanth"
          className="profile-pic"
        />
        <h1>Prashanth Burra</h1>
      </div>
      <div className="right-section">
        <NavLink exact="true" to="/" className="nav-link">Home</NavLink>
        <NavLink to="/about" className="nav-link">About</NavLink>
        <NavLink to="/skills" className="nav-link">Skills</NavLink>
        <NavLink to="/projects" className="nav-link">Projects</NavLink>
        <NavLink to="/resume" className="nav-link">Resume</NavLink>
        <NavLink to="/contact" className="nav-link">Contact</NavLink>
        <div className="social"><Socials/></div>
      </div>
    </nav>
  );
};

// ✅ THIS IS THE KEY PART
export default Navbar;
