import React from 'react';
import { MapPin, Globe, Sparkles, Award, Terminal, Code2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-4 max-w-6xl mx-auto relative">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
        {/* Left Column: Story */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 font-mono text-xs mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind The Code</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-6">
            Building with high standards, speed, and real-world impact.
          </h2>

          <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
            <p>
              I am <span className="text-white font-medium">{PERSONAL_INFO.name}</span>, a full-stack engineer and AI system builder based in <span className="text-cyan-400">{PERSONAL_INFO.location}</span>. My core engineering philosophy is simple: <em className="text-slate-100">"Build software that delivers instant clarity, flawless ergonomics, and rock-solid reliability."</em>
            </p>
            <p>
              Over the last few years, I have architected and deployed autonomous tools like <span className="text-cyan-300 font-medium">ToolMatrix AI</span> (indexing and benchmarking 40+ AI models for users worldwide), <span className="text-purple-300 font-medium">SlideCraft AI</span> (enabling students to produce Gamma-style presentations and native PowerPoint decks in seconds), and <span className="text-emerald-300 font-medium">Milo</span> (a privacy-centric adult social hub powered by Supabase &amp; PostgreSQL RLS).
            </p>
            <p>
              Whether it’s designing complex database schemas, integrating LLM agent loops, or writing reactive, 60fps React frontends with 21st century design tokens, I treat every pixel and API route with craft.
            </p>
          </div>

          {/* Quick Info Badges */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t border-white/10 font-mono text-xs">
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block text-[10px]">HQ LOCATION</span>
              <span className="text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                Ayodhya, India
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
              <span className="text-slate-500 block text-[10px]">TIMEZONE</span>
              <span className="text-slate-200 font-semibold flex items-center gap-1.5 mt-0.5">
                <Globe className="w-3.5 h-3.5 text-indigo-400" />
                IST (UTC+5:30)
              </span>
            </div>
            <div className="p-3 rounded-xl bg-white/[0.02] border border-white/5 col-span-2 sm:col-span-1">
              <span className="text-slate-500 block text-[10px]">AVAILABILITY</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Open for Hire
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: 21st Bento Style Visual Card */}
        <div className="lg:col-span-5">
          <div className="p-7 rounded-3xl bg-gradient-to-b from-[#0F172A] to-[#070D18] border border-cyan-500/20 shadow-2xl relative overflow-hidden group">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/10 blur-2xl rounded-full pointer-events-none" />

            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-600 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20">
                <div className="w-full h-full bg-[#0B1120] rounded-[14px] flex items-center justify-center font-mono font-bold text-xl text-white">
                  ST
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <span>{PERSONAL_INFO.name}</span>
                </h3>
                <p className="text-xs text-cyan-400 font-mono">@{PERSONAL_INFO.handle}</p>
                <p className="text-xs text-slate-400 mt-0.5 font-sans">Full-Stack &amp; AI Builder</p>
              </div>
            </div>

            {/* Quick Highlights list */}
            <div className="space-y-3 font-mono text-xs">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Founder &amp; Creator</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Shipped ToolMatrix AI, SlideCraft AI &amp; Milo from zero to live production.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Code2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Full-Stack &amp; AI Stack</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">React, TypeScript, Tailwind, Python, FastAPI, Supabase, Google Gemini API.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5">
                <Award className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="text-white font-semibold">Ready for Scale</span>
                  <p className="text-[11px] text-slate-400 mt-0.5">Available for full-time software engineering roles, contracts, and AI initiatives.</p>
                </div>
              </div>
            </div>

            {/* Quote banner */}
            <div className="mt-6 pt-5 border-t border-white/10 text-center">
              <p className="text-xs italic text-slate-400">
                "Code with purpose, build with passion." 💫
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
