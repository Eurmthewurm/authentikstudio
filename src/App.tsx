import React from 'react';
import { AnimatedGrain } from './components/AnimatedGrain';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { MethodSection } from './components/MethodSection';
import { ProofSection } from './components/ProofSection';
import { DeliverablesSection } from './components/DeliverablesSection';
import { FounderSection } from './components/FounderSection';
import { AudienceSection } from './components/AudienceSection';
import { DiscoverySection } from './components/LabSessionSection';
import { ServicesSection } from './components/ServicesSection';
import { InvestmentSection } from './components/InvestmentSection';
import { FinalCtaSection } from './components/FinalCtaSection';
import { ScrollAwareBackground } from './components/ScrollAwareBackground';
import { SectionDivider } from './components/SectionDivider';
import { StickyHeader } from './components/StickyHeader';
import { CustomCursor } from './components/CustomCursor';

function App() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative overflow-x-hidden app-container mobile-optimized">
      <CustomCursor />
      <StickyHeader />
      <ScrollAwareBackground />
      <AnimatedGrain />
      
      <main className="relative z-10">
        <HeroSection />
        <ProblemSection />
        <SectionDivider />
        <SolutionSection />
        <MethodSection />
        <SectionDivider />
        <ProofSection />
        <DeliverablesSection />
        <SectionDivider />
        <FounderSection />
        <AudienceSection />
        <SectionDivider />
        <DiscoverySection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider />
        <InvestmentSection />
        <FinalCtaSection />
      </main>
      
      <footer className="mt-8 sm:mt-16 py-8 sm:py-12 container-padding border-t border-border/50 relative z-10">
        <div className="content-width">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-y-6 sm:gap-y-8">
            <div className="font-serif text-lg sm:text-xl font-bold text-center sm:text-left">
              Authentik Studio
              <div className="text-sm text-foreground/60 font-sans font-normal mt-2">
                © 2025 Signal in the Noise. All rights reserved.
              </div>
            </div>
            <div className="flex flex-col items-center gap-y-4">
              <a href="#" onClick={scrollToTop} className="text-sm text-foreground/60 hover:text-amber-400 transition-colors touch-target flex items-center justify-center">
                Back to Top &uarr;
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
