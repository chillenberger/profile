import React, { useEffect, useState, useRef } from 'react';
import { RainOverlay } from './RainOverlay';

const Cloud: React.FC<{
  className?: string;
  style?: React.CSSProperties;
  scale?: number;
}> = ({ className = "", style, scale = 1 }) => (
  <div className={`absolute pointer-events-none ${className}`} style={{ ...style, transform: `scale(${scale})` }}>
    <div className="cloud-puff w-64 h-32 -top-16 -left-32 opacity-60" />
    <div className="cloud-puff w-48 h-24 -top-8 -left-12 opacity-40" />
    <div className="cloud-puff w-56 h-28 -top-12 -left-48 opacity-50" />
    <div className="cloud-puff w-40 h-20 top-4 -left-20 opacity-30" />
  </div>
);

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

      {/* Moving Container - Increased height to 250vh to reduce parallax intensity */}
      <div
        ref={containerRef}
        className="absolute top-0 left-0 right-0 w-full opacity-60 will-change-transform transition-transform duration-75 ease-out"
        style={{
          height: '250vh',
          transform: `translate3d(0, ${offsetY}px, 0)`
        }}
      >
        {/* Top Layer: Skyline - Given ample space */}
        <div
          className="absolute top-0 left-0 w-full h-[50%] bg-cover bg-bottom"
          style={{
            backgroundImage: 'url(/images/city-top.png)',
            maskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 85%, transparent 100%)'
          }}
        >
          {/* Subtler Traffic */}
          <div className="absolute top-[25%] left-[-20%] w-[140%] h-[1px] opacity-20 overflow-hidden"
            style={{ animation: 'traffic-move 30s linear infinite', background: 'linear-gradient(90deg, transparent, #ff0000, transparent)' }}>
          </div>
        </div>

        {/* PRIMARY DEAD ZONE - Tight transition */}
        <div className="absolute top-[50%] h-[5%] w-full bg-cyber-black"></div>

        {/* Bottom Layer: Street - Given more visibility */}
        <div
          className="absolute top-[55%] left-0 w-full h-[45%] bg-cover bg-top"
          style={{
            backgroundImage: 'url(/images/city-street.jpg)',
            maskImage: 'linear-gradient(to top, black 80%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, black 80%, transparent 100%)'
          }}
        >
          {/* Subtle Street Traffic */}
          <div className="absolute bottom-[20%] left-[-20%] w-[150%] h-[4px] blur-sm opacity-20 overflow-hidden"
            style={{ animation: 'traffic-move-reverse 15s linear infinite', background: 'linear-gradient(90deg, transparent, rgba(255, 0, 0, 0.4), transparent)' }}>
          </div>
        </div>
      </div>

      {/* ASYMMETRIC ARCHITECTURAL OVERLAY - A single large solid panel to break symmetry without framing */}
      <div className="absolute top-0 bottom-0 left-0 w-[40%] bg-cyber-black/50 backdrop-blur-[2px] border-r border-white/20 z-[2] hidden lg:block"></div>

      {/* Global Overlays - Lightened for better visibility */}
      <div className="absolute inset-0 bg-[#050505]/40 mix-blend-multiply z-[1]"></div>

      {/* Atmospheric Vignette - Softer */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyber-black via-transparent to-cyber-black opacity-70 z-[3]"></div>
    </div>
  );
};
