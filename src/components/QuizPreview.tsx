import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const QuizPreview: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const previewSteps = [
    {
      question: "When pitching to investors, do you focus more on data and metrics or on vision and impact?",
      options: [
        "Heavy on data - I lead with revenue, growth metrics, and market size",
        "Balanced approach - I mix compelling data with vision",
        "Vision-focused - I start with the problem and our mission",
        "Story-driven - I focus on customer impact and transformation"
      ],
      selectedOption: 2
    },
    {
      question: "In customer conversations, what gets people most excited about your product?",
      options: [
        "Technical features and capabilities",
        "ROI and business outcomes",
        "The problem we solve and why it matters",
        "Personal transformation stories from other customers"
      ],
      selectedOption: 3
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % previewSteps.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [previewSteps.length]);

  return (
    <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 border border-primary/20">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold text-gradient-gold mb-2">See the Quiz in Action</h3>
        <p className="text-foreground/80">Get a preview of your Signal DNA assessment</p>
      </motion.div>

      <div className="max-w-2xl mx-auto">
        {/* Progress bar */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-foreground/60 mb-2">
            <span className="font-semibold">Question {currentStep + 1} of 6</span>
            <span>{Math.round(((currentStep + 1) / 6) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-muted rounded-full h-2">
            <motion.div 
              className="bg-gradient-to-r from-amber-400 to-amber-600 h-2 rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${((currentStep + 1) / 6) * 100}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
        </div>

        {/* Question */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full flex items-center justify-center text-black font-bold">
                {currentStep + 1}
              </div>
              <h4 className="font-serif text-xl font-bold text-foreground leading-relaxed flex-1">
                {previewSteps[currentStep].question}
              </h4>
            </div>

            {/* Options */}
            <div className="space-y-3">
              {previewSteps[currentStep].options.map((option, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl border transition-all duration-300 ${
                    index === previewSteps[currentStep].selectedOption
                      ? 'border-primary bg-primary/5 shadow-md'
                      : 'border-border hover:border-primary/50 hover:bg-primary/5'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-foreground/90 font-medium text-sm leading-relaxed">
                    {option}
                  </span>
                  {index === previewSteps[currentStep].selectedOption && (
                    <motion.div
                      className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center ml-auto mt-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.5, type: "spring" }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Bottom text */}
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <p className="text-foreground/80 mb-4">
            <strong>Only 2 minutes</strong> to discover your unique communication archetype
          </p>
          <motion.a
            href="/quiz"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
