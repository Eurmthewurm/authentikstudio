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
          className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-lg p-3 mb-6 max-w-xl mx-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center justify-center gap-2 text-red-800">
            <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">⏰</span>
            </div>
            <p className="font-medium text-base">
              Only <span className="font-bold text-red-600">3 Studio spots</span> available this month
            </p>
          </div>
        </motion.div>

        <motion.div className="space-y-8" variants={itemVariants}>
          <motion.h1 
            className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold tracking-tight leading-none"
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
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ duration: 1, delay: 1.5 }}
          />
          
          <motion.p 
            className="text-xl sm:text-2xl lg:text-3xl font-light text-foreground/80 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            A manifesto against the generic.
            <br />
            A celebration of the authentic.
          </motion.p>
        </motion.div>

        <motion.div 
          className="space-y-6 text-lg leading-relaxed text-foreground/90 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <p>
            AI is flooding the internet. Every brand sounds the same. Your audience can smell the generic from miles away.
          </p>
          <p className="text-xl font-medium">
            At Authentik Studio, we don't create content.
            <br />
            <span className="text-amber-400 font-bold">We create conviction.</span>
          </p>
        </motion.div>
        
        <motion.div 
          className="space-y-4 text-lg leading-relaxed text-foreground/90 max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <p className="text-xl font-medium text-center">
            <span className="text-amber-400 font-bold">Stop blending in.</span> Start standing out.
          </p>
          <p className="text-center text-foreground/80">
            Start with Authentik Studio to cut through the noise, then expand into deeper transformation.
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
                className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 py-6 text-lg tracking-wide relative overflow-hidden group"
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
        className="w-full max-w-5xl mx-auto text-center mt-6 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.8 }}
      >
        <h4 className="text-sm text-foreground/60 mb-3 tracking-widest">TRUSTED BY LEADING BRANDS</h4>
        <div className="flex flex-wrap justify-center items-center gap-x-6 sm:gap-x-8 gap-y-2 text-lg text-foreground/70 font-medium">
          {featuredIn.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-foreground/60">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
            <span>ISO 27001 Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            <span>GDPR Compliant</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
            <span>30 Years Experience</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
