import React from 'react';
import { motion } from 'framer-motion';
import { Search, DraftingCompass, Megaphone, ArrowRight } from 'lucide-react';
import { InteractiveVisualElement } from './InteractiveVisualElement';

export const MethodCarousel: React.FC = () => {
  const methods = [
    {
      icon: Search,
      title: "Deep Story Archaeology",
      description: "Uncover hidden narrative patterns that make you unforgettable",
      step: "01",
      color: "#D4B37A"
    },
    {
      icon: DraftingCompass,
      title: "Signal Engineering", 
      description: "Craft messages that cut through noise and create instant connection",
      step: "02",
      color: "#A67C52"
    },
    {
      icon: Megaphone,
      title: "Signal Amplification",
      description: "Scale your authentic voice across every platform and audience",
      step: "03",
      color: "#C49E58"
    }
  ];

  return (
    <div className="py-16">
      <motion.h3
        className="text-3xl font-bold text-center mb-16"
        style={{fontFamily: 'Playfair Display, serif', color: '#111111'}}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Signal DNA Method
      </motion.h3>
      
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {methods.map((method, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              {/* Step Number */}
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-10" style={{backgroundColor: method.color}}>
                {method.step}
              </div>
              
              {/* Card */}
              <div className="w-full bg-white rounded-2xl p-6 sm:p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 min-h-[280px] sm:min-h-[320px] group">
                        {/* Interactive Visual Element */}
                        <div className="w-20 h-20 mx-auto mb-6 relative flex items-center justify-center">
                          <InteractiveVisualElement 
                            type={index === 0 ? 'mountain' : index === 1 ? 'flow' : 'signal'}
                            size="small"
                            color={method.color}
                            interactive={true}
                          />
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <method.icon className="w-8 h-8" style={{color: method.color}} />
                          </div>
                        </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold mb-4" style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}>
                  {method.title}
                </h4>
                
                {/* Description */}
                <p className="text-base leading-relaxed mb-6" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  {method.description}
                </p>
                
                {/* Progress Indicator */}
                <div className="flex items-center justify-center gap-2 mb-4">
                  <div className="w-8 h-1 rounded-full" style={{backgroundColor: method.color}}></div>
                  <div className="w-4 h-1 rounded-full bg-gray-300"></div>
                  <div className="w-4 h-1 rounded-full bg-gray-300"></div>
                </div>
                
                        {/* Learn More Button */}
                        <button 
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                          style={{color: method.color, backgroundColor: `${method.color}10`}}
                          onClick={() => {
                            // Scroll to the quiz section
                            const quizSection = document.getElementById('free-audit');
                            if (quizSection) {
                              quizSection.scrollIntoView({ behavior: 'smooth' });
                            }
                          }}
                        >
                          Learn More
                          <ArrowRight className="w-4 h-4" />
                        </button>
              </div>
              
              {/* Connection Line (except for last item) */}
              {index < methods.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r" style={{background: `linear-gradient(to right, ${method.color}, ${methods[index + 1].color})`}}></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
