import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Terminal, Shield, Zap } from 'lucide-react';
import { SOFTWARE_STACK } from '../data/portfolioData';
import { sounds } from '../utils/sound';

export const SoftwareSection: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#292323]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4"
      >
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>[05] TECHNICAL CORE</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[#f2efeb] tracking-tight">
            SOFTWARE &amp; STACK
          </h2>
          <p className="text-sm sm:text-base text-[#a09c9a] mt-2 max-w-xl font-normal">
            Every tool in the stack is chosen for maximum velocity, type safety, low latency, and deterministic reliability.
          </p>
        </div>

        <div className="text-xs font-mono text-[#a09c9a] uppercase tracking-widest">
          PROFICIENCY METRICS // 2026 BENCHMARK
        </div>
      </motion.div>

      {/* Software Rows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
        {SOFTWARE_STACK.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.05 }}
            whileHover={{ y: -4, borderColor: '#e32b3c' }}
            onMouseEnter={() => sounds.hover()}
            className="p-5 bg-[#101010] border border-[#292323] transition-colors group"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="font-display text-lg text-white group-hover:text-[#ff5d65] transition-colors">
                {item.name}
              </span>
              <span className="text-xs font-mono text-[#e32b3c] font-bold">
                {item.level}
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#a09c9a] mb-3">
              {item.category}
            </div>
            {/* Progress Bar in Renando Red with Animated Width */}
            <div className="w-full h-1 bg-[#1c1c1c] overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: item.level }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.2 + idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
                className="h-full bg-gradient-to-r from-[#ca2032] to-[#e32b3c]"
              />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Engineering Philosophy Row */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="p-8 bg-[#101010] border border-[#292323] grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs"
      >
        <div className="flex items-start gap-3">
          <Terminal className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-1">Type-Safe &amp; Clean</h4>
            <p className="text-[#a09c9a] leading-relaxed">
              Strict schemas and defensive typing across both frontend and Python FastAPI backends.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Shield className="w-5 h-5 text-[#ff5d65] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-1">Privacy &amp; RLS By Default</h4>
            <p className="text-[#a09c9a] leading-relaxed">
              PostgreSQL Row Level Security policies guaranteeing strict tenant and user boundary isolation.
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <Zap className="w-5 h-5 text-[#e32b3c] shrink-0 mt-0.5" />
          <div>
            <h4 className="text-white font-bold uppercase text-sm mb-1">Sub-Second Responsiveness</h4>
            <p className="text-[#a09c9a] leading-relaxed">
              Optimized Vite builds, instant cached queries, and fluid 60fps micro-interactions.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
