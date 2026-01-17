import React from 'react';

export const ProfileScanner: React.FC = () => {
  return (
    <div className="aspect-[4/5] relative overflow-hidden group/scan shadow-inner bg-cyber-black/20">
      {/* 
        Custom Animation Styles 
        We use a local style tag to keep these complex keyframe animations encapsulated 
        and avoid bloating the global tailwind config for a one-off component.
      */}
      <style>{`
        @keyframes scanner-spin-container {
          0% { transform: translate(-50%, -50%) rotate(0deg); opacity: 0; }
          15% { transform: translate(-50%, -50%) rotate(0deg); opacity: 1; }
          80% { transform: translate(-50%, -50%) rotate(1800deg); opacity: 1; }
          100% { transform: translate(-50%, -50%) rotate(1800deg); opacity: 1; }
        }

        @keyframes bracket-tl {
          0%, 80% { top: 50%; left: 50%; transform: translate(-100%, -100%); }
          90%, 100% { top: 0.5rem; left: 0.5rem; transform: translate(0, 0); }
        }

        @keyframes bracket-tr {
          0%, 80% { top: 50%; right: 50%; transform: translate(100%, -100%); }
          90%, 100% { top: 0.5rem; right: 0.5rem; transform: translate(0, 0); }
        }

        @keyframes bracket-bl {
          0%, 80% { bottom: 50%; left: 50%; transform: translate(-100%, 100%); }
          90%, 100% { bottom: 0.5rem; left: 0.5rem; transform: translate(0, 0); }
        }

        @keyframes bracket-br {
          0%, 80% { bottom: 50%; right: 50%; transform: translate(100%, 100%); }
          90%, 100% { bottom: 0.5rem; right: 0.5rem; transform: translate(0, 0); }
        }

        @keyframes reveal-image {
          0%, 90% { transform: scaleX(0); opacity: 0; }
          100% { transform: scaleX(1); opacity: 0.7; }
        }

        @keyframes pulse-ring-reveal {
          0%, 85% { transform: scale(0.5); opacity: 0; }
          100% { transform: scale(1.1); opacity: 0.1; }
        }
      `}</style>

      {/* Spinning "Plus" Wrapper */}
      <div
        className="absolute top-1/2 left-1/2 w-8 h-8 z-30 pointer-events-none"
        style={{
          animation: 'scanner-spin-container 3s cubic-bezier(0.65, 0, 0.35, 1) forwards'
        }}
      >
        {/* These brackets stay in "plus" formation relative to the spinning parent */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-neon-blue"></div>
        {/* <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-neon-blue"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-neon-blue"></div> */}
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-neon-blue"></div>
      </div>

      {/* Decorative Scan Brackets - These expand to the corners */}
      <div
        className="absolute w-4 h-4 border-t border-l border-neon-blue/60 z-20"
        style={{ animation: 'bracket-tl 3.5s cubic-bezier(0.65, 0, 0.35, 1) forwards' }}
      ></div>
      <div
        className="absolute w-4 h-4 border-t border-r border-neon-blue/60 z-20"
        style={{ animation: 'bracket-tr 3.5s cubic-bezier(0.65, 0, 0.35, 1) forwards' }}
      ></div>
      <div
        className="absolute w-4 h-4 border-b border-l border-neon-blue/60 z-20"
        style={{ animation: 'bracket-bl 3.5s cubic-bezier(0.65, 0, 0.35, 1) forwards' }}
      ></div>
      <div
        className="absolute w-4 h-4 border-b border-r border-neon-blue/60 z-20"
        style={{ animation: 'bracket-br 3.5s cubic-bezier(0.65, 0, 0.35, 1) forwards' }}
      ></div>

      {/* Central Pulse Ring - Appearing after spin */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        style={{ animation: 'pulse-ring-reveal 3.5s ease-out forwards' }}
      >
        <div className="w-24 h-24 border-2 border-neon-blue rounded-full animate-ping"></div>
      </div>

      {/* Mock Fingerprint/Profile Scan - Reveals last */}
      <div
        className="absolute inset-4 mix-blend-screen bg-contain bg-center bg-no-repeat z-10 origin-center"
        style={{
          backgroundImage: "url('/hologram_man.png')",
          animation: 'reveal-image 3.3s cubic-bezier(0.65, 0, 0.35, 1) forwards'
        }}
      ></div>

      {/* Scanline Effect Overlay (Optional but adds to the look) */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-blue/5 to-transparent h-1/4 w-full -translate-y-full animate-[scanline_2s_linear_infinite] pointer-events-none opacity-20"></div>
    </div>
  );
};

export default ProfileScanner;
