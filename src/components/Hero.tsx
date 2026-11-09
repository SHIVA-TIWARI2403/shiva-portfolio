import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Terminal, Copy, Check, ChevronDown, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PERSONAL_INFO } from '../data/portfolioData';
import { TiltCard } from './TiltCard';
import { Counter } from './Counter';
import { sounds } from '../utils/sound';

interface HeroProps {
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenTerminal }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sounds.click();
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#e32b3c', '#ff5d65', '#ffffff']
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="hero" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 overflow-hidden border-b border-[#292323]">
      {/* Background Subtle Crimson Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[#e32b3c] blur-[140px] pointer-events-none rounded-full"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Top Metadata Row (Renando Style) */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-[#292323] text-xs font-mono text-[#a09c9a]"
        >
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#e32b3c] rounded-full animate-ping" />
            <span className="text-white font-semibold">{PERSONAL_INFO.location}</span>
            <span className="text-[#a09c9a]">[{PERSONAL_INFO.coordinates}]</span>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-handwriting text-xl text-[#ff5d65] font-medium hidden sm:block"
          >
            "{PERSONAL_INFO.manifesto}"
          </motion.div>
          <div className="text-[11px] uppercase tracking-wider text-slate-400">
            INDEX v2.6.4 • 2026 EDITION
          </div>
        </motion.div>

        {/* Hero Main Grid: Massive Anton Headline & Technical Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12 md:py-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 bg-[#101010] border border-[#292323] text-[#e32b3c] font-mono text-xs uppercase tracking-widest mb-4"
            >
              {PERSONAL_INFO.titleDisplay}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-[#f2efeb] leading-[0.9] tracking-tight mb-6"
            >
              SHIVA <span className="text-[#e32b3c] inline-block hover:scale-105 transition-transform duration-300">TIWARI</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-base sm:text-lg md:text-xl text-[#a09c9a] max-w-2xl font-normal leading-relaxed mb-8"
            >
              Full-Stack Web Developer &amp; Autonomous AI Systems Architect from Ayodhya, India. Creator of <strong className="text-white font-semibold">ToolMatrix AI</strong>, <strong className="text-white font-semibold">SlideCraft AI</strong>, and founder of <strong className="text-white font-semibold">Milo</strong>. Obsessed with high velocity, rock-solid backends, and cinematic interfaces.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.55 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                onMouseEnter={() => sounds.hover()}
                onClick={() => sounds.click()}
                className="solid-crimson-button px-7 py-3.5 text-xs flex items-center gap-2 shadow-lg shadow-[#e32b3c]/20 hover:shadow-[#e32b3c]/40 active:scale-95"
              >
                <span>Explore Selected Works</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                onClick={() => {
                  sounds.click();
                  onOpenTerminal();
                }}
                onMouseEnter={() => sounds.hover()}
                className="px-6 py-3.5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] text-[#f2efeb] font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all active:scale-95 hover:bg-[#161616]"
              >
                <Terminal className="w-4 h-4 text-[#e32b3c]" />
                <span>Launch CLI Terminal</span>
              </button>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => sounds.hover()}
                className="px-5 py-3.5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] text-[#a09c9a] hover:text-white font-mono text-xs flex items-center gap-2 transition-all active:scale-95"
                title="Copy Email"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#10b981]" />
                    <span className="text-[#10b981]">COPIED TO CLIPBOARD</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#e32b3c]" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column: Stylized Renando Technical Portrait / Card with 3D Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4 flex justify-center"
          >
            <TiltCard className="w-full max-w-sm">
              <div className="bg-[#101010] border border-[#292323] p-6 relative group hover:border-[#e32b3c] transition-all shadow-2xl">
                {/* Technical crosshairs on corners */}
                <div className="absolute top-2 left-2 text-[10px] font-mono text-[#a09c9a]">01 // TECH ID</div>
                <div className="absolute top-2 right-2 text-[10px] font-mono text-[#e32b3c] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-[#e32b3c] rounded-full animate-ping" />
                  <span>SYS_ACTIVE</span>
                </div>

                <div className="mt-6 mb-4 aspect-square bg-[#161616] border border-[#292323] flex flex-col items-center justify-center p-6 text-center relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#e32b3c]/20 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Glowing Avatar Mark */}
                  <div className="w-20 h-20 bg-[#090909] border border-[#e32b3c] flex items-center justify-center font-display text-4xl text-white shadow-xl shadow-[#e32b3c]/30 mb-4 group-hover:scale-110 transition-transform duration-300">
                    ST
                  </div>
                  <div className="font-display text-xl text-white tracking-wide">
                    SHIVA TIWARI
                  </div>
                  <div className="text-xs font-mono text-[#a09c9a] mt-1">
                    @{PERSONAL_INFO.handle}
                  </div>
                  <div className="text-[11px] font-mono text-[#ff5d65] mt-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>FOUNDER &amp; BUILDER</span>
                  </div>
                </div>

                <div className="space-y-2 text-xs font-mono pt-3 border-t border-[#292323]">
                  <div className="flex justify-between text-[#a09c9a]">
                    <span>FRAMEWORK</span>
                    <span className="text-white">REACT + FASTAPI</span>
                  </div>
                  <div className="flex justify-between text-[#a09c9a]">
                    <span>AI ENGINE</span>
                    <span className="text-white">GEMINI 2.5 / 3.8</span>
                  </div>
                  <div className="flex justify-between text-[#a09c9a]">
                    <span>DATABASE</span>
                    <span className="text-white">SUPABASE RLS</span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </div>

        {/* Bottom Editorial Stats Bar with Animated Counters */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-[#292323]"
        >
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: '#e32b3c' }}
              className="p-4 bg-[#101010] border border-[#292323] transition-colors"
            >
              <div className="font-display text-3xl sm:text-4xl text-[#f2efeb] mb-1">
                <Counter value={stat.value} />
              </div>
              <div className="text-xs font-bold uppercase tracking-wider text-white">
                {stat.label}
              </div>
              <div className="text-[11px] font-mono text-[#a09c9a] mt-0.5">
                {stat.subtext}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <div className="flex items-center justify-between pt-10 text-xs font-mono text-[#a09c9a]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-[#e32b3c]" />
            <span>SCROLL TO EXPLORE ARCHITECTURE</span>
          </div>
          <a
            href="#projects"
            onMouseEnter={() => sounds.hover()}
            className="hover:text-white transition-colors"
            aria-label="Scroll"
          >
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};
