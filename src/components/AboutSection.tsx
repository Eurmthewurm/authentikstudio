import React from 'react';
import { motion } from 'framer-motion';

export const AboutSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  return (
    <section className="section-off-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-12"
          {...fadeIn}
        >
          Meet Your Signal DNA Architect
        </motion.h2>

        <div className="max-w-3xl mx-auto card-clean-lg p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
            <motion.div
              className="relative flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
            >
              <img
                src="/ermo.jpg"
                alt="Ermo Egberts"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg hover:shadow-xl transition-all duration-300"
                loading="lazy"
              />
              <div className="absolute -bottom-2 -right-2 bg-primary text-white rounded-full p-2 shadow-lg">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </motion.div>
            <motion.div className="text-left flex-1" {...fadeIn} transition={{ delay: 0.4 }}>
              <h3 className="text-subheading-clean text-primary mb-3">Ermo Egberts</h3>
              <p className="text-body-clean text-foreground/80 mb-4 leading-relaxed">
                I built Signal DNA out of frustration. I saw founders drowning in generic pitches—chasing trends, producing endless "content" that sounded like everyone else. In a world flooded with AI-driven noise, I knew the only way forward was human truth.
              </p>
              <p className="text-body-clean text-foreground/80 mb-6 leading-relaxed">
                That's why I exist: to help founders transform their authenticity into an unforgettable signal. My mission is to help founders discover the story that was always meant to be told, turning their unique vision into an undeniable competitive advantage.
              </p>
              <div className="border-l-2 border-primary/30 pl-4">
                <p className="text-lg italic text-foreground/90 font-serif leading-relaxed">
                  "We're not here to make you more content. We're here to help you become unforgettable."
                </p>
              </div>
              
              {/* Credentials & Trust Indicators */}
              <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full">
                  <span className="text-primary text-sm">🎬</span>
                  <span className="text-sm font-medium text-foreground/90">Documentary Producer</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full">
                  <span className="text-primary text-sm">🎯</span>
                  <span className="text-sm font-medium text-foreground/90">Signal DNA Creator</span>
                </div>
                <div className="flex items-center gap-2 bg-primary/10 px-3 py-2 rounded-full">
                  <span className="text-primary text-sm">🚀</span>
                  <span className="text-sm font-medium text-foreground/90">Founder Whisperer</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
