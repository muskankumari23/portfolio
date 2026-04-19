import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Web Development",
    skills: ["React.js", "JavaScript", "HTML5 & CSS3", "Node.js", "Tailwind CSS", "MongoDB", "Express", "Vite"]
  },
  {
    title: "Programming Languages",
    skills: ["C++", "Python", "Java", "SQL"]
  },
  {
    title: "Tools & Others",
    skills: ["Git", "GitHub", "Figma", "REST APIs"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Skills & Expertise</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-sky-500"></div>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-medium text-white mb-6 border-l-2 border-teal-500 pl-3">{category.title}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <div key={skill} className="px-4 py-2 rounded-full border border-teal-500/10 bg-[#0c1626] text-sm text-slate-300 hover:text-white hover:border-teal-400/50 hover:bg-teal-500/5 transition-colors cursor-default shadow-[0_0_10px_rgba(20,184,166,0)] hover:shadow-[0_0_10px_rgba(20,184,166,0.1)]">
                    {skill}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
