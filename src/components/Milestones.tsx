import React from 'react';
import { personalInfo, achievements } from '../data/portfolioData';
import { GraduationCap, Trophy, Award, Flame, CheckCircle2 } from 'lucide-react';

export const Milestones: React.FC = () => {
  const getIcon = (type: string) => {
    switch (type) {
      case 'award':
        return Trophy;
      case 'event':
        return Flame;
      case 'sport':
        return Award;
      default:
        return CheckCircle2;
    }
  };

  return (
    <section id="milestones" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-[#D7FF62]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            06 / MILESTONES
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-2xl leading-[1.12]">
              “The foundations behind the ambition.”
            </h2>
          </div>
          <p className="text-sm text-[#A6B0C8] max-w-md font-sans leading-relaxed">
            Formal engineering education, collegiate athletic leadership, and competitive management milestones.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Formal Education & Academic Rigor */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#37E7FF] block font-semibold pb-2 border-b border-[rgba(180,200,255,0.12)]">
              Academic Qualification
            </span>

            {/* Main Degree Card */}
            <div className="p-7 rounded-2xl glass-panel-elevated border border-[rgba(180,200,255,0.2)] shadow-xl relative overflow-hidden group hover:border-[#37E7FF]/60 transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-[#080B14] rounded-xl border border-[rgba(180,200,255,0.15)] text-[#37E7FF]">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#A6B0C8] block uppercase">
                    {personalInfo.education.period}
                  </span>
                  <span className="inline-block text-xs font-mono font-bold text-[#080B14] bg-[#D7FF62] px-2 py-0.5 rounded-sm mt-1">
                    CGPA: {personalInfo.education.cgpa}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#F5F7FF] mb-1">
                {personalInfo.education.degree}
              </h3>
              <p className="text-sm text-[#A6B0C8] font-medium mb-4">
                {personalInfo.education.college}
              </p>

              <div className="pt-4 border-t border-[rgba(180,200,255,0.12)] text-xs text-[#A6B0C8] leading-relaxed space-y-2">
                <p>
                  Interdisciplinary engineering degree blending software computation with strategic business management, financial modeling, and marketing systems.
                </p>
                <div className="flex items-center gap-2 text-[#F5F7FF] font-mono text-[11px] pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#37E7FF]" />
                  <span>Comprehensive coursework in computer engineering & enterprise systems</span>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-5 rounded-xl glass-panel border border-[rgba(180,200,255,0.14)] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] block">
                  Course Certification
                </span>
                <h4 className="font-display font-bold text-base text-[#F5F7FF]">
                  Joy of Computing
                </h4>
                <p className="text-xs text-[#A6B0C8]">NPTEL · Foundational Computational Logic</p>
              </div>
              <span className="text-[11px] font-mono bg-[#37E7FF]/20 text-[#37E7FF] border border-[#37E7FF]/40 px-2.5 py-1 rounded-sm font-semibold">
                Completed
              </span>
            </div>

          </div>

          {/* Right Column: Achievements & Honors List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#37E7FF] block font-semibold pb-2 border-b border-[rgba(180,200,255,0.12)]">
              Honors, Competitions & Athletic Merits
            </span>

            <div className="space-y-4">
              {achievements.map((item, idx) => {
                const Icon = getIcon(item.type);
                const isWinner = item.type === 'award';

                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-2xl border transition-all duration-300 ${
                      isWinner
                        ? 'glass-panel-elevated border-[#D7FF62]/40 shadow-[0_0_20px_-5px_rgba(215,255,98,0.2)]'
                        : 'glass-panel hover:border-[#37E7FF]/40 hover:bg-[#151D32]/70'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2.5 rounded-xl border ${
                          isWinner
                            ? 'bg-[#D7FF62]/15 text-[#D7FF62] border-[#D7FF62]/40'
                            : 'bg-[#080B14] text-[#37E7FF] border-[rgba(180,200,255,0.15)]'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-lg text-[#F5F7FF]">
                            {item.title}
                          </h4>
                          <span className="text-xs text-[#A6B0C8] font-medium">
                            {item.organization} · {item.periodOrYear}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-xs font-bold ${
                          isWinner
                            ? 'bg-[#D7FF62] text-[#080B14]'
                            : 'bg-[#151D32] text-[#37E7FF] border border-[#37E7FF]/30'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A6B0C8] leading-relaxed mt-3 pl-12 font-normal">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
