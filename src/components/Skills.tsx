import { useState } from 'react';
import { skillCategories } from '../data/portfolioData';
import { Check, Info } from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('All');

  const filterTabs = ['All', 'Marketing & Ads', 'Analytics & SEO', 'Content & Design', 'Technical'];

  const filterCategory = (categoryName: string) => {
    if (selectedFilter === 'All') return true;
    if (selectedFilter === 'Marketing & Ads') {
      return categoryName === 'Digital Marketing' || categoryName === 'Advertising & Analytics';
    }
    if (selectedFilter === 'Analytics & SEO') {
      return categoryName === 'Advertising & Analytics' || categoryName === 'SEO & Web';
    }
    if (selectedFilter === 'Content & Design') {
      return categoryName === 'Content & Communication' || categoryName === 'Design & Productivity';
    }
    if (selectedFilter === 'Technical') {
      return categoryName === 'Technical Foundation' || categoryName === 'SEO & Web';
    }
    return true;
  };

  return (
    <section id="skills" className="py-20 sm:py-28 bg-[#EAE9E1] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            05 / MY TOOLKIT
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight max-w-2xl leading-[1.15]">
              “Creative execution, technical curiosity, and analytical foundations.”
            </h2>
          </div>
          <div className="text-xs text-[#6D6D65] max-w-md font-sans">
            Categorized by practical discipline. Honest capability labeling without arbitrary percentage bars or vanity scores.
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-4 border-b border-[#DADAD2]">
          <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D6D65] font-semibold mr-2">
            View Filter:
          </span>
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedFilter(tab)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-semibold transition-all duration-200 cursor-pointer ${
                selectedFilter === tab
                  ? 'bg-[#171815] text-[#F6F5F0] shadow-xs'
                  : 'bg-[#F6F5F0] text-[#171815] hover:bg-[#DADAD2] border border-[#DADAD2]'
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
                className="bg-[#F6F5F0] p-6 sm:p-7 rounded-xl border border-[#DADAD2] hover:border-[#171815] transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Category Header */}
                  <div className="pb-4 mb-4 border-b border-[#DADAD2]">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold">
                      Category {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display font-bold text-lg text-[#171815]">
                      {cat.category}
                    </h3>
                    <p className="text-xs text-[#6D6D65] mt-1 leading-relaxed">
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
                          className="flex items-center justify-between p-2.5 rounded-lg bg-[#EAE9E1]/60 hover:bg-[#EAE9E1] transition-colors border border-transparent hover:border-[#DADAD2]"
                        >
                          <span className="text-xs sm:text-sm font-medium text-[#171815]">
                            {skill.name}
                          </span>
                          {skill.tag && (
                            <span
                              className={`text-[10px] font-mono px-2 py-0.5 rounded-xs font-semibold ${
                                isExposure
                                  ? 'bg-[#C5ED70] text-[#171815]'
                                  : 'bg-[#DADAD2] text-[#171815]'
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
                <div className="pt-4 mt-6 border-t border-[#DADAD2]/70 flex items-center justify-between text-[11px] font-mono text-[#6D6D65]">
                  <span>{cat.skills.length} Capabilities</span>
                  <span className="flex items-center gap-1 text-[#171815]">
                    <Check className="w-3 h-3 text-[#171815]" />
                    Verified
                  </span>
                </div>
              </div>
            ))}
        </div>

        {/* Framing & Integrity Note */}
        <div className="mt-12 p-4 bg-[#F6F5F0] border border-[#DADAD2] rounded-xl flex items-start gap-3">
          <Info className="w-4 h-4 text-[#171815] shrink-0 mt-0.5" />
          <div className="text-xs text-[#6D6D65] leading-relaxed">
            <strong className="text-[#171815] font-semibold">Platform Exposure Distinction: </strong>
            Tools tagged with <span className="bg-[#C5ED70] text-[#171815] px-1.5 py-0.5 rounded-xs font-mono font-semibold">Platform Exposure</span> indicate active hands-on familiarity and campaign setup practice, intentionally distinguished from claims of senior campaign ownership.
          </div>
        </div>

      </div>
    </section>
  );
};
