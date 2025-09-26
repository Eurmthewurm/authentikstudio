import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export const ScarcityBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if banner was previously dismissed
    const dismissed = localStorage.getItem('scarcity-banner-dismissed');
    if (!dismissed) {
      // Show banner after a short delay
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    // Remember dismissal for 24 hours
    localStorage.setItem('scarcity-banner-dismissed', 'true');
    setTimeout(() => {
      localStorage.removeItem('scarcity-banner-dismissed');
    }, 24 * 60 * 60 * 1000); // 24 hours
  };

  const handleClick = () => {
    // Track click and scroll to quiz
    const element = document.querySelector('#free-audit');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg"
          data-banner="scarcity"
        >
          <div className="container-clean py-2 sm:py-3">
            <div className="flex items-center justify-between gap-2">
              <button
                onClick={handleClick}
                className="flex-1 text-center hover:bg-white/10 transition-colors rounded px-2 sm:px-4 py-2 min-h-[44px] flex items-center justify-center"
              >
                <span className="font-bold text-xs sm:text-sm md:text-base leading-tight">
                  🎁 First 50 quiz takers this week get a free €200 pitch review call!
                </span>
              </button>
              
              <button
                onClick={handleDismiss}
                className="ml-2 p-2 hover:bg-white/20 rounded-full transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center"
                aria-label="Dismiss banner"
              >
                <X size={18} className="sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
