import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Lightbulb, TrendingUp, CheckCircle2, Network, Sparkles } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: "Technical Foundation",
      subtitle: "CSBS & SYSTEMS LOGIC",
      desc: "Shaped through Computer Science and Business Systems studies, cloud architecture, and data structures.",
      color: "#37E7FF"
    },
    {
      icon: Lightbulb,
      title: "Creative Strategy",
      subtitle: "MESSAGE & HOOKS",
      desc: "Translating customer pain points into concise ad copy, engaging narratives, and structured value propositions.",
      color: "#9A6BFF"
    },
    {
      icon: TrendingUp,
      title: "Performance Focus",
      subtitle: "TELEMETRY & OPTIMIZATION",
      desc: "Progressing toward quantitative campaign measurement, A/B creative experimentation, and conversion intelligence.",
      color: "#D7FF62"
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 -left-40 w-96 h-96 bg-[#37E7FF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            {personalInfo.aboutCopy.eyebrow}
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-4xl mb-12 sm:mb-16 leading-[1.12]">
          “Marketing meets a mind built for technology.”
        </h2>

        {/* Split Layout: Editorial Biography & Connected Keywords Composition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Authentic Biography */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#A6B0C8] leading-relaxed font-normal">
            <p className="text-[#F5F7FF] font-medium leading-relaxed">
              {personalInfo.aboutCopy.p1}
            </p>
            <p className="border-l-2 border-[#37E7FF] pl-4 text-[#F5F7FF] italic bg-[#101527]/50 py-3 rounded-r-lg">
              {personalInfo.aboutCopy.p2}
            </p>
            <p>
              {personalInfo.aboutCopy.p3}
            </p>

            {/* Personal Dimension Annotation */}
            <div className="mt-8 pt-6 border-t border-[rgba(180,200,255,0.12)] glass-panel p-5 rounded-xl">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#37E7FF] block mb-1.5 font-semibold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                Personal Dimension // Beyond Digital Marketing
              </span>
              <p className="text-sm text-[#F5F7FF] leading-normal font-sans">
                {personalInfo.aboutCopy.personalDetail}
              </p>
            </div>
          </div>

          {/* Right Column: Connected Keywords Visual Composition */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* The Connected Keywords Matrix */}
            <div className="p-6 rounded-2xl glass-panel-elevated relative overflow-hidden">
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-[rgba(180,200,255,0.12)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] flex items-center gap-2">
                  <Network className="w-4 h-4 text-[#9A6BFF]" />
                  Cognitive Synthesis
                </span>
                <span className="text-[10px] font-mono text-[#D7FF62] bg-[#D7FF62]/10 px-2 py-0.5 rounded-sm">
                  Active
                </span>
              </div>

              {/* Connected node list with glowing lines */}
              <div className="space-y-3 relative">
                <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-[#37E7FF] via-[#9A6BFF] to-[#D7FF62] opacity-40 pointer-events-none" />

                {personalInfo.connectedKeywords.map((keyword, kIdx) => {
                  const colors = ['#37E7FF', '#9A6BFF', '#D7FF62', '#FF6B9A', '#37E7FF'];
                  const color = colors[kIdx % colors.length];

                  return (
                    <div
                      key={kIdx}
                      className="relative pl-8 group cursor-default transition-transform hover:translate-x-1 duration-200"
                    >
                      {/* Node indicator */}
                      <span
                        className="absolute left-[13px] top-3 w-2 h-2 rounded-full border transition-all duration-200 group-hover:scale-125"
                        style={{ backgroundColor: color, borderColor: color }}
                      />

                      <div className="p-3 rounded-lg bg-[#080B14]/70 border border-[rgba(180,200,255,0.1)] group-hover:border-[rgba(55,231,255,0.4)] transition-colors">
                        <span className="text-xs font-mono font-bold tracking-wider text-[#F5F7FF]">
                          {keyword}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Three Pillars Compact Cards */}
            <div className="space-y-3">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-4 rounded-xl glass-panel border hover:border-[#37E7FF]/50 transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-3.5">
                      <div
                        className="p-2 rounded-lg bg-[#080B14] border border-[rgba(180,200,255,0.15)] group-hover:scale-110 transition-transform shrink-0"
                        style={{ color: pillar.color }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#A6B0C8] block font-semibold">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-sm text-[#F5F7FF] mb-0.5">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#A6B0C8] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verified Foundation Summary */}
            <div className="p-4 rounded-xl bg-[#101527] border border-[rgba(180,200,255,0.16)] flex items-center justify-between text-xs font-mono">
              <span className="text-[#A6B0C8]">B.Tech CSBS (2022–2026) · CGPA 7.2</span>
              <span className="flex items-center gap-1 text-[#D7FF62]">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Verified
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
