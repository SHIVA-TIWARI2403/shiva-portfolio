import React from 'react';
import { Award, Briefcase, MapPin } from 'lucide-react';
import { MILESTONES, EXPERIENCES } from '../data/portfolioData';

export const MilestonesSection: React.FC = () => {
  return (
    <section id="milestones" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto border-b border-[#292323]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left: Milestones & Recognitions (Renando Style .recognition) */}
        <div className="lg:col-span-7">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <Award className="w-3.5 h-3.5" />
            <span>[03] MILESTONES &amp; RECOGNITIONS</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#f2efeb] tracking-tight mb-8">
            HONORS &amp; ACHIEVEMENTS
          </h2>

          <div className="space-y-4">
            {MILESTONES.map((item, idx) => (
              <div
                key={idx}
                className="p-5 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] transition-all flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-display text-lg text-[#e32b3c]">
                      {item.year}
                    </span>
                    <span className="text-xs font-mono text-[#a09c9a]">
                      // {item.organization}
                    </span>
                  </div>
                  <h4 className="font-display text-lg sm:text-xl text-white group-hover:text-[#ff5d65] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#a09c9a] mt-1 max-w-xl">
                    {item.description}
                  </p>
                </div>

                {item.badge && (
                  <span className="shrink-0 px-3 py-1 bg-[#161616] border border-[#292323] text-[10px] font-mono text-[#ff5d65] uppercase tracking-wider self-start sm:self-center">
                    {item.badge}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Experience Timeline (.experience-row) */}
        <div id="experience" className="lg:col-span-5">
          <div className="flex items-center gap-2 text-xs font-mono text-[#e32b3c] uppercase tracking-widest mb-2">
            <Briefcase className="w-3.5 h-3.5" />
            <span>[04] CAREER PATHWAY</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl text-[#f2efeb] tracking-tight mb-8">
            EXPERIENCE
          </h2>

          <div className="space-y-6">
            {EXPERIENCES.map((exp, idx) => (
              <div
                key={idx}
                className="p-6 bg-[#101010] border border-[#292323] hover:border-[#e32b3c] transition-all relative group"
              >
                <div className="text-xs font-mono text-[#e32b3c] mb-1">
                  {exp.period}
                </div>
                <h3 className="font-display text-2xl text-white group-hover:text-[#ff5d65] transition-colors">
                  {exp.role}
                </h3>
                <div className="text-xs font-mono text-[#a09c9a] flex items-center gap-2 mt-1 mb-3">
                  <span>{exp.company}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3 h-3 text-[#e32b3c]" />
                    {exp.location}
                  </span>
                </div>
                <p className="text-xs text-[#f2efeb]/80 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
