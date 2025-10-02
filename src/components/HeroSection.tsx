import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackCTAClicked } from '@/lib/analytics';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';

const featuredIn = ["BBC", "National Geographic", "Forbes", "TED"];

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center container-clean py-16 md:py-20 relative overflow-hidden" style={{backgroundColor: '#111111'}}>
      {/* Signal DNA Background */}
      <AnimatedHeroBackground />

      <div className="relative z-10 text-center max-w-5xl mx-auto">
        {/* Main Headline */}
            <motion.h1
              className="font-serif leading-tight tracking-tight mb-6 sm:mb-8"
              style={{fontSize: 'clamp(2.5rem, 8vw, 5rem)', lineHeight: '1.1'}}
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
          <div className="font-bold text-white mb-4" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            In 2 minutes, discover your Founder Archetype
                <motion.div
                  className="absolute -bottom-2 left-0 h-1 rounded-full"
                  style={{backgroundColor: '#D4B37A'}}
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.5, delay: 0.8, ease: "easeOut" }}
                />
          </div>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="text-white mb-8 sm:mb-12 max-w-4xl mx-auto px-4"
          style={{fontSize: 'clamp(1rem, 4vw, 1.25rem)', lineHeight: '1.6', fontFamily: 'Work Sans, sans-serif', textShadow: '0 1px 3px rgba(0,0,0,0.5)'}}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          Investors. Customers. Talent. See how they read your story—and get a personalized 1-page blueprint plus free workbook to improve it.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          className="mb-12 sm:mb-16 space-y-10"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
        >
          <motion.div
            whileHover={{ 
              scale: 1.05,
              y: -2
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <a href="/quiz">
                  <Button
                    size="lg"
                    className="px-8 py-4 sm:px-12 sm:py-6 text-lg sm:text-xl font-bold w-full sm:w-auto relative overflow-hidden group transition-all duration-200 min-h-[48px] sm:min-h-[56px]"
                    style={{backgroundColor: '#D4B37A', color: '#FFFFFF', boxShadow: '0 8px 25px rgba(166, 124, 82, 0.2)'}}
                    onMouseEnter={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#A67C52';
                    }}
                    onMouseLeave={(e) => {
                      (e.target as HTMLElement).style.backgroundColor = '#D4B37A';
                    }}
                    onClick={() => trackCTAClicked('hero_cta')}
                  >
                <span className="relative z-10">Take the Free Quiz</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>


        {/* Trust indicators and bonus info */}
        <motion.div
          className="mb-16 text-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
        >
          <p className="text-sm mb-4" style={{color: '#CCCCCC', fontFamily: 'Work Sans, sans-serif'}}>
            No credit card • Instant results • 100% private
          </p>
          <div className="p-3 rounded-lg inline-block" style={{backgroundColor: '#9B6F45'}}>
            <p className="text-sm font-medium text-white">
              🎁 <strong>Bonus:</strong> First 50 quiz takers get a free €200 pitch review call
            </p>
          </div>
        </motion.div>

        {/* Featured In / Social Proof */}
        <motion.div
          className="pt-8 border-t border-border/30"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        >
          <p className="text-sm uppercase tracking-widest mb-8 font-medium" style={{color: '#999999', fontFamily: 'Inter, sans-serif'}}>
            TRUSTED BY FOUNDERS FEATURED IN:
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 text-lg font-medium">
            {featuredIn.map((name, index) => (
              <motion.span
                key={name}
                className="transition-all duration-300 cursor-pointer px-4 py-2 rounded-lg"
                style={{color: '#CCCCCC', fontFamily: 'Inter, sans-serif'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = '#CCCCCC'}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 + index * 0.05, duration: 0.6 }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -2
                }}
                whileTap={{ scale: 0.95 }}
              >
                {name}
              </motion.span>
            ))}
          </div>
          <p className="text-sm mt-6" style={{color: '#CCCCCC', fontFamily: 'Work Sans, sans-serif'}}>
            "As seen in media and trusted by founders building authentic stories that convert."
          </p>
        </motion.div>
      </div>
    </section>
  );
};