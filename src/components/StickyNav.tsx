import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const StickyNav: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [bannerHeight, setBannerHeight] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 400); // Show after hero section
    };

    // Check if banner is visible and get its height
    const checkBannerHeight = () => {
      const banner = document.querySelector('[data-banner="scarcity"]');
      if (banner) {
        setBannerHeight(banner.clientHeight);
      } else {
        setBannerHeight(0);
      }
    };

    // Check banner height on mount and when it changes
    checkBannerHeight();
    const observer = new MutationObserver(checkBannerHeight);
    observer.observe(document.body, { childList: true, subtree: true });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const navItems = [
    { label: 'Problem', href: '#problem' },
    { label: 'Solution', href: '#solution' },
    { label: 'Method', href: '#method' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' }
  ];

  if (!isVisible) return null;

  return (
    <motion.nav
      className="fixed left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm"
      style={{ top: bannerHeight }}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container-clean">
        <div className="content-clean">
          <div className="flex justify-center items-center py-2 sm:py-3">
            <div className="flex space-x-4 sm:space-x-8 overflow-x-auto scrollbar-hide">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className="text-sm font-medium transition-colors duration-200 hover:text-champagne whitespace-nowrap min-h-[44px] flex items-center"
                  style={{color: '#333333', fontFamily: 'Work Sans, sans-serif'}}
                  whileHover={{ scale: 1.05 }}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
