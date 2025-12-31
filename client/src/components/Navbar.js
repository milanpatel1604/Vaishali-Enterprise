import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaMoon, FaSun } from 'react-icons/fa';
import Logo from './Logo';
import { useDarkMode } from '../contexts/DarkModeContext';
import './Navbar.css';

const Navbar = ({ scrolled, onExpertClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact Us' }
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      {/* Overlay for closing menu when clicking outside */}
      {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
      
      <div className="container navbar-container">
        {/* Logo - Left for desktop, left/center for mobile */}
        <Link to="/" onClick={closeMenu} className="navbar-logo">
          <Logo size="medium" variant="default" />
        </Link>

        <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="mobile-cta">
            <button className="btn btn-primary" onClick={() => { onExpertClick(); closeMenu(); }}>
              <FaPhone /> Talk to Expert
            </button>
          </li>
        </ul>

        <div className="nav-actions">
          <div className="dark-mode-switch" title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
            <input 
              type="checkbox" 
              id="dark-mode-toggle" 
              checked={isDarkMode} 
              onChange={toggleDarkMode}
            />
            <label htmlFor="dark-mode-toggle" className="toggle-label">
              <FaMoon className="icon moon" />
              <FaSun className="icon sun" />
              <span className="slider"></span>
            </label>
          </div>
          <button className="icon-btn location-btn" onClick={() => window.open('https://maps.google.com/?q=Vaishali+Enterprise', '_blank')} title="Our Location">
            <FaMapMarkerAlt />
          </button>
          <button className="icon-btn expert-btn" onClick={onExpertClick} title="Talk to Expert">
            <FaPhone />
          </button>
        </div>

        {/* Mobile Right Section - Dark Mode + Hamburger */}
        <div className="mobile-right-actions">
          <div className="mobile-dark-mode-header">
            <div className="dark-mode-switch" title={isDarkMode ? 'Light Mode' : 'Dark Mode'}>
              <input 
                type="checkbox" 
                id="dark-mode-toggle-mobile-header" 
                checked={isDarkMode} 
                onChange={toggleDarkMode}
              />
              <label htmlFor="dark-mode-toggle-mobile-header" className="toggle-label">
                <FaMoon className="icon moon" />
                <FaSun className="icon sun" />
                <span className="slider"></span>
              </label>
            </div>
          </div>

          <button className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
