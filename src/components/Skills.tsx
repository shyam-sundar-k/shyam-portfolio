import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Check, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = ['All', 'Marketing & Ads', 'Analytics & SEO', 'Content & Design', 'Technical'];

  const filterCategory = (categoryName: string) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Marketing & Ads') {
      return categoryName === 'DIGITAL MARKETING' || categoryName === 'ADVERTISING & ANALYTICS';
    }
    if (selectedFilter === 'Analytics & SEO') {
      return categoryName === 'ADVERTISING & ANALYTICS' || categoryName === 'SEO & WEB';
    }
    if (selectedFilter === 'Content & Design') {
      return categoryName === 'CONTENT & COMMUNICATION' || categoryName === 'DESIGN & PRODUCTIVITY';
    }
    if (selectedFilter === 'Technical') {
      return categoryName === 'TECHNICAL FOUNDATION' || categoryName === 'SEO & WEB';
    }
    return true;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-10 w-96 h-96 bg-[#37E7FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            05 / THE TOOLKIT
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-2xl leading-[1.12]">
              “A mix of creative, technical, and analytical thinking.”
            </h2>
          </div>
          <div className="text-xs text-[#A6B0C8] max-w-md font-sans">
            Categorized by practical discipline. Honest capability labeling without arbitrary percentage bars or vanity scores.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[rgba(180,200,255,0.12)]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold mr-2">
            View Filter:
          </span>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-[#37E7FF] text-[#080B14] shadow-[0_0_15px_rgba(55,231,255,0.4)]'
                  : 'bg-[#101527] text-[#A6B0C8] hover:text-[#F5F7FF] border border-[rgba(180,200,255,0.14)]'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skill Matrix Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories
            .filter((cat) => filterCategory(cat.category))
            .map((cat, idx) => (
              <div
                key={idx}
                className="glass-panel p-6 sm:p-7 rounded-2xl border hover:border-[#37E7FF]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_-5px_rgba(55,231,255,0.15)]"
              >
                <div>
                  {/* Category Header */}
                  <div className="pb-4 mb-4 border-b border-[rgba(180,200,255,0.12)]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#37E7FF] block font-semibold">
                      Category {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#F5F7FF]">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-[#A6B0C8] mt-1 leading-relaxed font-normal">
                      {cat.description}
                    </p>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => {
                      const isExposure = skill.tag === 'Platform Exposure';
                      return (
                        <div
                          key={sIdx}
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B14]/60 hover:bg-[#080B14] transition-colors border border-[rgba(180,200,255,0.08)] hover:border-[rgba(55,231,255,0.3)]"
                        >
                          <span className="text-xs sm:text-sm font-medium text-[#F5F7FF]">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold ${
                                isExposure
                                  ? 'bg-[#37E7FF]/15 text-[#37E7FF] border border-[#37E7FF]/30'
                                  : 'bg-[#151D32] text-[#A6B0C8] border border-[rgba(180,200,255,0.1)]'
                              }`}
                            >
                              {skill.tag}
                            </span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer status */}
                <div className="pt-4 mt-6 border-t border-[rgba(180,200,255,0.1)] flex items-center justify-between text-[11px] font-mono text-[#A6B0C8]">
                  <span>{cat.skills.length} Capabilities</span>
                  <span className="flex items-center gap-1 text-[#D7FF62]">
                    <Check className="w-3 h-3" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Framing & Integrity Note */}
        <div className="mt-12 p-4 rounded-xl bg-[#101527] border border-[rgba(180,200,255,0.14)] flex items-start gap-3">
          <Info className="w-4 h-4 text-[#37E7FF] shrink-0 mt-0.5" />
          <div className="text-xs text-[#A6B0C8] leading-relaxed">
            <strong className="text-[#F5F7FF] font-semibold">Platform Exposure Distinction: </strong>
            Tools tagged with <span className="bg-[#37E7FF]/20 text-[#37E7FF] px-1.5 py-0.5 rounded-xs font-mono font-semibold">Platform Exposure</span> indicate active hands-on familiarity and campaign setup practice, intentionally distinguished from claims of senior campaign ownership.
          </div>
        </div>

      </div>
    </section>
  );
};
