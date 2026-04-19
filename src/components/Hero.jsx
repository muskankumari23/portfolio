import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-4xl mx-auto w-full flex flex-col items-center justify-center text-center z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8 flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-teal-500/30 text-teal-400 text-sm font-medium bg-teal-500/5 hover:bg-teal-500/10 transition-colors cursor-default">
            Available for Internships
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="gradient-text">Muskan Kumari</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-slate-300 font-medium tracking-tight">
            Full Stack Developer, Problem Solver.
          </div>
          
          <p className="text-slate-400 max-w-2xl text-lg md:text-xl leading-relaxed">
            I craft intuitive, responsive, and robust web experiences with a focus on simple, functional design and scalable architecture.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-8">
            <a href="#projects" className="btn-primary group flex items-center gap-2">
              View Work
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact 
            </a>
          </div>
          
          <div className="flex items-center justify-center gap-8 pt-12 text-slate-400">
            <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="hover:text-teal-400 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muskank23/" target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:muskankumari92084@gmail.com" className="hover:text-blue-400 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
