import React, { useState, useEffect } from 'react';
import { Terminal, Github, Linkedin, Menu, X, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-[#292323] shadow-xl shadow-black/40 py-3'
          : 'bg-[#090909]/60 backdrop-blur-sm border-[#292323]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a href="#hero" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-[#101010] border border-[#292323] flex items-center justify-center font-display text-lg text-white group-hover:border-[#e32b3c] transition-colors">
            ST
          </div>
          <div>
            <div className="font-display text-base tracking-wider text-white flex items-center gap-2">
              <span>{PERSONAL_INFO.name}</span>
              <span className="w-1.5 h-1.5 bg-[#e32b3c] rounded-full animate-ping" />
            </div>
            <div className="text-[10px] text-[#a09c9a] uppercase tracking-widest font-mono">
              AI &amp; FULL-STACK ARCHITECT
            </div>
          </div>
        </a>

        {/* Center Editorial Nav */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold uppercase tracking-wider text-[#a09c9a]">
          <a href="#projects" className="hover:text-white transition-colors">
            Projects
          </a>
          <a href="#breakdown" className="hover:text-white transition-colors">
            Breakdown
          </a>
          <a href="#milestones" className="hover:text-white transition-colors">
            Milestones
          </a>
          <a href="#experience" className="hover:text-white transition-colors">
            Experience
          </a>
          <a href="#stack" className="hover:text-white transition-colors">
            Stack
          </a>
          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Status */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#101010] border border-[#292323] text-[11px] font-mono text-[#f2efeb]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>AVAILABLE FOR HIRE</span>
          </div>

          {/* Terminal Launcher */}
          <button
            onClick={onOpenTerminal}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] text-xs font-mono text-[#f2efeb] transition-all active:scale-95"
            title="Launch Interactive Terminal"
          >
            <Terminal className="w-3.5 h-3.5 text-[#e32b3c]" />
            <span>CLI</span>
          </button>

          {/* Socials */}
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-[#101010] border border-[#292323] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 bg-[#101010] border border-[#292323] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Contact Direct */}
          <a
            href="#contact"
            className="solid-crimson-button px-4 py-2 text-xs flex items-center gap-1.5"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenTerminal}
            className="p-2 bg-[#101010] border border-[#292323] text-[#e32b3c]"
            aria-label="Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 bg-[#101010] border border-[#292323] text-white"
            aria-label="Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="bg-[#101010] border-b border-[#292323] px-6 py-5 flex flex-col gap-3 md:hidden">
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
          >
            Projects
          </a>
          <a
            href="#breakdown"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
          >
            Breakdown
          </a>
          <a
            href="#milestones"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
          >
            Milestones
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
          >
            Experience
          </a>
          <a
            href="#stack"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
          >
            Stack
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-sm font-semibold uppercase tracking-wider text-[#e32b3c] py-2"
          >
            Contact Direct
          </a>
        </div>
      )}
    </header>
  );
};
