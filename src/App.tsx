import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarketingConstellation } from './components/MarketingConstellation';
import { About } from './components/About';
import { Direction } from './components/Direction';
import { Experience } from './components/Experience';
import { SelectedWork } from './components/SelectedWork';
import { Skills } from './components/Skills';
import { Milestones } from './components/Milestones';
import { Personality } from './components/Personality';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { MarketingLabModal } from './components/MarketingLabModal';

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isLabOpen, setIsLabOpen] = useState(false);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 84;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#080B14] text-[#F5F7FF] selection:bg-[#37E7FF] selection:text-[#080B14]">
      {/* Navigation */}
      <Navbar
        onTalkClick={() => scrollToSection('contact')}
        onOpenLab={() => setIsLabOpen(true)}
      />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('work')}
          onConnectClick={() => scrollToSection('contact')}
          onOpenLab={() => setIsLabOpen(true)}
        />

        {/* Marketing Constellation (Section 06 Ecosystem) */}
        <MarketingConstellation />

        {/* Section 01: About (The Person Behind the Campaigns) */}
        <About />

        {/* Section 02: Performance Marketing Direction */}
        <Direction />

        {/* Section 03: Professional Journey / Experience */}
        <Experience />

        {/* Section 04: Selected Work & Thinking */}
        <SelectedWork />

        {/* Section 05: Skills & Toolkit Matrix */}
        <Skills />

        {/* Section 06: Education & Achievements */}
        <Milestones />

        {/* Section 09: Personality & Dimensions */}
        <Personality />

        {/* Section 07 / Contact: Strategic High-Impact Cyber Section */}
        <Contact
          onNotify={showToast}
          onBackToTop={scrollToTop}
        />
      </main>

      {/* Footer */}
      <Footer onBackToTop={scrollToTop} />

      {/* The Marketing Lab Interactive Modal (Section 16) */}
      <MarketingLabModal
        isOpen={isLabOpen}
        onClose={() => setIsLabOpen(false)}
      />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
