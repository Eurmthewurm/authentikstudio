import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const forItems = [
  "Founders tired of sounding like everyone else",
  "Brands ready to risk being real", 
  "Companies who want to be remembered, not ignored",
  "Teams brave enough to stand for something"
];

const notForItems = [
  "Businesses who want safe, corporate, generic",
  "Teams looking for \"cheap, fast content\"",
  "Brands chasing fleeting trends",
  "Organizations afraid to have a strong opinion"
];

export const AudienceSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-8 sm:py-12 md:py-16 container-padding relative" ref={ref}>
      <motion.div 
        className="content-width relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center space-y-0 sm:space-y-1 md:space-y-2 mb-6 sm:mb-8 md:mb-12"
          variants={itemVariants}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Who This <span className="text-amber-400">Is For</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {/* For */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-serif text-3xl font-bold text-green-400"
              initial={{ x: -20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              ✅ Perfect For:
            </motion.h3>
            
            <ul className="space-y-2 sm:space-y-3">
              {forItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-4 group"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.7 + (index * 0.1) }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="text-green-400 text-xl flex-shrink-0 mt-1"
                    animate={{
                      scale: [1, 1.2, 1]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3
                    }}
                  >
                    ✅
                  </motion.span>
                  <span className="text-lg text-foreground/90 group-hover:text-green-400 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Not For */}
          <motion.div 
            className="space-y-4 sm:space-y-6"
            variants={itemVariants}
          >
            <motion.h3 
              className="font-serif text-3xl font-bold text-red-400"
              initial={{ x: 20, opacity: 0 }}
              animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              ❌ Not For:
            </motion.h3>
            
            <ul className="space-y-2 sm:space-y-3">
              {notForItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start space-x-4 group"
                  variants={itemVariants}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.8 + (index * 0.1) }}
                  whileHover={{ x: 10 }}
                >
                  <motion.span 
                    className="text-red-400 text-xl flex-shrink-0 mt-1"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: (index + 4) * 0.3
                    }}
                  >
                    ❌
                  </motion.span>
                  <span className="text-lg text-foreground/90 group-hover:text-red-400 transition-colors duration-300">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
