
import React from 'react';
import { AMENITIES } from '../constants';

const AmenityIcon = ({ title }: { title: string }) => {
  const iconProps = { className: "w-8 h-8 md:w-10 md:h-10 transition-all duration-500", strokeWidth: "1.2", fill: "none", stroke: "currentColor" };
  
  switch (title.toLowerCase()) {
    case 'dedicated lobby': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-4a3 3 0 016 0v4M8 9h2m4 0h2" /></svg>;
    case '24/7 security': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM12 8v4m0 4h.01" /></svg>;
    case 'cargo lift': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M4 4h16v16H4V4zm4 4l4 4 4-4m-8 8l4 4 4-4" /></svg>;
    case 'swimming pool': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M2 6c.6.5 1.2 1 2.5 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1M2 12c.6.5 1.2 1 2.5 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1M2 18c.6.5 1.2 1 2.5 1s2.5-1 4-1 2.5 1 4 1 2.5-1 4-1 2.5 1 4 1" /></svg>;
    case 'health club': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M18 8a3 3 0 013 3M3 11a3 3 0 013-3m7 1a3 3 0 100-6 3 3 0 000 6zM6 19v2m12-2v2M9 13v1h6v-1a2 2 0 00-2-2h-2a2 2 0 00-2 2z" /></svg>;
    case 'coffee shop': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M18 8h1a4 4 0 010 8h-1M2 8h16v9a4 4 0 01-4 4H6a4 4 0 01-4-4V8zM6 1v3m4-3v3m4-3v3" /></svg>;
    case 'electricity backup': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg>;
    case 'cctv monitoring': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M23 7l-7 5 7 5V7zM1 5h15v14H1V5z" /><circle cx="8.5" cy="12" r="2.5" /></svg>;
    case 'ample parking': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M9 17V7h4a3 3 0 010 6H9m-5 8h16" /></svg>;
    case 'luxury spa': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 22a7 7 0 007-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5s-3 3.5-3 5.5a7 7 0 007 7z" /></svg>;
    case 'on-site atm': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M4 10h16M4 14h16M4 18h16M4 6h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2z" /></svg>;
    case 'global brands': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82zM7 7h.01" /></svg>;
    case 'shuttle service': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M19 17h2m-18 0h2m0-12h14a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2zm2 12a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4z" /></svg>;
    case 'elevators & escalators': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M7 3l3 3m0 0l-3 3m3-3H3m14 15l-3-3m0 0l3-3m-3 3h7" /></svg>;
    case 'kids pool area': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 12a5 5 0 100-10 5 5 0 000 10zM12 12v6m0 0h3m-3 0h-3" /><path d="M2 22s2-2 10-2 10 2 10 2" /></svg>;
    case 'dubai water fall': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 3v18m-4-15s-2 2-2 6 2 6 2 6m8-12s2 2 2 6-2 6-2 6" /></svg>;
    case 'sauna room': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M4 22h16M8 2h8m-4 0v20M5 7l2 2m10-2l-2 2m-8 6l2 2m10-2l-2 2" /></svg>;
    case 'steam room': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2v3m5 0l-1 2m-8-2l1 2m8 10l-1-2m-8 2l1-2m4 5v3" /><path d="M5 19a7 7 0 1114 0H5z" /></svg>;
    case 'juice bar': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M6 2l2 16h8l2-16H6zm1 0v4m4-4v4m4-4v4M9 18h6" /></svg>;
    case 'garbage chute': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M3 6h18m-2 0v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" /></svg>;
    case 'beauty saloon': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M6 15a9 9 0 0112 0m-9 4h6" /><circle cx="12" cy="12" r="9" /></svg>;
    case 'kids play area': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>;
    case 'large atrium': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M3 21h18M3 10l9-7 9 7v11H3V10z" /><path d="M9 21v-8a3 3 0 016 0v8" /></svg>;
    case 'high speed lifts': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M7 15l5-5 5 5M7 9l5-5 5 5" /></svg>;
    case 'central air condition': return <svg {...iconProps} viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M12 2v20M2 12h20m-4.2-6.8l-11.6 11.6m0-11.6l11.6 11.6" /></svg>;
    case 'food court': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M18 8V3m0 18v-5M6 20V4m0 0a3 3 0 116 0v12a3 3 0 11-6 0M18 8a3 3 0 00-3 3v2a3 3 0 003 3" /></svg>;
    case 'lavish corridors': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>;
    case 'direct spa access': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M15 3h4a2 2 0 012 2v14a2 2 0 01-2 2h-4M10 17l5-5-5-5M13.8 12H3" /></svg>;
    case 'jacuzzi': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 12s-2-2-2-4 2-4 2-4 2 2 2 4-2 4-2 4zm-8 4c0 4 4 6 8 6s8-2 8-6" /></svg>;
    case '24/7 maintenance': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.77 3.77z" /></svg>;
    case 'fully smart system': return <svg {...iconProps} viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>;
    case 'fire safety': return <svg {...iconProps} viewBox="0 0 24 24"><path d="M12 22s-7-4-7-10 7-10 7-10 7 4 7 10-7 10-7 10zm-3-10h6" /></svg>;
    default: return <span className="text-2xl">{title[0]}</span>;
  }
};

const Features: React.FC = () => {
  return (
    <section id="offerings" className="py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-12">
          <div className="max-w-2xl">
            <span className="text-emerald font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">BUILDING SPECIFICATIONS</span>
            <h2 className="serif-headline text-5xl md:text-7xl font-light text-emerald leading-tight uppercase">
              MASTERPIECE <span className="italic">FEATURES.</span>
            </h2>
          </div>
          <p className="text-muted text-xs uppercase tracking-[0.3em] font-light leading-relaxed max-w-sm lowercase">
            thirty-two premium amenities meticulously curated for an elite lifestyle in the heart of islamabad.
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-px bg-gray-100 border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm">
          {AMENITIES.map((item, idx) => (
            <div key={idx} className="bg-white p-10 group hover:bg-emerald transition-all duration-700 flex flex-col items-center text-center justify-center min-h-[180px]">
              <div className="text-emerald group-hover:text-gold mb-6">
                <AmenityIcon title={item.title} />
              </div>
              <h4 className="text-[9px] font-bold tracking-[0.2em] uppercase text-emerald/60 group-hover:text-gold transition-colors duration-500 leading-tight h-8 flex items-center justify-center">
                {item.title}
              </h4>
            </div>
          ))}
        </div>

        <div className="mt-40 brochure-gradient rounded-[3rem] p-12 md:p-24 relative overflow-hidden shadow-2xl group/card">
          <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/20 rounded-full blur-[160px] translate-x-1/2 -translate-y-1/2 transition-transform duration-[3s] group-hover/card:scale-125"></div>
          </div>
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div className="reveal active">
              <h3 className="serif-headline text-4xl md:text-6xl text-white mb-12 italic leading-tight uppercase">DUBAI STYLE <br/><span className="text-gold font-light not-italic">WATER FALL.</span></h3>
              <p className="text-white/60 text-xs uppercase tracking-[0.25em] leading-loose mb-12 max-w-md lowercase">
                experience the therapeutic presence of architectural water features, creating an atmosphere of tranquility and prestige throughout the grand atrium.
              </p>
              <div className="grid grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="w-10 h-px bg-gold/40"></div>
                  <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">CENTRAL COOLING</h5>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] lowercase">international climate control</p>
                </div>
                <div className="space-y-4">
                  <div className="w-10 h-px bg-gold/40"></div>
                  <h5 className="text-[11px] font-bold uppercase tracking-[0.2em] text-white">SHUTTLE SERVICE</h5>
                  <p className="text-[10px] text-white/30 uppercase tracking-[0.1em] lowercase">luxury transit to metro</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden minimal-border group shadow-2xl transform transition-all duration-700">
               <div className="absolute inset-0 bg-emerald-dark/30 z-10 group-hover:bg-transparent transition-all duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&q=80&w=1000" 
                alt="Architecture Highlight" 
                className="w-full h-full object-cover transform scale-105 group-hover:scale-115 transition-transform duration-[4s]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
