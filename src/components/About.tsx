import React from 'react';
import { personalInfo } from '../data/portfolioData';
import { Terminal, Lightbulb, TrendingUp, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      icon: Terminal,
      title: "Technical Foundation",
      subtitle: "CSBS & Systems Thinking",
      desc: "Formed through Computer Science and Business Systems studies, cloud infrastructure, and mobile architecture."
    },
    {
      icon: Lightbulb,
      title: "Creative Mindset",
      subtitle: "Story & Positioning",
      desc: "Distilling complex concepts into ad copy, engaging content narratives, and empathetic user journeys."
    },
    {
      icon: TrendingUp,
      title: "Growing Focus on Performance",
      subtitle: "Data & Optimization",
      desc: "Developing toward quantitative campaign measurement, A/B experimentation, and conversion intelligence."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-28 bg-[#F6F5F0] border-t border-[#DADAD2] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#6D6D65]">
            {personalInfo.aboutCopy.eyebrow}
          </span>
          <div className="h-px bg-[#DADAD2] flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#171815] tracking-tight max-w-4xl mb-12 sm:mb-16 leading-[1.15]">
          “A technical foundation. A creative mindset. A growing focus on performance.”
        </h2>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Core Narrative (Narrow, editorial column width) */}
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-[#171815]/90 leading-relaxed font-normal">
            <p className="first-letter:text-5xl first-letter:font-display first-letter:font-bold first-letter:mr-3 first-letter:float-left first-letter:text-[#171815]">
              {personalInfo.aboutCopy.p1}
            </p>
            <p className="text-[#6D6D65]">
              {personalInfo.aboutCopy.p2}
            </p>
            <p className="text-[#171815] font-medium border-l-2 border-[#C5ED70] pl-4 italic">
              {personalInfo.aboutCopy.p3}
            </p>
            <p className="text-[#6D6D65]">
              {personalInfo.aboutCopy.p4}
            </p>

            {/* Personal Dimension Annotation */}
            <div className="mt-8 pt-6 border-t border-[#DADAD2] bg-[#EAE9E1]/50 p-5 rounded-lg border">
              <span className="text-[11px] font-mono uppercase tracking-wider text-[#6D6D65] block mb-1.5 font-semibold">
                Personal Dimension · Beyond the Desk
              </span>
              <p className="text-sm text-[#171815] leading-normal font-sans">
                {personalInfo.aboutCopy.personalDetail}
              </p>
            </div>
          </div>

          {/* Right Column: Three Pillars & Verified Snapshot */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 3 Pillars List */}
            <div className="space-y-4">
              {pillars.map((pillar, idx) => {
                const IconComponent = pillar.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 bg-[#EAE9E1]/70 border border-[#DADAD2] rounded-xl hover:border-[#171815] transition-all duration-200 group"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 bg-[#F6F5F0] rounded-lg border border-[#DADAD2] group-hover:bg-[#C5ED70] transition-colors">
                        <IconComponent className="w-5 h-5 text-[#171815]" />
                      </div>
                      <div>
                        <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D6D65] block font-semibold">
                          {pillar.subtitle}
                        </span>
                        <h3 className="font-display font-bold text-base text-[#171815] mb-1">
                          {pillar.title}
                        </h3>
                        <p className="text-xs text-[#6D6D65] leading-relaxed">
                          {pillar.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Verified Credentials Box */}
            <div className="p-5 bg-[#171815] text-[#F6F5F0] rounded-xl border border-white/10 space-y-3">
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-[#C5ED70] font-semibold">
                  Verified Academic & Professional Base
                </span>
                <CheckCircle2 className="w-4 h-4 text-[#C5ED70]" />
              </div>

              <div className="grid grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-[#6D6D65] block text-[10px] uppercase font-mono">Current Org</span>
                  <span className="font-bold text-[#F6F5F0] text-sm">Marvice</span>
                  <span className="text-[11px] text-[#DADAD2] block">Bengaluru, India</span>
                </div>
                <div>
                  <span className="text-[#6D6D65] block text-[10px] uppercase font-mono">Degree</span>
                  <span className="font-bold text-[#F6F5F0] text-sm">B.Tech CSBS</span>
                  <span className="text-[11px] text-[#DADAD2] block">KIT · 2022–2026</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
