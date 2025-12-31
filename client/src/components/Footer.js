import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaInstagram, 
  FaLinkedinIn, 
  FaTwitter, 
  FaPhone, 
  FaEnvelope, 
  FaMapMarkerAlt,
  FaWhatsapp
} from 'react-icons/fa';
import Logo from './Logo';
import './Footer.css';

const Footer = ({ onExpertClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            {/* Company Info */}
            <div className="footer-col">
              <div className="footer-logo">
                <Logo size="medium" variant="light" />
              </div>
              <p className="footer-desc">
                Leading supplier of premium A & B grade laminates. 
                Transform your spaces with our exquisite collection of decorative laminates.
              </p>
              <div className="social-links">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FaFacebookF />
                </a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <FaInstagram />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-col">
              <h3 className="footer-title">Quick Links</h3>
              <ul className="footer-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><button onClick={onExpertClick} className="link-btn">Talk to Expert</button></li>
              </ul>
            </div>

            {/* Product Categories */}
            <div className="footer-col">
              <h3 className="footer-title">Our Products</h3>
              <ul className="footer-links">
                <li><Link to="/products?category=High Gloss">High Gloss Laminates</Link></li>
                <li><Link to="/products?category=Matte Finish">Matte Finish</Link></li>
                <li><Link to="/products?category=Wood Finish">Wood Finish</Link></li>
                <li><Link to="/products?category=Textured">Textured Laminates</Link></li>
                <li><Link to="/products?grade=A">A Grade Laminates</Link></li>
                <li><Link to="/products?grade=B">B Grade Laminates</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-col">
              <h3 className="footer-title">Contact Us</h3>
              <ul className="footer-contact">
                <li>
                  <FaMapMarkerAlt />
                  <span>123 Business District,<br />Mumbai, Maharashtra 400001</span>
                </li>
                <li>
                  <FaPhone />
                  <a href="tel:+919876543210">+91 98765 43210</a>
                </li>
                <li>
                  <FaEnvelope />
                  <a href="mailto:info@vaishali-enterprise.com">info@vaishali-enterprise.com</a>
                </li>
                <li>
                  <FaWhatsapp />
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer">
                    WhatsApp Us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Vaishali Enterprise. All Rights Reserved.</p>
            <p>
              Designed & Developed by{' '}
              <a 
                href="https://instagram.com/milan_patel____" 
                target="_blank" 
                rel="noopener noreferrer"
                className="developer-link"
              >
                @Milan
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
