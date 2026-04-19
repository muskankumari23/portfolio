import React from 'react';
import { motion } from 'framer-motion';

const FeatureCard = ({ title, desc, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className="border border-teal-500/10 p-6 rounded-2xl glass-card relative overflow-hidden group"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-teal-500/5 to-transparent rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
    <h3 className="text-lg font-medium text-white mb-2 relative z-10">{title}</h3>
    <p className="text-slate-400 text-sm leading-relaxed relative z-10">{desc}</p>
  </motion.div>
);

const About = () => {
  return (
    <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">About</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-sky-500"></div>
        </motion.div>

        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 max-w-2xl"
          >
            <h3 className="text-xl font-medium text-white">
              Computer Science Student & Aspiring Full Stack Engineer
            </h3>
            <p className="text-slate-400 text-lg leading-relaxed">
              I am a passionate developer currently pursuing a B.Tech in CSE. My journey in tech is driven by an insatiable curiosity and a deep love for building solutions that work flawlessly under the hood while providing an intuitive experience for users.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              With a strong foundation in Data Structures and Algorithms, I approach software development with a problem-solving mindset—ensuring that the code I write is not just functional, but efficient and scalable.
            </p>
            
            <div className="flex gap-4 pt-6">
              <a href="https://github.com/muskankumari23" target="_blank" rel="noopener noreferrer" className="border border-teal-500/20 rounded-full px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:border-teal-400 hover:bg-teal-500/10 transition-all shadow-[0_0_15px_rgba(20,184,166,0)] hover:shadow-[0_0_15px_rgba(20,184,166,0.15)]">
                Github Portfolio
              </a>
              <a href="https://www.codechef.com/users/muskank23" target="_blank" rel="noopener noreferrer" className="border border-sky-500/20 rounded-full px-6 py-2 text-sm font-medium text-slate-300 hover:text-white hover:border-sky-400 hover:bg-sky-500/10 transition-all shadow-[0_0_15px_rgba(14,165,233,0)] hover:shadow-[0_0_15px_rgba(14,165,233,0.15)]">
                CodeChef Profile
              </a>
            </div>
          </motion.div>
        </div>

        {/* What I can do for you */}
        <div className="mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h3 className="text-2xl font-medium text-white mb-4">Capabilities</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-4">
            <FeatureCard 
              title="Responsive UI/UX"
              desc="Transforming designs into pixel-perfect, responsive, and accessible web interfaces using React and modern CSS."
              delay={0.1}
            />
            <FeatureCard 
              title="Backend Architecture"
              desc="Building secure, scalable RESTful APIs and robust server-side logic using Node.js and Express."
              delay={0.2}
            />
            <FeatureCard 
              title="Logic & Algorithms"
              desc="Applying DSA concepts to write efficient algorithms, optimizing performance and reducing computational time."
              delay={0.3}
            />
            <FeatureCard 
              title="System Design"
              desc="Structuring applications for scale, maintainability, and clear separation of concerns."
              delay={0.4}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
