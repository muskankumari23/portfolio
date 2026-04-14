import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhone, FiGithub, FiLinkedin } from 'react-icons/fi';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>

        <div className="contact-wrapper">
          <motion.div 
            className="contact-info glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let's Connect</h3>
            <p className="contact-desc">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box"><FiMail /></div>
                <div>
                  <h4>Email</h4>
                  <a href="mailto:muskan@example.com">muskan@example.com</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-box"><FiPhone /></div>
                <div>
                  <h4>Phone</h4>
                  <a href="tel:+1234567890">+1 234 567 890</a>
                </div>
              </div>
              
              <div className="contact-item">
                <div className="icon-box"><FiMapPin /></div>
                <div>
                  <h4>Location</h4>
                  <p>New Delhi, India</p>
                </div>
              </div>
            </div>

            <div className="social-links">
              <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="glass-card"><FiGithub /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="glass-card"><FiLinkedin /></a>
            </div>
          </motion.div>

          <motion.div 
            className="contact-form-wrapper glass-card"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="john@example.com" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
              </div>
              <button type="submit" className="btn btn-primary submit-btn">Send Message</button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
