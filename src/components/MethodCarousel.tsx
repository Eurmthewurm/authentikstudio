import React from 'react';
import { motion } from 'framer-motion';
import { Search, DraftingCompass, Megaphone } from 'lucide-react';

export const MethodCarousel: React.FC = () => {
  const methods = [
    {
      icon: Search,
      title: "Deep Story Archaeology",
      description: "Uncover hidden narrative patterns that make you unforgettable"
    },
    {
      icon: DraftingCompass,
      title: "Signal Engineering", 
      description: "Craft messages that cut through noise and create instant connection"
    },
    {
      icon: Megaphone,
      title: "Signal Amplification",
      description: "Scale your authentic voice across every platform and audience"
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
              className="flex flex-col items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="w-full bg-white rounded-2xl p-6 sm:p-8 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300 min-h-[280px] sm:min-h-[320px]">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center border-2" style={{borderColor: '#D4B37A', backgroundColor: 'transparent'}}>
                  <method.icon className="w-8 h-8" style={{color: '#D4B37A'}} />
                </div>
                
                {/* Title */}
                <h4 className="text-xl font-bold mb-4" style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}>
                  {method.title}
                </h4>
                
                {/* Description */}
                <p className="text-base leading-relaxed mb-6" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
                  {method.description}
                </p>
                
                {/* Decorative line */}
                <div className="w-12 h-1 mx-auto rounded-full" style={{backgroundColor: '#D4B37A'}} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
