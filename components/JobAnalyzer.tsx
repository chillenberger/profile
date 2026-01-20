
import React, { useState } from 'react';
import { AnalysisResults } from '../services/geminiService';
import { Typewriter } from './Typewriter';

interface JobAnalyzerProps {
  onAnalyze: (jobDesc: string) => void;
  isAnalyzing: boolean;
  analysisResults: AnalysisResults | null;
}

export const JobAnalyzer: React.FC<JobAnalyzerProps> = ({ onAnalyze, isAnalyzing, analysisResults }) => {
  const [localJobDesc, setLocalJobDesc] = useState('');

  return (
    <>
      <div className="space-y-6 order-1 lg:order-2 w-full">
        <div className="glass-panel p-5 border-neon-blue/30 relative">
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-neon-blue font-bold mb-3 font-mono">Job_Description_Input</h4>
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-neon-blue/20 rounded-sm blur opacity-25 group-hover:opacity-50 transition duration-1000 animate-pulse"></div>
            <textarea
              className="relative w-full h-24 bg-cyber-black/80 border border-slate-800 p-3 text-xs font-mono text-slate-300 focus:border-neon-blue focus:shadow-[0_0_10px_rgba(10,255,10,0.2)] caret-[#0aff0a] outline-none transition-all resize-none mb-3 z-10"
              placeholder="> PASTE_JOB_DESCRIPTION_HERE_FOR_ALIGNMENT_"
              value={localJobDesc}
              onChange={(e) => setLocalJobDesc(e.target.value)}
            />
          </div>
          <div className="flex gap-4 mb-2">
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-neon-green rounded-full shadow-[0_0_8px_#0aff0a]"></div>
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">Site Alignment: {analysisResults ? 'true' : 'false'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 bg-neon-purple/40 rounded-full"></div>
              <span className="text-[8px] font-mono text-slate-400 uppercase tracking-widest">Report: {analysisResults ? 'generated' : 'none'}</span>
            </div>
          </div>
          <button
            onClick={() => onAnalyze(localJobDesc)}
            disabled={isAnalyzing || !localJobDesc.trim()}
            className={`w-full py-2 font-bold uppercase tracking-[0.2em] text-[10px] border transition-all ${isAnalyzing ? 'border-slate-700 text-slate-500 cursor-wait' : 'border-neon-blue/50 text-neon-blue hover:bg-neon-blue/10 hover:shadow-neon-blue'}`}
          >
            {isAnalyzing ? 'Analyzing_Fit...' : 'Analyze_Candidate_Fit'}
          </button>
        </div>
      </div>

      {analysisResults && (
        <div className="glass-panel p-5 border-neon-green/30 animate-fade-in-up relative overflow-hidden mt-4 order-3 lg:order-3 lg:col-span-2 w-full">
          <div className="absolute top-0 right-0 w-16 h-16 bg-neon-green/5 blur-xl"></div>
          <h4 className="text-[10px] uppercase tracking-[0.3em] text-neon-green font-bold mb-3 font-mono">Alignment_Report</h4>
          <p className="text-sm text-slate-300 leading-relaxed font-mono">
            <Typewriter text={analysisResults.summary} speed={15} cursorClassName="bg-neon-green" />
          </p>
          <div className="mt-3 flex items-center gap-2">
            <div className="w-2 h-2 bg-neon-green rounded-full animate-pulse shadow-[0_0_8px_#0aff0a]"></div>
            <span className="text-[8px] font-mono text-neon-green uppercase tracking-widest">Optimal_Match_Detected</span>
          </div>
        </div>
      )}
    </>
  );
};
