import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <footer className="border-t border-white/20 pt-16 pb-12" style={{backgroundColor: '#111111'}}>
      <div className="container-clean">
        <div className="content-clean">
          <motion.div
            className="flex flex-col items-center gap-8"
            {...fadeIn}
          >
            {/* Primary Navigation */}
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium">
              <a 
                href="#hero" 
                className="text-white/80 transition-colors"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Home
              </a>
              <a 
                href="#solution" 
                className="text-white/80 transition-colors"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                How It Works
              </a>
              <a 
                href="#free-audit" 
                className="text-white/80 transition-colors"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Quiz
              </a>
              <a 
                href="mailto:hello@authentikstudio.com" 
                className="text-white/80 transition-colors"
                style={{color: 'rgba(255, 255, 255, 0.8)'}}
                    onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                    onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.8)'}
              >
                Contact
              </a>
            </div>
            
            {/* Legal & Social */}
            <div className="flex flex-wrap justify-center items-center gap-6 text-sm">
              <div className="flex gap-6">
                <a 
                  href="/terms-of-service" 
                  className="text-white/60 transition-colors"
                  style={{color: 'rgba(255, 255, 255, 0.6)'}}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms
                </a>
                <a 
                  href="/privacy-policy" 
                  className="text-white/60 transition-colors"
                  style={{color: 'rgba(255, 255, 255, 0.6)'}}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Privacy
                </a>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex items-center gap-4">
                <a 
                  href="https://linkedin.com/company/authentik-studio" 
                  className="text-white/60 transition-colors"
                  style={{color: 'rgba(255, 255, 255, 0.6)'}}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a 
                  href="https://twitter.com/authentikstudio" 
                  className="text-white/60 transition-colors"
                  style={{color: 'rgba(255, 255, 255, 0.6)'}}
                      onMouseEnter={(e) => (e.target as HTMLElement).style.color = '#D4B37A'}
                      onMouseLeave={(e) => (e.target as HTMLElement).style.color = 'rgba(255, 255, 255, 0.6)'}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
            
                {/* Brand */}
                <div className="text-center">
                  <div className="font-serif text-lg font-bold mb-1" style={{color: '#D4B37A'}}>
                    Authentik Studio
                  </div>
                  <div className="text-xs" style={{color: '#FAF8F5'}}>
                    © 2024 Authentik Studio. All rights reserved.
                  </div>
                </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};
