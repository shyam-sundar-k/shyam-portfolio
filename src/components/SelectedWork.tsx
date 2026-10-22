import { useState } from 'react';
import { projects } from '../data/portfolioData';
import type { Project } from '../types';
import { CaseStudyModal } from './CaseStudyModal';
import { ArrowUpRight, Sprout, Megaphone, FlaskRound as Flask, Eye } from 'lucide-react';

export const SelectedWork: React.FC = () => {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <section id="work" className="py-20 sm:py-28 bg-[#080B14] border-t border-[rgba(180,200,255,0.14)] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#37E7FF]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#9A6BFF]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Eyebrow */}
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#37E7FF]">
            04 / SELECTED WORK
          </span>
          <div className="h-px bg-gradient-to-r from-[#37E7FF]/40 to-transparent flex-1 max-w-xs" />
        </div>

        {/* Section Headline */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div>
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-[#F5F7FF] tracking-tight max-w-2xl leading-[1.12]">
              “Ideas deserve more than a screenshot.”
            </h2>
          </div>
          <p className="text-sm text-[#A6B0C8] max-w-md font-sans leading-relaxed">
            A transparent exhibition of product concepts, advertising ideation competitions, and structured frameworks for future marketing experiments.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={project.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-8 lg:p-10 rounded-2xl border transition-all duration-300 group ${
                  project.isUpcoming
                    ? 'glass-panel border-dashed border-[rgba(180,200,255,0.2)] hover:border-[#37E7FF]/50'
                    : 'glass-panel-elevated hover:border-[#37E7FF]/60 hover:shadow-[0_0_35px_-5px_rgba(55,231,255,0.2)]'
                }`}
              >
                {/* Visual Representation Column */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-xl overflow-hidden border border-[rgba(180,200,255,0.18)] bg-[#080B14] p-6 text-[#F5F7FF] shadow-xl group-hover:border-[#37E7FF]/50 transition-colors">
                    
                    {/* Visual Art Direction depending on project */}
                    {project.id === 'agrosmart' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,200,255,0.12)]">
                          <div className="flex items-center gap-2">
                            <Sprout className="w-4 h-4 text-[#37E7FF]" />
                            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F7FF] font-semibold">
                              AgroSmart Architecture · AI Concept
                            </span>
                          </div>
                          <span className="text-[10px] font-mono bg-[#37E7FF]/15 text-[#37E7FF] border border-[#37E7FF]/30 px-2 py-0.5 rounded-sm">
                            Multimodal Ingestion
                          </span>
                        </div>

                        {/* Concept Mockup Grid */}
                        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)] space-y-1">
                            <span className="text-[#A6B0C8] text-[10px] block uppercase">01 / Soil Sensors</span>
                            <span className="text-[#37E7FF] font-bold">N-P-K & pH Vector</span>
                            <div className="h-1.5 w-full bg-[#080B14] rounded-full overflow-hidden mt-2">
                              <div className="h-full bg-gradient-to-r from-[#37E7FF] to-[#D7FF62] w-3/4" />
                            </div>
                          </div>
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)] space-y-1">
                            <span className="text-[#A6B0C8] text-[10px] block uppercase">02 / Leaf Pathology</span>
                            <span className="text-[#9A6BFF] font-bold">CV Symptom Detection</span>
                            <span className="text-[10px] text-[#A6B0C8] block">Pattern match triage</span>
                          </div>
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)] space-y-1">
                            <span className="text-[#A6B0C8] text-[10px] block uppercase">03 / Weather Telemetry</span>
                            <span className="text-[#F5F7FF] font-bold">Micro-climate Alerts</span>
                            <span className="text-[10px] text-[#A6B0C8] block">7-day rain prediction</span>
                          </div>
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)] space-y-1">
                            <span className="text-[#A6B0C8] text-[10px] block uppercase">04 / Recommendation</span>
                            <span className="text-[#D7FF62] font-bold">Optimal Irrigation</span>
                            <span className="text-[10px] text-[#A6B0C8] block">Dynamic schedule</span>
                          </div>
                        </div>

                        <div className="pt-2 text-[11px] font-mono text-[#A6B0C8] flex items-center justify-between">
                          <span>Status: Conceptual Demonstration</span>
                          <span className="text-[#37E7FF]">Not a commercial deployment</span>
                        </div>
                      </div>
                    )}

                    {project.id === 'adzap-pitching' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,200,255,0.12)]">
                          <div className="flex items-center gap-2">
                            <Megaphone className="w-4 h-4 text-[#9A6BFF]" />
                            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F7FF] font-semibold">
                              ADZAP · Live Campaign Pitching
                            </span>
                          </div>
                          <span className="text-[10px] font-mono bg-[#9A6BFF]/15 text-[#9A6BFF] border border-[#9A6BFF]/30 px-2 py-0.5 rounded-sm">
                            Collegiate Talent Fest
                          </span>
                        </div>

                        <div className="space-y-3 font-mono text-xs">
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)]">
                            <span className="text-[#A6B0C8] text-[10px] uppercase block">Core Creative Challenge</span>
                            <span className="text-[#F5F7FF] font-semibold">Impromptu pitch narrative & high-pressure ad hook creation</span>
                          </div>

                          <div className="grid grid-cols-3 gap-2 text-center text-[11px]">
                            <div className="p-2.5 bg-[#101527] rounded-md border border-[rgba(180,200,255,0.1)]">
                              <span className="text-[#37E7FF] font-bold block text-sm">03s</span>
                              <span className="text-[#A6B0C8] text-[9px] uppercase">Hook Window</span>
                            </div>
                            <div className="p-2.5 bg-[#101527] rounded-md border border-[rgba(180,200,255,0.1)]">
                              <span className="text-[#9A6BFF] font-bold block text-sm">100%</span>
                              <span className="text-[#A6B0C8] text-[9px] uppercase">Live Delivery</span>
                            </div>
                            <div className="p-2.5 bg-[#101527] rounded-md border border-[rgba(180,200,255,0.1)]">
                              <span className="text-[#D7FF62] font-bold block text-sm">Panel</span>
                              <span className="text-[#A6B0C8] text-[9px] uppercase">Jury Defense</span>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#9A6BFF]/10 rounded-md border border-[#9A6BFF]/30 text-[11px] text-[#A6B0C8]">
                            Key Takeaway: Formulating rapid persuasive hooks under timed conditions directly translates to scroll-stopping ad copy.
                          </div>
                        </div>
                      </div>
                    )}

                    {project.id === 'future-case-studies' && (
                      <div className="space-y-4">
                        <div className="flex items-center justify-between pb-3 border-b border-[rgba(180,200,255,0.12)]">
                          <div className="flex items-center gap-2">
                            <Flask className="w-4 h-4 text-[#D7FF62]" />
                            <span className="font-mono text-xs uppercase tracking-wider text-[#F5F7FF] font-semibold">
                              Experiment Blueprint · In Development
                            </span>
                          </div>
                          <span className="text-[10px] font-mono bg-[#D7FF62]/15 text-[#D7FF62] border border-[#D7FF62]/30 px-2 py-0.5 rounded-sm">
                            Upcoming Studies
                          </span>
                        </div>

                        <div className="space-y-2.5 font-mono text-xs">
                          <div className="p-3 bg-[#101527] rounded-lg border border-[rgba(180,200,255,0.1)] space-y-1">
                            <span className="text-[#A6B0C8] text-[10px] block uppercase">Standardized 8-Point Architecture</span>
                            <div className="grid grid-cols-2 gap-1.5 text-[10px] text-[#A6B0C8] pt-1">
                              <div>• Context & Objective</div>
                              <div>• Target Audience</div>
                              <div>• Creative Strategy</div>
                              <div>• Channel Execution</div>
                              <div>• Analytics Tracking</div>
                              <div>• Verified Outcomes</div>
                            </div>
                          </div>

                          <div className="p-2.5 bg-[#101527] rounded-md border border-dashed border-[rgba(180,200,255,0.2)] text-[11px] text-[#A6B0C8] text-center">
                            Transparent case studies will be published as verified campaign performance metrics are established.
                          </div>
                        </div>
                      </div>
                    )}

                  </div>
                </div>

                {/* Content & Narrative Column */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Category & Badge */}
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-widest text-[#37E7FF] font-semibold">
                      {project.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#080B14] bg-[#D7FF62] px-2 py-0.5 rounded-xs font-bold">
                      {project.badge}
                    </span>
                  </div>

                  {/* Project Title */}
                  <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-[#F5F7FF] tracking-tight group-hover:text-[#37E7FF] transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-[#A6B0C8] leading-relaxed font-normal">
                    {project.description}
                  </p>

                  {/* Key Elements list */}
                  {project.keyElements && (
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono uppercase tracking-wider text-[#A6B0C8] block font-semibold">
                        Key Focus Points:
                      </span>
                      <ul className="space-y-1.5">
                        {project.keyElements.map((el, elIdx) => (
                          <li key={elIdx} className="text-xs sm:text-sm text-[#F5F7FF] flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#37E7FF]" />
                            <span>{el}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[11px] font-mono bg-[#101527] text-[#A6B0C8] px-2.5 py-1 rounded-md border border-[rgba(180,200,255,0.12)] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Button: Opens the structured 8-point case study */}
                  <div className="pt-4">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#151D32] text-[#37E7FF] text-xs font-mono font-bold uppercase tracking-wider rounded-full border border-[#37E7FF]/40 hover:bg-[#37E7FF] hover:text-[#080B14] hover:shadow-[0_0_20px_rgba(55,231,255,0.4)] transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>View Case Study Structure</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Case Study Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
