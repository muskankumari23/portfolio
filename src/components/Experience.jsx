import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Code2, Rocket, Milestone } from 'lucide-react';

const Experience = () => {
  const journeyList = [
    {
      year: "2021 - Present",
      title: "Diploma → B.Tech in CSE",
      subtitle: "Academic Foundation",
      description: "Started my formal education in Computer Science. Built a strong foundation in core subjects like Data Structures, Operating Systems, DBMS, and Object-Oriented Programming (OOPs).",
      icon: <GraduationCap size={24} />,
      color: "from-teal-400 to-emerald-500"
    },
    {
      year: "2022 - 2023",
      title: "Learning the MERN Stack",
      subtitle: "Full Stack Exploration",
      description: "Dove deep into web development. Mastered React.js for frontend and learned how to build robust backends with Node.js, Express, and MongoDB. Also solved 200+ problems to master DSA.",
      icon: <Code2 size={24} />,
      color: "from-sky-400 to-blue-500"
    },
    {
      year: "2023 - Present",
      title: "Building Real-World Projects",
      subtitle: "Application & Optimization",
      description: "Started building complex projects like the Knapsack-based Smart Budget Planner, Amazon clone, and interactive portfolios. Focused on clean code, responsive UI, and optimized algorithms.",
      icon: <Rocket size={24} />,
      color: "from-purple-400 to-indigo-500"
    }
  ];

  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sky-400 font-medium tracking-wider uppercase text-sm mb-4">
            <Milestone size={16} />
            <span>Timeline</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-slate-800 transform md:-translate-x-1/2 rounded-full hidden sm:block">
             <motion.div 
                className="w-full bg-gradient-to-b from-teal-500 via-sky-500 to-blue-500 rounded-full"
                initial={{ height: 0 }}
                whileInView={{ height: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
             ></motion.div>
          </div>

          <div className="space-y-12">
            {journeyList.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center justify-between group">
                
                {/* Desktop Left Side */}
                <div className={`hidden md:block w-5/12 text-right pr-8 ${index % 2 !== 0 ? 'md:order-1' : 'md:order-none'}`}>
                  {index % 2 === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                    >
                      <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                      <p className="text-sky-400 font-medium mb-3">{item.subtitle}</p>
                      <p className="text-slate-400">{item.description}</p>
                    </motion.div>
                  ) : (
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      className="text-left pl-8"
                    >
                      <span className="inline-block px-4 py-1 rounded-full bg-slate-800 text-teal-300 font-medium text-sm mb-4 border border-slate-700">
                        {item.year}
                      </span>
                    </motion.div>
                  )}
                </div>

                {/* Center Icon */}
                <motion.div 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 + 0.2 }}
                  className={`absolute left-8 md:left-1/2 transform -translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-slate-900 border-4 border-slate-800 z-10 shadow-[0_0_20px_rgba(0,0,0,0.5)] group-hover:border-teal-500 transition-colors duration-300 ${index % 2 !== 0 ? 'md:order-2' : ''}`}
                >
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                </motion.div>

                {/* Mobile / Desktop Right Side */}
                <div className={`w-full pl-24 sm:pl-32 md:pl-0 md:w-5/12 ${index % 2 !== 0 ? 'md:order-3 md:text-right md:pr-8' : 'md:text-left md:pl-8'}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 !== 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="glass-card p-6 md:bg-transparent md:border-none md:shadow-none md:backdrop-blur-none md:p-0"
                  >
                    {index % 2 !== 0 ? (
                      <div className="md:hidden">
                        <span className="inline-block px-4 py-1 rounded-full bg-slate-800 text-teal-300 font-medium text-sm mb-4 border border-slate-700">
                          {item.year}
                        </span>
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                        <p className="text-sky-400 font-medium mb-3">{item.subtitle}</p>
                        <p className="text-slate-400 max-md:text-sm">{item.description}</p>
                      </div>
                    ) : (
                      <>
                        <div className="md:hidden">
                          <span className="inline-block px-4 py-1 rounded-full bg-slate-800 text-teal-300 font-medium text-sm mb-4 border border-slate-700">
                            {item.year}
                          </span>
                          <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                          <p className="text-sky-400 font-medium mb-3">{item.subtitle}</p>
                          <p className="text-slate-400 max-md:text-sm">{item.description}</p>
                        </div>
                        <div className="hidden md:block">
                           <span className="inline-block px-4 py-1 rounded-full bg-slate-800 text-teal-300 font-medium text-sm mb-4 border border-slate-700">
                            {item.year}
                          </span>
                        </div>
                      </>
                    )}
                    
                    {index % 2 !== 0 && (
                      <div className="hidden md:block">
                        <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-teal-400 transition-colors">{item.title}</h3>
                        <p className="text-sky-400 font-medium mb-3">{item.subtitle}</p>
                        <p className="text-slate-400">{item.description}</p>
                      </div>
                    )}
                  </motion.div>
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
