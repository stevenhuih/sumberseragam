import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled 
          ? 'bg-brand-900/90 backdrop-blur-md border-white/10 py-4 shadow-xl' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className={`max-w-7xl mx-auto px-6 sm:px-8 flex justify-between items-center transition-all duration-300 ${!scrolled ? 'mix-blend-difference' : ''}`}>
        <div className="flex-1 hidden sm:flex justify-start"></div>

        <div className="shrink-0">
          <Link to="/" className="text-xl sm:text-3xl font-display font-semibold tracking-tight text-white leading-none whitespace-nowrap">
            SUMBER SERAGAM<span className="text-xs sm:text-base align-top text-white/70">&reg;</span>
          </Link>
        </div>
        
        <div className="flex-1 flex justify-end items-center font-sans">
          <Link 
             to="/contact"
             className="px-4 py-2 sm:px-8 sm:py-3 border border-white/80 hover:bg-white hover:text-brand-900 transition-all duration-500 font-bold text-[9px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-white whitespace-nowrap ml-4 sm:ml-0"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}
