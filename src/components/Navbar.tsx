import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onTalkClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onTalkClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Direction', href: '#direction' },
    { label: 'Experience', href: '#experience' },
    { label: 'Selected Work', href: '#work' },
    { label: 'Skills', href: '#skills' },
    { label: 'Milestones', href: '#milestones' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 80;
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
          ? 'bg-[#F6F5F0]/90 backdrop-blur-md border-b border-[#DADAD2]/70 py-3.5 shadow-xs'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#"
            className="group flex items-center gap-2.5 focus:outline-hidden focus:ring-2 focus:ring-[#171815] rounded-sm py-1"
          >
            <span className="flex h-2.5 w-2.5 rounded-full bg-[#C5ED70] ring-4 ring-[#C5ED70]/30 transition-transform group-hover:scale-110" />
            <div className="flex flex-col">
              <span className="font-display font-bold text-base sm:text-lg tracking-tight text-[#171815] group-hover:text-black transition-colors">
                SHYAM SUNDAR K.
              </span>
              <span className="text-[10px] tracking-wider uppercase text-[#6D6D65] font-medium hidden sm:block">
                Digital Marketing Executive · Bengaluru
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold uppercase tracking-wider text-[#6D6D65]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="hover:text-[#171815] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#171815] hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onTalkClick}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider bg-[#171815] text-[#F6F5F0] rounded-full hover:bg-black hover:text-[#C5ED70] transition-all duration-200 shadow-xs focus:outline-hidden focus:ring-2 focus:ring-[#171815]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
              className="p-2 text-[#171815] hover:bg-[#EAE9E1] rounded-lg transition-colors focus:outline-hidden focus:ring-2 focus:ring-[#171815]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F5F0] border-b border-[#DADAD2] px-6 py-6 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-4 text-sm font-semibold uppercase tracking-wider text-[#171815]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="py-2 border-b border-[#DADAD2]/40 hover:text-black flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#6D6D65]">→</span>
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onTalkClick();
                }}
                className="w-full py-3 text-center text-xs font-bold uppercase tracking-wider bg-[#171815] text-[#F6F5F0] rounded-full hover:bg-black hover:text-[#C5ED70] transition-colors flex items-center justify-center gap-2"
              >
                <span>Let's Talk</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
