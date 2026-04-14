import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="greeting">Hello, I'm</h2>
          <h1 className="name">Muskan Kumari</h1>
          <div className="typing-container">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="h3"
              speed={50}
              repeat={Infinity}
              className="typing-text"
            />
          </div>
          <p className="hero-desc">
            Passionate about building modern, fast, and scalable web applications. 
            I love turning complex problems into simple, beautiful, and intuitive designs.
          </p>
          
          <div className="hero-btns">
            <a href="#projects" className="btn btn-primary">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="glass-card"><FiGithub /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="glass-card"><FiLinkedin /></a>
            <a href="mailto:muskan@example.com" className="glass-card"><FiMail /></a>
          </div>
        </motion.div>
        
        <motion.div 
          className="hero-image-container floating"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-blob"></div>
          {/* Placeholder for actual image */}
          <div className="hero-img-placeholder glass-card">
             <span className="img-text">M.K</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
