import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const SolutionSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 px-6 relative noise-bg overflow-hidden" ref={ref}>
      {/* Animated signal waves */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-amber-400/20 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            initial={{
              width: 0,
              height: 0,
              opacity: 1
            }}
            animate={{
              width: [0, 800, 1200],
              height: [0, 800, 1200],
              opacity: [1, 0.5, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-16">
          <div className="space-y-8 text-center">
            <motion.h2 
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Our <motion.span 
                className="text-amber-400"
                animate={{
                  filter: [
                    "drop-shadow(0 0 0px rgba(251, 191, 36, 0))",
                    "drop-shadow(0 0 20px rgba(251, 191, 36, 0.7))",
                    "drop-shadow(0 0 0px rgba(251, 191, 36, 0))"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Expansion Lab
              </motion.span>
              <br />
              isn't another agency.
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
          
          <div className="max-w-4xl mx-auto space-y-8 text-lg leading-relaxed">
            {[
              { text: "We're signal amplifiers.", className: "text-2xl font-light text-amber-400 text-center" },
              { text: "We strip away the performative marketing speak and uncover the raw truth of your brand. Then we amplify it into stories that stop people in their tracks.", className: "text-xl text-center" },
              { text: "The Expansion Lab is our proven 6-month program that transforms generic brands into authentic storytellers who stand out from the noise.", className: "text-lg text-center text-foreground/80" },
              { text: "See all our services below to find the right path for your brand.", className: "text-base text-center text-foreground/70" }
            ].map((item, index) => (
              <motion.p
                key={index}
                className={item.className}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + (index * 0.2) }}
              >
                {item.text}
              </motion.p>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};
