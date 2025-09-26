import React from 'react';
import { motion } from 'framer-motion';

export const ProblemSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section id="problem" className="section-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-12"
          {...fadeIn}
        >
          The Crisis Every Founder Faces in 2025
        </motion.h2>

        <motion.p
          className="text-subheading-clean text-foreground/90 mb-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          You're brilliant. Your product is game-changing. Your vision could reshape entire industries.
          <br /><strong className="text-primary">So why does no one care?</strong>
        </motion.p>

        <motion.p
          className="text-body-clean text-foreground/80 mb-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          While you're buried in product development and metrics, your competitors are stealing the spotlight with stories that stick. Every day you stay invisible:
        </motion.p>

        <div className="grid-2-clean max-w-6xl mx-auto">
          <motion.div className="card-clean-lg p-8" {...fadeIn} transition={{ delay: 0.6 }}>
            <p className="text-xl font-semibold text-primary mb-4">✗ Investors scroll past your pitch</p>
            <p className="text-body-clean text-foreground/80">for flashier, story-driven startups.</p>
          </motion.div>
          <motion.div className="card-clean-lg p-8" {...fadeIn} transition={{ delay: 0.7 }}>
            <p className="text-xl font-semibold text-primary mb-4">✗ Customers can't distinguish you</p>
            <p className="text-body-clean text-foreground/80">from the AI-generated noise flooding their feeds.</p>
          </motion.div>
          <motion.div className="card-clean-lg p-8" {...fadeIn} transition={{ delay: 0.8 }}>
            <p className="text-xl font-semibold text-primary mb-4">✗ Top talent joins competitors</p>
            <p className="text-body-clean text-foreground/80">who "feel more inspiring."</p>
          </motion.div>
          <motion.div className="card-clean-lg p-8" {...fadeIn} transition={{ delay: 0.9 }}>
            <p className="text-xl font-semibold text-primary mb-4">✗ Your authentic vision gets lost</p>
            <p className="text-body-clean text-foreground/80">in generic marketing templates.</p>
          </motion.div>
        </div>

        <motion.p
          className="text-subheading-clean text-primary mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
        >
          <strong className="text-gradient-gold">The brutal truth?</strong> In the AI era, being the best isn't enough. You need to be the most memorable.
        </motion.p>
      </div>
    </section>
  );
};