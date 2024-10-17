import React, { useState } from 'react';

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const handleToggle = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className={`navbar ${navOpen ? 'scrolled' : ''}`}>
      <div className="logo">Gandhi Jayanti</div>
      <div className="toggle" id="toggle" onClick={handleToggle}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`nav-links ${navOpen ? 'active' : ''}`} id="nav-links">
        <li><a href="#about">About Gandhi</a></li>
        <li><a href="#philosophy">Philosophy</a></li>
        <li><a href="#legacy">Legacy</a></li>
        <li><a href="#timeline">Timeline</a></li>
        <li><a href="#influence">Influence</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
