import React, { useEffect } from 'react';
import type { Project } from '../types';
import { X, AlertCircle } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy } = project;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="case-study-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#080B14]/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#101527] rounded-2xl shadow-[0_0_50px_-10px_rgba(55,231,255,0.25)] border border-[#37E7FF]/35 flex flex-col overflow-hidden text-[#F5F7FF]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-[#151D32] border-b border-[rgba(180,200,255,0.14)] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#37E7FF] font-semibold bg-[#080B14] px-2.5 py-1 rounded-sm border border-[#37E7FF]/30">
                {project.category}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#080B14] bg-[#D7FF62] px-2.5 py-1 rounded-sm font-bold">
                {project.badge}
              </span>
            </div>
            <h2 id="case-study-title" className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F7FF] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#A6B0C8] mt-1 max-w-2xl font-normal">
              {project.description}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-[#080B14] border border-[rgba(180,200,255,0.2)] text-[#A6B0C8] hover:text-[#F5F7FF] hover:border-[#37E7FF] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Case Study Body adhering to the 8-point format */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Note on Authenticity */}
          <div className="p-4 bg-[#151D32]/70 rounded-xl border border-[rgba(180,200,255,0.14)] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#37E7FF] shrink-0 mt-0.5" />
            <div className="text-xs text-[#A6B0C8]">
              <strong className="text-[#F5F7FF] font-semibold">Grounded Case Study Architecture: </strong>
              This breakdown displays verified objectives, hypotheses, tools, and learnings. No fabricated campaign dashboards, fictitious ad spend, or invented client accounts are present.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 01: Context and Objective */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
                <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  01
                </span>
                <span>Context & Objective</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14]/80 p-4 rounded-lg border border-[rgba(180,200,255,0.12)]">
                {caseStudy.context}
              </p>
            </div>

            {/* 02: Audience */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
                <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  02
                </span>
                <span>Target Audience</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14]/80 p-4 rounded-lg border border-[rgba(180,200,255,0.12)]">
                {caseStudy.audience}
              </p>
            </div>

            {/* 03: Strategy */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
                <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  03
                </span>
                <span>Strategy & Approach</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14]/80 p-4 rounded-lg border border-[rgba(180,200,255,0.12)]">
                {caseStudy.strategy}
              </p>
            </div>

            {/* 04: Execution */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
                <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  04
                </span>
                <span>Execution Details</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14]/80 p-4 rounded-lg border border-[rgba(180,200,255,0.12)]">
                {caseStudy.execution}
              </p>
            </div>

          </div>

          {/* 05: Tools Used */}
          <div className="space-y-3 pt-4 border-t border-[rgba(180,200,255,0.12)]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
              <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                05
              </span>
              <span>Tools & Frameworks Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#080B14] text-[#37E7FF] text-xs font-mono rounded-md border border-[#37E7FF]/30 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 06 & 07: Measurement & Verified Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[rgba(180,200,255,0.12)]">
            
            {/* 06: Measurement */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#37E7FF]">
                <span className="w-5 h-5 rounded-full bg-[#37E7FF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  06
                </span>
                <span>Measurement Approach</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14]/80 p-4 rounded-lg border border-[rgba(180,200,255,0.12)]">
                {caseStudy.measurementApproach}
              </p>
            </div>

            {/* 07: Verified Outcomes */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#D7FF62]">
                <span className="w-5 h-5 rounded-full bg-[#D7FF62] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                  07
                </span>
                <span>Verified Outcomes</span>
              </div>
              <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#D7FF62]/10 p-4 rounded-lg border border-[#D7FF62]/40">
                {caseStudy.verifiedOutcomes}
              </p>
            </div>

          </div>

          {/* 08: Learnings & Next Steps */}
          <div className="space-y-2 pt-4 border-t border-[rgba(180,200,255,0.12)]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#9A6BFF]">
              <span className="w-5 h-5 rounded-full bg-[#9A6BFF] text-[#080B14] flex items-center justify-center text-[10px] font-black">
                08
              </span>
              <span>Learnings & Strategic Next Steps</span>
            </div>
            <p className="text-sm text-[#F5F7FF] leading-relaxed bg-[#080B14] p-4 rounded-lg border border-[rgba(180,200,255,0.16)]">
              {caseStudy.learningsAndNextSteps}
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-[#151D32] border-t border-[rgba(180,200,255,0.14)] flex items-center justify-between">
          <span className="text-xs font-mono text-[#A6B0C8]">
            Standardized 8-Point Performance Architecture
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider bg-[#37E7FF] text-[#080B14] rounded-full hover:bg-white transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
