import React, { useState } from 'react';
import { Github, ArrowUpRight, Search } from 'lucide-react';
import { FEATURED_PROJECTS } from '../data/portfolioData';

export const ProjectsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'ALL' | 'AI & ML' | 'Full-Stack' | 'Systems'>('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = FEATURED_PROJECTS.filter((project) => {
    const matchesTab = activeTab === 'ALL' || project.category === activeTab;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesTab && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#292323]">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <span>[01] SELECTED WORKS</span>
            <span>//</span>
            <span>PRODUCTION INDEX</span>
          </div>
          <h2 className="font-display text-4xl sm:text-6xl text-[#f2efeb] tracking-tight">
            FLAGSHIP SOFTWARE
          </h2>
          <p className="text-sm sm:text-base text-[#a09c9a] mt-2 max-w-xl font-normal">
            Production systems, comparative benchmarking engines, and autonomous tools designed and shipped by Shiva Tiwari.
          </p>
        </div>

        {/* Toolbar: Category Filter & Search Box (Renando Style) */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Search Box */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#a09c9a]" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Filter by tech or keyword..."
              className="w-full sm:w-56 pl-9 pr-3 py-2 bg-[#101010] border border-[#292323] text-xs font-mono text-white placeholder-[#a09c9a] focus:outline-none focus:border-[#e32b3c]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex bg-[#101010] border border-[#292323] p-1">
            {(['ALL', 'AI & ML', 'Full-Stack', 'Systems'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-[#e32b3c] text-white font-bold'
                    : 'text-[#a09c9a] hover:text-white'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project) => {
          const isLarge = project.id === 'toolmatrix-ai' || project.id === 'slidecraft-ai';

          return (
            <div
              key={project.id}
              className={`group bg-[#101010] border border-[#292323] hover:border-[#e32b3c] p-6 flex flex-col justify-between transition-all duration-300 relative overflow-hidden ${
                isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
              }`}
            >
              {/* Subtle crimson corner accent */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#e32b3c]/10 to-transparent pointer-events-none" />

              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs font-mono pb-3 mb-4 border-b border-[#292323]">
                  <span className="text-[#e32b3c]">{project.tag}</span>
                  <span className="text-[#a09c9a]">{project.year} // {project.role}</span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl sm:text-3xl text-white group-hover:text-[#ff5d65] transition-colors mb-1">
                  {project.title}
                </h3>
                <p className="text-xs font-mono text-[#a09c9a] mb-4">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-sm text-[#f2efeb]/80 leading-relaxed mb-6 font-normal">
                  {project.description}
                </p>

                {/* Metrics Badge */}
                <div className="inline-block px-3 py-1 bg-[#161616] border border-[#292323] text-[11px] font-mono text-[#f2efeb] mb-6">
                  {project.metrics}
                </div>
              </div>

              {/* Card Footer: Tech Tags & Links */}
              <div className="pt-4 border-t border-[#292323] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-mono px-2 py-0.5 bg-[#161616] text-[#a09c9a] border border-[#292323]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="solid-crimson-button px-3.5 py-1.5 text-xs flex items-center gap-1.5"
                    >
                      <span>Launch App</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  )}
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 bg-[#161616] border border-[#292323] text-[#a09c9a] hover:text-white hover:border-[#e32b3c] transition-colors"
                    title="Source Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
