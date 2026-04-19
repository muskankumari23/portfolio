import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050b14]/90 backdrop-blur-md border-b border-white/5 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-medium tracking-tight"
          >
            <a href="#home" className="flex items-center gap-1 group">
              <span className="text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">&lt;</span>
              <span className="text-white group-hover:gradient-text transition-all">Muskan</span>
              <span className="text-sky-400 opacity-0 group-hover:opacity-100 transition-opacity translate-x-2 group-hover:translate-x-0">/&gt;</span>
            </a>
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-neutral-400 hover:text-teal-400 transition-colors text-sm font-medium"
              >
                {link.name}
              </motion.a>
            ))}
          </nav>

          {/* Mobile Nav Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-neutral-400 hover:text-teal-400 focus:outline-none transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#050b14] border-t border-white/5"
          >
            <div className="px-4 pt-2 pb-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-sm font-medium text-neutral-400 hover:text-teal-400 hover:bg-white/5 rounded transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
