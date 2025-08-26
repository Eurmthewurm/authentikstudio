import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const featuredIn = ["David Attenborough", "National Geographic", "BBC", "Discovery", "Aaron Abke", "The Great Awakening Podcast", "Black Magic", "Arte"];

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
    <section className="min-h-screen flex flex-col items-center justify-center container-padding py-12 sm:py-16 relative overflow-hidden">
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
        className="content-width text-center space-y-4 sm:space-y-6 md:space-y-8 relative z-10 flex-grow flex flex-col justify-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Urgency Banner */}
        <motion.div 
          className="bg-gradient-to-r from-amber-900/20 to-orange-900/20 border-2 border-amber-500/50 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 md:mb-8 max-w-sm sm:max-w-lg md:max-w-2xl mx-auto backdrop-blur-sm"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 sm:gap-3 text-amber-200">
            <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-black text-xs sm:text-sm font-bold">!</span>
            </div>
            <div className="text-center">
              <p className="font-medium text-xs sm:text-sm md:text-base">
                <span className="text-amber-400 font-bold">Limited Availability:</span> Only <span className="font-bold text-amber-300">12 clients</span> per year
              </p>
              <p className="text-xs text-amber-200/80">
                Currently accepting new applications
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div className="space-y-4 sm:space-y-6 md:space-y-8" variants={itemVariants}>
          <motion.h1 
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none"
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
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-light text-foreground/80 text-width leading-relaxed"
            variants={itemVariants}
          >
            Stop blending in. Start leading. <span className="text-amber-400 font-medium">Turn invisible brands</span>
            <br />
            into <span className="text-amber-400 font-medium">the signal your audience trusts, remembers, and buys from</span>.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-4 sm:space-y-6 md:space-y-8 text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90 text-width"
          variants={itemVariants}
        >
          <p className="text-center">
            While you're invisible, your competitors are becoming <span className="text-amber-400 font-medium">irreplaceable</span>.
          </p>
          <p className="text-lg sm:text-xl font-medium text-center">
            We don't create content. <span className="text-amber-400 font-bold">We forge conviction.</span>
            <br />
            <span className="text-base sm:text-lg font-normal text-foreground/80">Through documentary-style storytelling that makes prospects think: "Finally, someone who gets it."</span>
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-2 sm:space-y-3 md:space-y-4 text-base sm:text-lg md:text-xl leading-relaxed text-foreground/90 content-width"
          variants={itemVariants}
        >
          <div className="mobile-grid text-center">
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-400">$6M+</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70">Additional revenue generated for top-performing clients in 18 months</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-400">3.2x</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70">Higher conversion rates vs generic content</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-amber-400">94%</div>
              <div className="text-xs sm:text-sm md:text-base text-foreground/70">Client retention after 6 months</div>
            </div>
          </div>
          <p className="text-center text-amber-400 font-medium text-lg sm:text-xl md:text-2xl">
            Ready to become the signal your audience trusts instead of the noise they ignore?
          </p>
        </motion.div>
        
        <motion.div 
          className="pt-2 sm:pt-3 md:pt-4"
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
              className="inline-block w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                className="mobile-button bg-amber-400 hover:bg-amber-500 text-black font-medium tracking-wide relative overflow-hidden group touch-target"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">Get Your Brand Clarity Session</span>
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>

      {/* Featured In Section - Enhanced for better visibility */}
      <motion.div 
        className="w-full max-w-6xl mx-auto text-center mt-12 sm:mt-16 relative z-10 px-4"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        {/* Background highlight */}
        <div className="bg-gradient-to-r from-amber-900/10 via-amber-800/20 to-amber-900/10 border border-amber-500/20 rounded-xl p-6 sm:p-8 backdrop-blur-sm">
          <motion.h4 
            className="text-sm sm:text-base text-amber-400 mb-4 sm:mb-6 tracking-widest font-semibold"
            animate={{
              opacity: [0.7, 1, 0.7]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            TRUSTED BY LEADING BRANDS
          </motion.h4>
          
          <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 lg:gap-x-10 gap-y-3 sm:gap-y-4 text-lg sm:text-xl lg:text-2xl text-foreground/90 font-medium mb-6">
            {featuredIn.map((name, index) => (
              <motion.span 
                key={name}
                className="hover:text-amber-400 transition-colors duration-300 cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 2 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
          
          {/* Trust Indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm sm:text-base text-foreground/70">
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
              <span>30+ Years Experience</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></span>
              <span>Documentary Expertise</span>
            </motion.div>
            <motion.div 
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <span className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></span>
              <span>Proven ROI Results</span>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
