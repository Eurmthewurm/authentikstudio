import React from 'react';
import { motion } from 'framer-motion';
import { MethodCarousel } from './MethodCarousel';
import { AnimatedSectionBackground } from './AnimatedSectionBackground';

export const MethodSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section id="method" className="section-white container-clean text-foreground relative">
      <AnimatedSectionBackground variant="geometric" intensity="subtle" color="#A67C52" />
      <div className="content-clean relative z-10">
        <motion.h2
          className="text-heading-clean text-gradient-gold text-center mb-12"
          {...fadeIn}
        >
          The Signal DNA Method
        </motion.h2>
        
        <motion.div {...fadeIn} transition={{ delay: 0.2 }}>
          <p className="text-body-clean text-foreground/90 text-center max-w-3xl mx-auto mb-16">
            Our proprietary 3-phase methodology combines deep psychological insights with strategic communication engineering to unlock your authentic voice and amplify your signal.
          </p>
        </motion.div>
        
        {/* Method Carousel */}
        <MethodCarousel />
      </div>
    </section>
  );
};