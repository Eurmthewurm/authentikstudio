import React from 'react';
import { motion } from 'framer-motion';
import { QuizPreview } from './QuizPreview';

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
          The Founder's Communication Dilemma
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
        
        {/* Quiz Preview */}
        <QuizPreview />
      </div>
    </section>
  );
};
