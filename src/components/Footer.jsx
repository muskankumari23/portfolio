import React from 'react';
import { FiHeart } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-logo">
          M<span className="dot">.</span>
        </div>
        
        <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Muskan Kumari. All rights reserved.
        </p>

        <p className="footer-made-with">
          Made with <FiHeart className="heart-icon" /> by Muskan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
