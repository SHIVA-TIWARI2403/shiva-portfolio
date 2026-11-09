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
    <footer className="py-12 px-4 sm:px-6 border-t border-[#292323] bg-[#090909] text-xs font-mono text-[#a09c9a]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Manifesto */}
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#101010] border border-[#292323] flex items-center justify-center font-display text-base text-white">
            ST
          </div>
          <div>
            <div className="font-display text-sm tracking-wider text-white">
              {PERSONAL_INFO.name} // 2026 ARCHIVE
            </div>
            <p className="text-[11px] text-[#a09c9a]">
              Crafted in {PERSONAL_INFO.location} • Autonomous AI &amp; Web Systems
            </p>
          </div>
        </div>

        {/* Center Links */}
        <div className="flex items-center gap-5 uppercase tracking-wider">
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Terminal className="w-3.5 h-3.5 text-[#e32b3c]" />
            <span>Terminal</span>
          </button>
          <span>//</span>
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            GitHub
          </a>
          <span>//</span>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Back to Top */}
        <button
          onClick={scrollToTop}
          className="p-2.5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] text-white flex items-center gap-1.5 transition-colors group"
          title="Scroll to Top"
        >
          <span className="uppercase text-[11px] font-bold">Top</span>
          <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform text-[#e32b3c]" />
        </button>
      </div>
    </footer>
  );
};
