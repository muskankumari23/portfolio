import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 py-10 mt-20 relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-xl font-medium tracking-tight">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-white">Muskan</span>
          </a>
        </div>
        
        <p className="text-neutral-500 text-sm md:text-right">
          &copy; {new Date().getFullYear()} Muskan Kumari. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
