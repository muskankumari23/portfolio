import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCplusplus } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const skillsData = [
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" />, level: 90 },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" />, level: 85 },
    { name: 'JavaScript', icon: <IoLogoJavascript color="#F7DF1E" />, level: 85 },
    { name: 'React.js', icon: <FaReact color="#61DAFB" />, level: 80 },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" />, level: 75 },
    { name: 'Python', icon: <FaPython color="#3776AB" />, level: 80 },
    { name: 'C++', icon: <SiCplusplus color="#00599C" />, level: 90 },
    { name: 'Java', icon: <FaJava color="#007396" />, level: 70 },
  ];

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          My Skills
        </motion.h2>

        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={skill.name}
              className="skill-card glass-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="skill-icon">{skill.icon}</div>
              <div className="skill-info">
                <div className="skill-header">
                  <h4>{skill.name}</h4>
                  <span>{skill.level}%</span>
                </div>
                <div className="progress-bar-bg">
                  <motion.div 
                    className="progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                  ></motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
