import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const deliverables = [
  {
    emoji: "🎯",
    text: "Personal guidance sessions to uncover your authentic voice (8–12 sessions per month)"
  },
  {
    emoji: "🧭", 
    text: "Leadership communication strategy that cuts to the bone"
  },
  {
    emoji: "💬",
    text: "Voice coaching to help you communicate with conviction"
  },
  {
    emoji: "🎙️",
    text: "Mentorship to build confident leadership presence"
  },
  {
    emoji: "🤝",
    text: "Community access to learn alongside other visionary leaders"
  },
  {
    emoji: "⚡",
    text: "Systems that help you scale your authentic voice beyond our partnership"
  }
];

export const DeliverablesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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
    <section className="py-24 md:py-32 px-6 relative overflow-hidden" ref={ref}>
      <motion.div 
        className="max-w-5xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="text-center space-y-12 mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="font-serif text-5xl sm:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            What You <span className="text-amber-400">Get</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            When you work with Authentik Studio, you'll receive guidance, systems, and support to help you cut through the noise and amplify your authentic voice
          </motion.p>
        </motion.div>
        
        <div className="space-y-12">
          <motion.div 
            className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-4xl mx-auto"
            variants={containerVariants}
          >
            {deliverables.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-start space-x-6 group"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.div 
                  className="text-4xl flex-shrink-0 pt-1"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.5
                  }}
                >
                  {item.emoji}
                </motion.div>
                <motion.p 
                  className="text-lg text-foreground/90 group-hover:text-amber-400 transition-colors duration-300"
                  initial={{ x: 20, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                >
                  {item.text}
                </motion.p>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center"
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <motion.p 
              className="text-xl sm:text-2xl font-medium leading-relaxed max-w-4xl mx-auto"
              animate={{
                textShadow: [
                  "0 0 0px rgba(251, 191, 36, 0)",
                  "0 0 10px rgba(251, 191, 36, 0.3)",
                  "0 0 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <span className="text-amber-400">Outcome:</span> You stop blending in. You start leading. Your brand becomes the signal people trust, remember, and buy from.
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
