
import React from 'react';
import { Typewriter } from './Typewriter';
import { ProfileScanner } from './ProfileScanner';

// Helper to wrap text for Typewriter if needed, otherwise string works directly
const wrapSnakeCaseString = (str: string) => str;

export const ProfileCard: React.FC = () => {
  return (
    <div className="relative group w-full order-1 lg:order-1">
      <div className="glass-panel overflow-hidden relative">
        {/* Frame Accents */}
        <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20"></div>
        <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20"></div>

        {/* Main Display Screen */}
        <div className="screen-cyan p-6 md:p-8 relative min-h-[320px] shadow-[inset_0_0_80px_rgba(0,243,255,0.05)]">
          {/* CRT Effect Overlay */}
          <div className="crt-overlay absolute inset-0 opacity-10 pointer-events-none z-30"></div>

          {/* Layout Grid */}
          <div className="grid grid-cols-12 gap-6 relative z-20">
            <div className="col-span-12 md:col-span-7 space-y-6">
              <div>
                <h3 className="text-[10px] uppercase tracking-[0.3em] text-neon-blue/60 mb-2 font-mono">Subject_Identifier</h3>
                <p className="text-2xl font-bold text-white tracking-tight">
                  <Typewriter text={wrapSnakeCaseString("DANIEL_ILLENBERGER")} delay={200} />
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Role</span>
                  <span className="text-xs text-neon-blue font-bold">
                    <Typewriter text={wrapSnakeCaseString("FULL_STACK_DEVELOPER")} delay={1000} speed={30} />
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Focus</span>
                  <span className="text-xs text-white font-medium">
                    <Typewriter text="AI IMPLEMENTATION" delay={1800} speed={30} />
                  </span>
                </div>
                <div className="flex justify-between border-b border-white/5 pb-2">
                  <span className="text-[10px] text-slate-400 uppercase tracking-widest font-mono">Status</span>
                  <span className="text-xs text-neon-green font-medium">
                    <Typewriter text={wrapSnakeCaseString("ACTIVE_LOGGED_IN")} delay={2600} speed={30} />
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="flex gap-1">
                  {[...Array(12)].map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 ${i < 9 ? 'bg-neon-blue/80 shadow-[0_0_5px_rgba(0,243,255,0.4)]' : 'bg-slate-800'}`}></div>
                  ))}
                </div>
                <p className="text-[8px] text-slate-400 mt-2 tracking-[0.2em] uppercase">Neural_Sync_Established: 87.4%</p>
              </div>
              {/* Bottom Status Info */}
              <div className="mt-8 pt-4 border-t border-neon-blue/20 flex justify-between items-end relative z-20">
                <div className="flex gap-4">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#0aff0a]"></div>
                    <span className="text-[8px] font-mono text-slate-300 uppercase tracking-widest">Link_Established</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 bg-neon-purple/40 rounded-full"></div>
                    <span className="text-[8px] font-mono text-slate-300 uppercase tracking-widest">Enc_V4.2</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Scan Visual */}
            <div className="col-span-12 md:col-span-5 space-y-4">
              <ProfileScanner />

              <div className="p-2 border border-neon-purple/20 bg-neon-purple/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-1 h-full bg-neon-purple/40"></div>
                <p className="text-[8px] font-mono text-neon-purple leading-tight font-bold tracking-tighter">
                  <Typewriter text="SYSTEM_AUTH: VALIDATED" delay={4000} speed={20} /><br />
                  <Typewriter text="REPLICANT_DETECT: NEGATIVE" delay={4500} speed={20} /><br />
                  <Typewriter text="DECRYPTION: ACTIVE..." delay={5000} speed={20} />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
