import React, { useState } from 'react';
import { ArrowUpRight, Terminal, Copy, Check, ChevronDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-4 overflow-hidden">
      {/* Background radial spotlights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-tr from-cyan-500/15 via-indigo-500/15 to-purple-600/10 blur-[130px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 blur-[110px] pointer-events-none rounded-full" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Availability Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-md mb-8 hover:border-cyan-500/40 transition-colors">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-mono text-slate-300">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
          Architecting <span className="gradient-text">Autonomous AI</span> &amp; Modern <span className="gradient-text-emerald">Web Platforms</span>.
        </h1>

        {/* Hero Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-slate-400 mb-10 font-normal leading-relaxed">
          I'm <span className="text-slate-100 font-semibold">{PERSONAL_INFO.name}</span> (<span className="text-slate-300 font-mono text-sm">{PERSONAL_INFO.formalName}</span>), a Full-Stack Web Developer &amp; AI Engineer based in <span className="text-cyan-400">{PERSONAL_INFO.location}</span>. Creator of <span className="text-slate-200 font-medium">ToolMatrix AI</span>, <span className="text-slate-200 font-medium">SlideCraft AI</span>, and <span className="text-slate-200 font-medium">Milo</span>.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <a
            href="#projects"
            className="group px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 transition-all"
          >
            <span>Explore Flagship Work</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>

          <button
            onClick={onOpenTerminal}
            className="px-6 py-3 rounded-xl bg-[#0B1120] border border-cyan-500/30 text-cyan-300 font-mono text-sm flex items-center gap-2.5 hover:bg-cyan-950/30 hover:border-cyan-400 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-black/40"
          >
            <Terminal className="w-4 h-4 text-cyan-400" />
            <span>Launch CLI Terminal</span>
          </button>

          <button
            onClick={handleCopyEmail}
            className="px-5 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 font-mono text-sm flex items-center gap-2 hover:bg-white/[0.08] hover:text-white transition-all active:scale-95"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-400" />
                <span className="text-emerald-400 font-sans font-medium text-xs">Copied to clipboard!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 text-slate-400" />
                <span>tiwarisatendrapratap@gmail.com</span>
              </>
            )}
          </button>
        </div>

        {/* Metrics & Impact Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/15 transition-all text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono mb-1 group-hover:text-cyan-400 transition-colors">
                {stat.value}
              </div>
              <div className="text-xs font-semibold text-slate-300 mb-0.5">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-500 leading-snug">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center mt-12">
        <a href="#projects" className="text-slate-500 hover:text-slate-300 animate-bounce transition-colors" aria-label="Scroll to projects">
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};
