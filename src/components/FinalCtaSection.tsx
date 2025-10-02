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
          Want personalized feedback on your results?
        </motion.h2>
        <motion.p
          className="text-subheading-clean text-white/90 mb-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          After you complete the quiz, you'll get the chance to book a free Signal DNA Audit with our team.<br />
          We only open 10 slots per month.
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
            Take the Quiz to Unlock Your Audit
          </Button>
        </motion.a>
      </div>
    </section>
  );
};