import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 py-4 transition-all duration-300">
      <nav
        className={`w-full max-w-6xl transition-all duration-300 rounded-2xl px-5 py-3 flex items-center justify-between ${
          scrolled
            ? 'bg-[#0B1120]/80 backdrop-blur-xl border border-white/10 shadow-2xl shadow-cyan-950/20'
            : 'bg-transparent border border-transparent'
        }`}
      >
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 flex items-center justify-center font-mono font-bold text-white shadow-lg shadow-cyan-500/25 group-hover:scale-105 transition-transform">
            ST
          </div>
          <div>
            <div className="font-bold text-sm tracking-wide text-white group-hover:text-cyan-400 transition-colors flex items-center gap-1.5">
              <span>Shiva Tiwari</span>
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            </div>
            <div className="text-[11px] text-slate-400 font-mono tracking-tight">AI & Full-Stack Architect</div>
          </div>
        </a>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/5 p-1 rounded-xl">
          <a
            href="#projects"
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
          >
            Tech Stack
          </a>
          <a
            href="#about"
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
          >
            About
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 text-xs font-medium text-slate-300 hover:text-white hover:bg-white/[0.06] rounded-lg transition-all"
          >
            Contact
          </a>
        </div>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono bg-cyan-950/40 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-900/40 hover:border-cyan-400 transition-all shadow-sm shadow-cyan-500/10 active:scale-95"
            title="Open Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5" />
            <span>Terminal</span>
            <span className="text-[10px] bg-cyan-500/20 px-1 py-0.2 rounded text-cyan-200">CLI</span>
          </button>

          {/* Social Icons */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all hover:scale-105"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all hover:scale-105"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-cyan-400"
            aria-label="Open Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-20 left-4 right-4 bg-[#0B1120] border border-white/15 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 md:hidden z-50 backdrop-blur-2xl">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Tech Stack
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            About
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-medium text-slate-200 py-2 border-b border-white/5"
          >
            Contact
          </a>
          <div className="flex items-center justify-between pt-2">
            <span className="text-xs text-slate-400">Socials</span>
            <div className="flex gap-2">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300">
                <Github className="w-4 h-4" />
              </a>
              <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 text-slate-300">
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
