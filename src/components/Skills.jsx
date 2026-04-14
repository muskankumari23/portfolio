import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython, FaJava, FaGitAlt } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import { SiCplusplus, SiTailwindcss, SiMongodb, SiExpress, SiVite } from 'react-icons/si';
import { Sparkles } from 'lucide-react';

const skillCategories = [
  {
    title: "Web Development",
    skills: [
      { name: "React.js", icon: <FaReact className="text-[#61DAFB]" />, level: 85 },
      { name: "JavaScript", icon: <IoLogoJavascript className="text-[#F7DF1E]" />, level: 85 },
      { name: "HTML5 & CSS3", icon: <FaHtml5 className="text-[#E34F26]" />, level: 90 },
      { name: "Node.js", icon: <FaNodeJs className="text-[#339933]" />, level: 75 },
    ]
  },
  {
    title: "Programming Languages",
    skills: [
      { name: "C++", icon: <SiCplusplus className="text-[#00599C]" />, level: 90 },
      { name: "Python", icon: <FaPython className="text-[#3776AB]" />, level: 80 },
      { name: "Java", icon: <FaJava className="text-[#007396]" />, level: 75 },
    ]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-sky-400 font-medium tracking-wider uppercase text-sm mb-4">
            <Sparkles size={16} />
            <span>Expertise</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">Skills</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-card p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4 inline-block">{category.title}</h3>
              <div className="space-y-6">
                {category.skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl p-2 rounded-lg bg-white/5 transition-all duration-300 group-hover:scale-125 group-hover:bg-white/10 group-hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                          {skill.icon}
                        </div>
                        <span className="font-medium text-slate-200 group-hover:text-white transition-colors group-hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">{skill.name}</span>
                      </div>
                      <span className="text-teal-400 font-bold text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                        className="h-full bg-gradient-to-r from-teal-500 to-sky-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                      </motion.div>
                    </div>
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
