
import React, { useState } from 'react';
import { APARTMENT_TYPES } from '../constants';

const Layouts: React.FC = () => {
  const [activeType, setActiveType] = useState(APARTMENT_TYPES[0]);

  return (
    <section id="apartments" className="py-40 bg-offwhite">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-12">
          <div className="max-w-xl">
            <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">RESIDENCY PLANS</span>
            <h2 className="serif-headline text-5xl md:text-7xl font-light text-luxury leading-tight uppercase">
              CURATED <span className="italic">SPACES.</span>
            </h2>
          </div>
          <div className="flex bg-white p-2 rounded-full minimal-border shadow-sm">
            {APARTMENT_TYPES.map(type => (
              <button
                key={type.id}
                onClick={() => setActiveType(type)}
                className={`px-10 py-4 rounded-full text-[10px] uppercase tracking-[0.25em] font-bold transition-all duration-700 ${
                  activeType.id === type.id 
                  ? 'bg-luxury text-gold shadow-2xl scale-105' 
                  : 'text-muted hover:text-luxury'
                }`}
              >
                {type.name.toUpperCase()}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-7 bg-white rounded-[3rem] p-16 minimal-border flex items-center justify-center min-h-[650px] group overflow-hidden relative shadow-sm">
            <div className="absolute top-12 left-12 flex items-center gap-4">
              <span className="w-10 h-px bg-luxury/10"></span>
              <span className="text-[9px] font-bold tracking-[0.4em] uppercase text-muted">ARCHITECTURAL SCHEMATIC</span>
            </div>
            
            <div className="text-center group-hover:scale-105 transition-transform duration-[2s] relative">
              <div className="absolute -inset-20 bg-gold/5 rounded-full blur-[100px] -z-10"></div>
              <div className="border border-luxury/5 p-12 md:p-24 rounded-[4rem] bg-offwhite/50">
                <span className="text-8xl mb-8 block opacity-5 font-serif tracking-tighter uppercase">MT</span>
                <h5 className="serif-headline text-3xl font-light text-luxury mb-4 italic uppercase">{activeType.name}</h5>
                <p className="text-muted font-light uppercase tracking-[0.4em] text-[9px] mb-8">MASTER LAYOUT PLAN</p>
                <div className="inline-block px-10 py-3 border border-luxury text-[10px] font-bold uppercase tracking-[0.3em]">
                  {activeType.size} PREMIUM AREA
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-12 right-12 text-right">
              <span className="text-[40px] font-serif text-luxury/10 block leading-none uppercase">{activeType.size.split(' ')[0]}</span>
              <span className="text-[8px] font-bold text-muted uppercase tracking-widest">SQUARE FOOTAGE</span>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-16 px-4">
            <div>
              <h4 className="text-[10px] font-bold tracking-[0.5em] uppercase text-gold mb-12 flex items-center gap-4">
                <span className="w-8 h-px bg-gold/30"></span>
                SPACE SPECIFICATIONS
              </h4>
              <div className="space-y-8">
                {activeType.specs.map((spec, idx) => (
                  <div key={idx} className="flex justify-between items-baseline group">
                    <span className="text-[10px] lowercase tracking-[0.2em] text-muted font-bold group-hover:text-gold transition-colors">{spec.label}</span>
                    <div className="flex-1 mx-4 border-b border-gray-100 border-dotted"></div>
                    <span className="text-xl font-light text-luxury tracking-tighter serif-headline italic">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <button className="w-full gold-gradient text-luxury py-8 rounded-2xl font-bold text-[10px] uppercase tracking-[0.4em] hover:shadow-2xl transition-all duration-700 flex items-center justify-center gap-6 group">
              <svg className="w-5 h-5 transition-transform group-hover:translate-y-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
              BROCHURE REQUEST
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Layouts;
