import React, { useEffect, useState, useRef } from 'react';
import { RainOverlay } from './RainOverlay';

export const CityscapeBackground: React.FC = () => {
  const [bgOffset, setBgOffset] = useState(0);
  const [fgOffset, setFgOffset] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;

      const viewportHeight = window.innerHeight;
      const totalHeight = viewportHeight * 2.5; // 250vh

      // Base range to scroll the entire scene
      const baseRange = totalHeight - viewportHeight;

      // Background (sky/distant towers) moves slightly slower
      const targetBgY = -1 * progress * baseRange * 0.95;

      // Foreground (closer buildings + street) moves slightly faster
      const targetFgY = -1 * progress * baseRange * 1.05;

      setBgOffset(targetBgY);
      setFgOffset(targetFgY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
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

      {/* Skyline Background Layer */}
      <div
        className="absolute top-0 left-0 right-0 w-full will-change-transform transition-transform duration-75 ease-out"
        style={{
          height: '250vh',
          transform: `translate3d(0, ${bgOffset}px, 0)`,
          zIndex: 1
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[60%] bg-cover bg-bottom"
          style={{
            backgroundImage: 'url(/images/city-top-background.png)',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
          }}
        >
          {/* Subtle slow traffic in the distance */}
          <div className="absolute top-[30%] left-[-20%] w-[140%] h-[1px] opacity-30"
            style={{ animation: 'traffic-move 30s linear infinite', background: 'linear-gradient(90deg, transparent, #ff0000, transparent)' }}></div>
        </div>
      </div>

      {/* Skyline Foreground Layer */}
      <div
        className="absolute top-0 left-0 right-0 w-full will-change-transform transition-transform duration-75 ease-out"
        style={{
          height: '250vh',
          transform: `translate3d(0, ${fgOffset}px, 0)`,
          zIndex: 2
        }}
      >
        <div
          className="absolute top-0 left-0 w-full h-[60%] bg-cover bg-bottom"
          style={{
            backgroundImage: 'url(/images/city-top-foreground-2.png)',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
          }}
        >
          {/* Foreground Traffic */}
          <div className="absolute top-[50%] left-[-20%] w-[140%] h-[2px] opacity-50"
            style={{ animation: 'traffic-move 15s linear infinite reverse', animationDelay: '2s', background: 'linear-gradient(90deg, transparent, #ffffff, transparent)' }}></div>

          {/* Lights/Flicker */}
          <div className="absolute top-[20%] left-[20%] w-[50px] h-[50px] bg-neon-blue rounded-full opacity-20 blur-xl animate-pulse"></div>
          <div className="absolute top-[60%] right-[30%] w-[5px] h-[5px] bg-neon-purple opacity-80 shadow-[0_0_10px_#bc13fe] animate-flicker"></div>
        </div>

        {/* Street Layer (moves with foreground) */}
        <div
          className="absolute bottom-0 left-0 w-full h-[55%] bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/city-street.jpg)',
            maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
          }}
        >
          {/* Street Traffic */}
          <div className="absolute bottom-[20%] left-[-20%] w-[150%] h-[10px] blur-sm opacity-40"
            style={{ animation: 'traffic-move-reverse 10s linear infinite', background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.8), transparent)' }}></div>

          {/* Neon Signs Flickering */}
          <div className="absolute bottom-[40%] left-[10%] w-[100px] h-[100px] bg-neon-green/30 blur-2xl animate-flicker" style={{ animationDuration: '3s' }}></div>
          <div className="absolute bottom-[30%] right-[20%] w-[80px] h-[200px] bg-neon-purple/20 blur-2xl animate-pulse" style={{ animationDuration: '5s' }}></div>
        </div>

        {/* Bridge/Blend Layer */}
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
