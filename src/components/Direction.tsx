import React, { useState } from 'react';
import { performanceFocusAreas } from '../data/portfolioData';
import { ArrowUpRight, Check, Target, Layers, BarChart3, FlaskConical, ShieldCheck } from 'lucide-react';

export const Direction: React.FC = () => {
  const [activeArea, setActiveArea] = useState<string>("01");

  const icons: Record<string, React.ElementType> = {
    "01": Target,
    "02": Layers,
    "03": BarChart3,
    "04": FlaskConical
  };

  return (
    <section id="direction" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-[#9A6BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            02 / THE DIRECTION
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-3xl leading-[1.12]">
              “From creative ideas to measurable possibilities.”
            </h2>
          </div>
          <p className="text-sm text-[#A6B0C8] max-w-md font-sans leading-relaxed">
            Four foundational focus areas guiding my active development from digital marketing fundamentals into data-driven performance marketing.
          </p>
        </div>

        {/* 4 Distinct Focus Areas - Futuristic Numbered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {performanceFocusAreas.map((area) => {
            const Icon = icons[area.number];
            const isSelected = activeArea === area.number;

            return (
              <div
                key={area.number}
                onClick={() => setActiveArea(area.number)}
                className={`cursor-pointer transition-all duration-300 p-6 sm:p-7 rounded-2xl border flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#151D32] border-[#37E7FF] shadow-[0_0_30px_-5px_rgba(55,231,255,0.25)] -translate-y-1.5'
                    : 'glass-panel hover:bg-[#151D32]/80 hover:border-[#37E7FF]/40'
                }`}
              >
                <div>
                  {/* Top: Oversized Numeral & Cyber Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-[rgba(180,200,255,0.12)]">
                    <span
                      className="font-display font-extrabold text-4xl sm:text-5xl tracking-tighter"
                      style={{ color: area.glowColor }}
                    >
                      {area.number}
                    </span>
                    <div
                      className="p-2.5 rounded-xl border transition-colors bg-[#080B14]"
                      style={{ borderColor: `${area.glowColor}40`, color: area.glowColor }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Status Indicator Pill */}
                  <div className="mt-4 mb-3">
                    <span
                      className="inline-block text-[10px] font-mono font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full border"
                      style={{
                        borderColor: `${area.glowColor}40`,
                        color: area.glowColor,
                        backgroundColor: `${area.glowColor}10`
                      }}
                    >
                      {area.status}
                    </span>
                  </div>

                  {/* Area Title */}
                  <h3 className="font-display font-bold text-lg text-[#F5F7FF] mb-2.5">
                    {area.title}
                  </h3>

                  {/* Core Summary */}
                  <p className="text-xs sm:text-sm text-[#A6B0C8] leading-relaxed mb-6 font-normal">
                    {area.summary}
                  </p>
                </div>

                {/* Sub-points list */}
                <div className="pt-4 border-t border-[rgba(180,200,255,0.1)] space-y-2">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6B0C8] block font-semibold">
                    Core Focus Points
                  </span>
                  {area.details.map((point, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#F5F7FF]">
                      <Check className="w-3.5 h-3.5 text-[#37E7FF] shrink-0 mt-0.5" />
                      <span className="leading-tight">{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Grounding Annotation Note */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-[#101527] border border-[rgba(180,200,255,0.14)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-4 h-4 text-[#D7FF62]" />
            <span className="text-xs font-mono uppercase tracking-wider text-[#F5F7FF] font-semibold">
              Grounded Commitment
            </span>
            <span className="text-xs text-[#A6B0C8]">
              Presented as active platform exposure and disciplined learning—no overstated campaign ownership or speculative metrics.
            </span>
          </div>
          <a
            href="#skills"
            className="text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF] hover:text-[#F5F7FF] inline-flex items-center gap-1 shrink-0"
          >
            <span>View Tool Matrix</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
