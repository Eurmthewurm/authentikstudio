import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const featuredIn = ["National Geographic", "BBC", "Discovery", "Black Magic", "Arte"];

export const HeroSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
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

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-24 relative overflow-hidden">
      {/* Background animated lines */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
            style={{
              top: `${(i + 1) * 12}%`,
              width: '200%',
              left: '-50%'
            }}
            animate={{
              x: ['0%', '50%', '0%'],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-5xl mx-auto text-center space-y-12 relative z-10 flex-grow flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Urgency Banner */}
        <motion.div 
          className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-2 border-amber-500/50 rounded-lg p-3 sm:p-4 mb-6 sm:mb-8 max-w-lg sm:max-w-2xl mx-auto backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-3 text-amber-200">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center">
              <span className="text-black text-sm font-bold">!</span>
            </div>
            <p className="font-medium text-sm sm:text-base text-center">
              <span className="text-amber-400 font-bold">Limited Availability:</span> Only <span className="font-bold text-amber-300">12 clients</span> per year
              <br className="sm:hidden" />
              <span className="text-xs sm:text-sm text-amber-200/80 block sm:inline sm:ml-2">Currently accepting Q1 2025 applications</span>
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-6 sm:space-y-8" variants={itemVariants}>
          <motion.h1 
            className="font-serif text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none"
            variants={textVariants}
          >
            <motion.span
              className="block"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              SIGNAL
            </motion.span>
            <motion.span 
              className="text-amber-400 block"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              IN THE
            </motion.span>
            <motion.span
              className="block"
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.1 }}
            >
              NOISE
            </motion.span>
          </motion.h1>
          
          <motion.div 
            className="w-16 sm:w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: window.innerWidth < 640 ? 64 : 96 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground/80 max-w-4xl mx-auto leading-relaxed px-4"
            variants={itemVariants}
          >
            Where authentic brands go to <span className="text-amber-400 font-medium">cut through the noise</span>
            <br />
            and <span className="text-amber-400 font-medium">claim their voice</span>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6 sm:space-y-8 text-lg sm:text-xl leading-relaxed text-foreground/90 max-w-5xl mx-auto px-4"
          variants={itemVariants}
        >
          <p className="text-center">
            In a world drowning in AI-generated noise, your audience craves <span className="text-amber-400 font-medium">human truth</span>.
          </p>
          <p className="text-xl sm:text-2xl font-medium text-center">
            We don't create content. <span className="text-amber-400 font-bold">We awaken conviction.</span>
            <br />
            <span className="text-lg sm:text-xl font-normal text-foreground/80">Through documentary-style storytelling that feels raw, real, and unforgettable.</span>
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4 sm:space-y-6 text-lg sm:text-xl leading-relaxed text-foreground/90 max-w-5xl mx-auto px-4"
          variants={itemVariants}
        >
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">$6M+</div>
              <div className="text-sm sm:text-base text-foreground/70">Additional revenue generated for clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">3.2x</div>
              <div className="text-sm sm:text-base text-foreground/70">Higher conversion rates vs generic content</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400">94%</div>
              <div className="text-sm sm:text-base text-foreground/70">Client retention after 6 months</div>
            </div>
          </div>
          <p className="text-center text-amber-400 font-medium text-xl sm:text-2xl">
            Ready to become the signal your audience trusts?
          </p>
        </motion.div>
        
        <motion.div 
          className="pt-6"
          variants={itemVariants}
        >
          <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(251, 191, 36, 0)",
                  "0 0 25px 5px rgba(251, 191, 36, 0.3)",
                  "0 0 0px 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
              className="inline-block"
            >
              <Button 
                size="lg" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg tracking-wide relative overflow-hidden group w-full sm:w-auto"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">Book Your Studio Call</span>
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Featured In Section - Moved up for better visibility */}
      <motion.div 
        className="w-full max-w-5xl mx-auto text-center mt-4 sm:mt-6 relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <h4 className="text-xs sm:text-sm text-foreground/60 mb-2 sm:mb-3 tracking-widest">TRUSTED BY LEADING BRANDS</h4>
        <div className="flex flex-wrap justify-center items-center gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-2 text-base sm:text-lg text-foreground/70 font-medium">
          {featuredIn.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-3 sm:mt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>30+ Years Experience</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>Documentary Expertise</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>Proven ROI Results</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
