import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export const ProblemSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const leftVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  const rightVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      {/* Background noise effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-red-500/10 rounded-full"
            animate={{
              x: [Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200), Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200)],
              y: [Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800), Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800)],
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div className="space-y-8" variants={leftVariants}>
            <motion.h2 
              className="font-serif text-5xl sm:text-6xl font-bold leading-tight"
              initial={{ y: 50 }}
              animate={isInView ? { y: 0 } : { y: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              The <motion.span 
                className="text-amber-400"
                animate={{ 
                  textShadow: [
                    "0 0 0px rgba(251, 191, 36, 0)",
                    "0 0 10px rgba(251, 191, 36, 0.5)",
                    "0 0 0px rgba(251, 191, 36, 0)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                noise
              </motion.span>
              <br />
              is deafening.
            </motion.h2>
            
            <motion.div 
              className="w-16 h-px bg-amber-400"
              initial={{ width: 0 }}
              animate={isInView ? { width: 64 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>
          
          <motion.div 
            className="space-y-8 text-lg leading-relaxed text-foreground/90"
            variants={rightVariants}
          >
            {[
              "The internet is drowning in synthetic content that lacks soul, purpose, and the raw edges that make something memorable.",
              "Anyone can publish 100 posts a week. But the more content there is, the less people trust it.",
              "Your audience isn't craving more information. They're craving truth, courage, and authenticity."
            ].map((text, index) => (
              <motion.p
                key={index}
                initial={{ y: 30, opacity: 0 }}
                animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + (index * 0.2) }}
                className={index === 2 ? "text-xl font-medium text-amber-400" : ""}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
