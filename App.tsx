
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Layouts from './components/Layouts';
import Developer from './components/Developer';
import Location from './components/Location';
import Chatbot from './components/Chatbot';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-luxury selection:bg-emerald/30">
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Project Overview */}
        <section id="overview" className="py-40 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 text-center">
            <div className="max-w-3xl mx-auto">
              <span className="text-emerald font-bold tracking-[0.4em] uppercase text-[10px] mb-8 block">ARCHITECTURE & IDENTITY</span>
              <h2 className="serif-headline text-4xl md:text-7xl font-light mb-12 text-emerald leading-tight uppercase">
                YOUR <span className="italic">ULTIMATE</span> LIFESTYLE HUB.
              </h2>
              <p className="text-muted text-sm md:text-base font-light leading-loose mb-16 lowercase tracking-widest text-balance">
                midtown towers comprises 3 hi-rise towers united and combined with 5 floors of luxury shopping mall and a dedicated floor for corporate offices. established with a philosophy of extraordinary delivery.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div className="space-y-4">
                  <span className="block text-5xl font-light text-emerald serif-headline italic">03</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold">ICONIC TOWERS</span>
                </div>
                <div className="space-y-4">
                  <span className="block text-5xl font-light text-emerald serif-headline italic">05</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold">MALL LEVELS</span>
                </div>
                <div className="space-y-4">
                  <span className="block text-5xl font-light text-emerald serif-headline italic">133K</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold">RETAIL AREA</span>
                </div>
                <div className="space-y-4">
                  <span className="block text-5xl font-light text-gold serif-headline italic uppercase">FIRST</span>
                  <span className="text-[9px] uppercase tracking-[0.4em] text-gray-400 font-bold">SMART BUILDING</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Smart Tech Section */}
        <section className="py-40 brochure-gradient relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
             <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" alt="tech" className="w-full h-full object-cover" />
          </div>
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <div className="reveal active">
                <span className="inline-block border border-gold/30 px-6 py-2 rounded-full text-gold text-[10px] font-bold uppercase tracking-[0.3em] mb-10">INTELLIGENT HOUSING</span>
                <h3 className="serif-headline text-4xl md:text-6xl text-white mb-10 leading-tight uppercase">PAKISTAN'S <span className="italic text-gold">FIRST</span> FULLY SMART BUILDING.</h3>
                <p className="text-white/40 text-[11px] font-light leading-loose tracking-[0.3em] lowercase mb-12">
                  featuring integrated touch-screen control panels for home automation and building management.
                </p>
                <div className="flex gap-12">
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold shadow-2xl">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                    </div>
                    <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">SMART AUTOMATION</span>
                  </div>
                  <div className="flex flex-col items-center gap-6">
                    <div className="w-16 h-16 rounded-full border border-gold/20 flex items-center justify-center text-gold shadow-2xl">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
                    </div>
                    <span className="text-white/40 text-[9px] uppercase tracking-widest font-bold">FOOLPROOF SECURITY</span>
                  </div>
                </div>
              </div>
              <div className="relative aspect-video rounded-[3rem] overflow-hidden bg-white/5 backdrop-blur-sm p-2 shadow-2xl">
                 <img src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=1000" alt="Smart Interface" className="w-full h-full object-cover rounded-[2.5rem] opacity-80" />
              </div>
            </div>
          </div>
        </section>

        <Layouts />
        
        <Developer />
        
        <Location />

        {/* Dragged Features (Amenities) to bottom per user request */}
        <Features />

        {/* Emerald Footer */}
        <footer className="bg-emerald-dark py-32 px-6 md:px-12 text-white overflow-hidden relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-start gap-24 pb-20 border-b border-white/5">
              <div className="space-y-10">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center font-bold text-gold text-lg uppercase">M</div>
                  <div className="flex flex-col">
                    <span className="text-xl tracking-[0.4em] font-serif font-bold text-white uppercase">MIDTOWN</span>
                    <span className="text-[10px] tracking-[0.6em] text-white/40 font-bold uppercase">ISLAMABAD</span>
                  </div>
                </div>
                <p className="text-white/40 text-[11px] font-light tracking-[0.2em] lowercase leading-loose max-w-sm">
                  the most iconic and promising real estate developer of pakistan. delivering luxury, ultra-modern quality work.
                </p>
                <div className="flex gap-6">
                   <button className="bg-gold text-emerald-dark px-10 py-4 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-white transition-all">CONNECT WITH US</button>
                </div>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-16">
                <div className="flex flex-col gap-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold">THE PROJECT</span>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">SMART RESIDENCY</a>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">MIDTOWN MALL</a>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">PENTHOUSE</a>
                </div>
                <div className="flex flex-col gap-6">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-gold">CORPORATE</span>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">LEGACY</a>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">DEVELOPERS</a>
                  <a href="#" className="text-white/30 hover:text-white text-[10px] uppercase tracking-widest transition-colors">INQUIRE</a>
                </div>
              </div>
            </div>
            <div className="pt-16 flex flex-col md:flex-row justify-between items-center gap-8">
              <span className="text-white/20 text-[9px] tracking-[0.5em] uppercase">© 2024 MIDTOWN TOWERS ISLAMABAD • ALL RIGHTS RESERVED.</span>
              <div className="flex gap-12">
                <span className="text-gold/20 text-[9px] uppercase tracking-[0.4em]">AL-HUNAIN GROUP</span>
                <span className="text-gold/20 text-[9px] uppercase tracking-[0.4em]">CUBIC DEVELOPERS</span>
              </div>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[140px] translate-x-1/2 -translate-y-1/2"></div>
        </footer>
      </main>

      <Chatbot />
    </div>
  );
};

export default App;
