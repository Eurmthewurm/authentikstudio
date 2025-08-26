import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

const sessionSteps = [
  "Analyze what's making your brand invisible in the marketplace",
  "Uncover your authentic voice and unique positioning", 
  "Create a roadmap to cut through the noise and reach your ideal clients",
  "Determine which Authentik Studio service will accelerate your transformation"
];

export const DiscoverySection: React.FC = () => {
  const ref = useRef(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 container-padding relative noise-bg overflow-hidden" ref={ref}>
      {/* Simplified background for mobile */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-amber-400/20 rounded-full"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-amber-400/20 rounded-full"></div>
      </div>

      <motion.div 
        className="content-width text-center space-y-1 sm:space-y-2 md:space-y-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div 
          className="space-y-1 sm:space-y-2"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            Your <span className="text-amber-400">Discovery</span> Call
            <br />
            <span className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-foreground/80">(Your First Step to Authenticity)</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          />
        </motion.div>
        
        <motion.div 
          className="space-y-0 sm:space-y-1 md:space-y-2 text-base sm:text-lg md:text-xl leading-relaxed text-width"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
            <motion.p 
              className="text-lg sm:text-xl md:text-2xl font-medium"
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              This isn't a sales pitch. It's a <span className="text-amber-400">strategic breakthrough session</span> that pays for itself.
            </motion.p>
          
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            In just <span className="text-amber-400 font-medium">60 focused minutes</span>, we'll uncover your brand's authentic voice and determine the perfect path forward:
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 content-width"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.3 }}
        >
          {sessionSteps.map((step, index) => (
            <motion.div 
              key={index}
              className="space-y-3 sm:space-y-4 p-4 sm:p-6 border border-amber-400/30 rounded-lg group hover:border-amber-400/60 transition-all duration-300"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.5 + (index * 0.2) }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="w-8 h-8 bg-amber-400 text-black rounded-full flex items-center justify-center font-bold mx-auto"
                animate={{
                  scale: [1, 1.1, 1],
                  boxShadow: [
                    "0 0 0px rgba(251, 191, 36, 0)",
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 0px rgba(251, 191, 36, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {index + 1}
              </motion.div>
              <p className="text-foreground/90 group-hover:text-amber-400 transition-colors duration-300">
                {step}
              </p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="space-y-6 sm:space-y-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 2.1 }}
        >
          <div className="bg-gradient-to-r from-amber-900/30 to-orange-900/30 border-2 border-amber-500/50 rounded-xl p-4 sm:p-6 backdrop-blur-sm text-width">
            <motion.p 
              className="text-lg sm:text-xl font-medium text-amber-400 text-center"
              animate={{
                textShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 10px rgba(251, 191, 36, 0.5)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              🎁 <span className="font-bold">Zero-Pressure Guarantee:</span> Even if we don't work together, you'll walk away with actionable insights worth thousands.
            </motion.p>
            <p className="text-amber-200/80 text-center mt-3 text-sm">
              No pitch. No pressure. Just pure value and strategic clarity for your brand.
            </p>
          </div>
          
          <div className="text-center">
            <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer" className="inline-block">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                  boxShadow: [
                    "0 0 0px 0px rgba(251, 191, 36, 0)",
                    "0 0 25px 5px rgba(251, 191, 36, 0.3)",
                    "0 0 0px 0px rgba(251, 191, 36, 0)"
                  ]
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 2,
                  ease: "easeInOut"
                }}
              >
                <Button 
                  size="lg" 
                  className="mobile-button bg-amber-400 hover:bg-amber-500 text-black font-medium tracking-wide relative overflow-hidden group touch-target"
                >
                  <motion.div
                    className="absolute inset-0 bg-white/20"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "100%" }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                  />
                  <span className="relative z-10">Get Your Free Brand Clarity Session</span>
                </Button>
              </motion.div>
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
