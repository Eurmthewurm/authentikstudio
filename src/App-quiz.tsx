import React from 'react';
import { HeroSection } from '@/components/HeroSection';
import { QuizSection } from '@/components/QuizSection';
import { ProofSection } from '@/components/ProofSection';
import { Footer } from '@/components/Footer';

export const QuizApp: React.FC = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Hero Section - Quiz Focused */}
      <HeroSection />
      
      {/* Quiz Section - Main Focus */}
      <QuizSection />
      
      {/* Social Proof */}
      <ProofSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};
