import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, Github, Linkedin, Send, MessageSquare } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Replace with your actual EmailJS credentials
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      if(formRef.current) formRef.current.reset();
      setTimeout(() => setSuccess(false), 5000);
    }, 1500); // Simulated delay for demo
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 text-teal-400 font-medium tracking-wider uppercase text-sm mb-4">
            <MessageSquare size={16} />
            <span>Get in Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-sky-400">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I'm currently looking for new opportunities and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="glass-card p-4 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(20,184,166,0)] group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Email</h4>
                  <a href="mailto:muskankumari92084@gmail.com" className="text-lg font-medium text-white hover:text-teal-400 transition-colors">muskankumari92084@gmail.com</a>
                </div>
              </div>
              
              <div className="glass-card p-4 flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-slate-800/50 flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(14,165,233,0)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-slate-400">Location</h4>
                  <p className="text-lg font-medium text-white">India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-teal-500/50 transition-all duration-300 shadow-[0_0_0_rgba(20,184,166,0)] hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muskank23/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-300 hover:text-white hover:bg-slate-700 hover:border-sky-500/50 transition-all duration-300 shadow-[0_0_0_rgba(14,165,233,0)] hover:shadow-[0_0_15px_rgba(14,165,233,0.3)]">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 relative overflow-hidden"
          >
            {/* Background glow */}
            <div className="absolute top-0 right-0 -m-20 w-40 h-40 bg-teal-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 -m-20 w-40 h-40 bg-sky-500/20 rounded-full blur-3xl"></div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="user_name"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="user_email"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 transition-all resize-none"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {success && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg text-center text-sm font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
