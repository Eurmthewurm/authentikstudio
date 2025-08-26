import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

const steps = [
  {
    number: "01",
    title: "Guided Discovery",
    description: "We don't tell you who you are—we guide you to discover your authentic voice through deep introspection and strategic questioning."
  },
  {
    number: "02", 
    title: "Collective Growth",
    description: "Join a community of leaders on the same journey. Learn from each other's revelations and breakthroughs."
  },
  {
    number: "03",
    title: "Leadership Transformation",
    description: "This isn't about creating better content—it's about becoming a better leader who communicates with conviction."
  },
  {
    number: "04",
    title: "Authentic Resonance",
    description: "When you speak from your authentic voice, your audience doesn't just hear you—they feel you."
  }
];

const processSteps = [
  {
    phase: "Phase 1",
    title: "Discovery & Voice Awakening",
    duration: "Months 1-2",
    description: "We guide you through deep introspection to uncover your authentic voice. This is where leaders often have their first revelation: 'This is who I really am, and this is what my audience needs from me.'",
    deliverables: ["Authentic voice guide", "Leadership communication strategy", "Audience resonance framework", "Personal brand clarity"]
  },
  {
    phase: "Phase 2",
    title: "Leadership Communication Mastery",
    duration: "Months 3-4",
    description: "Learn to communicate with the conviction that only comes from authenticity. We guide you through creating content that doesn't just inform—it transforms your audience's perspective.",
    deliverables: ["Communication mastery framework", "Content creation system", "Audience engagement strategies", "Leadership presence coaching"]
  },
  {
    phase: "Phase 3",
    title: "Expansion & Community Building",
    duration: "Months 5-6",
    description: "Join a community of leaders who've discovered their authentic voice. Learn from each other's revelations and build systems that scale beyond our partnership.",
    deliverables: ["Community access", "Scaling frameworks", "Ongoing mentorship", "Peer learning networks"]
  }
];

export const MethodSection: React.FC = () => {
  const ref = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-16 sm:py-24 md:py-32 px-6 relative" ref={ref}>
      {/* Animated connection lines */}
      <div className="absolute inset-0 hidden lg:block">
        <svg className="w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <motion.path
            d="M300,400 Q450,200 600,400 T900,400"
            fill="none"
            stroke="rgba(251, 191, 36, 0.3)"
            strokeWidth="2"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
          />
        </svg>
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-12 sm:space-y-16">
          <div className="space-y-6 sm:space-y-8 text-center">
            <motion.h2 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              We're Not Just <span className="text-amber-400">Creators</span><br />
              We're <span className="text-amber-400">Guides</span>
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              Whether you're working with us on a project or joining our Expansion Lab, we guide you through a transformation that goes beyond content—it's about discovering your authentic voice and becoming the leader your audience needs.
            </motion.p>
          </div>

          {/* Process Preview */}
          <motion.div 
            className="mb-16 sm:mb-20"
            variants={itemVariants}
          >
            <div className="text-center mb-8 sm:mb-12">
              <h3 className="font-serif text-3xl font-bold mb-4">
                Your <span className="text-amber-400">Leadership</span> Transformation Journey
              </h3>
              <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
                This isn't just a content creation process—it's a leadership development journey where you'll discover your authentic voice. For Expansion Lab members, you'll do this alongside other visionary leaders.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
              {processSteps.map((step, index) => (
                <motion.div 
                  key={index}
                  className="relative p-8 border-2 border-border/30 rounded-xl group hover:border-amber-400/50 transition-all duration-300 hover:bg-amber-50/20"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Phase Badge */}
                  <div className="absolute -top-4 left-8 bg-amber-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                    {step.phase}
                  </div>
                  
                  {/* Duration */}
                  <div className="text-sm text-amber-600 font-medium mb-3">{step.duration}</div>
                  
                  {/* Title */}
                  <h4 className="font-bold text-2xl mb-4 text-foreground/90">{step.title}</h4>
                  
                  {/* Description */}
                  <p className="text-foreground/80 mb-6 leading-relaxed">{step.description}</p>
                  
                  {/* Deliverables */}
                  <div className="space-y-2">
                    <p className="font-medium text-foreground/90 mb-3">Deliverables:</p>
                    <ul className="space-y-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-foreground/70">
                          <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                          {deliverable}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Progress Indicator */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center text-black font-bold">
                    {index + 1}
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Timeline Connection */}
            <div className="hidden lg:block relative mt-8">
              <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-amber-400/30 transform -translate-y-1/2"></div>
              <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-amber-400 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
              <div className="absolute top-1/2 left-2/3 w-4 h-4 bg-amber-400 rounded-full transform -translate-y-1/2 -translate-x-1/2"></div>
            </div>
          </motion.div>

          {/* Core Principles */}
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Left side - Core Principles */}
            <motion.div 
              className="lg:col-span-2 space-y-6"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <h2 className="font-serif text-3xl sm:text-4xl font-bold">
                  Our <span className="text-amber-400">Core</span> Principles
                </h2>
                <div className="w-16 h-px bg-amber-400"></div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {steps.map((step, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-start gap-4 group p-4 rounded-lg hover:bg-amber-400/5 transition-colors duration-300"
                    variants={itemVariants}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number Badge */}
                    <div className="flex-shrink-0 w-10 h-10 bg-amber-400/20 border border-amber-400/30 rounded-lg flex items-center justify-center">
                      <span className="text-lg font-bold text-amber-400">{step.number}</span>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-2 flex-1">
                      <h3 className="font-bold text-lg text-foreground/90 group-hover:text-amber-400 transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-sm text-foreground/70 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* Right side - Additional content to fill space */}
            <motion.div 
              className="space-y-6 mt-8 lg:mt-0"
              variants={itemVariants}
            >
              <div className="space-y-4">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-amber-400">
                  Why This Works
                </h3>
                <div className="w-12 h-px bg-amber-400"></div>
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <div className="p-4 bg-amber-400/10 border border-amber-400/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-amber-400 text-xl">🎯</span>
                    <span className="font-medium text-foreground/90">Guided Transformation</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    We're not just consultants—we're mentors who've guided 50+ leaders through their voice awakening
                  </p>
                </div>
                
                <div className="p-4 bg-blue-400/10 border border-blue-400/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-blue-400 text-xl">🤝</span>
                    <span className="font-medium text-foreground/90">Community Learning</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Join a network of leaders who've discovered their authentic voice and support each other's growth
                  </p>
                </div>
                
                <div className="p-4 bg-green-400/10 border border-green-400/20 rounded-lg">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-green-400 text-xl">💡</span>
                    <span className="font-medium text-foreground/90">Revelation Moments</span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    Experience the breakthrough moment when you realize "This is who I really am"
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
