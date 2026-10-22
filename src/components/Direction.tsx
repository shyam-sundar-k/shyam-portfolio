import React, { useState } from 'react';
import { performanceFocusAreas } from '../data/portfolioData';
import { ArrowUpRight, Check, Target, Layers, BarChart3, FlaskConical } from 'lucide-react';

export const Direction: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>("01");

  const icons: Record<string, React.ElementType> = {
    "01": Target,
    "02": Layers,
    "03": BarChart3,
    "04": FlaskConical
  };

  return (
    <section id="direction" className="py-20 sm:py-28 bg-[#EAE9E1] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            02 / WHERE I'M HEADING
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight max-w-3xl leading-[1.15]">
              “Turning attention into understanding — and understanding into action.”
            </h2>
          </div>
          <p className="text-sm text-[#6D6D65] max-w-md font-sans leading-relaxed">
            Four foundational focus areas guiding my active development from digital marketing fundamentals into data-driven performance marketing.
          </p>
        </div>

        {/* 4 Distinct Focus Areas - Editorial Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceFocusAreas.map((area) => {
            const Icon = icons[area.number];
            const isSelected = activeArea === area.number;

            return (
              <div
                key={area.number}
                onClick={() => setActiveArea(area.number)}
                className={`cursor-pointer transition-all duration-300 p-6 sm:p-7 rounded-xl border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#F6F5F0] border-[#171815] shadow-lg -translate-y-1'
                    : 'bg-[#F6F5F0]/70 border-[#DADAD2] hover:bg-[#F6F5F0] hover:border-[#171815]/50'
                }`}
              >
                <div>
                  {/* Top Bar: Oversized Numeral & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[#DADAD2]">
                    <span className="font-display font-extrabold text-4xl sm:text-5xl text-[#171815] tracking-tighter">
                      {area.number}
                    </span>
                    <div className={`p-2.5 rounded-lg border transition-colors ${
                      isSelected ? 'bg-[#C5ED70] border-[#171815]' : 'bg-[#EAE9E1] border-[#DADAD2]'
                    }`}>
                      <Icon className="w-5 h-5 text-[#171815]" />
                    </div>
                  </div>

                  {/* Status Indicator Pill */}
                  <div className="mt-4 mb-3">
                    <span className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EAE9E1] text-[#171815] border border-[#DADAD2]">
                      {area.status}
                    </span>
                  </div>

                  {/* Area Title */}
                  <h3 className="font-display font-bold text-xl text-[#171815] mb-3">
                    {area.title}
                  </h3>

                  {/* Core Summary */}
                  <p className="text-xs sm:text-sm text-[#6D6D65] leading-relaxed mb-6">
                    {area.summary}
                  </p>
                </div>

                {/* Sub-points list */}
                <div className="pt-4 border-t border-[#DADAD2]/70 space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold">
                    Core Focus Points
                  </span>
                  {area.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#171815]">
                      <Check className="w-3.5 h-3.5 text-[#6D6D65] shrink-0 mt-0.5" />
                      <span className="leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounding Annotation Note */}
        <div className="mt-12 p-4 sm:p-5 bg-[#F6F5F0] border border-[#DADAD2] rounded-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C5ED70]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#171815] font-semibold">
              Grounded Commitment
            </span>
            <span className="text-xs text-[#6D6D65]">
              Presented as active platform exposure and disciplined learning—no overstated campaign ownership or speculative metrics.
            </span>
          </div>
          <a
            href="#skills"
            className="text-xs font-bold font-mono uppercase tracking-wider text-[#171815] hover:text-[#6D6D65] inline-flex items-center gap-1 shrink-0"
          >
            <span>View Tool Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
