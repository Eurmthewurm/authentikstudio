import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, Video } from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Take Quiz",
      description: "2-minute Signal DNA assessment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: FileText,
      title: "Get Report",
      description: "Personalized archetype analysis",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Video,
      title: "Strategy Session",
      description: "15-min breakthrough call",
      color: "from-green-500 to-green-600"
    }
  ];

  return (
    <div className="py-16">
      <motion.h3
        className="text-2xl font-bold text-center text-gradient-gold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Your Signal DNA Journey
      </motion.h3>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Connection lines */}
        <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2 hidden md:block">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/40 to-primary/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 0.5, ease: "easeInOut" }}
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Step number */}
              <motion.div
                className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-10"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, duration: 0.3, type: "spring" }}
              >
                {index + 1}
              </motion.div>
              
              {/* Icon container */}
              <motion.div
                className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <step.icon className="w-10 h-10 text-white" />
              </motion.div>
              
              {/* Content */}
              <h4 className="text-xl font-bold text-foreground mb-2">{step.title}</h4>
              <p className="text-foreground/70 text-sm leading-relaxed">{step.description}</p>
              
              {/* Arrow for mobile */}
              {index < steps.length - 1 && (
                <div className="md:hidden flex justify-center mt-6">
                  <motion.div
                    className="w-6 h-6 text-primary"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <svg fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p className="text-foreground/80 mb-4">Ready to discover your Signal DNA?</p>
        <motion.a
          href="#free-audit"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary/80 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Your Journey
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </motion.a>
      </motion.div>
    </div>
  );
};
