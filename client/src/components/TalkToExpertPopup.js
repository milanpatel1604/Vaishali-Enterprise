import React, { useState } from 'react';
import { FaTimes, FaUser, FaPhone, FaComment } from 'react-icons/fa';
import axios from 'axios';
import './TalkToExpertPopup.css';

const TalkToExpertPopup = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    requirement: ''
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      setMessage({ type: 'error', text: 'Name and phone are required!' });
      return;
    }

    setLoading(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/expert', formData);
      setMessage({ type: 'success', text: response.data.message });
      setFormData({ name: '', phone: '', requirement: '' });
      
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      setMessage({ 
        type: 'error', 
        text: error.response?.data?.error || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

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

        <div className="call-option">
          <FaPhone className="call-icon" />
          <span className="call-text">Request or Call us directly at</span>
          <a href="tel:+919574776776" className="phone-link">+91 95747 76776</a>
        </div>
        <form onSubmit={handleSubmit} className="expert-form">
          {message.text && (
            <div className={`alert alert-${message.type}`}>
              {message.text}
            </div>
          )}

          <div className="form-group">
            <label className="form-label">
              <FaUser /> Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaPhone /> Phone Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>

          <div className="form-group">
            <label className="form-label">
              <FaComment /> Your Requirement *
            </label>
            <textarea
              name="requirement"
              value={formData.requirement}
              onChange={handleChange}
              className="form-textarea"
              placeholder="Tell us about your laminate requirements..."
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'Request Callback'}
          </button>
        </form>
      </div>
    </>
  );
};

export default TalkToExpertPopup;
