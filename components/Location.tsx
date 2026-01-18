
import React from 'react';
import { LOCATION_PROXIMITY } from '../constants';

const Location: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-luxury text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="text-gold font-bold tracking-widest text-sm uppercase mb-3">LOCATION & CONNECTIVITY</h2>
          <h3 className="font-serif text-4xl md:text-5xl mb-6 uppercase">IN THE HEART OF ISLAMABAD</h3>
          <p className="text-white/60 max-w-2xl mx-auto font-light lowercase">
            ideally planned in the outskirts of margalla hills, the federal capital offers state-of-the-art infrastructure and ravishing scenery.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 rounded-[2rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl relative group">
            {/* Islamabad Margalla Hills / City center context */}
            <img 
              src="https://images.unsplash.com/photo-1622547748225-3fc4822076bc?auto=format&fit=crop&q=80&w=1200" 
              alt="Islamabad Skyline View" 
              className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-[2000ms]"
            />
            <div className="absolute inset-0 bg-luxury/20 group-hover:bg-transparent transition-all"></div>
            <div className="absolute bottom-8 left-8">
              <span className="bg-gold text-luxury px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest">CAPITAL VIEW</span>
            </div>
          </div>

          <div className="space-y-4">
            {LOCATION_PROXIMITY.map((loc, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-6 rounded-2xl flex items-center justify-between hover:bg-white/10 transition-all group">
                <div>
                  <h4 className="text-white/50 text-[10px] uppercase tracking-widest mb-1 group-hover:text-gold">NEARBY</h4>
                  <p className="text-lg font-serif uppercase tracking-tighter">{loc.label}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-gold uppercase">{loc.distance}</span>
                  <span className="block text-[8px] text-white/40 uppercase font-bold">DISTANCE</span>
                </div>
              </div>
            ))}
            <div className="p-8 bg-gold rounded-2xl text-luxury shadow-xl shadow-gold/10 text-center">
              <h4 className="font-bold text-lg mb-2 uppercase">WANT A SITE VISIT?</h4>
              <p className="text-sm mb-4 lowercase">shuttle service available from metro bus station.</p>
              <button className="bg-luxury text-white px-8 py-3 rounded-full font-bold uppercase tracking-widest hover:opacity-90 transition-all">SCHEDULE NOW</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
