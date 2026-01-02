import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock,
  FaUser,
  FaPaperPlane
} from 'react-icons/fa';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState({ type: '', text: '' });

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: 'Visit Us',
      details: ['123 Business District', 'Mumbai, Maharashtra 400001', 'India'],
      link: 'https://www.google.com/maps?q=23.23345204326506,72.47957175098672'
    },
    {
      icon: <FaPhone />,
      title: 'Call Us',
      details: ['+91 95747 76776'],
      link: 'tel:+919574776776'
    },
    {
      icon: <FaEnvelope />,
      title: 'Email Us',
      details: ['vaishali.laminates@gmail.com'],
      link: 'mailto:vaishali.laminates@gmail.com'
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      details: ['Monday - Saturday: 9:00 AM - 7:00 PM', 'Sunday: Closed'],
      link: null
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone || !formData.subject || !formData.message) {
      setResponseMessage({ type: 'error', text: 'Please fill in all fields' });
      return;
    }

    setLoading(true);
    setResponseMessage({ type: '', text: '' });

    try {
      const response = await axios.post('/api/contact', formData);
      setResponseMessage({ type: 'success', text: response.data.message });
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    } catch (error) {
      setResponseMessage({ 
        type: 'error', 
        text: error.response?.data?.error || 'Something went wrong. Please try again.' 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      {/* Page Header */}
      <div className="page-header contact-header">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact Us</h1>
            <p>We'd love to hear from you. Get in touch with us today!</p>
          </motion.div>
        </div>
      </div>

      {/* Contact Form and Map */}
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-content">
            {/* Contact Form */}
            <motion.div 
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="form-header">
                <h2>Send Us a Message</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible</p>
              </div>

              <form onSubmit={handleSubmit} className="contact-form">
                {responseMessage.text && (
                  <div className={`alert alert-${responseMessage.type}`}>
                    {responseMessage.text}
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
                    <FaEnvelope /> Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
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
                  <label className="form-label">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Select Subject</option>
                    <option value="General Question">General Question</option>
                    <option value="Product Inquiry">Product Inquiry</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Bulk Order">Bulk Order</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-primary submit-btn" disabled={loading}>
                  {loading ? 'Sending...' : (
                    <>
                      <FaPaperPlane /> Send Message
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Quick Contact */}
            <motion.div 
              className="quick-contact"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="quick-contact-card">
                <h3>Need Immediate Assistance?</h3>
                <p>Our team is ready to help you with any questions or concerns.</p>
                
                <a href="tel:+919574776776" className="quick-contact-item">
                  <FaPhone />
                  <div>
                    <h4>Call Us Now</h4>
                    <span>+91 95747 76776</span>
                  </div>
                </a>

                <a href="https://wa.me/919574776776" target="_blank" rel="noopener noreferrer" className="quick-contact-item">
                  <FaWhatsapp />
                  <div>
                    <h4>WhatsApp</h4>
                    <span>Chat with us on WhatsApp</span>
                  </div>
                </a>

                <a href="mailto:vaishali.laminates@gmail.com" className="quick-contact-item">
                  <FaEnvelope />
                  <div>
                    <h4>Email Support</h4>
                    <span>vaishali.laminates@gmail.com</span>
                  </div>
                </a>
              </div>

              {/* Map Placeholder */}
              <div className="map-container">
                <iframe
                  title="Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1570.0178342866316!2d72.47846912768681!3d23.233530895855736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395c277f91a0dfb1%3A0xeca21b0809d02c80!2sVaishali%20enterprise!5e0!3m2!1sen!2sin!4v1767264494507!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0, borderRadius: '12px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
