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
          More than a quiz — it's a blueprint
        </motion.h2>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl text-foreground/90 leading-relaxed mb-8 text-center" style={{fontFamily: 'Work Sans, sans-serif'}}>
            In just 2 minutes, you'll unlock:
          </p>
          
          <motion.div className="card-clean-lg p-8" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="space-y-6">
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 0.6 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">Your founder archetype explained</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 0.8 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">A personalized 1-page blueprint showing your strongest signal</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 1.0 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">The blind spot most likely costing you opportunities</p>
                </div>
              </motion.div>
              <motion.div variants={listItemVariants} initial="initial" animate="animate" transition={{ delay: 1.2 }} className="flex items-start gap-4">
                <CheckCircle2 className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-semibold text-xl text-foreground">A free workbook with 3 practical steps to sharpen your story</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        
        {/* CTA Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <a href="/quiz">
            <motion.button
              className="px-8 py-4 text-lg font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{backgroundColor: '#D4B37A', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif', borderRadius: '12px'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A67C52'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D4B37A'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start the Quiz →
            </motion.button>
          </a>
        </motion.div>
        
        {/* Process Flow */}
        <ProcessFlow />
      </div>
    </section>
  );
};