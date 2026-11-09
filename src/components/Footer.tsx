import React from 'react';
import { ArrowUp, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 border-t border-white/10 relative z-10 bg-[#030712]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Note */}
        <div className="flex items-center gap-3 text-left">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center font-mono font-bold text-xs text-cyan-400">
            ST
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-1.5">
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-xs text-slate-500 font-mono">portfolio v2.4</span>
            </div>
            <p className="text-xs text-slate-500">
              Crafted in Ayodhya, India • Crafted with 21st UI &amp; Modern Web Standards
            </p>
          </div>
        </div>

        {/* Quick Links & Terminal Trigger */}
        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1 hover:text-cyan-400 transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-cyan-400" />
            <span>cli.exe</span>
          </button>
          <span>•</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/40 transition-all flex items-center gap-1 text-xs font-mono group"
          title="Back to Top"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </footer>
  );
};
