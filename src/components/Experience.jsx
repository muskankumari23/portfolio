import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const journeyList = [
    {
      year: "2021 - Present",
      title: "Diploma → B.Tech in CSE",
      subtitle: "Academic Foundation",
      description: "Started my formal education in Computer Science. Built a strong foundation in core subjects like Data Structures, Operating Systems, DBMS, and Object-Oriented Programming (OOPs).",
    },
    {
      year: "2022 - 2023",
      title: "Learning the MERN Stack",
      subtitle: "Full Stack Exploration",
      description: "Dove deep into web development. Mastered React.js for frontend and learned how to build robust backends with Node.js, Express, and MongoDB. Also solved 200+ problems to master DSA.",
    },
    {
      year: "2023 - Present",
      title: "Building Real-World Projects",
      subtitle: "Application & Optimization",
      description: "Started building complex projects like the Knapsack-based Smart Budget Planner, Amazon clone, and interactive portfolios. Focused on clean code, responsive UI, and optimized algorithms.",
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Experience & Journey</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-blue-500 to-sky-500"></div>
        </motion.div>

        <div className="space-y-12 relative border-l-2 border-teal-500/20 ml-3 pl-8">
          {journeyList.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              {/* Dot indicator */}
              <div className="absolute -left-[41px] mt-1.5 w-4 h-4 bg-gradient-to-br from-teal-400 to-sky-500 rounded-full border-4 border-[#050b14] group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(20,184,166,0.5)]"></div>
              
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8 glass-card p-6 md:bg-transparent md:border-none md:p-0 group-hover:md:translate-x-2 transition-transform duration-300 relative overflow-hidden">
                <div className="md:w-1/4 shrink-0 mb-2 md:mb-0 relative z-10">
                  <span className="text-sm font-medium text-teal-400/80 bg-teal-500/10 px-3 py-1 rounded-full border border-teal-500/20 inline-block">
                    {item.year}
                  </span>
                </div>
                
                <div className="md:w-3/4 relative z-10">
                  <h3 className="text-xl font-medium text-white mb-1 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                  <h4 className="text-sky-400/80 font-medium mb-3 text-sm">{item.subtitle}</h4>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
