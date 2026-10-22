import React, { useState } from 'react';
import { marketingPlatforms } from '../data/portfolioData';
import type { MarketingPlatform } from '../types';
import {
  MetaIcon,
  GoogleAdsIcon,
  GoogleAnalyticsIcon,
  SearchConsoleIcon,
  CanvaIcon,
  FigmaIcon,
  HtmlIcon,
  CssIcon
} from './BrandIcons';
import { Sparkles, Layers, ShieldCheck, ChevronRight } from 'lucide-react';

export const MarketingConstellation: React.FC = () => {
  const [activePlatform, setActivePlatform] = useState<MarketingPlatform>(marketingPlatforms[0]);

  const renderIcon = (id: string, className = "w-6 h-6") => {
    switch (id) {
      case 'meta-ads':
        return <MetaIcon className={`${className} text-[#0081FB]`} />;
      case 'google-ads':
        return <GoogleAdsIcon className={className} />;
      case 'google-analytics':
        return <GoogleAnalyticsIcon className={className} />;
      case 'google-search-console':
        return <SearchConsoleIcon className={className} />;
      case 'canva':
        return <CanvaIcon className={className} />;
      case 'figma':
        return <FigmaIcon className={className} />;
      case 'html-css':
        return (
          <div className="flex items-center -space-x-1">
            <HtmlIcon className="w-5 h-5" />
            <CssIcon className="w-5 h-5" />
          </div>
        );
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <section className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background radial ambient lights */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#37E7FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#9A6BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            THE MARKETING CONSTELLATION
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-3xl leading-[1.12]">
              Connected marketing ecosystem.
            </h2>
            <p className="text-sm sm:text-base text-[#A6B0C8] mt-2 max-w-2xl font-normal">
              A structured network of paid advertising channels, measurement telemetry, and creative tools.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#A6B0C8] bg-[#101527] px-3.5 py-2 rounded-lg border border-[rgba(180,200,255,0.16)]">
            <ShieldCheck className="w-4 h-4 text-[#D7FF62]" />
            <span>Honest distinction: Platform Exposure vs. Technical Tooling</span>
          </div>
        </div>

        {/* The Constellation Interface Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Constellation Orbit / Grid */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl glass-panel relative">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-[rgba(180,200,255,0.1)]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-[#37E7FF]" />
                  Select A Tool To Inspect Focus
                </span>
                <span className="text-[11px] font-mono text-[#37E7FF] bg-[#37E7FF]/10 px-2 py-0.5 rounded-sm">
                  {marketingPlatforms.length} Active Vectors
                </span>
              </div>

              {/* Connected Orbit Nodes Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5">
                {marketingPlatforms.map((platform, idx) => {
                  const isSelected = activePlatform.id === platform.id;
                  const isExposure = platform.badge === 'Active Platform Exposure';

                  return (
                    <button
                      key={platform.id}
                      onClick={() => setActivePlatform(platform)}
                      onFocus={() => setActivePlatform(platform)}
                      aria-label={`View details for ${platform.name}`}
                      className={`text-left p-4 rounded-xl border transition-all duration-300 relative group cursor-pointer ${
                        isSelected
                          ? 'bg-[#151D32] border-[#37E7FF] shadow-[0_0_20px_-3px_rgba(55,231,255,0.3)] -translate-y-1'
                          : 'bg-[#101527]/80 border-[rgba(180,200,255,0.12)] hover:border-[#37E7FF]/50 hover:bg-[#151D32]/80'
                      }`}
                      style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                      {/* Top icon and badge indicator */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2 rounded-lg bg-[#080B14] border border-[rgba(180,200,255,0.1)] group-hover:scale-105 transition-transform">
                          {renderIcon(platform.id, "w-5 h-5")}
                        </div>
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isExposure ? 'bg-[#37E7FF] animate-pulse' : 'bg-[#9A6BFF]'
                          }`}
                        />
                      </div>

                      <h3 className="font-display font-bold text-sm text-[#F5F7FF] mb-0.5 group-hover:text-[#37E7FF] transition-colors">
                        {platform.name}
                      </h3>
                      <p className="text-[11px] text-[#A6B0C8] line-clamp-1">
                        {platform.category}
                      </p>

                      {isSelected && (
                        <div className="absolute bottom-1 right-2 text-[10px] text-[#37E7FF] font-mono">
                          ● Active
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Grounding note below grid */}
              <div className="mt-6 pt-4 border-t border-[rgba(180,200,255,0.1)] text-xs font-mono text-[#A6B0C8] flex items-center justify-between">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#37E7FF]" />
                  Active Platform Exposure
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#9A6BFF]" />
                  Technical & Creative Tooling
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Platform Deep-Dive Focus Panel */}
          <div className="lg:col-span-5">
            <div className="p-7 rounded-2xl glass-panel-elevated border border-[#37E7FF]/30 relative shadow-2xl">
              
              <div className="flex items-start justify-between gap-4 pb-5 mb-5 border-b border-[rgba(180,200,255,0.14)]">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.2)] shadow-md">
                    {renderIcon(activePlatform.id, "w-8 h-8")}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#37E7FF] font-semibold block">
                      {activePlatform.roleInStack}
                    </span>
                    <h3 className="font-display font-extrabold text-2xl text-[#F5F7FF]">
                      {activePlatform.name}
                    </h3>
                  </div>
                </div>

                <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-sm bg-[#37E7FF]/15 text-[#37E7FF] border border-[#37E7FF]/30 font-semibold shrink-0">
                  {activePlatform.badge}
                </span>
              </div>

              {/* Platform Description */}
              <p className="text-sm text-[#F5F7FF]/90 leading-relaxed mb-6 font-normal">
                {activePlatform.description}
              </p>

              {/* Tactical Capabilities List */}
              <div className="space-y-3">
                <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6B0C8] block font-semibold">
                  Practical Application & Exposure:
                </span>
                <div className="space-y-2">
                  {activePlatform.capabilities.map((cap, cIdx) => (
                    <div
                      key={cIdx}
                      className="p-2.5 rounded-lg bg-[#080B14]/70 border border-[rgba(180,200,255,0.1)] flex items-start gap-2.5 text-xs text-[#F5F7FF]"
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-[#37E7FF] shrink-0 mt-0.5" />
                      <span className="leading-normal">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[rgba(180,200,255,0.1)] text-[11px] font-mono text-[#A6B0C8] flex items-center justify-between">
                <span>Domain: {activePlatform.category}</span>
                <span className="text-[#D7FF62]">Real execution verified</span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
