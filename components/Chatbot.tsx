
import React, { useState, useRef, useEffect } from 'react';
import { askMidtownAssistant } from '../services/gemini';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Welcome to the Midtown Towers Concierge. How may I assist you with your luxury residency inquiries today?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await askMidtownAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-12 right-12 z-[100]">
      {isOpen ? (
        <div className="bg-white w-[380px] md:w-[450px] h-[650px] rounded-[2.5rem] shadow-[0_30px_100px_rgba(0,0,0,0.1)] flex flex-col overflow-hidden border border-gray-100 animate-in fade-in slide-in-from-bottom-10 duration-500">
          <div className="bg-luxury p-10 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gold rounded-full flex items-center justify-center text-xl font-serif">M</div>
              <div>
                <h4 className="text-white serif-headline text-lg italic leading-none">The Concierge</h4>
                <span className="text-[9px] text-gold uppercase tracking-[0.4em] font-bold">Personalized AI Assistant</span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-white/20 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-10 space-y-8 bg-[#FDFDFD]">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[90%] p-6 rounded-3xl text-[13px] leading-relaxed tracking-wide ${
                  msg.role === 'user' 
                  ? 'bg-gold text-luxury font-semibold rounded-br-none shadow-xl shadow-gold/10' 
                  : 'bg-white text-gray-700 shadow-sm border border-gray-50 rounded-bl-none'
                }`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-6 rounded-3xl rounded-bl-none shadow-sm border border-gray-50 flex gap-2">
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.2s]"></div>
                  <div className="w-1.5 h-1.5 bg-gold rounded-full animate-bounce [animation-delay:-0.4s]"></div>
                </div>
              </div>
            )}
          </div>

          <div className="p-8 bg-white border-t border-gray-50">
            <div className="relative flex items-center group">
              <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Inquire about floor plans, amenities..." 
                className="w-full pl-6 pr-16 py-5 bg-offwhite border-none rounded-2xl text-[13px] font-medium placeholder:text-gray-300 focus:ring-1 focus:ring-gold/20 outline-none transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="absolute right-3 w-12 h-12 bg-luxury text-gold rounded-xl flex items-center justify-center hover:bg-gold hover:text-luxury transition-all duration-500 disabled:opacity-20"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"><path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path></svg>
              </button>
            </div>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-luxury text-gold w-20 h-20 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.3)] flex items-center justify-center transform hover:scale-110 active:scale-95 transition-all duration-500 border-2 border-gold/20 group"
        >
          <div className="absolute inset-0 rounded-full animate-ping bg-gold/5 group-hover:bg-gold/10"></div>
          <svg className="w-8 h-8 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"></path></svg>
        </button>
      )}
    </div>
  );
};

export default Chatbot;
