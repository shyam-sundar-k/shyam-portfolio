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
    <section id="milestones" className="py-20 sm:py-28 bg-[#F6F5F0] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            06 / MILESTONES
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight max-w-2xl leading-[1.15]">
              “The foundation behind the ambition.”
            </h2>
          </div>
          <p className="text-sm text-[#6D6D65] max-w-md font-sans leading-relaxed">
            Formal engineering education, collegiate athletic leadership, and competitive management milestones.
          </p>
        </div>

        {/* Editorial Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Formal Education & Academic Rigor */}
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold pb-2 border-b border-[#DADAD2]">
              Academic Qualification
            </span>

            {/* Main Degree Card */}
            <div className="p-7 rounded-2xl bg-[#EAE9E1] border border-[#DADAD2] shadow-sm relative overflow-hidden group hover:border-[#171815] transition-colors">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="p-3 bg-[#F6F5F0] rounded-xl border border-[#DADAD2]">
                  <GraduationCap className="w-6 h-6 text-[#171815]" />
                </div>
                <div className="text-right">
                  <span className="text-xs font-mono font-bold text-[#6D6D65] block uppercase">
                    {personalInfo.education.period}
                  </span>
                  <span className="inline-block text-xs font-mono font-bold text-[#171815] bg-[#C5ED70] px-2 py-0.5 rounded-sm mt-1">
                    CGPA: {personalInfo.education.cgpa}
                  </span>
                </div>
              </div>

              <h3 className="font-display font-bold text-xl sm:text-2xl text-[#171815] mb-1">
                {personalInfo.education.degree}
              </h3>
              <p className="text-sm text-[#171815]/90 font-medium mb-4">
                {personalInfo.education.college}
              </p>

              <div className="pt-4 border-t border-[#DADAD2]/80 text-xs text-[#6D6D65] leading-relaxed space-y-2">
                <p>
                  Interdisciplinary engineering degree blending software computation with strategic business management, financial modeling, and marketing systems.
                </p>
                <div className="flex items-center gap-2 text-[#171815] font-mono text-[11px] pt-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#171815]" />
                  <span>Comprehensive coursework in computer engineering & enterprise structures</span>
                </div>
              </div>
            </div>

            {/* Certification Card */}
            <div className="p-5 rounded-xl bg-[#EAE9E1]/50 border border-[#DADAD2] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#6D6D65] block">
                  Course Certification
                </span>
                <h4 className="font-display font-bold text-base text-[#171815]">
                  Joy of Computing
                </h4>
                <p className="text-xs text-[#6D6D65]">NPTEL · Foundational Computational Logic</p>
              </div>
              <span className="text-[11px] font-mono bg-[#171815] text-[#C5ED70] px-2.5 py-1 rounded-sm font-semibold">
                Completed
              </span>
            </div>

          </div>

          {/* Right Column: Achievements & Honors List */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold pb-2 border-b border-[#DADAD2]">
              Honors, Competitions & Athletic Merits
            </span>

            <div className="space-y-4">
              {achievements.map((item, idx) => {
                const Icon = getIcon(item.type);
                const isWinner = item.type === 'award';

                return (
                  <div
                    key={idx}
                    className={`p-6 rounded-xl border transition-all duration-200 ${
                      isWinner
                        ? 'bg-[#EAE9E1] border-[#171815] shadow-xs'
                        : 'bg-[#EAE9E1]/40 border-[#DADAD2] hover:bg-[#EAE9E1]/70 hover:border-[#171815]/40'
                    }`}
                  >
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border ${
                          isWinner ? 'bg-[#C5ED70] border-[#171815]' : 'bg-[#F6F5F0] border-[#DADAD2]'
                        }`}>
                          <Icon className="w-4 h-4 text-[#171815]" />
                        </div>
                        <div>
                          <h4 className="font-display font-bold text-lg text-[#171815]">
                            {item.title}
                          </h4>
                          <span className="text-xs text-[#6D6D65] font-medium">
                            {item.organization} · {item.periodOrYear}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-xs font-bold ${
                          isWinner
                            ? 'bg-[#171815] text-[#C5ED70]'
                            : 'bg-[#DADAD2] text-[#171815]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#171815]/80 leading-relaxed mt-3 pl-11">
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
