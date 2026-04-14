import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center z-10">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-teal-500/30 text-teal-400 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse"></span>
            Available for Internships
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="gradient-text">Muskan Kumari</span>
          </h1>
          
          <div className="text-xl md:text-2xl text-slate-300 font-medium h-12">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
          
          <p className="text-slate-400 max-w-lg text-lg">
            I build interactive, responsive, and visually stunning web applications with modern tech stacks. Passionate about algorithms, dynamic UI, and optimized logic.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#projects" className="btn-primary group flex items-center gap-2">
              View Projects 
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me
            </a>
          </div>
          
          <div className="flex items-center gap-6 pt-6 text-slate-400">
            <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="hover:text-teal-400 hover:-translate-y-1 transition-all">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/muskank23/" target="_blank" rel="noreferrer" className="hover:text-sky-400 hover:-translate-y-1 transition-all">
              <Linkedin size={24} />
            </a>
            <a href="mailto:muskankumari92084@gmail.com" className="hover:text-blue-400 hover:-translate-y-1 transition-all">
              <Mail size={24} />
            </a>
          </div>
        </motion.div>
        
        {/* Right Content - Abstract Tech Art / Floating Elements */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Base glowing orb */}
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 rounded-full blur-3xl animate-pulse"></div>
            
            {/* Spinning/floating abstract shapes */}
            <motion.div 
              animate={{ 
                y: [-20, 20, -20],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className="relative w-64 h-64 glass-card rounded-[2rem] border-white/20 rotate-12 flex items-center justify-center overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-transparent"></div>
                 <div className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white/80 to-white/20 select-none">
                   &lt;/&gt;
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
              animate={{ y: [15, -15, 15] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-10 right-10 w-24 h-24 glass-card rounded-full border-teal-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(20,184,166,0.2)]"
            >
              <span className="text-3xl">⚛️</span>
            </motion.div>
            
            <motion.div 
              animate={{ y: [-15, 15, -15] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-20 left-4 w-20 h-20 glass-card rounded-2xl border-sky-500/30 flex items-center justify-center rotate-12 shadow-[0_0_20px_rgba(14,165,233,0.2)]"
            >
              <span className="text-3xl">JS</span>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default Hero;
