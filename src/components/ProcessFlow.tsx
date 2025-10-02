import React from 'react';
import { motion } from 'framer-motion';
import { ClipboardList, FileText, Video, ArrowRight, CheckCircle } from 'lucide-react';

export const ProcessFlow: React.FC = () => {
  const steps = [
    {
      icon: ClipboardList,
      title: "Take Quiz",
      description: "2-minute Signal DNA assessment",
      color: "#D4B37A",
      step: "01"
    },
    {
      icon: FileText,
      title: "Get Report",
      description: "Personalized archetype analysis",
      color: "#A67C52",
      step: "02"
    },
    {
      icon: Video,
      title: "Strategy Session",
      description: "15-min breakthrough call",
      color: "#C49E58",
      step: "03"
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
      
      <div className="relative max-w-5xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-center gap-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{backgroundColor: step.color}}>
                    {/* Removed number to avoid duplication with card numbers */}
                  </div>
                  <span className="text-sm font-medium text-foreground/70 hidden sm:block" style={{fontFamily: 'Work Sans, sans-serif'}}>
                    {step.title}
                  </span>
                </div>
                {index < steps.length - 1 && (
                  <div className="w-12 h-0.5 bg-gray-300 hidden sm:block">
                    <motion.div
                      className="h-full"
                      style={{backgroundColor: step.color}}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: index * 0.3 + 0.5 }}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Card */}
              <div className="bg-white rounded-2xl p-6 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group min-h-[200px]">
                {/* Step Number */}
                <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10" style={{backgroundColor: step.color}}>
                  {step.step}
                </div>
                
                {/* Icon container */}
                <motion.div
                  className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border-2 group-hover:scale-110 transition-transform duration-300"
                  style={{borderColor: step.color, backgroundColor: `${step.color}15`}}
                >
                  <step.icon className="w-8 h-8" style={{color: step.color}} />
                </motion.div>
                
                {/* Content */}
                <h4 className="text-lg font-bold text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                  {step.title}
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed mb-4" style={{fontFamily: 'Work Sans, sans-serif'}}>
                  {step.description}
                </p>
                
                {/* Status Indicator */}
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle className="w-4 h-4" style={{color: step.color}} />
                  <span className="text-xs font-medium" style={{color: step.color, fontFamily: 'Work Sans, sans-serif'}}>
                    {index === 0 ? 'Ready' : index === 1 ? 'Complete' : 'Available'}
                  </span>
                </div>
              </div>
              
              {/* Connection Line (except for last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r" style={{background: `linear-gradient(to right, ${step.color}, ${steps[index + 1].color})`}}></div>
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
        <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 max-w-md mx-auto">
          <h4 className="text-lg font-bold text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
            Ready to discover your Signal DNA?
          </h4>
          <p className="text-foreground/70 text-sm mb-6" style={{fontFamily: 'Work Sans, sans-serif'}}>
            Start your journey with our free 2-minute assessment
          </p>
          <motion.a
            href="/quiz"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all duration-200 hover:scale-105"
            style={{backgroundColor: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Journey
            <ArrowRight className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
