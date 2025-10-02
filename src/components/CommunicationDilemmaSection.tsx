import React from 'react';
import { motion } from 'framer-motion';
import { User, Lightbulb, Target } from 'lucide-react';

export const CommunicationDilemmaSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section id="communication-dilemma" className="section-off-white container-clean text-foreground relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-primary/30 rounded-full"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 border border-primary/20 rounded-full"></div>
      </div>

      <div className="content-clean text-center relative z-10">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-8"
          {...fadeIn}
        >
          How It Works
        </motion.h2>

        <motion.p
          className="text-subheading-clean text-foreground/90 mb-16 max-w-4xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          You're brilliant at building. You struggle at selling. Every pitch feels generic. Every customer conversation falls flat. You know you need better messaging, but you don't know what 'better' looks like for YOU.
        </motion.p>

        {/* Visual emphasis element */}
        <motion.div
          className="w-24 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mb-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        />

        {/* Three Discovery Cards */}
        <motion.div
          className="mb-12 sm:mb-16 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
        >
          <p className="text-sm mb-6 sm:mb-8 font-medium text-center" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>What you'll discover ↓</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Reveal Your Archetype</h3>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Unlock Your Story Strengths</h3>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Locate Your Connection Gaps</h3>
            </motion.div>
          </div>
          
          <div className="mt-6 p-4 rounded-lg" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.2)'}}>
            <p className="text-sm text-center" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
              🎯 <strong>BONUS:</strong> Your free quiz reveals one primary archetype—and unlocks two extra profiles (Hybrid & Shadow deep-dives) inside your €97-value workbook.
            </p>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};
