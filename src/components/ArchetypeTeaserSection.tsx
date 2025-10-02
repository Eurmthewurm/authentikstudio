import React from 'react';
import { motion } from 'framer-motion';

export const ArchetypeTeaserSection: React.FC = () => {
  const archetypes = [
    {
      name: "Visionary",
      tagline: "See the future before it happens",
      description: "Inspires with bold, forward-thinking ideas that paint vivid pictures of tomorrow",
      icon: "🌟",
      example: "Like Elon Musk sharing his vision for Mars colonization"
    },
    {
      name: "Builder", 
      tagline: "Turn vision into reality",
      description: "Earns trust through relentless execution and proven results",
      icon: "🔨",
      example: "Like Steve Jobs delivering products that just work"
    },
    {
      name: "Strategist",
      tagline: "Navigate complexity with clarity",
      description: "Wins attention with strategic foresight and logical frameworks",
      icon: "🎯",
      example: "Like Warren Buffett explaining investment philosophy"
    },
    {
      name: "Connector",
      tagline: "Build bridges between people",
      description: "Attracts allies through authentic relationships and shared values",
      icon: "🤝",
      example: "Like Oprah building communities around shared stories"
    },
    {
      name: "Guardian",
      tagline: "Protect what matters most",
      description: "Reassures stakeholders with stability, reliability, and proven track records",
      icon: "🛡️",
      example: "Like Tim Cook maintaining Apple's quality standards"
    },
    {
      name: "Trailblazer",
      tagline: "Pioneer uncharted territory",
      description: "Breaks norms and creates new possibilities through bold innovation",
      icon: "🚀",
      example: "Like Reed Hastings disrupting traditional media"
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
          <p className="text-lg text-foreground/80 leading-relaxed mb-8" style={{fontFamily: 'Work Sans, sans-serif'}}>
            The Signal DNA Quiz reveals your unique founder archetype — your natural communication style that determines how investors, customers, and talent perceive your story. Understanding your archetype helps you leverage your strengths and address blind spots that might be costing you opportunities.
          </p>
          
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 border border-primary/20 rounded-xl p-6 mb-8">
            <p className="text-lg font-semibold mb-3" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
              🎯 Why Your Archetype Matters:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm" style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Investor Pitches:</strong> Match your style to their preferences</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Customer Acquisition:</strong> Connect authentically with your audience</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Team Building:</strong> Attract talent that resonates with your vision</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-green-500 mt-1">✓</span>
                <span><strong>Media Presence:</strong> Craft stories that journalists want to tell</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Archetype Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          {archetypes.map((archetype, index) => (
            <motion.div
              key={index}
              className="p-4 sm:p-6 rounded-xl border border-primary/20 bg-white/50 backdrop-blur-sm text-center relative overflow-hidden group"
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
              
              {/* Floating archetype visual */}
              <motion.div
                className="w-12 h-12 sm:w-16 sm:h-16 mb-3 sm:mb-4 relative z-10"
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
                <img 
                  src={`/images/archetypes/${archetype.name.toLowerCase()}.png`}
                  alt={`${archetype.name} archetype visual`}
                  className="w-full h-full object-contain"
                  style={{ filter: 'drop-shadow(0 2px 4px rgba(166, 124, 82, 0.3))' }}
                  onError={(e) => {
                    // Fallback to emoji if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.parentElement!.innerHTML = `
                      <div class="text-2xl sm:text-3xl flex items-center justify-center w-full h-full">
                        ${archetype.icon}
                      </div>
                    `;
                  }}
                />
              </motion.div>
              
              {/* Content */}
              <div className="relative z-10">
                <h4 className="font-bold text-base sm:text-lg mb-2" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                  {archetype.name}
                </h4>
                <p className="text-foreground/80 text-xs sm:text-sm font-medium" style={{fontFamily: 'Work Sans, sans-serif'}}>
                  {archetype.tagline}
                </p>
                
                {/* Hover Tooltip */}
                <motion.div
                  className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-gray-900 text-white text-xs rounded-lg opacity-0 pointer-events-none z-20 max-w-xs"
                  initial={{ opacity: 0, y: 10 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="font-medium mb-1">{archetype.description}</div>
                  <div className="text-gray-300 italic">{archetype.example}</div>
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
