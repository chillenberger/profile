import React, { useEffect, useState, useRef } from 'react';
import { RainOverlay } from './RainOverlay';

export const CityscapeBackground: React.FC = () => {
  const [offsetY, setOffsetY] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      const viewportHeight = window.innerHeight;
      const bgHeight = viewportHeight * 2.5; // 250vh

      const targetY = -1 * progress * (bgHeight - viewportHeight);
      setOffsetY(targetY);
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Init

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="fixed inset-0 z-0 bg-cyber-black overflow-hidden pointer-events-none">
      {/* Rain Effect on Top */}
      <RainOverlay />

      {/* Moving Container */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 right-0 w-full will-change-transform transition-transform duration-75 ease-out"
        style={{
          height: '250vh',
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
      >
        {/* Top Layer: Skyline */}
        <div
          className="absolute top-0 left-0 w-full h-[55%] bg-cover bg-bottom"
          style={{
            backgroundImage: 'url(/images/city-top.png)',
            maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)'
          }}
        >
          {/* Traffic - Skyway Type */}
          <div className="absolute top-[30%] left-[-20%] w-[140%] h-[2px] blur-sm overflow-hidden"
            style={{ animation: 'traffic-move 15s linear infinite', background: 'linear-gradient(90deg, transparent, #ff0000, transparent)' }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9)_0%,_transparent_70%)] animate-ripple-line" />
          </div>

          <div className="absolute top-[50%] left-[-20%] w-[140%] h-[2px] opacity-30 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.9)_0%,_transparent_90%)] animate-ripple-line" style={{ animationDelay: '1s' }} />
          </div>

          {/* Random Lights/Flicker */}
          <div className="absolute top-[20%] left-[20%] w-[50px] h-[50px] bg-neon-blue rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-[60%] right-[30%] w-[5px] h-[5px] bg-neon-purple opacity-80 shadow-[0_0_10px_#bc13fe] animate-flicker"></div>
        </div>

        {/* Bottom Layer: Street */}
        <div
          className="absolute bottom-0 left-0 w-full h-[55%] bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/city-street.jpg)',
            maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
          }}
        >
          {/* Street Traffic */}
          <div className="absolute bottom-[20%] left-[-20%] w-[150%] h-[10px] blur-sm opacity-40 overflow-hidden"
            style={{ animation: 'traffic-move-reverse 10s linear infinite', background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.8), transparent)' }}>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.5)_0%,_transparent_70%)] animate-ripple-line" />
          </div>

          {/* Neon Signs Flickering */}
          <div className="absolute bottom-[40%] left-[10%] w-[100px] h-[100px] bg-neon-green/30 blur-2xl animate-flicker" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-[30%] right-[20%] w-[80px] h-[200px] bg-neon-purple/20 blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>

        {/* Bridge/Blend Layer (Darken the middle seam) */}
        <div className="absolute top-[45%] bottom-[45%] w-full bg-black/80 blur-xl"></div>
      </div>

      {/* Global Overlays (Grid, CRT, etc.) - Preserving the "Cyber" feel */}
      <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply"></div>

      {/* Scanning Line / Grid Effect */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 243, 255, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 243, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      ></div>

      {/* Fog/Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black opacity-80"></div>
    </div>
  );
};
