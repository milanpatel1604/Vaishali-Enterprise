import React from 'react';
import { FaTimes, FaPhone, FaWhatsapp, FaEnvelope } from 'react-icons/fa';
import './TalkToExpertPopup.css';

const TalkToExpertPopup = ({ onClose }) => {
  return (
    <>
      <div className="overlay" onClick={onClose}></div>
      <div className="expert-popup">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <div className="popup-header">
          <h2>Talk to Our Expert</h2>
          <p>Get personalized assistance for your laminate needs</p>
        </div>

        <div className="contact-options-popup">
          <a href="tel:+919574776776" className="contact-option-item">
            <FaPhone className="contact-icon" />
            <div className="contact-details">
              <h3>Call Us</h3>
              <span className="contact-value">+91 95747 76776</span>
            </div>
          </a>

          <a href="https://wa.me/919574776776" target="_blank" rel="noopener noreferrer" className="contact-option-item">
            <FaWhatsapp className="contact-icon whatsapp" />
            <div className="contact-details">
              <h3>WhatsApp</h3>
              <span className="contact-value">Chat with us</span>
            </div>
          </a>

          <a href="mailto:vaishali.laminates@gmail.com" className="contact-option-item">
            <FaEnvelope className="contact-icon" />
            <div className="contact-details">
              <h3>Email</h3>
              <span className="contact-value">vaishali.laminates@gmail.com</span>
            </div>
          </a>
        </div>

        <div className="popup-footer">
          <p>Our team is ready to assist you with all your laminate requirements</p>
          <p className="working-hours">Monday - Saturday: 9:00 AM - 7:00 PM</p>
        </div>
      </div>
    </>
  );
};

export default TalkToExpertPopup;
