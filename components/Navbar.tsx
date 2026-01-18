
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'LIFESTYLE', href: '#offerings' },
    { name: 'THE RESIDENCY', href: '#apartments' },
    { name: 'LEGACY', href: '#location' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? 'py-4' : 'py-8'}`}>
      <div className={`max-w-[1400px] mx-auto px-6 md:px-12`}>
        <div className={`flex justify-between items-center transition-all duration-700 px-8 py-4 ${scrolled ? 'glass-nav-scrolled rounded-2xl shadow-sm' : 'bg-transparent'}`}>
          <div className="flex items-center gap-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-500 uppercase ${scrolled ? 'bg-emerald text-gold' : 'bg-white/10 backdrop-blur-md text-white border border-white/20'}`}>M</div>
            <div className="flex flex-col">
              <span className={`text-base tracking-[0.25em] font-serif font-bold transition-colors duration-500 uppercase ${scrolled ? 'text-emerald' : 'text-white'}`}>MIDTOWN</span>
              <span className={`text-[8px] tracking-[0.5em] font-semibold transition-colors duration-500 uppercase ${scrolled ? 'text-muted' : 'text-white/40'}`}>ISLAMABAD</span>
            </div>
          </div>
          
          <div className="hidden lg:flex gap-12 items-center">
            {navLinks.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className={`text-[10px] uppercase tracking-[0.2em] font-bold transition-all hover:text-emerald ${scrolled ? 'text-emerald/60' : 'text-white/70'}`}
              >
                {link.name}
              </a>
            ))}
            <div className="h-4 w-px bg-gray-200 hidden xl:block"></div>
            <button className={`px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.2em] font-bold transition-all transform hover:scale-105 active:scale-95 shadow-xl ${scrolled ? 'bg-emerald text-gold' : 'bg-gold text-emerald-dark'}`}>
              BOOK PRIVATE TOUR
            </button>
          </div>
          
          <button className={`lg:hidden p-2 rounded-full ${scrolled ? 'text-emerald hover:bg-gray-100' : 'text-white hover:bg-white/10'}`}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 8h16M8 16h12"></path></svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
