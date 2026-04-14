import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        
        <div className="about-content">
          <motion.div 
            className="about-text glass-card"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Get to know me!</h3>
            <p>
              I am a dedicated Computer Science student and an aspiring Full Stack Developer.
              My journey in tech is driven by a deep-rooted passion for Data Structures and Algorithms (DSA),
              which helps me write efficient, optimized, and scalable code.
            </p>
            <p>
              I specialize in the MERN stack (MongoDB, Express.js, React, Node.js) and love building 
              full-fledged web applications from scratch. When I'm not coding, you'll probably find me
              exploring new technologies or trying to solve complex algorithmic puzzles.
            </p>
            <div className="about-stats">
              <div className="stat">
                <h4>500+</h4>
                <p>DSA Problems Solved</p>
              </div>
              <div className="stat">
                <h4>10+</h4>
                <p>Projects Built</p>
              </div>
              <div className="stat">
                <h4>Top</h4>
                <p>Performer in Academics</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image-wrapper"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="about-image glass-card">
              <div className="code-snippet">
                <pre>
                  <code>
{`const muskan = {
  role: "Full Stack Developer",
  skills: ["React", "Node", "MongoDB", "C++"],
  isPassionate: true,
  currentFocus: "MERN Stack + DSA",
  sayHi: function() {
    return "Let's build something amazing!";
  }
};`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
