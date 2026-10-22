import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FlaskConical } from 'lucide-react';

interface NavbarProps {
  onTalkClick: () => void;
  onOpenLab: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTalkClick, onOpenLab }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      // Section tracking
      const sections = ['about', 'direction', 'experience', 'work', 'skills', 'milestones', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Direction', href: '#direction', id: 'direction' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Milestones', href: '#milestones', id: 'milestones' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 84;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#080B14]/85 backdrop-blur-md border-b border-[rgba(180,200,255,0.12)] py-3 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Wordmark with ® symbol */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#37E7FF] rounded-sm py-1"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#37E7FF] ring-4 ring-[#37E7FF]/20 group-hover:ring-[#37E7FF]/50 transition-all" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#F5F7FF] group-hover:text-[#37E7FF] transition-colors flex items-center gap-1">
                <span>SHYAM SUNDAR</span>
                <span className="text-[10px] font-mono font-normal text-[#37E7FF] border border-[#37E7FF]/40 rounded-xs px-1">®</span>
              </span>
              <span className="text-[9px] tracking-wider uppercase text-[#A6B0C8] font-medium hidden sm:block font-mono">
                Performance Marketing Lab · Bengaluru
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7 text-xs font-semibold uppercase tracking-wider text-[#A6B0C8]">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;

              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`transition-colors py-1 relative hover:text-[#F5F7FF] ${
                    isActive ? 'text-[#37E7FF]' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#37E7FF] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Marketing Lab Trigger */}
            <button
              onClick={onOpenLab}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-semibold uppercase tracking-wider bg-[#101527] text-[#37E7FF] rounded-full border border-[#37E7FF]/40 hover:bg-[#37E7FF]/15 hover:border-[#37E7FF] transition-all cursor-pointer shadow-[0_0_15px_-3px_rgba(55,231,255,0.2)]"
            >
              <FlaskConical className="w-3.5 h-3.5" />
              <span>Lab</span>
            </button>

            {/* Let's Connect CTA */}
            <button
              onClick={onTalkClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#37E7FF] to-[#9A6BFF] text-[#080B14] rounded-full hover:shadow-[0_0_20px_rgba(55,231,255,0.4)] transition-all duration-200 cursor-pointer font-mono"
            >
              <span>Let's Connect</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={onOpenLab}
              className="p-1.5 text-xs font-mono bg-[#101527] text-[#37E7FF] rounded-lg border border-[#37E7FF]/40"
              aria-label="Open Marketing Lab"
            >
              <FlaskConical className="w-4 h-4" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#F5F7FF] hover:bg-[#151D32] rounded-lg transition-colors border border-[rgba(180,200,255,0.14)]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#080B14]/95 backdrop-blur-xl border-b border-[rgba(180,200,255,0.16)] px-6 py-6 shadow-2xl animate-fade-in">
          <nav className="flex flex-col space-y-3.5 text-sm font-semibold uppercase tracking-wider text-[#F5F7FF]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 border-b border-[rgba(180,200,255,0.1)] hover:text-[#37E7FF] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#37E7FF]">→</span>
              </a>
            ))}
            <div className="pt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenLab();
                }}
                className="w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider bg-[#101527] text-[#37E7FF] rounded-full border border-[#37E7FF]/40 flex items-center justify-center gap-2"
              >
                <FlaskConical className="w-4 h-4" />
                <span>Enter Marketing Lab</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTalkClick();
                }}
                className="w-full py-3 text-center text-xs font-mono font-bold uppercase tracking-wider bg-gradient-to-r from-[#37E7FF] to-[#9A6BFF] text-[#080B14] rounded-full flex items-center justify-center gap-2"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
