import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles, FlaskConical } from 'lucide-react';
import { personalInfo, floatingChips } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
  onOpenLab: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onConnectClick, onOpenLab }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#080B14]">
      {/* Subtle Static Cyber Grid Background */}
      <div className="absolute inset-0 cyber-grid-bg opacity-20 pointer-events-none" />
      
      {/* Subtle Cyan and Violet Ambient Gradients */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#37E7FF]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 -right-32 w-[550px] h-[550px] bg-[#9A6BFF]/12 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/3 w-[400px] h-[400px] bg-[#D7FF62]/6 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Expressive Headlines & Brand Strategy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Intro Label with Cyber Status Indicator */}
            <div className="inline-flex items-center gap-2.5 mb-6 px-3.5 py-1.5 rounded-full bg-[#101527] border border-[rgba(180,200,255,0.16)] w-fit">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#37E7FF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#37E7FF]" />
              </span>
              <span className="text-[11px] font-mono font-semibold tracking-widest uppercase text-[#37E7FF]">
                {personalInfo.heroCopy.introLabel}
              </span>
            </div>

            {/* Expressive Futuristic Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.02] tracking-tight text-[#F5F7FF] mb-4">
              <span className="block">{personalInfo.heroCopy.headlineLine1}</span>
              <span className="block text-gradient-cyan-violet">{personalInfo.heroCopy.headlineLine2}</span>
              <span className="block text-[#F5F7FF]">{personalInfo.heroCopy.headlineLine3}</span>
              <span className="block text-gradient-lime-cyan">{personalInfo.heroCopy.headlineLine4}</span>
            </h1>

            {/* Short Positioning Line */}
            <p className="text-sm sm:text-base font-mono font-semibold text-[#37E7FF] tracking-wide mb-6">
              // {personalInfo.heroCopy.positioningLine}
            </p>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#A6B0C8] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.heroCopy.supporting}
            </p>

            {/* Action Buttons & Lab Launch */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-[#37E7FF] via-[#9A6BFF] to-[#D7FF62] text-[#080B14] text-xs sm:text-sm font-mono font-extrabold uppercase tracking-wider rounded-full hover:shadow-[0_0_30px_rgba(55,231,255,0.5)] transition-all duration-300 cursor-pointer"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 stroke-[2.5] transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onConnectClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#101527] text-[#F5F7FF] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider rounded-full border border-[rgba(180,200,255,0.2)] hover:border-[#37E7FF] hover:bg-[#151D32] transition-all duration-200 cursor-pointer"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2]" />
              </button>

              <button
                onClick={onOpenLab}
                className="inline-flex items-center gap-2 px-4 py-3.5 bg-[#151D32] text-[#D7FF62] text-xs font-mono font-semibold uppercase tracking-wider rounded-full border border-[#D7FF62]/30 hover:border-[#D7FF62] hover:bg-[#D7FF62]/10 transition-all duration-200 cursor-pointer"
                title="Enter The Performance Marketing Lab"
              >
                <FlaskConical className="w-4 h-4" />
                <span className="hidden sm:inline">Enter Lab</span>
              </button>
            </div>

            {/* Compact Professional Detail Strip */}
            <div className="pt-6 border-t border-[rgba(180,200,255,0.12)] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#A6B0C8] font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#D7FF62]" />
                <span className="text-[#F5F7FF] uppercase tracking-wider">
                  {personalInfo.heroCopy.currentBadge}
                </span>
              </div>
              <span className="hidden sm:inline text-[rgba(180,200,255,0.2)]">|</span>
              <span className="flex items-center gap-1.5 text-[#A6B0C8]">
                <Compass className="w-3.5 h-3.5 text-[#37E7FF]" />
                Career Direction: <strong className="text-[#37E7FF]">Performance Marketing</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Authentic Portrait with Cinematic Ambient Neon & Floating Identity Chips */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md">
              
              {/* Outer Neon Glow Layer */}
              <div className="absolute -inset-1.5 rounded-2xl bg-gradient-to-r from-[#37E7FF] via-[#9A6BFF] to-[#D7FF62] opacity-30 blur-lg pointer-events-none" />

              {/* Offset Geometric Cyber Frame */}
              <div className="absolute -inset-3 rounded-2xl border border-[rgba(55,231,255,0.25)] pointer-events-none -z-10 translate-x-2 translate-y-2" />

              {/* Main Portrait Frame with authentic photo */}
              <div className="relative rounded-2xl overflow-hidden bg-[#101527] border border-[rgba(180,200,255,0.25)] shadow-2xl group">
                <img
                  src="/shyam-portrait.jpg"
                  alt="Portrait of Shyam Sundar K - Digital Marketing Executive"
                  className="w-full h-auto object-cover object-top aspect-[4/4.7] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  width="600"
                  height="705"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Ambient Cinematic Cyan & Violet Gradient Sheen */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080B14] via-[#080B14]/20 to-transparent pointer-events-none" />

                {/* Bottom Annotation Badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#080B14]/85 backdrop-blur-md rounded-xl p-3 text-[#F5F7FF] border border-[rgba(180,200,255,0.18)] flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-[#37E7FF]" />
                    <span className="text-[11px] font-mono tracking-wider uppercase font-semibold text-[#F5F7FF]">
                      {personalInfo.heroCopy.imageAnnotation}
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-[#D7FF62] uppercase tracking-wider bg-[#D7FF62]/10 border border-[#D7FF62]/30 px-2 py-0.5 rounded-sm">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Professional Identity Chips (Desktop art-directed arrangement) */}
              <div className="hidden sm:block">
                {floatingChips.map((chip, idx) => (
                  <div
                    key={idx}
                    className={`absolute ${chip.position} z-20 px-3 py-1.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider shadow-lg backdrop-blur-md bg-[#101527]/90 transition-all duration-300 hover:scale-105 pointer-events-none ${
                      idx % 2 === 0 ? 'animate-float-slow' : 'animate-float-reverse'
                    }`}
                    style={{
                      borderColor: chip.border,
                      borderWidth: '1px',
                      color: chip.color,
                      animationDelay: chip.delay,
                      boxShadow: `0 4px 20px -2px ${chip.color}25`
                    }}
                  >
                    ● {chip.label}
                  </div>
                ))}
              </div>

              {/* Mobile Floating Chips Row */}
              <div className="flex sm:hidden flex-wrap gap-2 mt-4 justify-center">
                {floatingChips.slice(0, 4).map((chip, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full text-[9px] font-mono font-semibold uppercase tracking-wider bg-[#101527] border"
                    style={{ borderColor: chip.border, color: chip.color }}
                  >
                    {chip.label}
                  </span>
                ))}
              </div>

              {/* Bottom Metadata & Scroll Prompt */}
              <div className="mt-5 flex items-center justify-between text-xs text-[#A6B0C8] px-1 font-mono">
                <span className="text-[11px] uppercase tracking-wider">
                  Fig. 01 // Shyam Sundar K
                </span>
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-wider text-[#37E7FF] hover:text-[#F5F7FF] transition-colors cursor-pointer"
                >
                  <span>Scroll to explore</span>
                  <ArrowDown className="w-3 h-3 animate-bounce" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
