import React from 'react';
import { wrapSnakeCase } from '../utils';

const Footer: React.FC = () => (
  <footer id="contact" className="py-20 border-t border-white/5 bg-cyber-black/50 backdrop-blur-sm">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 px-6">
      <div className="max-w-md">
        <h3 className="text-2xl font-bold mb-4 uppercase tracking-[0.2em] text-white">{wrapSnakeCase("Initialize_Connection")}</h3>
        <p className="text-slate-500 text-sm leading-relaxed mb-6">Open for senior engineering roles & interesting projects that push the boundaries of technology.</p>
        <p className="text-neon-blue font-mono text-xs tracking-wider">DAN.OVERPASS519@PASSINBOX.COM</p>
      </div>
      <div className="flex gap-4">
        <a href="mailto:dan.overpass519@passinbox.com" className="bg-neon-blue/10 hover:bg-neon-blue/20 px-8 py-3 font-bold transition-all text-neon-blue border border-neon-blue/30 uppercase tracking-[0.2em] text-[10px] shadow-[0_0_15px_rgba(0,243,255,0.05)] hover:shadow-neon-blue">
          Send_Message
        </a>
        <a href="https://www.linkedin.com/in/daniel-illenberger-0021094b/" target="_blank" rel="noreferrer" className="bg-white/5 hover:bg-white/10 px-8 py-3 font-bold border border-white/10 hover:border-white/20 transition-all text-white uppercase tracking-[0.2em] text-[10px]">
          LinkedIn
        </a>
      </div>
    </div>
    <div className="mt-12 text-center text-slate-600 text-xs font-mono">
      &copy; {new Date().getFullYear()} Daniel Illenberger. System Architecture: React / Tailwind / Gemini.
    </div>
  </footer>
);

export default Footer;
