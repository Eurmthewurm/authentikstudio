import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

export const ProofSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section id="testimonials" className="section-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading-clean text-gradient-gold mb-16"
          {...fadeIn}
        >
          Founders Who Found Their Signal DNA
        </motion.h2>

        {/* Featured Testimonial - J-Griff */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full -translate-y-16 translate-x-16"></div>
            
            <div className="relative z-10">
              <Quote className="text-primary mb-8 mx-auto" size={56} />
              <blockquote className="text-2xl md:text-3xl font-medium text-foreground italic mb-8 leading-relaxed text-center">
                "Signal DNA transformed how I connect with my conscious entrepreneur audience."
              </blockquote>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/80 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    JG
                  </div>
                  <div>
                    <p className="font-bold text-xl text-primary">J-Griff</p>
                    <p className="text-foreground/70">Conscious Entrepreneur</p>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary to-primary/80 text-white px-8 py-4 rounded-2xl text-center">
                  <div className="text-3xl font-bold">€6M</div>
                  <div className="text-sm font-medium opacity-90">Revenue Growth</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Written Testimonials */}
        <div className="grid-3-clean mb-20">
          <motion.div className="card-clean-lg p-8 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.2 }}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
            <Quote className="text-primary mb-6 relative z-10" size={48} />
            <p className="text-body-clean text-foreground/90 italic mb-8 relative z-10">
              "Within 2 weeks of implementing our Signal DNA, we closed a €2.3M Series A. The investors said they'd 'never heard a more compelling vision.'"
            </p>
            <div className="flex items-center justify-between relative z-10">
              <p className="font-semibold text-xl text-primary">— Sarah Chen, CEO, TechFlow AI</p>
              <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                €2.3M Raised
              </div>
            </div>
          </motion.div>

          <motion.div className="card-clean-lg p-8 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.4 }}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
            <Quote className="text-primary mb-6 relative z-10" size={48} />
            <p className="text-body-clean text-foreground/90 italic mb-8 relative z-10">
              "Our Signal DNA transformed how we speak to customers. Revenue increased 340% in Q1 because prospects finally understood what made us different."
            </p>
            <div className="flex items-center justify-between relative z-10">
              <p className="font-semibold text-xl text-primary">— Marcus Rodriguez, Founder, GreenLogistics</p>
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                +340% Revenue
              </div>
            </div>
          </motion.div>

          <motion.div className="card-clean-lg p-8 relative overflow-hidden group" {...fadeIn} transition={{ delay: 0.6 }}>
            <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-500/20 to-orange-500/20 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
            <Quote className="text-primary mb-6 relative z-10" size={48} />
            <p className="text-body-clean text-foreground/90 italic mb-8 relative z-10">
              "Our media coverage increased 400% after we implemented our Signal DNA messaging. Journalists finally understood our impact."
            </p>
            <div className="flex items-center justify-between relative z-10">
              <p className="font-semibold text-xl text-primary">— Dr. Maria Santos, Founder, BioInnovate</p>
              <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                +400% Media
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Testimonials with Specific Outcomes */}
        <motion.div
          className="grid-2-clean mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <motion.div className="card-clean-lg p-8" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Quote className="text-primary mb-6" size={48} />
            <p className="text-body-clean text-foreground/90 italic mb-8">
              "Signal DNA helped us raise €1.2M in 3 weeks. Investors finally understood our vision because we stopped explaining features and started sharing impact."
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl text-primary">— Emma Thompson, Founder, HealthTech Pro</p>
              <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                €1.2M Raised
              </span>
            </div>
          </motion.div>

          <motion.div className="card-clean-lg p-8" whileHover={{ y: -5 }} transition={{ duration: 0.3 }}>
            <Quote className="text-primary mb-6" size={48} />
            <p className="text-body-clean text-foreground/90 italic mb-8">
              "Our customer conversion rate jumped from 12% to 34% after implementing our Signal DNA scripts. Prospects now 'get' what we do instantly."
            </p>
            <div className="flex items-center justify-between">
              <p className="font-semibold text-xl text-primary">— Alex Kumar, CEO, SaaSFlow</p>
              <span className="bg-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                +183% Conversion
              </span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.8 }}
        >
          <p className="text-subheading-clean text-foreground/80 mb-8">Trusted by founders at:</p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 text-lg text-foreground/80 font-medium">
            <span className="hover:text-primary transition-colors duration-300">David Attenborough</span>
            <span className="hover:text-primary transition-colors duration-300">National Geographic</span>
            <span className="hover:text-primary transition-colors duration-300">BBC</span>
            <span className="hover:text-primary transition-colors duration-300">Discovery</span>
            <span className="hover:text-primary transition-colors duration-300">Aaron Abke</span>
            <span className="hover:text-primary transition-colors duration-300">The Great Awakening Podcast</span>
            <span className="hover:text-primary transition-colors duration-300">Black Magic</span>
            <span className="hover:text-primary transition-colors duration-300">Arte</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};