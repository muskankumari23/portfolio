import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BrainCircuit, Layout, Server, Sparkles } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="glass-card p-6 group hover:-translate-y-2 transition-all duration-300"
  >
    <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center mb-4 text-teal-400 group-hover:scale-110 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300">
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-teal-400 font-medium tracking-wider uppercase text-sm mb-4">
            <Sparkles size={16} />
            <span>Discover</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-teal-400">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-slate-200">
              Computer Science Student & <br/> 
              Aspiring Full Stack Engineer
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a passionate developer currently pursuing a B.Tech in CSE. My journey in tech is driven by an insatiable curiosity and a deep love for building solutions that work flawlessly under the hood while providing an intuitive experience for users.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              With a strong foundation in <span className="text-teal-400 font-medium">Data Structures and Algorithms (DSA)</span>, I approach software development with a problem-solving mindset—ensuring that the code I write is not just functional, but efficient and scalable.
            </p>
            
            <div className="grid grid-cols-2 gap-4 pt-4">
              <a href="https://github.com/muskankumari23" target="_blank" rel="noopener noreferrer" className="glass-card p-4 text-center group/link relative overflow-hidden transition-all hover:bg-slate-800/60 block hover:border-teal-400/50">
                <div className="absolute inset-0 bg-gradient-to-r from-teal-500/0 via-teal-500/10 to-teal-500/0 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="text-4xl font-bold text-teal-400 mb-1 group-hover/link:text-teal-300 transition-colors drop-shadow-[0_0_0_rgba(20,184,166,0)] group-hover/link:drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]">10+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider transition-all group-hover/link:text-slate-300 group-hover/link:underline decoration-teal-400 underline-offset-4">Projects Built</div>
              </a>
              <a href="https://www.codechef.com/users/muskank23" target="_blank" rel="noopener noreferrer" className="glass-card p-4 text-center group/link relative overflow-hidden transition-all hover:bg-slate-800/60 block hover:border-sky-400/50">
                <div className="absolute inset-0 bg-gradient-to-r from-sky-500/0 via-sky-500/10 to-sky-500/0 translate-x-[-100%] group-hover/link:translate-x-[100%] transition-transform duration-1000"></div>
                <div className="text-4xl font-bold text-sky-400 mb-1 group-hover/link:text-sky-300 transition-colors drop-shadow-[0_0_0_rgba(14,165,233,0)] group-hover/link:drop-shadow-[0_0_8px_rgba(14,165,233,0.5)]">200+</div>
                <div className="text-xs text-slate-400 uppercase tracking-wider transition-all group-hover/link:text-slate-300 group-hover/link:underline decoration-sky-400 underline-offset-4">DSA Problems</div>
              </a>
            </div>
          </motion.div>

          {/* Abstract Highlight Grid (Instead of usual photo) */}
          <div className="grid grid-cols-2 gap-4 relative">
             <div className="absolute inset-0 bg-teal-500/5 blur-3xl rounded-full z-[-1]"></div>
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="glass-card p-8 aspect-square flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-br from-slate-800/80 to-slate-900/80"
             >
               <BrainCircuit size={48} className="text-teal-400" />
               <h4 className="font-bold text-white">Algorithmic Logic</h4>
             </motion.div>
             
             <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.3 }}
               className="glass-card p-8 aspect-square flex flex-col items-center justify-center text-center gap-4 bg-gradient-to-bl from-slate-800/80 to-slate-900/80 translate-y-8"
             >
               <Code2 size={48} className="text-sky-400" />
               <h4 className="font-bold text-white">Clean Code</h4>
             </motion.div>
          </div>
        </div>

        {/* What I can do for you */}
        <div className="mt-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl font-bold text-white mb-4">What I Can Do For You</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">Bridging the gap between robust backend logic and elegant frontend interfaces.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            <FeatureCard 
              icon={Layout}
              title="Responsive UI/UX"
              desc="Transforming designs into pixel-perfect, responsive, and accessible web interfaces using React and modern CSS."
              delay={0.1}
            />
            <FeatureCard 
              icon={Server}
              title="Backend & APIs"
              desc="Building secure, scalable RESTful APIs and robust server-side logic using Node.js and Express."
              delay={0.2}
            />
            <FeatureCard 
              icon={BrainCircuit}
              title="Logic Optimization"
              desc="Applying DSA concepts to write efficient algorithms, optimizing performance and reducing computational time."
              delay={0.3}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
