import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export const OfferSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section id="free-audit" className="section-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-8"
          {...fadeIn}
        >
          Irresistible Offer: Free Signal DNA Audit
        </motion.h2>
        <motion.p
          className="text-subheading-clean text-primary mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        >
          (Limited to First 50 Founders This Month)
        </motion.p>

        <motion.div
          className="card-clean-lg p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 1, ease: "easeOut" }}
        >
          <h3 className="text-subheading-clean text-foreground mb-12">What You'll Receive:</h3>
          <ul className="space-y-6 text-left mb-12">
            {[
              "15-Minute AI-Powered Story Analysis: Discover your hidden narrative strengths and blind spots",
              "Personalized Signal DNA Report: Your unique story architecture mapped for maximum impact",
              "Competitive Differentiation Blueprint: See exactly how to position yourself vs. key competitors",
              "90-Day Quick-Win Action Plan: Immediate steps to amplify your signal starting this week",
              "Exclusive \"Founder Signal Playbook\": 25+ proven templates for investors, customers, and teams"
            ].map((item, index) => (
              <motion.li
                key={index}
                variants={listItemVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-start gap-4 text-body-clean text-foreground/90"
              >
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>

          <motion.div
            className="bg-primary/10 p-8 rounded-2xl mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <p className="text-3xl sm:text-4xl font-bold text-gradient-gold">
              Total Value: €500 | Today: FREE
            </p>
          </motion.div>

          <motion.a
            href="#final-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Button
              size="lg"
              className="button-primary-clean px-12 py-6 text-xl font-bold"
            >
              Claim Your FREE Signal DNA Audit Now
            </Button>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};