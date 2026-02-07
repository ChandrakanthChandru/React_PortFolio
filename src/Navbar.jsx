import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left side - Logo */}
      <div className="navbar-left">
        <Link to="/" className="logo">
          Portfolio
        </Link>
      </div>

      {/* Hamburger Menu (Mobile) */}
      <div className="menu-icon" onClick={() => setOpen(!open)}>
        ☰
      </div>

      {/* Right side - Links */}
      <div className={`navbar-right ${open ? "active" : ""}`}>
        <Link to="/about" onClick={() => setOpen(false)}>About</Link>
        <Link to="/education" onClick={() => setOpen(false)}>Education</Link>
        <Link to="/skills" onClick={() => setOpen(false)}>Skills</Link>
        <Link to="/project" onClick={() => setOpen(false)}>Project</Link>
        <Link to="/certification" onClick={() => setOpen(false)}>Certification</Link>
        <Link to="/contact" onClick={() => setOpen(false)}>Contact Me</Link>
      </div>
    </nav>
  );
};

export default Navbar;
