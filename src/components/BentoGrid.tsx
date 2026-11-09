import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Presentation, Users, TrendingUp, Video, Gamepad2, ArrowRight } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';
import { Project } from '../types';

export const BentoGrid: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'AI & ML' | 'Full-Stack' | 'Systems & Tools'>('All');

  const filteredProjects = activeTab === 'All'
    ? FEATURED_PROJECTS
    : FEATURED_PROJECTS.filter(p => p.category === activeTab);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Presentation': return <Presentation className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5" />;
      case 'Video': return <Video className="w-5 h-5" />;
      default: return <Gamepad2 className="w-5 h-5" />;
    }
  };

  const getCardTheme = (color: Project['color']) => {
    switch (color) {
      case 'cyan':
        return {
          glow: 'group-hover:border-cyan-500/40 group-hover:shadow-cyan-950/40',
          badge: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
          iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
          gradient: 'from-cyan-500/10 via-transparent to-transparent'
        };
      case 'purple':
        return {
          glow: 'group-hover:border-purple-500/40 group-hover:shadow-purple-950/40',
          badge: 'bg-purple-500/10 text-purple-300 border-purple-500/20',
          iconBg: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
          gradient: 'from-purple-500/10 via-transparent to-transparent'
        };
      case 'emerald':
        return {
          glow: 'group-hover:border-emerald-500/40 group-hover:shadow-emerald-950/40',
          badge: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20',
          iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
          gradient: 'from-emerald-500/10 via-transparent to-transparent'
        };
      case 'amber':
        return {
          glow: 'group-hover:border-amber-500/40 group-hover:shadow-amber-950/40',
          badge: 'bg-amber-500/10 text-amber-300 border-amber-500/20',
          iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
          gradient: 'from-amber-500/10 via-transparent to-transparent'
        };
    }
  };

  return (
    <section id="projects" className="py-24 px-4 max-w-6xl mx-auto relative">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs mb-3">
            <span>21st Bento Grid</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400" />
            <span>Curated Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Flagship Engineering &amp; Products
          </h2>
          <p className="text-slate-400 mt-2 text-sm sm:text-base max-w-xl">
            Real production systems powering AI discovery, generative presentations, and high-concurrency communities.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-white/[0.03] border border-white/5">
          {(['All', 'AI & ML', 'Full-Stack', 'Systems & Tools'] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all ${
                activeTab === tab
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white hover:bg-white/[0.05]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Bento Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const theme = getCardTheme(project.color);
          const isLarge = project.id === 'toolmatrix-ai' || project.id === 'slidecraft-ai';

          return (
            <div
              key={project.id}
              className={`group relative rounded-2xl bg-[#0B1120]/90 border border-white/10 p-6 flex flex-col justify-between overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-1 ${theme.glow} ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Subtle accent corner glow */}
              <div
                className={`absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br ${theme.gradient} blur-3xl pointer-events-none rounded-full`}
              />

              {/* Card Header */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`p-2.5 rounded-xl border ${theme.iconBg}`}>
                      {getIcon(project.icon)}
                    </div>
                    <div>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-full border ${theme.badge}`}>
                        {project.tag}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-cyan-300 hover:border-cyan-500/30 transition-all"
                        title="View Live Application"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-lg bg-white/[0.04] border border-white/10 text-slate-300 hover:text-white hover:border-white/20 transition-all"
                      title="Inspect Source Code"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors mb-1.5 flex items-center gap-2">
                  <span>{project.title}</span>
                  {project.liveUrl && (
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400" title="Live Deployment" />
                  )}
                </h3>
                <p className="text-xs font-mono text-slate-400 mb-3 font-medium">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Key Metrics Pill */}
                {project.metrics && (
                  <div className="inline-block px-3 py-1 rounded-lg bg-white/[0.03] border border-white/5 font-mono text-[11px] text-slate-300 mb-6">
                    {project.metrics}
                  </div>
                )}
              </div>

              {/* Card Footer: Tech Tags + CTA */}
              <div className="pt-4 border-t border-white/5 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.liveUrl ? (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors ml-auto group/btn"
                  >
                    <span>Launch App</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-slate-200 transition-colors ml-auto group/btn"
                  >
                    <span>View GitHub</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
