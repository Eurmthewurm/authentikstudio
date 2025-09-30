import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { AnimatedSectionBackground } from './AnimatedSectionBackground';

export const ProofSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" as const },
  };

  return (
    <section id="testimonials" className="section-white container-clean text-foreground relative">
      <AnimatedSectionBackground variant="geometric" intensity="subtle" color="#A67C52" />
      <div className="content-clean text-center relative z-10">
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
                "Ermo is a master at creating long-form video content—content that humanizes you, builds trust with your audience, and breaks down the invisible walls that usually prevent people from buying from strangers on the internet. He helped us grow from €2M to €6M in revenue within 18 months."
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

        {/* Video Testimonial - J-Griff */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8" style={{fontFamily: 'Playfair Display, serif', color: '#111111'}}>
              Watch J-Griff's Full Testimonial
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 overflow-hidden">
              <div style={{padding:'56.25% 0 0 0', position:'relative'}}>
                <iframe 
                  src="https://player.vimeo.com/video/1112128628?badge=0&autopause=0&player_id=0&app_id=58479" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{position:'absolute', top:0, left:0, width:'100%', height:'100%'}} 
                  title="J-griff Testimonial"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Written Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden" 
            {...fadeIn} 
            transition={{ delay: 0.2 }}
          >
            {/* Step Number */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{backgroundColor: '#D4B37A'}}>
              01
            </div>
            
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(212, 179, 122, 0.1)', border: '2px solid #D4B37A'}}>
              <Quote className="w-6 h-6" style={{color: '#D4B37A'}} />
            </div>
            
            <p className="text-foreground/90 italic mb-6 leading-relaxed" style={{fontFamily: 'Work Sans, sans-serif'}}>
              "Within 2 weeks of implementing our Signal DNA, we closed a €2.3M Series A. The investors said they'd 'never heard a more compelling vision.'"
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-foreground" style={{fontFamily: 'Playfair Display, serif'}}>Sarah Chen</p>
                <p className="text-sm text-foreground/70" style={{fontFamily: 'Work Sans, sans-serif'}}>CEO, TechFlow AI</p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{backgroundColor: '#D4B37A'}}>
                €2.3M Raised
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden" 
            {...fadeIn} 
            transition={{ delay: 0.4 }}
          >
            {/* Step Number */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{backgroundColor: '#A67C52'}}>
              02
            </div>
            
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(166, 124, 82, 0.1)', border: '2px solid #A67C52'}}>
              <Quote className="w-6 h-6" style={{color: '#A67C52'}} />
            </div>
            
            <p className="text-foreground/90 italic mb-6 leading-relaxed" style={{fontFamily: 'Work Sans, sans-serif'}}>
              "Our Signal DNA transformed how we speak to customers. Revenue increased 340% in Q1 because prospects finally understood what made us different."
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-foreground" style={{fontFamily: 'Playfair Display, serif'}}>Marcus Rodriguez</p>
                <p className="text-sm text-foreground/70" style={{fontFamily: 'Work Sans, sans-serif'}}>Founder, GreenLogistics</p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{backgroundColor: '#A67C52'}}>
                +340% Revenue
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group relative overflow-hidden" 
            {...fadeIn} 
            transition={{ delay: 0.6 }}
          >
            {/* Step Number */}
            <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg" style={{backgroundColor: '#C49E58'}}>
              03
            </div>
            
            {/* Quote Icon */}
            <div className="w-12 h-12 rounded-full flex items-center justify-center mb-4" style={{backgroundColor: 'rgba(196, 158, 88, 0.1)', border: '2px solid #C49E58'}}>
              <Quote className="w-6 h-6" style={{color: '#C49E58'}} />
            </div>
            
            <p className="text-foreground/90 italic mb-6 leading-relaxed" style={{fontFamily: 'Work Sans, sans-serif'}}>
              "Our media coverage increased 400% after we implemented our Signal DNA messaging. Journalists finally understood our impact."
            </p>
            
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-lg text-foreground" style={{fontFamily: 'Playfair Display, serif'}}>Dr. Maria Santos</p>
                <p className="text-sm text-foreground/70" style={{fontFamily: 'Work Sans, sans-serif'}}>Founder, BioInnovate</p>
              </div>
              <div className="px-3 py-1 rounded-full text-xs font-bold text-white" style={{backgroundColor: '#C49E58'}}>
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