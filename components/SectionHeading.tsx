import React from 'react';
import { wrapSnakeCase } from '../utils';

const SectionHeading: React.FC<{ children: React.ReactNode; id: string; subtitle?: string }> = ({ children, id, subtitle }) => (
  <div className="mb-20" id={id}>
    <h2 className="text-2xl font-bold mb-3 uppercase tracking-[0.2em] text-white flex items-center gap-3">
      <span className="w-8 h-[1px] bg-neon-blue/40"></span>
      {typeof children === 'string' ? wrapSnakeCase(children) : children}
    </h2>
    {subtitle && <p className="text-slate-400 font-mono text-xs max-w-2xl pl-11">{subtitle}</p>}
  </div>
);

export default SectionHeading;
