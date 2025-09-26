import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, FileText, Phone } from 'lucide-react';

export const HorizontalFlow: React.FC = () => {
  const steps = [
    {
      icon: FileText,
      title: 'Quiz',
      description: '2-minute assessment'
    },
    {
      icon: FileText,
      title: 'Report',
      description: 'Personalized archetype'
    },
    {
      icon: Phone,
      title: 'Strategy Call',
      description: 'Free consultation'
    }
  ];

  return (
    <div className="py-16" style={{backgroundColor: '#FAF8F5'}}>
      <div className="container-clean">
        <div className="content-clean">
          <motion.h3
            className="text-2xl font-bold text-center mb-12"
            style={{fontFamily: 'Playfair Display, serif', color: '#111111'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Your Journey to Signal DNA Mastery
          </motion.h3>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <motion.div
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                >
                  <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 border-2" style={{borderColor: '#D4B37A', backgroundColor: 'transparent'}}>
                    <step.icon className="w-8 h-8" style={{color: '#D4B37A'}} />
                  </div>
                  <h4 className="text-lg font-bold mb-2" style={{fontFamily: 'Playfair Display, serif', color: '#111111'}}>
                    {step.title}
                  </h4>
                  <p className="text-sm" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                    {step.description}
                  </p>
                </motion.div>

                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.3, duration: 0.6 }}
                  >
                    <ArrowRight className="w-6 h-6" style={{color: '#D4B37A'}} />
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
