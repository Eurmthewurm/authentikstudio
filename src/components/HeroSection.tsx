import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { trackCTAClicked } from '@/lib/analytics';
import { AnimatedHeroBackground } from './AnimatedHeroBackground';
import { User, Lightbulb, Target } from 'lucide-react';

const featuredIn = ["David Attenborough", "National Geographic", "BBC", "Discovery", "Aaron Abke", "The Great Awakening Podcast"];

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
            Stop Explaining What You Do.
          </div>
          <div className="font-medium text-white relative" style={{textShadow: '0 2px 4px rgba(0,0,0,0.3)'}}>
            Start Making People Care.
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
          Unlock the words that make investors lean in, customers say yes, and media pay attention.
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
            <a href="#free-audit">
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
                <span className="relative z-10">Start My Free Quiz</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        {/* Value Bullets */}
        <motion.div
          className="mb-12 sm:mb-16 px-4"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
        >
          <p className="text-sm mb-6 sm:mb-8 font-medium" style={{color: '#666666', fontFamily: 'Work Sans, sans-serif'}}>What you'll discover ↓</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <User className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Reveal Your Archetype</h3>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Unlock Your Story Strengths</h3>
            </motion.div>
            
            <motion.div
              className="flex flex-col items-center text-center bg-white rounded-xl p-4 sm:p-6 shadow-sm border border-gray-200 transition-all duration-300 min-h-[120px] sm:min-h-[140px]"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: '#D4B37A'}}>
                <Target className="w-6 h-6 text-white" />
              </div>
                  <h3 className="font-semibold text-lg" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>Locate Your Connection Gaps</h3>
                </motion.div>
              </div>
              
              <div className="mt-6 p-4 rounded-lg" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '1px solid rgba(166, 124, 82, 0.2)'}}>
                <p className="text-sm text-center" style={{color: '#A67C52', fontFamily: 'Work Sans, sans-serif'}}>
                  ✨ <strong>Bonus:</strong> Two extra archetypes + Hybrid & Shadow deep-dive (Premium)
                </p>
              </div>
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
            TRUSTED BY FOUNDERS AT:
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
        </motion.div>
      </div>
    </section>
  );
};