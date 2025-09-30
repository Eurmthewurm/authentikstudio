import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { ProcessFlow } from './ProcessFlow';
import { AnimatedSectionBackground } from './AnimatedSectionBackground';

export const SolutionSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const listItemVariants = {
    initial: { opacity: 0, x: -20 },
    animate: { opacity: 1, x: 0 },
  };

  return (
    <section id="solution" className="section-off-white container-clean text-foreground relative">
      <AnimatedSectionBackground variant="flowing" intensity="subtle" color="#D4B37A" />
      <div className="content-clean relative z-10">
        <motion.h2
          className="text-heading-clean text-gradient-gold text-center mb-12"
          {...fadeIn}
        >
          Solution: Signal DNA Discovery™
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
            <h3 className="text-subheading-clean text-primary mb-6">What Is Signal DNA?</h3>
            <p className="text-body-clean text-foreground/90 mb-6">
              Your Signal DNA is the unique combination of your authentic founding story, market positioning, and future vision that makes you impossible to ignore or replicate.
            </p>
            <p className="text-body-clean text-foreground/90">
              Unlike generic "founder story" templates, Signal DNA Discovery™ uses advanced AI analysis combined with deep human psychology to extract your most compelling narrative elements—the ones that create instant trust, emotional connection, and unstoppable momentum.
            </p>
          </motion.div>

          <motion.div className="card-clean-lg p-8" {...fadeIn} transition={{ delay: 0.4 }}>
            <h3 className="text-subheading-clean text-primary mb-8 text-center">Why Signal DNA Works</h3>
            <div className="space-y-6">
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 0.6 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">AI-Powered Analysis</p>
                  <p className="text-foreground/80 mt-1">Advanced pattern recognition identifies your unique communication DNA</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 0.8 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">Human Psychology Integration</p>
                  <p className="text-foreground/80 mt-1">Deep understanding of what makes people connect and convert</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 1.0 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">Proven Framework</p>
                  <p className="text-foreground/80 mt-1">3-day transformation process used by successful founders worldwide</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Process Flow */}
        <ProcessFlow />
      </div>
    </section>
  );
};