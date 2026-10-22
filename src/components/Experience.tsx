import { experienceItems } from '../data/portfolioData';
import { Briefcase, MapPin, Sparkles, ShieldCheck } from 'lucide-react';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 sm:py-28 bg-[#F6F5F0] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            03 / PROFESSIONAL JOURNEY
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight max-w-2xl leading-[1.15]">
              “Learning through technology. Growing through marketing.”
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#6D6D65] bg-[#EAE9E1] px-3.5 py-2 rounded-lg border border-[#DADAD2]">
            <ShieldCheck className="w-4 h-4 text-[#171815]" />
            <span>Strictly verified timeline & responsibilities</span>
          </div>
        </div>

        {/* Editorial Vertical Timeline */}
        <div className="relative border-l-2 border-[#DADAD2] ml-4 sm:ml-8 md:ml-32 space-y-12">
          {experienceItems.map((item) => (
            <div key={item.id} className="relative pl-6 sm:pl-10 group">
              
              {/* Timeline Marker Node */}
              <div
                className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  item.isCurrent
                    ? 'bg-[#C5ED70] border-[#171815] ring-4 ring-[#C5ED70]/30'
                    : 'bg-[#F6F5F0] border-[#6D6D65] group-hover:border-[#171815]'
                }`}
              />

              {/* Date Label on Desktop (left offset badge) */}
              <div className="md:absolute md:-left-36 md:top-1 text-xs font-mono font-semibold text-[#6D6D65] uppercase tracking-wider mb-2 md:mb-0 md:w-28 md:text-right">
                {item.period}
              </div>

              {/* Main Role Card */}
              <div
                className={`p-6 sm:p-8 rounded-xl border transition-all duration-300 ${
                  item.isCurrent
                    ? 'bg-[#EAE9E1]/80 border-[#171815] shadow-md'
                    : 'bg-[#EAE9E1]/30 border-[#DADAD2] hover:bg-[#EAE9E1]/60 hover:border-[#171815]/40'
                }`}
              >
                {/* Header row */}
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      {item.isCurrent && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono font-bold uppercase tracking-widest bg-[#171815] text-[#C5ED70] px-2 py-0.5 rounded-xs">
                          <Sparkles className="w-3 h-3" />
                          Current Role
                        </span>
                      )}
                      <span className="text-xs font-mono text-[#6D6D65] md:hidden">
                        {item.period}
                      </span>
                    </div>

                    <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171815]">
                      {item.role}
                    </h3>
                    <p className="font-medium text-base text-[#171815]/90 flex items-center gap-2 mt-0.5">
                      <Briefcase className="w-4 h-4 text-[#6D6D65]" />
                      <span>{item.company}</span>
                      <span className="text-[#DADAD2]">·</span>
                      <span className="text-xs text-[#6D6D65] flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-sm sm:text-base text-[#171815]/80 leading-relaxed mb-6 font-normal">
                  {item.description}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-2.5 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D6D65] block font-semibold">
                    Key Contributions & Verified Scope
                  </span>
                  <ul className="space-y-2">
                    {item.responsibilities.map((resp, rIdx) => (
                      <li key={rIdx} className="text-xs sm:text-sm text-[#171815] flex items-start gap-2.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#171815] mt-1.5 shrink-0" />
                        <span className="leading-normal">{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tools & Platforms */}
                <div className="pt-4 border-t border-[#DADAD2] flex flex-wrap items-center gap-2">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-[#6D6D65] font-semibold mr-1">
                    Platforms & Tech:
                  </span>
                  {item.toolsAndPlatforms.map((tool, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs font-mono bg-[#F6F5F0] text-[#171815] px-2.5 py-1 rounded-md border border-[#DADAD2] font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>

                {/* Integrity Note */}
                {item.note && (
                  <div className="mt-4 pt-3 border-t border-dashed border-[#DADAD2] text-[11px] font-mono text-[#6D6D65] flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#6D6D65]" />
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
