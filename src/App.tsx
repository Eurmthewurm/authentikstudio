import { useEffect } from 'react';
import { StickyHeader } from './components/StickyHeader';
import { CustomCursor } from './components/CustomCursor';
import { ScarcityBanner } from './components/ScarcityBanner';
import { StickyNav } from './components/StickyNav';
import { HorizontalFlow } from './components/HorizontalFlow';
import { QuizVideoPreview } from './components/QuizVideoPreview';
import { HeroSection } from './components/HeroSection';
import { CommunicationDilemmaSection } from './components/CommunicationDilemmaSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { ProofSection } from './components/ProofSection';
import { BenefitsDeepDiveSection } from './components/BenefitsDeepDiveSection';
import { AboutSection } from './components/AboutSection';
import { UrgencyScarcitySection } from './components/UrgencyScarcitySection';
import { RiskReversalSection } from './components/RiskReversalSection';
import { QuizSection } from './components/QuizSection';
import { FAQSection } from './components/FAQSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { Footer } from './components/Footer';
import { SectionDivider } from './components/SectionDivider';

function App() {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Listen for hash changes (e.g., from clicking a link with #id)
    window.addEventListener('hashchange', handleHashChange);

    // Also handle initial load if there's a hash in the URL
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  return (
    <div className="relative">
      <CustomCursor />
      <ScarcityBanner />
      <StickyHeader />
      <StickyNav />
      <main>
        <HeroSection />
        <QuizVideoPreview />
        <HorizontalFlow />
        <SectionDivider />
        <CommunicationDilemmaSection />
        <SectionDivider />
        <ProblemSection />
        <SectionDivider />
        <SolutionSection />
        <SectionDivider />
        <QuizSection />
        <SectionDivider />
        <ProofSection />
        <SectionDivider />
        <BenefitsDeepDiveSection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <UrgencyScarcitySection />
        <SectionDivider />
        <RiskReversalSection />
        <SectionDivider />
        <FAQSection />
        <SectionDivider />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
