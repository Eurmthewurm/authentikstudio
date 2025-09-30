import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export const StickyHeader: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (typeof window !== 'undefined') {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, [lastScrollY]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border/20 py-4 container-clean"
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex justify-between items-center content-clean">
        <a href="/" className="flex items-center gap-2">
          <div className="font-serif text-xl sm:text-2xl font-bold text-gradient-gold">
            Authentik Studio
          </div>
        </a>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#problem" className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
            Problem
          </a>
          <a href="#solution" className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
            Solution
          </a>
          <a href="#method" className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
            Method
          </a>
          <a href="#testimonials" className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
            Testimonials
          </a>
          <a href="#faq" className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium">
            FAQ
          </a>
          <a href="#free-audit">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="sm"
                className="button-primary-clean text-sm px-6 py-3"
              >
                Claim FREE Audit
              </Button>
            </motion.div>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-foreground/80 hover:text-primary transition-colors"
          onClick={toggleMobileMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <motion.nav
        className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'} mt-4 pb-4 border-t border-border/20`}
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0, height: isMobileMenuOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col gap-4 pt-4">
          <a 
            href="#problem" 
            className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Problem
          </a>
          <a 
            href="#solution" 
            className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Solution
          </a>
          <a 
            href="#method" 
            className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Method
          </a>
          <a 
            href="#testimonials" 
            className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-sm text-foreground/80 hover:text-primary transition-colors font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            FAQ
          </a>
          <a href="#free-audit" onClick={() => setIsMobileMenuOpen(false)}>
            <Button
              size="sm"
              className="button-primary-clean text-sm px-6 py-3 w-full"
            >
              Claim FREE Audit
            </Button>
          </a>
        </div>
      </motion.nav>
    </motion.header>
  );
};