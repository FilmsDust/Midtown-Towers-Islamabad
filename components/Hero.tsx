
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden brochure-gradient">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-emerald-dark/60 z-10"></div>
        {/* Real-style architectural render placeholder */}
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2400" 
          alt="Midtown Towers Architectural Render" 
          className="w-full h-full object-cover scale-110 opacity-70 mix-blend-overlay"
        />
      </div>

      <div className="relative z-20 text-center px-6 max-w-6xl">
        <div className="mb-8 inline-flex items-center gap-4">
          <span className="w-12 h-px bg-gold/50"></span>
          <span className="text-gold font-semibold tracking-[0.5em] uppercase text-[9px]">ULTIMATE LIFESTYLE</span>
          <span className="w-12 h-px bg-gold/50"></span>
        </div>
        
        <h1 className="serif-headline text-5xl md:text-8xl lg:text-9xl text-white mb-10 leading-[1.1] tracking-tight uppercase">
          A LEGACY IN <br />
          <span className="italic font-light text-gold">THE MAKING.</span>
        </h1>
        
        <p className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto mb-16 font-light tracking-[0.3em] leading-relaxed lowercase">
          pakistan's first ever fully smart building <br className="hidden md:block"/>
          discover the midtown standard of luxury.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
          <button className="gold-gradient text-emerald-dark px-14 py-6 rounded-full font-bold text-[10px] uppercase tracking-[0.3em] hover:shadow-[0_0_50px_rgba(226,194,117,0.3)] transition-all duration-500">
            INQUIRE NOW
          </button>
          <a href="#overview" className="group flex items-center gap-4 text-white/40 hover:text-white transition-all text-[9px] uppercase tracking-[0.4em] font-bold">
            <span className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-gold group-hover:bg-gold transition-all duration-500">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </span>
            EXPLORE THE PROJECT
          </a>
        </div>
      </div>

      <div className="absolute bottom-16 left-12 hidden xl:flex items-center gap-8 text-white/20">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold tracking-widest uppercase text-gold/60">01</span>
          <div className="h-12 w-px bg-white/10"></div>
        </div>
        <span className="text-[10px] uppercase tracking-[0.6em] vertical-text transform rotate-180">SMART LIVING</span>
      </div>
    </section>
  );
};

export default Hero;
