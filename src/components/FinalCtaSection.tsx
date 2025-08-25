import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export const FinalCtaSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-32 md:py-48 px-6 relative noise-bg overflow-hidden" ref={ref}>
      {/* Animated final signal burst */}
      <div className="absolute inset-0">
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-amber-400/30 rounded-full"
            style={{
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)'
            }}
            animate={{
              width: [0, 400 + (i * 200), 800 + (i * 200)],
              height: [0, 400 + (i * 200), 800 + (i * 200)],
              opacity: [1, 0.3, 0],
              borderWidth: [3, 1, 0]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              delay: i * 0.6,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Floating signal particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/60 rounded-full"
            animate={{
              y: [0, -80, 0],
              x: [0, Math.sin(i) * 60, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: 6 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${5 + (i * 3.8)}%`,
              top: `${10 + Math.random() * 80}%`
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-5xl mx-auto text-center space-y-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-12">
          <div className="text-center space-y-8">
            <motion.h2 
              className="font-serif text-5xl sm:text-6xl font-bold"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to <span className="text-amber-400">Transform</span> Your Brand?
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Join the select group of brands who've chosen to stand out from the noise
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="space-y-8 text-xl sm:text-2xl lg:text-3xl font-light leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.p 
            className="text-foreground/90"
            initial={{ x: -30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            Stop blending in.
          </motion.p>
          <motion.p 
            className="text-amber-400 font-medium"
            initial={{ x: 30, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : { x: 30, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            Start standing out.
          </motion.p>
          <motion.p 
            className="text-foreground/90"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            Your signal is waiting.
          </motion.p>
        </motion.div>

        {/* Social Proof & Urgency */}
        <motion.div 
          className="space-y-6 max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <div className="bg-amber-900/20 border border-amber-500/30 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="text-2xl">🔥</span>
              <p className="font-medium text-amber-300">Limited Availability</p>
            </div>
            <p className="text-center text-amber-200/90">
              We only work with <span className="font-bold">12 clients per year</span> to ensure exceptional results. 
              <br />
              <span className="text-sm text-amber-200/70">Currently accepting applications for next quarter.</span>
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-6 text-sm text-foreground/70">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span>94% client retention rate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Risk-free guarantee</span>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="pt-12"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer" className="inline-block">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{
                boxShadow: [
                  "0 0 0px 0px rgba(251, 191, 36, 0)",
                  "0 0 35px 8px rgba(251, 191, 36, 0.4)",
                  "0 0 0px 0px rgba(251, 191, 36, 0)"
                ]
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatDelay: 2,
                ease: "easeInOut"
              }}
            >
              <Button 
                size="lg" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-bold px-16 py-8 text-2xl tracking-wide relative overflow-hidden group shadow-2xl shadow-amber-500/20"
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "100%" }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                />
                <span className="relative z-10">
                  Book Your Lab Session
                </span>
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
