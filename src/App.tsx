import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
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

export function App() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const topOffset = 80;
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
    <div className="min-h-screen bg-[#F6F5F0] text-[#171815] selection:bg-[#C5ED70] selection:text-[#171815]">
      {/* Navigation */}
      <Navbar onTalkClick={() => scrollToSection('contact')} />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('work')}
          onConnectClick={() => scrollToSection('contact')}
        />

        {/* Section 01: About */}
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

        {/* Section 07 / Contact: Strategic Near-Black Editorial Section */}
        <Contact
          onNotify={showToast}
          onBackToTop={scrollToTop}
        />
      </main>

      {/* Footer */}
      <Footer onBackToTop={scrollToTop} />

      {/* Toast Feedback */}
      <Toast
        message={toastMessage}
        onClose={() => setToastMessage(null)}
      />
    </div>
  );
}

export default App;
