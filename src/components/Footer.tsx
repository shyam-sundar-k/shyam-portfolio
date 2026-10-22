import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#080B14] text-[#A6B0C8] border-t border-[rgba(180,200,255,0.12)] py-12 sm:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-[rgba(180,200,255,0.1)]">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#37E7FF] shadow-[0_0_8px_#37E7FF]" />
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F5F7FF] flex items-center gap-1">
                <span>SHYAM SUNDAR</span>
                <span className="text-[10px] font-mono font-normal text-[#37E7FF] border border-[#37E7FF]/40 rounded-xs px-1">®</span>
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A6B0C8] font-mono">
              Digital Marketing Executive · Bengaluru, India · Aspiring Performance Marketer
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <p className="text-[#A6B0C8] italic">
              “Creative ideas meet data. Growth begins with curiosity.”
            </p>
            <button
              onClick={onBackToTop}
              aria-label="Back to top of page"
              className="p-2.5 rounded-full bg-[#101527] border border-[rgba(180,200,255,0.2)] text-[#F5F7FF] hover:bg-[#37E7FF] hover:text-[#080B14] hover:border-[#37E7FF] transition-all cursor-pointer shadow-[0_0_15px_-3px_rgba(55,231,255,0.3)]"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A6B0C8]/80">
          <p>
            © {currentYear} Shyam Sundar K. Verified personal brand experience.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#37E7FF] transition-colors">
              B.Tech CSBS (2022–2026)
            </span>
            <span>·</span>
            <span className="hover:text-[#37E7FF] transition-colors">
              Knowledge Institute of Technology
            </span>
            <span>·</span>
            <span className="text-[#D7FF62]">CGPA 7.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
