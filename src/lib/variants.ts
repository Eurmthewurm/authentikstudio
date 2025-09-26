// A/B Testing Variants for Authentik Studio
// These can be toggled via environment variables or URL parameters

export const getVariant = (testName: string): string => {
  // In production, this would integrate with your A/B testing platform
  // For now, using simple hash-based selection
  const variants = getVariants(testName);
  const hash = window.location.hash.slice(1); // Remove #
  const index = hash.length % variants.length;
  return variants[index] || variants[0];
};

export const getVariants = (testName: string): string[] => {
  switch (testName) {
    case 'hero_headline':
      return [
        "Stop Explaining What You Do. Start Making People Care.",
        "From Invisible Founder to Unstoppable Signal",
        "Your Communication Archetype Is Your Competitive Edge"
      ];
    
    case 'hero_subheadline':
      return [
        "Discover your Signal DNA archetype and get the exact words that make investors lean in, customers say yes, and media take notice.",
        "Reveal your founder archetype in just 2 minutes—and captivate customers, investors, and media.",
        "Transform your founder story into an unstoppable competitive advantage with our AI-powered Signal DNA Discovery™ method."
      ];
    
    case 'quiz_cta':
      return [
        "Claim Your FREE Signal DNA Audit (Worth €500)",
        "Take the Free 2-Minute Assessment",
        "Get Your Personalized Pitch Scripts Now"
      ];
    
    case 'results_cta':
      return [
        "Book Free 15-Min Clarity Call",
        "Schedule Your Free Strategy Session",
        "Get Your Custom Communication Plan"
      ];
    
    default:
      return [''];
  }
};

// Usage examples:
// const headline = getVariant('hero_headline');
// const cta = getVariant('quiz_cta');
