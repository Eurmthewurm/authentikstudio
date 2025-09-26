import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Users } from 'lucide-react';

export const UrgencyScarcitySection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section className="section-off-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading text-gradient-gold mb-12"
          {...fadeIn}
        >
          Why Now? Why This Matters More in 2025
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          <motion.div className="card-modern p-8 shadow-modern" {...fadeIn} transition={{ delay: 0.2 }}>
            <Clock className="text-primary mb-4" size={36} />
            <h3 className="font-semibold text-xl text-foreground mb-3">The AI Authenticity Crisis</h3>
            <p className="text-body text-foreground/70">
              In 2025, AI-generated content will flood every channel. Authenticity isn't a buzzword; it's your only defense against becoming invisible. The founders who act now to define their Signal DNA will dominate the next decade.
            </p>
          </motion.div>

          <motion.div className="card-modern p-8 shadow-modern" {...fadeIn} transition={{ delay: 0.4 }}>
            <Users className="text-primary mb-4" size={36} />
            <h3 className="font-semibold text-xl text-foreground mb-3">Limited Spots Available</h3>
            <p className="text-body text-foreground/70">
              To ensure a high-touch, personalized experience, we limit Signal DNA Discovery™ audits to just 12 founders per month. This isn't a mass-market program; it's a bespoke journey. Secure your spot before they're gone.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
