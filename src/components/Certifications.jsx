import React from 'react';
import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

const Certifications = () => {
  // NOTE: These are placeholder certifications. 
  // Please replace them with your actual certifications from your LinkedIn!
  const certList = [
    {
      title: "Data Structures & Algorithms",
      issuer: "CodeChef / HackerRank",
      date: "2023",
      link: "https://www.linkedin.com/in/muskank23/details/certifications/"
    },
    {
      title: "Full Stack Web Development",
      issuer: "Udemy / Coursera",
      date: "2023",
      link: "https://www.linkedin.com/in/muskank23/details/certifications/"
    },
    {
      title: "React Developer Certification",
      issuer: "Meta / HackerRank",
      date: "2024",
      link: "https://www.linkedin.com/in/muskank23/details/certifications/"
    }
  ];

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Certifications</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-sky-500"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certList.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 flex flex-col relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-teal-500/10 to-transparent rounded-full -mr-12 -mt-12 group-hover:scale-150 transition-transform duration-700 ease-out"></div>
              
              <Award className="text-teal-400 mb-4 flex-shrink-0 relative z-10" size={28} />
              
              <h3 className="text-lg font-medium text-white mb-2 relative z-10 group-hover:text-teal-400 transition-colors">
                {cert.title}
              </h3>
              
              <p className="text-slate-400 text-sm mb-1 relative z-10">{cert.issuer}</p>
              <p className="text-slate-500 text-sm mb-6 relative z-10">{cert.date}</p>
              
              <div className="mt-auto relative z-10">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="inline-flex items-center gap-1 text-sm font-medium text-sky-400 hover:text-sky-300 transition-colors"
                >
                  View Credential <ExternalLink size={14} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
