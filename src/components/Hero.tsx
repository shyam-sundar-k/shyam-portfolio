import React from 'react';
import { ArrowDown, ArrowUpRight, Compass, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

interface HeroProps {
  onExploreClick: () => void;
  onConnectClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onConnectClick }) => {
  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-40 lg:pb-28 overflow-hidden">
      {/* Background architectural fine lines */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 border-x border-[#DADAD2]/60 flex justify-between">
          <div className="border-r border-[#DADAD2]/40 h-full w-1/3 hidden md:block" />
          <div className="border-r border-[#DADAD2]/40 h-full w-1/3 hidden lg:block" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Oversized Editorial Typography & Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Introductory Location & Role Tag */}
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#C5ED70] ring-2 ring-[#171815]" />
              <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-[#6D6D65] font-display">
                {personalInfo.heroCopy.introLabel}
              </span>
            </div>

            {/* Main Headline - Magazine Style Display */}
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[4.75rem] leading-[1.05] tracking-tight text-[#171815] mb-6">
              <span className="block">{personalInfo.heroCopy.headlineLine1}</span>
              <span className="block text-[#171815]/90">{personalInfo.heroCopy.headlineLine2}</span>
              <span className="inline-block relative mt-1">
                <span className="relative z-10 text-[#171815]">
                  {personalInfo.heroCopy.headlineLine3}
                </span>
                <span
                  className="absolute bottom-1.5 left-0 right-0 h-3 sm:h-4 bg-[#C5ED70] -z-0 opacity-80 rounded-xs transform -rotate-0.5"
                  aria-hidden="true"
                />
              </span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#6D6D65] leading-relaxed max-w-2xl mb-8 font-normal">
              {personalInfo.heroCopy.supporting}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-10">
              <button
                onClick={onExploreClick}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#171815] text-[#F6F5F0] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-black hover:text-[#C5ED70] transition-all duration-200 shadow-md hover:shadow-lg focus:outline-hidden focus:ring-2 focus:ring-[#171815]"
              >
                <span>Explore My Work</span>
                <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </button>

              <button
                onClick={onConnectClick}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#EAE9E1] text-[#171815] text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full border border-[#DADAD2] hover:bg-[#DADAD2]/70 hover:border-[#171815] transition-all duration-200 focus:outline-hidden focus:ring-2 focus:ring-[#171815]"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>

            {/* Compact Professional Detail Pill */}
            <div className="pt-6 border-t border-[#DADAD2]/70 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#6D6D65]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C5ED70]" />
                <span className="font-semibold text-[#171815] uppercase tracking-wider font-display">
                  {personalInfo.heroCopy.currentBadge}
                </span>
              </div>
              <span className="hidden sm:inline text-[#DADAD2]">|</span>
              <span className="text-[#6D6D65] flex items-center gap-1.5">
                <Compass className="w-3.5 h-3.5 text-[#171815]" />
                Career Direction: <strong className="font-semibold text-[#171815]">Performance Marketing</strong>
              </span>
            </div>

          </div>

          {/* Right Column: Authentic Editorial Portrait with Art Direction */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div className="relative w-full max-w-md">
              
              {/* Decorative Editorial Border Frame */}
              <div className="absolute -inset-2.5 rounded-2xl border border-[#DADAD2] pointer-events-none -z-10 translate-x-1.5 translate-y-1.5" />
              
              {/* Main Portrait Container */}
              <div className="relative rounded-xl overflow-hidden bg-[#EAE9E1] border border-[#DADAD2] shadow-xl group">
                <img
                  src="/shyam-portrait.jpg"
                  alt="Portrait of Shyam Sundar K - Digital Marketing Executive at Marvice"
                  className="w-full h-auto object-cover object-top aspect-[4/4.6] transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  width="600"
                  height="690"
                  loading="eager"
                  fetchPriority="high"
                />

                {/* Subtle Grain & Gradient Tone Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#171815]/40 via-transparent to-transparent pointer-events-none" />

                {/* Bottom Image Annotation */}
                <div className="absolute bottom-3 left-3 right-3 bg-[#171815]/85 backdrop-blur-md rounded-lg p-3 text-[#F6F5F0] border border-white/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#C5ED70]" />
                    <span className="text-[11px] font-mono tracking-wider uppercase font-medium">
                      {personalInfo.heroCopy.imageAnnotation}
                    </span>
                  </div>
                  <span className="text-[10px] text-[#C5ED70] font-mono font-semibold uppercase tracking-wider bg-[#C5ED70]/10 px-2 py-0.5 rounded-sm">
                    Verified
                  </span>
                </div>
              </div>

              {/* Floating Editorial Label Tag */}
              <div className="absolute -top-3 -right-3 sm:-right-4 bg-[#F6F5F0] border border-[#DADAD2] px-3.5 py-1.5 rounded-full shadow-sm">
                <span className="text-[10px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-[#171815]">
                  KIT CSBS '26 · Marvice
                </span>
              </div>

              {/* Subtle Scroll Hint Indicator */}
              <div className="mt-5 flex items-center justify-between text-xs text-[#6D6D65] px-1">
                <span className="font-mono text-[11px] uppercase tracking-wider">
                  Fig. 01 / Shyam Sundar K
                </span>
                <button
                  onClick={onExploreClick}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider hover:text-[#171815] transition-colors"
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
