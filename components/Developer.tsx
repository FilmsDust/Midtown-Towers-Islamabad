
import React from 'react';

const Developer: React.FC = () => {
  return (
    <section className="py-40 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-5 space-y-16">
            <div>
              <span className="text-gold font-bold tracking-[0.5em] text-[10px] uppercase mb-6 block">OUR LEGACY</span>
              <h3 className="serif-headline text-5xl md:text-7xl font-light text-luxury leading-tight italic uppercase">AL-HUNAIN <br/><span className="not-italic font-bold">GROUP.</span></h3>
            </div>
            
            <p className="text-muted font-light leading-relaxed tracking-widest text-[11px] lowercase space-y-4">
              <span className="block">since 1992, defining the skyline of innovation across construction, hospitality, and global real estate.</span>
              <span className="block">at al-hunain, we do ordinary things in an extraordinary way — a philosophy that has shaped our success for 29+ years.</span>
            </p>
            
            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">VISION</span>
                <p className="text-[10px] text-muted font-light lowercase tracking-[0.15em] leading-loose">to be pakistan's most iconic developer, delivering true international quality.</p>
              </div>
              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-gold">QUALITY</span>
                <p className="text-[10px] text-muted font-light lowercase tracking-[0.15em] leading-loose">reshaping lifestyle through design excellence and precision delivery.</p>
              </div>
            </div>
            
            <div className="pt-8 flex items-center gap-12">
              <span className="text-[9px] font-bold uppercase tracking-[0.4em] text-luxury/20">FOLLOW THE STORY</span>
              <div className="flex gap-8">
                {['INSTAGRAM', 'LINKEDIN', 'X'].map(social => (
                  <span key={social} className="text-[9px] font-bold uppercase tracking-[0.3em] text-muted hover:text-gold transition-colors cursor-pointer">
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 relative group">
            <div className="rounded-[3rem] overflow-hidden minimal-border bg-white p-4 shadow-2xl">
              {/* Construction excellence/Tower site imagery */}
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
                alt="Midtown Towers Construction" 
                className="w-full h-[750px] object-cover rounded-[2.5rem] opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[3s]"
              />
            </div>
            <div className="absolute -top-12 -left-12 bg-luxury text-gold p-14 rounded-full shadow-2xl flex flex-col items-center justify-center border-8 border-white">
              <span className="serif-headline text-5xl font-light mb-1">29</span>
              <span className="text-[8px] font-bold uppercase tracking-[0.3em]">YEARS OF EXCELLENCE</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developer;
