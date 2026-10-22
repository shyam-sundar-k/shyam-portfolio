import React, { useState, useEffect } from 'react';
import { X, Target, Layers, BarChart3, FlaskConical } from 'lucide-react';

interface MarketingLabModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MarketingLabModal: React.FC<MarketingLabModalProps> = ({ isOpen, onClose }) => {
  const [activeStage, setActiveStage] = useState<'top' | 'mid' | 'bottom'>('top');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const funnelStages = {
    top: {
      name: "Top of Funnel · Brand Discovery",
      badge: "Awareness & Hook Testing",
      themeColor: "#37E7FF",
      objective: "Capture high-attention scroll engagement and introduce brand narrative to broad yet relevant audiences.",
      platforms: [
        { name: "Meta Ads (Reels & Feed)", role: "Scroll-stopping 3-second hook testing" },
        { name: "Content & Organic SEO", role: "Search intent keyword foundational matching" }
      ],
      creativeBlueprint: "Hook (0–3s) → Problem Agitation (3–10s) → Solution Introduction → Light Soft CTA",
      analyticsSignals: [
        "3-Second Video View Rate",
        "Scroll Stop Ratio",
        "Cost Per 1,000 Impressions (CPM) tracking",
        "Outbound Click-Through Rate (CTR)"
      ],
      optimizationLoop: "Test 3 distinct hook variations with identical body copy to isolate creative interest before scaling."
    },
    mid: {
      name: "Middle of Funnel · Consideration & Intent",
      badge: "Search Intent Alignment",
      themeColor: "#9A6BFF",
      objective: "Capture motivated problem-solvers searching for solutions via Google Search and engaged social users.",
      platforms: [
        { name: "Google Ads (Search)", role: "Phrase and Exact Match high-intent capture" },
        { name: "Landing Page Architecture", role: "Message match continuity from ad headline" }
      ],
      creativeBlueprint: "Clear Value Proposition → Core Features & Credibility → Frictionless Content Offer",
      analyticsSignals: [
        "Search Impression Share",
        "GA4 Engagement Rate & Session Duration",
        "Bounce Rate on Landing Page Variant",
        "Scroll Depth (50% & 75% thresholds)"
      ],
      optimizationLoop: "Refine negative keyword lists weekly to filter out non-commercial search queries."
    },
    bottom: {
      name: "Bottom of Funnel · Action & Measurement",
      badge: "Conversion Telemetry",
      themeColor: "#D7FF62",
      objective: "Measure high-intent user actions, configure GA4 event models, and study conversion drop-off points.",
      platforms: [
        { name: "Google Analytics 4", role: "Custom event tracking & conversion attribution" },
        { name: "Meta Custom Audiences", role: "Engaged audience retargeting" }
      ],
      creativeBlueprint: "Direct Action Incentive → Friction Reduction → Clear Form / Action Step",
      analyticsSignals: [
        "GA4 Primary Conversion Event fires",
        "UTM Campaign Attribution clarity",
        "Form completion / step drop-off points",
        "Device-specific conversion distribution"
      ],
      optimizationLoop: "Identify drop-off friction points in form flows; iterate on copy clarity rather than vanity tweaks."
    }
  };

  const current = funnelStages[activeStage];

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#080B14]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-[#101527] border border-[#37E7FF]/40 rounded-2xl shadow-[0_0_50px_-10px_rgba(55,231,255,0.25)] flex flex-col max-h-[92vh] overflow-hidden text-[#F5F7FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-7 bg-[#151D32] border-b border-[rgba(180,200,255,0.14)] flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-[#080B14] border border-[#37E7FF]/30 text-[#37E7FF]">
              <FlaskConical className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#37E7FF] font-semibold">
                  SHYAM SUNDAR · PERFORMANCE MARKETING LAB
                </span>
                <span className="w-2 h-2 rounded-full bg-[#D7FF62] animate-pulse" />
              </div>
              <h2 className="font-display font-bold text-xl sm:text-2xl text-[#F5F7FF] tracking-tight">
                Campaign Strategy & Measurement Sandbox
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            aria-label="Close marketing lab"
            className="p-2 rounded-lg bg-[#080B14] border border-[rgba(180,200,255,0.2)] text-[#A6B0C8] hover:text-[#F5F7FF] hover:border-[#37E7FF] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Funnel Stage Selector Tabs */}
        <div className="px-6 sm:px-7 pt-4 pb-2 bg-[#101527] border-b border-[rgba(180,200,255,0.1)] flex flex-wrap gap-2">
          <button
            onClick={() => setActiveStage('top')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeStage === 'top'
                ? 'bg-[#37E7FF]/20 text-[#37E7FF] border border-[#37E7FF]'
                : 'bg-[#151D32] text-[#A6B0C8] border border-transparent hover:border-[rgba(180,200,255,0.2)]'
            }`}
          >
            <Target className="w-3.5 h-3.5" />
            <span>Top of Funnel (Discovery)</span>
          </button>

          <button
            onClick={() => setActiveStage('mid')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeStage === 'mid'
                ? 'bg-[#9A6BFF]/20 text-[#9A6BFF] border border-[#9A6BFF]'
                : 'bg-[#151D32] text-[#A6B0C8] border border-transparent hover:border-[rgba(180,200,255,0.2)]'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Middle of Funnel (Intent)</span>
          </button>

          <button
            onClick={() => setActiveStage('bottom')}
            className={`px-4 py-2 rounded-lg text-xs font-mono font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              activeStage === 'bottom'
                ? 'bg-[#D7FF62]/20 text-[#D7FF62] border border-[#D7FF62]'
                : 'bg-[#151D32] text-[#A6B0C8] border border-transparent hover:border-[rgba(180,200,255,0.2)]'
            }`}
          >
            <BarChart3 className="w-3.5 h-3.5" />
            <span>Bottom of Funnel (Action)</span>
          </button>
        </div>

        {/* Lab Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans">
          
          {/* Header block for selected stage */}
          <div className="p-5 rounded-xl bg-[#151D32] border border-[rgba(180,200,255,0.14)] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#37E7FF] font-semibold block">
                Selected Stage
              </span>
              <h3 className="font-display font-bold text-xl text-[#F5F7FF]">
                {current.name}
              </h3>
              <p className="text-xs text-[#A6B0C8] mt-1 max-w-xl">
                {current.objective}
              </p>
            </div>
            <span
              className="text-xs font-mono px-3 py-1 rounded-full border self-start sm:self-auto font-semibold"
              style={{ borderColor: current.themeColor, color: current.themeColor, backgroundColor: `${current.themeColor}15` }}
            >
              {current.badge}
            </span>
          </div>

          {/* Grid: Platform Roles & Creative Blueprint */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Platform Allocation */}
            <div className="p-5 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.12)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold block">
                Platform Orchestration
              </span>
              <div className="space-y-2">
                {current.platforms.map((p, pIdx) => (
                  <div key={pIdx} className="p-3 rounded-lg bg-[#151D32] border border-[rgba(180,200,255,0.1)]">
                    <span className="font-display font-semibold text-sm text-[#F5F7FF] block">
                      {p.name}
                    </span>
                    <span className="text-xs text-[#A6B0C8]">{p.role}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Creative Blueprint */}
            <div className="p-5 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.12)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold block">
                Creative Architecture Blueprint
              </span>
              <div className="p-4 rounded-lg bg-[#151D32] border border-[rgba(180,200,255,0.1)] text-xs text-[#F5F7FF] leading-relaxed">
                {current.creativeBlueprint}
              </div>
              <div className="text-[11px] font-mono text-[#A6B0C8]">
                Formula: Hook → Relevance → Trust Anchor → Direct Instruction
              </div>
            </div>

          </div>

          {/* Grid: Signals to track & Optimization Loop */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Key Analytics Signals */}
            <div className="p-5 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.12)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold block">
                Telemetry & Analytics Signals
              </span>
              <div className="space-y-1.5">
                {current.analyticsSignals.map((signal, sIdx) => (
                  <div key={sIdx} className="flex items-center gap-2 text-xs text-[#F5F7FF]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#37E7FF]" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Continuous Optimization Loop */}
            <div className="p-5 rounded-xl bg-[#080B14] border border-[rgba(180,200,255,0.12)] space-y-3">
              <span className="text-xs font-mono uppercase tracking-wider text-[#A6B0C8] font-semibold block">
                Optimization Methodology
              </span>
              <div className="p-4 rounded-lg bg-[#151D32] border border-[rgba(180,200,255,0.1)] text-xs text-[#D7FF62] leading-relaxed font-mono">
                {current.optimizationLoop}
              </div>
            </div>

          </div>

          {/* Transparent Integrity Notice */}
          <div className="p-4 bg-[#151D32]/60 rounded-xl border border-[rgba(180,200,255,0.1)] text-xs text-[#A6B0C8]">
            <strong className="text-[#F5F7FF]">Lab Philosophy: </strong>
            This interactive simulator reflects my conceptual framework for structuring performance marketing campaigns across Meta Ads, Google Ads, and GA4 telemetry. No fabricated numbers or artificial ROI claims are made.
          </div>

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-[#151D32] border-t border-[rgba(180,200,255,0.14)] flex items-center justify-between">
          <span className="text-xs font-mono text-[#A6B0C8]">
            Interactive Performance Marketing Architecture
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-[#37E7FF] text-[#080B14] rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            Close Lab
          </button>
        </div>

      </div>
    </div>
  );
};
