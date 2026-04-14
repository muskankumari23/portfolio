import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: "Smart Budget Planner",
      description: "A financial planning application that utilizes the Knapsack Algorithm to optimize budget allocation. It helps users maximize their savings and prioritize essential expenses intelligently.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "Algorithms", "HTML/CSS", "Data Structures"],
      github: "https://github.com/muskankumari23/SmartBudgetPlanner",
      demo: "#"
    },
    {
      title: "Amazon Clone",
      description: "A full-stack e-commerce platform replicating Core Amazon features. Includes user authentication, product catalog, a fully functional shopping cart, and mock payment integration.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com/muskankumari23/Amazon-Clone",
      demo: "#"
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="projects-grid">
          {projectsData.map((project, index) => (
            <motion.div 
              key={index}
              className="project-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <a href={project.github} target="_blank" rel="noreferrer" className="btn-icon" aria-label="GitHub">
                    <FiGithub />
                  </a>
                  <a href={project.demo} target="_blank" rel="noreferrer" className="btn-icon" aria-label="Live Demo">
                    <FiExternalLink />
                  </a>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
