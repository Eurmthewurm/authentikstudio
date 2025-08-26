import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const SolutionSection: React.FC = () => {
  const ref = useRef(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 container-padding relative noise-bg overflow-hidden" ref={ref}>
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
        className="content-width relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-mobile">
          <div className="space-y-mobile text-center">
            <motion.h2 
              className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              We don't create
              <br />
              <motion.span 
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
                content
              </motion.span>.
              <br />
              We create <span className="text-amber-400">conviction</span>.
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </div>
          
          <div className="content-width space-y-mobile text-base sm:text-lg leading-relaxed">
            <div className="text-center space-y-mobile">
              <motion.p 
                className="text-xl sm:text-2xl md:text-3xl font-light text-amber-400"
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                We're signal amplifiers in a world full of noise.
              </motion.p>
              
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-center text-width"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                Through documentary-style storytelling, we help leaders discover their authentic voice and transform it into content that stops people in their tracks.
              </motion.p>
            </div>
            
            <div className="mobile-grid text-center">
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                <div className="text-4xl mb-1 sm:mb-2 lg:mb-3">🎯</div>
                <h3 className="font-bold text-lg text-amber-400">Discover Your Voice</h3>
                <p className="text-foreground/80">Guided sessions to uncover your authentic message and unique positioning</p>
              </motion.div>
              
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <div className="text-4xl mb-1 sm:mb-2 lg:mb-3">📹</div>
                <h3 className="font-bold text-lg text-amber-400">Create With Impact</h3>
                <p className="text-foreground/80">Documentary-style content that feels raw, human, and unforgettable</p>
              </motion.div>
              
              <motion.div 
                className="space-y-2 sm:space-y-3 lg:space-y-4"
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.6 }}
              >
                <div className="text-4xl mb-1 sm:mb-2 lg:mb-3">📈</div>
                <h3 className="font-bold text-lg text-amber-400">Scale Your Growth</h3>
                <p className="text-foreground/80">Systems and strategies that expand your authentic voice beyond our partnership</p>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-center text-foreground/80 text-width mb-0 mobile-gap-fix-1"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Whether you choose our <strong>Studio</strong> projects, <strong>Thought Leadership</strong> coaching, or join the <strong>Expansion Lab</strong>, we guide you to the same destination: becoming the signal your audience trusts.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
