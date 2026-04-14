import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, Sparkles } from 'lucide-react';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const projectsData = [
    {
      title: "Cart Multi Category E-Commerce Platform",
      description: "A comprehensive e-commerce platform supporting multiple product categories, user authentication, and a scalable backend architecture.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Node.js", "Express", "MongoDB"],
      github: "https://github.com/muskankumari23/Cart-Category-E-Commerce-Platform",
      demo: "#",
      category: "E-Commerce",
      featured: true
    },
    {
      title: "SafeHer",
      description: "A dedicated safety web application focusing on women's security, offering features such as immediate alerts and location tracking.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "JavaScript", "Tailwind CSS"],
      github: "https://github.com/muskankumari23/SafeHer",
      demo: "#",
      category: "Web",
      featured: false
    },
    {
      title: "Portfolio Website",
      description: "A modern, highly interactive personal portfolio website designed with a clean UI, smooth animations, and a responsive layout.",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/muskankumari23/muskankumari23.github.io",
      demo: "#",
      category: "Web",
      featured: false
    },
    {
      title: "Amazon Clone",
      description: "A full-stack Amazon storefront clone with a functional shopping cart, product catalog, and user-friendly interface.",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["React", "Firebase", "Redux"],
      github: "https://github.com/muskankumari23/AmazonClone",
      demo: "#",
      category: "E-Commerce",
      featured: false
    },
    {
      title: "Snake Game",
      description: "A classic retro Snake Game built with vanilla web technologies, featuring score tracking and an engaging interactive game loop.",
      image: "https://images.unsplash.com/photo-1611996575749-79a3a250f563?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["HTML5", "CSS3", "JavaScript"],
      github: "https://github.com/muskankumari23/SnackGame",
      demo: "#",
      category: "Game",
      featured: false
    },
    {
      title: "Weather App",
      description: "A dynamic weather application providing real-time forecasts, powered by external APIs to deliver accurate and responsive meteorological data.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      tags: ["JavaScript", "API", "CSS"],
      github: "https://github.com/muskankumari23/WeatherApp",
      demo: "https://muskankumari23.github.io/WeatherApp",
      category: "Web",
      featured: false
    }
  ];

  const categories = ["All", "Web", "E-Commerce", "Game"];
  const filteredProjects = projectsData.filter(project => filter === 'All' || project.category === filter);

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 text-teal-400 font-medium tracking-wider uppercase text-sm mb-4">
            <Sparkles size={16} />
            <span>Portfolio</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">Projects</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        {/* Filters */}
        <div className="flex justify-center gap-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${filter === category ? 'bg-gradient-to-r from-teal-500 to-sky-500 text-white shadow-[0_0_15px_rgba(20,184,166,0.5)]' : 'glass-card text-slate-300 hover:text-white hover:border-teal-500/50'}`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.title}
                className={`glass-card overflow-hidden group flex flex-col ${project.featured ? 'md:col-span-2 lg:col-span-2 shadow-[0_0_30px_rgba(20,184,166,0.15)] ring-1 ring-teal-500/30' : ''}`}
              >
                <div className={`relative overflow-hidden ${project.featured ? 'h-72 md:h-80' : 'h-56'}`}>
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                  
                  {project.featured && (
                    <div className="absolute top-4 left-4 z-20 bg-gradient-to-r from-teal-500 to-sky-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      Featured Work
                    </div>
                  )}

                  <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-900/60 backdrop-blur-sm">
                    <a href={project.github} target="_blank" rel="noreferrer" title="GitHub" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-teal-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                      <Github size={20} />
                    </a>
                    <a href={project.demo} target="_blank" rel="noreferrer" title="Live Demo" className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-sky-500 hover:scale-110 transition-all duration-300 hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 bg-slate-800/80 text-teal-300 rounded-full border border-teal-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
