import React from 'react';
import { ArrowUp } from 'lucide-react';

interface FooterProps {
  onBackToTop: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onBackToTop }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#171815] text-[#DADAD2] border-t border-white/10 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top footer row */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-12 border-b border-white/10">
          <div>
            <div className="flex items-center gap-2.5 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C5ED70]" />
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-[#F6F5F0]">
                SHYAM SUNDAR K.
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#DADAD2] font-mono">
              Digital Marketing Executive · Bengaluru, India
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <p className="text-[#DADAD2] italic">
              “Designed with curiosity. Built for growth.”
            </p>
            <button
              onClick={onBackToTop}
              aria-label="Back to top of page"
              className="p-2.5 rounded-full bg-white/5 border border-white/15 text-[#F6F5F0] hover:bg-[#C5ED70] hover:text-[#171815] hover:border-[#C5ED70] transition-colors"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom footer row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6D6D65]">
          <p>
            © {currentYear} Shyam Sundar K. All information verified & strictly grounded.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-[#DADAD2] transition-colors">
              B.Tech CSBS (2022–2026)
            </span>
            <span>·</span>
            <span className="hover:text-[#DADAD2] transition-colors">
              Knowledge Institute of Technology
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
