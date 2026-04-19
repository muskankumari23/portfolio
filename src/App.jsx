import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // Track scroll for back to top
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <div className="relative min-h-screen bg-[#050b14] text-[#ededed] overflow-hidden">
        
        {/* Subtle Ambient Glow */}
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-teal-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }}></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-sky-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '12s', animationDelay: '2s' }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Certifications />
            <Contact />
          </main>
          <Footer />
        </div>

        {/* Back to top button */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0 }}
              whileHover={{ scale: 1.05 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center z-50 hover:bg-neutral-200 transition-colors border border-teal-500/30 hover:shadow-[0_0_15px_rgba(20,184,166,0.3)]"
            >
              <ChevronUp size={24} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default App;
