import React, { useState } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';
import { Button } from './ui/button';

export const StickyHeader: React.FC = () => {
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() || 0;
    
    // Show header if scrolling up and past the hero section (100vh)
    if (latest < previous && latest > window.innerHeight) {
      setVisible(true);
    } 
    // Hide header if scrolling down or back in the hero section
    else if (latest > previous || latest <= window.innerHeight) {
      setVisible(false);
    }
  });

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          className="fixed top-0 left-0 w-full h-20 px-6 sm:px-12 bg-background/80 backdrop-blur-lg border-b border-border/50 z-50 flex items-center justify-between"
          initial={{ y: '-100%' }}
          animate={{ y: '0%' }}
          exit={{ y: '-100%' }}
          transition={{ duration: 0.35, ease: 'easeInOut' }}
        >
          <div className="font-serif text-xl font-bold">
            Authentik Studio
          </div>
          <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="default" className="bg-amber-400 hover:bg-amber-500 text-black font-medium">
                Book Studio Call
              </Button>
            </motion.div>
          </a>
        </motion.header>
      )}
    </AnimatePresence>
  );
};
