import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap, FaCode, FaLaptopCode } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      year: "2023 - Present",
      title: "Full Stack Development",
      company: "Self-Taught & Projects",
      description: "Mastering the MERN stack. Built functional clones like Amazon and practical algorithms-based projects like the Smart Budget Planner.",
      icon: <FaLaptopCode />
    },
    {
      year: "2022 - Present",
      title: "Data Structures & Algorithms",
      company: "Continuous Learning",
      description: "Extensively solving problems using C++ and Java. Focused on optimization, problem-solving skills, and competitive programming.",
      icon: <FaCode />
    },
    {
      year: "2021 - Present",
      title: "B.Tech in Computer Science",
      company: "University Name",
      description: "Pursuing computer science degree with a focus on core subjects like OS, DBMS, OOPs, and Computer Networks.",
      icon: <FaGraduationCap />
    }
  ];

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Journey
        </motion.h2>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="timeline-dot">
                {exp.icon}
              </div>
              <div className="timeline-content glass-card">
                <span className="timeline-year">{exp.year}</span>
                <h3>{exp.title}</h3>
                <h4>{exp.company}</h4>
                <p>{exp.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
