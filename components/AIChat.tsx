
import React, { useState, useRef, useEffect } from 'react';
import { askGeminiAboutDaniel } from '../services/geminiService';
import { Icons } from '../Experience';
import GlitchTriangle from './GlitchTriangle';

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', text: string }[]>([
    { role: 'ai', text: "Hi! I'm Daniel's career assistant. Ask me anything about his experience at Hyperparam, his time as a Nuclear Engineer, or his technical skills!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userText = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userText }]);
    setIsLoading(true);

    const response = await askGeminiAboutDaniel(userText);
    setMessages(prev => [...prev, { role: 'ai', text: response }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-6 -right-4 z-50 flex flex-col items-end font-mono">
      {isOpen && (
        <div className="bg-cyber-black border border-neon-blue w-[350px] sm:w-[400px] h-[500px] shadow-[0_0_20px_rgba(0,243,255,0.2)] flex flex-col mb-4 mr-6 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300 relative">
          <div className="crt-overlay absolute inset-0 pointer-events-none z-50 opacity-50"></div>

          <div className="bg-slate-900/80 p-4 border-b border-neon-blue flex justify-between items-center relative z-10 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 flex items-center justify-center text-neon-blue border border-neon-blue bg-black/50">
                <span className="animate-pulse">AI</span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-neon-blue tracking-widest uppercase text-shadow-neon">SYS.Online</h3>
                <span className="text-[10px] text-neon-green font-mono flex items-center gap-1 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-none bg-neon-green animate-flicker"></span>
                  Gemini-V3.0 // ACT
                </span>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-neon-blue transition-colors group">
              <div className="relative">
                <div className="absolute inset-0 bg-neon-blue opacity-0 group-hover:opacity-20 blur-md transition-opacity"></div>
                <svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </div>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 relative z-10">
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 text-sm border ${msg.role === 'user'
                  ? 'bg-neon-blue/10 border-neon-blue text-neon-blue'
                  : 'bg-neon-purple/10 border-neon-purple text-neon-purple'
                  }`}>
                  <p className={`${msg.role === 'user' ? 'text-shadow-neon' : 'text-shadow-purple'}`}>{msg.text}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-neon-purple/10 p-3 border border-neon-purple flex gap-1">
                  <div className="w-1.5 h-1.5 bg-neon-purple animate-bounce [animation-delay:-0.3s]"></div>
                  <div className="w-1.5 h-1.5 bg-neon-purple animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-1.5 h-1.5 bg-neon-purple animate-bounce"></div>
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-slate-900/80 border-t border-neon-blue flex gap-2 relative z-10 backdrop-blur-sm">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="INPUT_QUERY..."
              className="flex-1 bg-black border border-slate-700 rounded-none px-3 py-2 text-sm focus:outline-none focus:border-neon-blue text-white font-mono placeholder-slate-600 transition-colors"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="bg-neon-blue/10 border border-neon-blue hover:bg-neon-blue/20 disabled:opacity-50 p-2 transition-all hover:shadow-[0_0_10px_rgba(0,243,255,0.3)] group"
            >
              <svg className="w-5 h-5 text-neon-blue group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="square" strokeLinejoin="miter" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
            </button>
          </form>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group"
      >
        <div className="relative w-32 h-32 flex items-center justify-center">
          <GlitchTriangle className="w-full h-full" />
        </div>
      </button>
    </div>
  );
};

export default AIChat;
