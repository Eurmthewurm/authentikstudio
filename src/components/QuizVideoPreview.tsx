import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';

export const QuizVideoPreview: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const quizSteps = [
    {
      title: "What's your biggest communication challenge?",
      options: [
        "Getting investors to understand my vision",
        "Converting prospects into customers", 
        "Attracting top talent to join my team",
        "Standing out in a crowded market"
      ],
      selected: 0
    },
    {
      title: "How do you typically present your company?",
      options: [
        "Focus on metrics and data",
        "Tell personal stories and journey",
        "Highlight team and culture",
        "Emphasize market opportunity"
      ],
      selected: 1
    },
    {
      title: "What do you want to be known for?",
      options: [
        "Innovation and disruption",
        "Solving real problems",
        "Building something meaningful",
        "Creating lasting impact"
      ],
      selected: 2
    }
  ];

  const nextStep = () => {
    if (currentStep < quizSteps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="py-16" style={{backgroundColor: '#FAF8F5'}}>
      <div className="container-clean">
        <div className="content-clean">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 
              className="text-2xl font-bold mb-4"
              style={{fontFamily: 'Playfair Display, serif', color: '#111111'}}
            >
              See Your Quiz in Action
            </h3>
            <p 
              className="text-base max-w-2xl mx-auto"
              style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}
            >
              Experience 3 sample questions from our Signal DNA Audit to see exactly what you'll discover
            </p>
          </motion.div>

          <motion.div
            className="relative max-w-2xl mx-auto bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* Progress Bar */}
            <div className="h-2 bg-gray-100">
              <motion.div 
                className="h-full" 
                style={{backgroundColor: '#D4B37A'}}
                initial={{ width: "0%" }}
                animate={{ width: `${((currentStep + 1) / quizSteps.length) * 100}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Quiz Content */}
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-sm font-medium mb-2" style={{color: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}>
                  Question {currentStep + 1} of {quizSteps.length}
                </div>
                <h4 
                  className="text-lg font-semibold"
                  style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}
                >
                  {quizSteps[currentStep].title}
                </h4>
              </div>

              <div className="space-y-3 mb-8">
                {quizSteps[currentStep].options.map((option, index) => (
                  <motion.div
                    key={index}
                    className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                      index === quizSteps[currentStep].selected 
                        ? 'border-champagne bg-champagne/5' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    style={{
                      borderColor: index === quizSteps[currentStep].selected ? '#D4B37A' : '#E5E7EB',
                      backgroundColor: index === quizSteps[currentStep].selected ? 'rgba(212, 179, 122, 0.05)' : 'transparent'
                    }}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <span 
                        className="text-sm font-medium"
                        style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}
                      >
                        {option}
                      </span>
                      {index === quizSteps[currentStep].selected && (
                        <CheckCircle className="w-5 h-5" style={{color: '#D4B37A'}} />
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Navigation */}
              <div className="flex justify-between items-center">
                <button
                  onClick={prevStep}
                  disabled={currentStep === 0}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    currentStep === 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:text-champagne'
                  }`}
                  style={{fontFamily: 'Work Sans, sans-serif'}}
                >
                  Previous
                </button>
                
                <div className="flex space-x-2">
                  {quizSteps.map((_, index) => (
                    <div
                      key={index}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentStep ? 'bg-champagne' : 'bg-gray-300'
                      }`}
                      style={{backgroundColor: index === currentStep ? '#D4B37A' : '#D1D5DB'}}
                    />
                  ))}
                </div>

                <button
                  onClick={nextStep}
                  disabled={currentStep === quizSteps.length - 1}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
                    currentStep === quizSteps.length - 1 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-champagne hover:text-champagne-hover'
                  }`}
                  style={{fontFamily: 'Work Sans, sans-serif'}}
                >
                  {currentStep === quizSteps.length - 1 ? 'Complete' : 'Next'}
                  {currentStep < quizSteps.length - 1 && <ChevronRight className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </motion.div>
          
          {/* Results Preview */}
          {currentStep === quizSteps.length - 1 && (
            <motion.div
              className="mt-8 max-w-2xl mx-auto text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center" style={{backgroundColor: '#D4B37A'}}>
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h4 
                  className="text-lg font-semibold mb-2"
                  style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}
                >
                  Your Signal DNA Archetype: The Storyteller
                </h4>
                <p 
                  className="text-sm mb-4"
                  style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}
                >
                  Based on your answers, you have a natural ability to connect through personal narratives and emotional resonance.
                </p>
                <div className="text-xs" style={{color: '#999999', fontFamily: 'Work Sans, sans-serif'}}>
                  * This is a preview. Your full audit includes 12 questions and detailed analysis.
                </div>
              </div>
            </motion.div>
          )}

          {/* CTA */}
          <motion.div
            className="mt-8 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <a href="/quiz">
              <button
                className="px-8 py-4 rounded-xl font-semibold text-white transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
                style={{backgroundColor: '#D4B37A', fontFamily: 'Work Sans, sans-serif'}}
                onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A67C52'}
                onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D4B37A'}
              >
                Start Your Full Signal DNA Audit
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
