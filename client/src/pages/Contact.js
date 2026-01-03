import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaMapMarkerAlt, 
  FaPhone, 
  FaEnvelope, 
  FaWhatsapp,
  FaClock
} from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
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
            {/* Quick Contact - Now Full Width */}
            <motion.div 
              className="quick-contact full-width"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="quick-contact-card">
                <h3>Get In Touch With Us</h3>
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

              {/* Map */}
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
