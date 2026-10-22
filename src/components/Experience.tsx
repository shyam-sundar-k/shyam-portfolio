import React from 'react';
import { experienceItems } from '../data/portfolioData';
import { Briefcase, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient glow */}
      <div className="absolute top-1/4 -right-32 w-80 h-80 bg-[#37E7FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            03 / THE JOURNEY
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-2xl leading-[1.12]">
              “Every experience adds another perspective.”
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A6B0C8] bg-[#101527] px-3.5 py-2 rounded-lg border border-[rgba(180,200,255,0.16)]">
            <ShieldCheck className="w-4 h-4 text-[#D7FF62]" />
            <span>Strictly verified professional timeline</span>
          </div>
        </div>

        {/* Vertical Timeline with Illuminated Neon Nodes */}
        <div className="relative border-l-2 border-[rgba(180,200,255,0.16)] ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experienceItems.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Illuminated Timeline Marker Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                  item.isCurrent
                    ? 'bg-[#37E7FF] border-[#080B14] ring-4 ring-[#37E7FF]/40 shadow-[0_0_12px_#37E7FF]'
                    : 'bg-[#151D32] border-[#A6B0C8] group-hover:border-[#37E7FF] group-hover:shadow-[0_0_10px_#37E7FF]'
                }`}
              />

              {/* Date Label on Desktop */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-[#A6B0C8] uppercase tracking-wider mb-2 md:mb-0 md:w-28 md:text-right">
                {item.period}
              </div>

              {/* Main Role Card */}
              <div
                className={`p-6 sm:p-8 rounded-2xl border transition-all duration-300 ${
                  item.isCurrent
                    ? 'glass-panel-elevated border-[#37E7FF]/40 shadow-[0_0_30px_-8px_rgba(55,231,255,0.2)]'
                    : 'glass-panel hover:border-[#37E7FF]/40 hover:bg-[#151D32]/60'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-[#37E7FF]/20 text-[#37E7FF] border border-[#37E7FF]/40 px-2 py-0.5 rounded-sm">
                          <Sparkles className="w-3 h-3" />
                          Current Role
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#A6B0C8] md:hidden">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F7FF]">
                      {item.role}
                    </h3>
                    <p className="font-medium text-sm sm:text-base text-[#F5F7FF]/90 flex items-center gap-2 mt-0.5">
                      <Briefcase className="w-4 h-4 text-[#37E7FF]" />
                      <span>{item.company}</span>
                      <span className="text-[rgba(180,200,255,0.3)]">·</span>
                      <span className="text-xs text-[#A6B0C8] flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-[#9A6BFF]" />
                        {item.location}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm sm:text-base text-[#A6B0C8] leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#37E7FF] block font-semibold">
                    Key Contributions & Verified Scope
                  </span>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs sm:text-sm text-[#F5F7FF] flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#37E7FF] mt-1.5 shrink-0" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Platforms */}
                <div className="pt-4 border-t border-[rgba(180,200,255,0.12)] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold mr-1">
                    Platforms & Tech:
                  </span>
                  {item.toolsAndPlatforms.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono bg-[#080B14] text-[#37E7FF] px-2.5 py-1 rounded-md border border-[rgba(55,231,255,0.25)] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Integrity Note */}
                {item.note && (
                  <div className="mt-4 pt-3 border-t border-dashed border-[rgba(180,200,255,0.12)] text-[11px] font-mono text-[#A6B0C8] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D7FF62]" />
                    <span>{item.note}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
