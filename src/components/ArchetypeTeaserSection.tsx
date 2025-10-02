import React from 'react';
import { motion } from 'framer-motion';

export const ArchetypeTeaserSection: React.FC = () => {
  const archetypes = [
    {
      name: "Visionary",
      tagline: "See the future before it happens",
      description: "Inspires with bold, forward-thinking ideas",
      icon: "🌟"
    },
    {
      name: "Builder", 
      tagline: "Turn vision into reality",
      description: "Earns trust through relentless execution",
      icon: "🔨"
    },
    {
      name: "Strategist",
      tagline: "Navigate complexity with clarity",
      description: "Wins attention with strategic foresight",
      icon: "🎯"
    },
    {
      name: "Connector",
      tagline: "Build bridges between people",
      description: "Attracts allies through authentic relationships",
      icon: "🤝"
    },
    {
      name: "Guardian",
      tagline: "Protect what matters most",
      description: "Reassures stakeholders with stability and trust",
      icon: "🛡️"
    },
    {
      name: "Trailblazer",
      tagline: "Pioneer uncharted territory",
      description: "Breaks norms and creates new possibilities",
      icon: "🚀"
    }
  ];

  return (
    <section className="py-16 md:py-20 container-clean text-foreground relative">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          Which Founder Archetype are you?
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <p className="text-xl text-foreground/90 leading-relaxed mb-6" style={{fontFamily: 'Work Sans, sans-serif'}}>
            Every founder sends a signal, but not every signal lands the same way.
          </p>
          <p className="text-xl text-foreground/90 leading-relaxed mb-8" style={{fontFamily: 'Work Sans, sans-serif'}}>
            Discover which of the six founder archetypes best describes your story — so you can understand how the world perceives your communication and how to strengthen it.
          </p>
        </motion.div>

        {/* Archetype Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {archetypes.map((archetype, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-xl border border-primary/20 bg-white/50 backdrop-blur-sm text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              whileHover={{ 
                y: -8, 
                borderColor: 'rgba(166, 124, 82, 0.6)',
                boxShadow: '0 20px 40px rgba(166, 124, 82, 0.2)'
              }}
            >
              {/* Animated background gradient */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-primary/10 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.3 }}
              />
              
              {/* Floating icon */}
              <motion.div
                className="text-4xl mb-4 relative z-10"
                animate={{
                  y: [0, -5, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.5
                }}
              >
                {archetype.icon}
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-bold text-lg mb-2" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                  {archetype.name}
                </h4>
                <p className="text-foreground/80 text-sm font-medium" style={{fontFamily: 'Work Sans, sans-serif'}}>
                  {archetype.tagline}
                </p>
                
                {/* Hover Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg opacity-0 pointer-events-none whitespace-nowrap z-20"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {archetype.description}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                </motion.div>
              </div>
              
              {/* Subtle glow effect */}
              <motion.div
                className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100"
                style={{
                  background: 'linear-gradient(45deg, rgba(212, 179, 122, 0.1), rgba(166, 124, 82, 0.1))'
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <a href="/quiz">
            <motion.button
              className="px-8 py-4 text-lg font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-lg"
              style={{backgroundColor: '#D4B37A', color: '#FFFFFF', fontFamily: 'Work Sans, sans-serif', borderRadius: '12px'}}
              onMouseEnter={(e) => (e.target as HTMLElement).style.backgroundColor = '#A67C52'}
              onMouseLeave={(e) => (e.target as HTMLElement).style.backgroundColor = '#D4B37A'}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Find Your Archetype →
            </motion.button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};
