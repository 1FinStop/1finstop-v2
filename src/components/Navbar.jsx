
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const handleToggle = () => {
    setIsMobile(!isMobile);
  };

  return (
    <header className="navbar">
      <div className="logo">1FinStop</div>
      <nav className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <a href="/">Home</a>
        <a href="/services">Services</a>
        <a href="/pages">Pages</a>
        <a href="/cases">Cases</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
        <div className="mobile-menu-icon" onClick={handleToggle}>
            <FontAwesomeIcon icon={isMobile ? faTimes : faBars} />
          {/* <FontAwesomeIcon icon={isMobile ? faTimes : faBars} /> */}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
