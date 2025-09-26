import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const RiskReversalSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section className="section-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading text-gradient-gold mb-12"
          {...fadeIn}
        >
          The Signal DNA Guarantee
        </motion.h2>

        <motion.div
          className="card-modern p-8 sm:p-12 max-w-3xl mx-auto shadow-modern-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          <ShieldCheck className="text-primary mb-6 mx-auto" size={64} />
          <h3 className="text-subheading text-foreground mb-6">Your Satisfaction, Guaranteed.</h3>
          <p className="text-body text-foreground/70 mb-6">
            We are so confident in the power of Signal DNA Discovery™ to transform your narrative that we offer a <strong className="text-primary">30-day 100% satisfaction guarantee</strong>.
          </p>
          <p className="text-body text-foreground/70">
            If, after your Free Signal DNA Audit and implementing our initial recommendations, you don't feel significantly clearer, more confident, and better positioned to cut through the noise, simply let us know. We'll work with you until you are satisfied, or we'll provide additional resources at no cost. Your breakthrough is our priority.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
