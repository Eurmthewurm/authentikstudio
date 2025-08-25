import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';

const services = [
  {
    id: 'studio',
    title: 'Authentik Studio',
    subtitle: 'The core agency work — for brands ready to stop sounding like everyone else.',
    description: 'Forget the flashy edits. Forget the trends. Forget the generic. Your audience isn\'t fooled — they want something real. We craft stories that awaken, clarify, and convert.',
    features: [
      'Brand storytelling campaigns that stop people in their tracks',
      'Documentary-style videos that feel raw, human, and unforgettable',
      'Strategy + production aligned with your brand\'s deeper truth'
    ],
    benefits: [
      'Work that cuts through the noise',
      'A brand voice people trust',
      'Content that isn\'t just watched — it\'s felt'
    ],
    cta: 'Book a Call',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: true,
    status: 'Available Now'
  },
  {
    id: 'leadership',
    title: 'Thought Leadership Support',
    subtitle: 'For CEOs and founders who want to lead with humility, not hype.',
    description: 'The internet doesn\'t need another "guru." What it needs are leaders who are real. We help you step into visibility with humility, clarity, and style — so your presence inspires trust, not skepticism.',
    features: [
      'Personal coaching for camera and stage presence',
      'Thought leadership strategy for long-term visibility',
      'Content support that positions you as a voice of conviction'
    ],
    benefits: [
      'Confidence to lead authentically',
      'An audience that recognizes and trusts you',
      'A leadership brand that lasts longer than trends'
    ],
    cta: 'Apply for 1:1 Support',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: false,
    status: 'Limited Availability'
  },
  {
    id: 'lab',
    title: 'The Expansion Lab',
    subtitle: 'A 6-month immersive journey to uncover your brand\'s unique frequency.',
    description: 'Most brands copy what\'s already out there. That\'s why they sound the same. The Expansion Lab is where we break that cycle. It\'s a 6-month immersive journey to uncover your brand\'s unique frequency — the signal hidden inside the noise.',
    features: [
      'Guided sessions to strip away the generic',
      'Network with other leaders who refuse to blend in',
      'Build content strategies that expand with you, not against you'
    ],
    benefits: [
      'Clarity on your brand\'s authentic story',
      'A supportive network that challenges mediocrity',
      'A framework to stand out, not fade in'
    ],
    cta: 'Join the Waitlist',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: false,
    status: 'Coming Soon'
  }
];

export const ServicesSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const
      }
    }
  };

  return (
    <section className="py-24 md:py-32 px-6 relative noise-bg overflow-hidden" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-12 mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="font-serif text-5xl sm:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stop Blending In. <span className="text-amber-400">Start Standing Out.</span>
          </motion.h2>
          
          <motion.div 
            className="w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: 96 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-xl text-foreground/80 max-w-3xl mx-auto"
            variants={itemVariants}
          >
            Three paths. One mission: cut through the noise with authenticity.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative ${service.primary ? 'border-2 border-amber-400/50 bg-gradient-to-br from-amber-400/5 to-transparent' : 'border border-border/50 bg-gradient-to-br from-slate-900/30 to-gray-900/30'} rounded-2xl p-8 md:p-12 backdrop-blur-sm`}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: service.primary ? "rgba(251, 191, 36, 0.8)" : "rgba(148, 163, 184, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Status Badge */}
              <div className={`absolute -top-3 left-8 px-4 py-1 rounded-full text-sm font-medium ${
                service.primary 
                  ? 'bg-amber-400 text-black' 
                  : service.status === 'Limited Availability'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-600 text-white'
              }`}>
                {service.status}
              </div>

              {/* Service Header */}
              <div className="space-y-6 mb-8">
                <h3 className="font-serif text-3xl md:text-4xl font-bold">
                  {service.title}
                </h3>
                <p className="text-lg text-amber-400 font-medium">
                  {service.subtitle}
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features and Benefits Grid */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                {/* What We Do */}
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground/90">
                    What We Do:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-amber-400 mt-1">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You Get */}
                <div className="space-y-4">
                  <h4 className="font-bold text-lg text-foreground/90">
                    What You Get:
                  </h4>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-foreground/80">
                        <span className="text-amber-400 mt-1">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <a href={service.ctaLink} target="_blank" rel="noopener noreferrer">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button 
                      size="lg" 
                      className={`${
                        service.primary 
                          ? 'bg-amber-400 hover:bg-amber-500 text-black' 
                          : 'bg-transparent hover:bg-amber-400/10 text-amber-400 border-2 border-amber-400 hover:border-amber-500'
                      } font-medium px-8 py-4 text-lg`}
                    >
                      {service.cta}
                    </Button>
                  </motion.div>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="text-center mt-16 space-y-6"
          variants={itemVariants}
        >
          <p className="text-lg text-foreground/80">
            Not sure which path is right for you?
          </p>
          <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-8 py-4 text-lg"
              >
                Book a Discovery Call
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};
