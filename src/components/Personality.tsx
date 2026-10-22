import React from 'react';
import { personalityPillars } from '../data/portfolioData';
import { Trophy, Code2, Globe, Languages } from 'lucide-react';

export const Personality: React.FC = () => {
  const icons = [Trophy, Code2, Globe, Languages];

  return (
    <section className="py-20 sm:py-28 bg-[#EAE9E1] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            DIMENSIONS · BEYOND THE WORK
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        {/* Headline & Philosophy */}
        <div className="max-w-3xl mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight mb-6 leading-[1.15]">
            “Curiosity doesn't clock out.”
          </h2>
          <p className="text-base sm:text-lg text-[#171815]/90 leading-relaxed font-normal">
            “From the football field to the world of digital products, I enjoy exploring how people think, how technology works, and how ideas become meaningful experiences.”
          </p>
        </div>

        {/* 4 Understated Facets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personalityPillars.map((item, idx) => {
            const Icon = icons[idx];

            return (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-xl bg-[#F6F5F0] border border-[#DADAD2] hover:border-[#171815] transition-all duration-200 flex flex-col justify-between group shadow-xs hover:shadow-md"
              >
                <div>
                  {/* Top line with Icon and Tag */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#DADAD2]">
                    <div className="p-2 rounded-lg bg-[#EAE9E1] group-hover:bg-[#C5ED70] transition-colors border border-[#DADAD2]">
                      <Icon className="w-4 h-4 text-[#171815]" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#6D6D65] font-semibold">
                      0{idx + 1}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold mb-1">
                    {item.category}
                  </span>

                  <h3 className="font-display font-bold text-lg text-[#171815] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6D6D65] leading-relaxed mb-6 font-normal">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#DADAD2]/60">
                  <span className="inline-block text-[10px] font-mono uppercase tracking-wider text-[#171815] bg-[#EAE9E1] px-2 py-0.5 rounded-sm font-semibold">
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
