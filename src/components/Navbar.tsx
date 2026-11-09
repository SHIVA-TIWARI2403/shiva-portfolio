import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Terminal, Github, Linkedin, Menu, X, ArrowUpRight, Volume2, VolumeX } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { sounds } from '../utils/sound';

interface NavbarProps {
  onOpenTerminal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenTerminal }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);

  const toggleSound = () => {
    sounds.enabled = !soundEnabled;
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled) sounds.click();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? 'bg-[#090909]/90 backdrop-blur-md border-[#292323] shadow-xl shadow-black/40 py-3'
          : 'bg-[#090909]/60 backdrop-blur-sm border-[#292323]/50 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#hero"
          onMouseEnter={() => sounds.hover()}
          onClick={() => sounds.click()}
          className="flex items-center gap-3 group"
        >
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
          {['projects', 'breakdown', 'milestones', 'experience', 'stack', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onMouseEnter={() => sounds.hover()}
              onClick={() => sounds.click()}
              className="hover:text-white transition-colors relative py-1 group"
            >
              <span>{item}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#e32b3c] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Sound Toggle Button */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => sounds.hover()}
            className="p-2 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] text-[#a09c9a] hover:text-white transition-colors"
            title={soundEnabled ? 'Mute UI Sounds' : 'Enable UI Sounds'}
          >
            {soundEnabled ? <Volume2 className="w-3.5 h-3.5 text-[#e32b3c]" /> : <VolumeX className="w-3.5 h-3.5 text-[#a09c9a]" />}
          </button>

          {/* Availability Status */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#101010] border border-[#292323] text-[11px] font-mono text-[#f2efeb]">
            <span className="w-2 h-2 rounded-full bg-[#10b981] animate-pulse" />
            <span>AVAILABLE FOR HIRE</span>
          </div>

          {/* Terminal Launcher */}
          <button
            onClick={() => {
              sounds.click();
              onOpenTerminal();
            }}
            onMouseEnter={() => sounds.hover()}
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
            onMouseEnter={() => sounds.hover()}
            onClick={() => sounds.click()}
            className="p-2 bg-[#101010] border border-[#292323] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noreferrer"
            onMouseEnter={() => sounds.hover()}
            onClick={() => sounds.click()}
            className="p-2 bg-[#101010] border border-[#292323] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          {/* Contact Direct */}
          <a
            href="#contact"
            onMouseEnter={() => sounds.hover()}
            onClick={() => sounds.click()}
            className="solid-crimson-button px-4 py-2 text-xs flex items-center gap-1.5 hover:shadow-lg hover:shadow-[#e32b3c]/30"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleSound}
            className="p-2 bg-[#101010] border border-[#292323] text-[#a09c9a]"
          >
            {soundEnabled ? <Volume2 className="w-4 h-4 text-[#e32b3c]" /> : <VolumeX className="w-4 h-4" />}
          </button>
          <button
            onClick={() => {
              sounds.click();
              onOpenTerminal();
            }}
            className="p-2 bg-[#101010] border border-[#292323] text-[#e32b3c]"
            aria-label="Terminal"
          >
            <Terminal className="w-4 h-4" />
          </button>
          <button
            onClick={() => {
              sounds.click();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
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
          {['projects', 'breakdown', 'milestones', 'experience', 'stack', 'contact'].map((item) => (
            <a
              key={item}
              href={`#${item}`}
              onClick={() => {
                sounds.click();
                setMobileMenuOpen(false);
              }}
              className="text-sm font-semibold uppercase tracking-wider text-[#f2efeb] py-2 border-b border-[#292323]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
};
