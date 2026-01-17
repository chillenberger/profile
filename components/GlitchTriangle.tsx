import React from 'react';

const GlitchTriangle: React.FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <div className={`relative w-24 h-24 flex items-center justify-center ${className}`}>
      {/* Background Glow */}
      <div className="absolute inset-0 bg-neon-blue/20 blur-xl rounded-full animate-pulse-glow"></div>

      <svg
        viewBox="0 0 100 100"
        className="w-full h-full relative z-10 overflow-visible opacity-45 group-hover:opacity-100 transition-opacity duration-300"
      >
        <defs>
          <filter id="glitch-filter">
            <feOffset in="SourceGraphic" dx="-1" dy="0.5" result="offset1" />
            <feGaussianBlur in="offset1" stdDeviation="0.2" result="blur1" />
            <feColorMatrix in="blur1" type="matrix" values="1 0 0 0 0  0 0 0 0 1  0 0 0 0 1  0 0 0 0.5 0" result="cyan" />

            <feOffset in="SourceGraphic" dx="1" dy="-0.5" result="offset2" />
            <feGaussianBlur in="offset2" stdDeviation="0.2" result="blur2" />
            <feColorMatrix in="blur2" type="matrix" values="0 0 0 0 1  0 1 0 0 0  0 0 0 0 1  0 0 0 0.5 0" result="magenta" />

            <feMerge>
              <feMergeNode in="cyan" />
              <feMergeNode in="magenta" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Glitch Artifacts */}
        <rect
          x="10" y="20" width="10" height="2"
          fill="#00f3ff"
          className="animate-glitch-artifact [animation-delay:-1s]"
        />
        <rect
          x="70" y="60" width="15" height="1"
          fill="#ff00ff"
          className="animate-glitch-artifact [animation-delay:-2.5s]"
        />
        <rect
          x="30" y="85" width="20" height="1"
          fill="#ffffff"
          className="animate-glitch-artifact [animation-delay:-0.5s]"
        />
        <line
          x1="15" y1="50" x2="35" y2="50"
          stroke="#00f3ff" strokeWidth="0.5"
          className="animate-glitch-artifact [animation-delay:-3s]"
        />

        {/* Main Triangle */}
        <path
          d="M50 15 L85 80 L15 80 Z"
          fill="none"
          stroke="#00f3ff"
          strokeWidth="2"
          strokeLinejoin="miter"
          className="animate-flicker opacity-80"
        />

        {/* Glitch Layers/Artifacts */}
        <path
          d="M50 15 L85 80 L15 80 Z"
          fill="none"
          stroke="#00f3ff"
          strokeWidth="0.5"
          className="animate-glitch-fast opacity-30"
          style={{ clipPath: 'inset(0 0 60% 0)', transform: 'translateX(-5px)' }}
        />
        <path
          d="M50 15 L85 80 L15 80 Z"
          fill="none"
          stroke="#ff00ff"
          strokeWidth="0.5"
          className="animate-glitch-horizontal opacity-20"
          style={{ clipPath: 'inset(40% 0 40% 0)', transform: 'translateX(10px)' }}
        />
        <path
          d="M50 15 L85 80 L15 80 Z"
          fill="none"
          stroke="#ffffff"
          strokeWidth="1"
          className="animate-glitch-vertical opacity-30"
          style={{ clipPath: 'inset(60% 0 0 0)', transform: 'translateX(-10px)' }}
        />

        {/* Interior Scanlines */}
        <pattern id="scanlines" width="100" height="4" patternUnits="userSpaceOnUse">
          <line x1="0" y1="0" x2="100" y2="0" stroke="#00f3ff" strokeWidth="0.5" opacity="0.1" />
        </pattern>
        <path
          d="M50 15 L85 80 L15 80 Z"
          fill="url(#scanlines)"
          className="opacity-20"
        />
      </svg>

      {/* Center Label */}
      <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none mt-4 opacity-80 group-hover:opacity-100 transition-opacity">
        <span className="text-[7px] font-bold text-neon-blue tracking-tighter animate-flicker leading-none">AI_CORE</span>
        <span className="text-[5px] font-mono text-white/20 tracking-[0.2em] leading-none">ACTIVE</span>
      </div>
    </div>
  );
};

export default GlitchTriangle;
