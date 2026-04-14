import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-900 py-10 mt-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-2xl font-bold tracking-tighter">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-teal-400">&lt;</span>
            <span className="text-white">Muskan</span>
            <span className="text-sky-400">/&gt;</span>
          </a>
        </div>
        
        <p className="text-slate-400 text-sm text-center">
          &copy; {new Date().getFullYear()} Muskan Kumari. All rights reserved.
        </p>

        <p className="text-slate-400 text-sm flex items-center gap-2">
          Made with <Heart size={16} className="text-teal-400 fill-teal-400/20" /> by Muskan
        </p>
      </div>
    </footer>
  );
};

export default Footer;
