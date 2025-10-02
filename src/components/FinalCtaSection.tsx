import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackCTAClicked } from '@/lib/analytics';

export const FinalCtaSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section id="final-cta" className="section-clean container-clean text-white" style={{backgroundColor: '#111111'}}>
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-white mb-8"
          {...fadeIn}
        >
          Your Moment to Break Through
        </motion.h2>
        <motion.p
          className="text-subheading-clean text-white/90 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          Every day you wait, another founder claims mindshare that should be yours. The founders who dominate 2025 will be the ones who act in Q4 2024.
        </motion.p>

        <motion.a
          href="/quiz"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
        >
          <Button
            size="lg"
            className="px-12 py-6 text-xl font-bold"
            style={{backgroundColor: '#D4B37A', color: '#FFFFFF'}}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#A67C52';
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.backgroundColor = '#D4B37A';
            }}
            onClick={() => trackCTAClicked('final_cta')}
          >
            Claim Your FREE Signal DNA Audit Now
          </Button>
        </motion.a>
      </div>
    </section>
  );
};