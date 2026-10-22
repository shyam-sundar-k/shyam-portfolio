import React from 'react';
import { personalityPillars } from '../data/portfolioData';
import { Trophy, Code2, Globe, Languages } from 'lucide-react';

export const Personality: React.FC = () => {
  const icons = [Trophy, Code2, Globe, Languages];
  const colors = ['#37E7FF', '#9A6BFF', '#D7FF62', '#FF6B9A'];

  return (
    <section className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-[#9A6BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            DIMENSIONS // BEYOND THE DESK
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Headline & Philosophy */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight mb-6 leading-[1.12]">
            “Curiosity doesn't clock out.”
          </h2>
          <p className="text-base sm:text-lg text-[#A6B0C8] leading-relaxed font-normal">
            “From the football field to the world of digital products, I enjoy exploring how people think, how technology works, and how ideas become meaningful experiences.”
          </p>
        </div>

        {/* 4 Understated Facets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityPillars.map((item, idx) => {
            const Icon = icons[idx];
            const color = colors[idx % colors.length];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl glass-panel border hover:border-[#37E7FF]/50 transition-all duration-300 flex flex-col justify-between group hover:shadow-[0_0_25px_-5px_rgba(55,231,255,0.15)] hover:-translate-y-1"
              >
                <div>
                  {/* Top line with Icon and Tag */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[rgba(180,200,255,0.1)]">
                    <div
                      className="p-2.5 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.15)] group-hover:scale-110 transition-transform"
                      style={{ color }}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6B0C8] block font-semibold mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-display font-bold text-lg text-[#F5F7FF] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#A6B0C8] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[rgba(180,200,255,0.1)]">
                  <span
                    className="inline-block text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm border font-semibold"
                    style={{ borderColor: `${color}40`, color, backgroundColor: `${color}10` }}
                  >
                    {item.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
