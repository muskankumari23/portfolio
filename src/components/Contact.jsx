import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Github, Linkedin, Send } from 'lucide-react';

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.target);
    const formProps = Object.fromEntries(formData);

    try {
      const res = await fetch("https://formsubmit.co/ajax/muskankumari92084@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formProps)
      });
      const data = await res.json();

      if (data.success === "true" || data.success === true) {
        setSuccess(true);
        if(formRef.current) formRef.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      } else {
        console.error("Form error", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative border-t border-teal-500/10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Contact</h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-sky-400 to-teal-500"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                I'm currently open to new opportunities and collaborations. Feel free to reach out if you have a question or just want to say hi.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-teal-400 group-hover:bg-teal-500 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(20,184,166,0)] group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500">Email</h4>
                  <a href="mailto:muskankumari92084@gmail.com" className="text-base text-white hover:text-teal-400 transition-colors">muskankumari92084@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-sky-400 group-hover:bg-sky-500 group-hover:text-white transition-colors shadow-[0_0_10px_rgba(14,165,233,0)] group-hover:shadow-[0_0_15px_rgba(14,165,233,0.5)]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="text-sm text-slate-500">Location</h4>
                  <p className="text-base text-white">India</p>
                </div>
              </div>
            </div>

            <div className="pt-8 flex gap-4">
              <a href="https://github.com/muskankumari23" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-teal-400 transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href="https://www.linkedin.com/in/muskank23/" target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full glass-card flex items-center justify-center text-slate-400 hover:text-sky-400 transition-all hover:-translate-y-1">
                <Linkedin size={20} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <input type="hidden" name="subject" value="New Submission from Portfolio" />
              <div>
                <label htmlFor="name" className="text-sm font-medium text-slate-300 mb-1 block">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  required
                  className="w-full bg-[#050b14] border border-teal-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-medium text-slate-300 mb-1 block">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  className="w-full bg-[#050b14] border border-teal-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-medium text-slate-300 mb-1 block">Your Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows="4"
                  className="w-full bg-[#050b14] border border-teal-500/20 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-400 focus:ring-1 focus:ring-teal-400 transition-colors resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                disabled={loading}
                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {loading ? (
                   <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                ) : (
                  <>
                    Send Message
                    <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </>
                )}
              </button>

              {success && (
                <div className="mt-4 p-3 bg-teal-500/10 border border-teal-500/30 text-teal-400 rounded-lg text-center text-sm font-medium">
                  Message sent successfully!
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
