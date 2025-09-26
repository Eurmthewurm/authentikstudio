import React from 'react';
import { motion } from 'framer-motion';
import { Search, DraftingCompass, Megaphone } from 'lucide-react';

export const PhaseInfographics: React.FC = () => {
  const phases = [
    {
      icon: Search,
      title: "Deep Story Archaeology",
      subtitle: "Day 1",
      description: "AI-powered founder psychology assessment",
      details: [
        "Hidden narrative pattern analysis",
        "Authentic voice discovery session", 
        "Core values and vision extraction"
      ],
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: DraftingCompass,
      title: "Signal Engineering", 
      subtitle: "Day 2",
      description: "Competitive differentiation mapping",
      details: [
        "Audience resonance optimization",
        "Message architecture development",
        "Distribution channel strategy"
      ],
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Megaphone,
      title: "Signal Amplification",
      subtitle: "Day 3", 
      description: "Multi-platform content framework",
      details: [
        "Visual story guidelines",
        "Pitch deck transformation",
        "Crisis-proof messaging system"
      ],
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-500/10"
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
        The Signal DNA Method
      </motion.h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {phases.map((phase, index) => (
          <motion.div
            key={index}
            className={`${phase.bgColor} rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 border border-primary/20 relative overflow-hidden`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary/10 to-transparent rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
            
            {/* Phase number */}
            <motion.div
              className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: index * 0.2 + 0.3, duration: 0.3, type: "spring" }}
            >
              {index + 1}
            </motion.div>
            
            {/* Icon */}
            <motion.div
              className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 relative z-10`}
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <phase.icon className="w-10 h-10 text-white" />
            </motion.div>
            
            {/* Content */}
            <div className="relative z-10">
              <h4 className="text-xl font-bold text-foreground mb-2">{phase.title}</h4>
              <p className="text-sm text-primary font-semibold mb-4">{phase.subtitle}</p>
              <p className="text-foreground/80 mb-6 leading-relaxed">{phase.description}</p>
              
              {/* Details */}
              <div className="space-y-2">
                {phase.details.map((detail, detailIndex) => (
                  <motion.div
                    key={detailIndex}
                    className="flex items-center gap-2 text-sm text-foreground/70"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + detailIndex * 0.1 + 0.5, duration: 0.4 }}
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                    <span>{detail}</span>
                  </motion.div>
                ))}
              </div>
              
              {/* Decorative line */}
              <motion.div
                className="w-12 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full mx-auto mt-6"
                initial={{ width: 0 }}
                animate={{ width: "3rem" }}
                transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Connection lines for desktop */}
      <div className="hidden md:block relative mt-8">
        <div className="absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 transform -translate-y-1/2">
          <motion.div
            className="h-full bg-gradient-to-r from-primary/40 to-primary/60"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 2, delay: 1, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};
