import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      title: "Category E-Commerce Platform",
      description: "A comprehensive e-commerce platform supporting multiple product categories, user authentication, and a scalable backend architecture.",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/muskankumari23/Cart-Category-E-Commerce-Platform",
      demo: "#",
      category: "E-Commerce",
    },
    {
      title: "SafeHer",
      description: "A dedicated safety web application focusing on women's security, offering features such as immediate alerts and location tracking.",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/muskankumari23/SafeHer",
      demo: "#",
      category: "Web",
    },
    {
      title: "Amazon Clone",
      description: "A full-stack Amazon storefront clone with a functional shopping cart, product catalog, and user-friendly interface.",
      tags: ["React", "Firebase", "Redux"],
      github: "https://github.com/muskankumari23/AmazonClone",
      demo: "#",
      category: "E-Commerce",
    },
    {
      title: "Snake Game",
      description: "A classic retro Snake Game built with vanilla web technologies, featuring score tracking and an engaging interactive game loop.",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/muskankumari23/SnackGame",
      demo: "#",
      category: "Game",
    },
    {
      title: "Weather App",
      description: "A dynamic weather application providing real-time forecasts, powered by external APIs to deliver accurate and responsive meteorological data.",
      tags: ["JavaScript", "API", "CSS"],
      github: "https://github.com/muskankumari23/WeatherApp",
      demo: "#",
      category: "Web",
    }
  ];

  const categories = ["All", "Web", "E-Commerce", "Game"];
  const filteredProjects = projectsData.filter(project => filter === 'All' || project.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Projects</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-blue-500"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${filter === category ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-[0_0_10px_rgba(20,184,166,0.3)]' : 'bg-[#0c1626] text-slate-400 hover:text-white border border-teal-500/10'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className="glass-card p-6 flex flex-col group overflow-hidden relative"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-sky-500/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
                <h3 className="text-xl font-medium text-white mb-3 group-hover:text-teal-400 transition-colors relative z-10">{project.title}</h3>
                <p className="text-slate-400 mb-6 text-sm flex-grow leading-relaxed relative z-10">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6 mt-auto relative z-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-xs text-teal-500/70">
                      {tag}
                      <span className="last:hidden mx-1 text-slate-700">•</span>
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 relative z-10">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-teal-400 transition-colors">GitHub →</a>
                  {project.demo !== "#" && (
                    <a href={project.demo} target="_blank" rel="noreferrer" className="text-sm font-medium text-white hover:text-sky-400 transition-colors">Live Demo →</a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
