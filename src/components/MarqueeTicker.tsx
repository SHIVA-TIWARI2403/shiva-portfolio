import React from 'react';
import { motion } from 'framer-motion';

const ITEMS = [
  "FULL-STACK DEVELOPER",
  "GOOGLE GEMINI 3.8",
  "AUTONOMOUS AGENTS",
  "REACT 19",
  "SUPABASE REALTIME",
  "POSTGRESQL RLS",
  "PYTHON FASTAPI",
  "40+ MODELS BENCHMARKED",
  "VITE ENGINE",
  "AYODHYA INDIA"
];

export const MarqueeTicker: React.FC = () => {
  return (
    <div className="py-4 bg-[#090909] border-y border-[#292323] overflow-hidden select-none relative z-10">
      <div className="flex whitespace-nowrap">
        <motion.div
          className="flex items-center gap-8 shrink-0 font-display text-sm tracking-widest text-[#a09c9a]/70"
          animate={{ x: ['0%', '-50%'] }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            duration: 25,
            ease: 'linear',
          }}
        >
          {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((item, idx) => (
            <div key={idx} className="flex items-center gap-8">
              <span className="hover:text-white transition-colors cursor-default">
                {item}
              </span>
              <span className="w-1.5 h-1.5 bg-[#e32b3c] rounded-full inline-block" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
