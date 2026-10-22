import { useEffect } from 'react';
import type { Project } from '../types';
import { X, AlertCircle } from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-[#171815]/70 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] bg-[#F6F5F0] rounded-2xl shadow-2xl border border-[#DADAD2] flex flex-col overflow-hidden text-[#171815]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="p-6 sm:p-8 bg-[#EAE9E1] border-b border-[#DADAD2] flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#6D6D65] font-semibold bg-[#F6F5F0] px-2.5 py-1 rounded-sm border border-[#DADAD2]">
                {project.category}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-[#171815] bg-[#C5ED70] px-2.5 py-1 rounded-sm font-semibold">
                {project.badge}
              </span>
            </div>
            <h2 id="case-study-title" className="font-display font-extrabold text-2xl sm:text-3xl text-[#171815] tracking-tight">
              {project.title}
            </h2>
            <p className="text-xs sm:text-sm text-[#6D6D65] mt-1 max-w-2xl">
              {project.description}
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-lg bg-[#F6F5F0] border border-[#DADAD2] text-[#171815] hover:bg-[#171815] hover:text-[#F6F5F0] transition-colors focus:outline-hidden"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Case Study Body adhering to the 8-point format */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Note on Authenticity */}
          <div className="p-4 bg-[#EAE9E1]/60 rounded-xl border border-[#DADAD2] flex items-start gap-3">
            <AlertCircle className="w-4 h-4 text-[#171815] shrink-0 mt-0.5" />
            <div className="text-xs text-[#6D6D65]">
              <strong className="text-[#171815] font-semibold">Editorial Case Study Architecture: </strong>
              This breakdown displays verified objectives, hypotheses, tools, and learnings. No fabricated campaign dashboards, fictitious ad spend, or invented client accounts are present.
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* 01: Context and Objective */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  01
                </span>
                <span>Context & Objective</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#EAE9E1]/30 p-4 rounded-lg border border-[#DADAD2]/60">
                {caseStudy.context}
              </p>
            </div>

            {/* 02: Audience */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  02
                </span>
                <span>Target Audience</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#EAE9E1]/30 p-4 rounded-lg border border-[#DADAD2]/60">
                {caseStudy.audience}
              </p>
            </div>

            {/* 03: Strategy */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  03
                </span>
                <span>Strategy & Approach</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#EAE9E1]/30 p-4 rounded-lg border border-[#DADAD2]/60">
                {caseStudy.strategy}
              </p>
            </div>

            {/* 04: Execution */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  04
                </span>
                <span>Execution Details</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#EAE9E1]/30 p-4 rounded-lg border border-[#DADAD2]/60">
                {caseStudy.execution}
              </p>
            </div>

          </div>

          {/* 05: Tools Used */}
          <div className="space-y-3 pt-4 border-t border-[#DADAD2]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
              <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                05
              </span>
              <span>Tools & Frameworks Used</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {caseStudy.toolsUsed.map((tool, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-[#EAE9E1] text-[#171815] text-xs font-mono rounded-md border border-[#DADAD2] font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* 06 & 07: Measurement & Verified Outcomes */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4 border-t border-[#DADAD2]">
            
            {/* 06: Measurement */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  06
                </span>
                <span>Measurement Approach</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#EAE9E1]/30 p-4 rounded-lg border border-[#DADAD2]/60">
                {caseStudy.measurementApproach}
              </p>
            </div>

            {/* 07: Verified Outcomes */}
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
                <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                  07
                </span>
                <span>Verified Outcomes</span>
              </div>
              <p className="text-sm text-[#171815] leading-relaxed bg-[#C5ED70]/15 p-4 rounded-lg border border-[#C5ED70]">
                {caseStudy.verifiedOutcomes}
              </p>
            </div>

          </div>

          {/* 08: Learnings & Next Steps */}
          <div className="space-y-2 pt-4 border-t border-[#DADAD2]">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#6D6D65]">
              <span className="w-5 h-5 rounded-full bg-[#171815] text-[#F6F5F0] flex items-center justify-center text-[10px]">
                08
              </span>
              <span>Learnings & Strategic Next Steps</span>
            </div>
            <p className="text-sm text-[#171815] leading-relaxed bg-[#171815] text-[#F6F5F0] p-4 rounded-lg border border-white/10">
              {caseStudy.learningsAndNextSteps}
            </p>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 sm:p-6 bg-[#EAE9E1] border-t border-[#DADAD2] flex items-center justify-between">
          <span className="text-xs font-mono text-[#6D6D65]">
            Template designed for genuine performance reporting
          </span>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold uppercase tracking-wider bg-[#171815] text-[#F6F5F0] rounded-full hover:bg-black hover:text-[#C5ED70] transition-colors"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
