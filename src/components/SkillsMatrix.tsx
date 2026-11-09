import React from 'react';
import { Layout, Bot, Server, Cpu, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout': return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Bot': return <Bot className="w-5 h-5 text-purple-400" />;
      case 'Server': return <Server className="w-5 h-5 text-emerald-400" />;
      default: return <Cpu className="w-5 h-5 text-amber-400" />;
    }
  };

  return (
    <section id="skills" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-950/40 border border-indigo-500/30 text-indigo-400 font-mono text-xs mb-3">
          <span>Technical Arsenal</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
          Capabilities &amp; Core Stacks
        </h2>
        <p className="text-slate-400 mt-2 text-sm sm:text-base">
          From cutting-edge generative AI orchestration to bulletproof database architectures and dynamic frontends.
        </p>
      </div>

      {/* Grid of Skill Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
        {SKILL_CATEGORIES.map((category, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-[#0B1120]/80 border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group shadow-lg"
          >
            {/* Ambient Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-bl-full pointer-events-none" />

            {/* Header */}
            <div className="flex items-center gap-3.5 mb-4">
              <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 group-hover:scale-105 transition-transform">
                {getIcon(category.icon)}
              </div>
              <div>
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {category.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {category.description}
                </p>
              </div>
            </div>

            {/* Skills Pills */}
            <div className="flex flex-wrap gap-2 pt-2">
              {category.skills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className={`px-3 py-1.5 rounded-xl text-xs font-mono flex items-center gap-1.5 border transition-all ${
                    skill.highlight
                      ? 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 hover:border-cyan-400'
                      : 'bg-white/[0.03] text-slate-300 border-white/5 hover:border-white/15'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80" />
                  <span>{skill.name}</span>
                  <span className="text-[10px] text-slate-500 font-sans ml-1">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Engineering Philosophy Cards (21st Style) */}
      <div className="p-8 rounded-2xl bg-gradient-to-r from-cyan-950/20 via-[#0B1120] to-purple-950/20 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3.5 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
            <Zap className="w-6 h-6" />
          </div>
          <div>
            <h4 className="text-base font-bold text-white">Full Product Lifecycle Ownership</h4>
            <p className="text-xs text-slate-400 max-w-lg mt-0.5">
              Not just writing code—from data modeling and security guardrails to UI polish, continuous deployment, and real-time observability.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-6 text-xs font-mono text-slate-300">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>Type-Safe Always</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Privacy &amp; RLS First</span>
          </div>
        </div>
      </div>
    </section>
  );
};
