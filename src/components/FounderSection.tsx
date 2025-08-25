import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const FounderSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 px-6 relative noise-bg overflow-hidden" ref={ref}>
      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-12 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="space-y-8"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="font-serif text-5xl sm:text-6xl font-bold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.9, opacity: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Why <span className="text-amber-400">Authentik Studio</span>
            <br />
            Exists
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="space-y-8 text-lg sm:text-xl leading-relaxed text-foreground/90"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.p
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            We built Authentik Studio out of <span className="text-amber-400 font-medium">frustration</span>.
          </motion.p>
          
          <motion.p
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            We saw brands drowning in templated marketing — chasing trends, producing endless "content" nobody cared about.
          </motion.p>
          
          <motion.p
            className="text-xl sm:text-2xl font-medium text-amber-400"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            In a world flooded with AI-driven noise, we knew the only way forward was human truth.
          </motion.p>
          
          <motion.p
            className="text-xl font-medium"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.5 }}
          >
            That's why we exist: to help founders cut through, lead with authenticity, and expand into their next stage of growth.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};
