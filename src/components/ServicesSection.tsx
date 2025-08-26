import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';

const services = [
  {
    id: 'studio',
    title: 'Authentik Studio',
    subtitle: 'We don\'t create content. We create conviction.',
    description: 'While competitors rush to create generic content, we start with strategic discovery—the foundation that makes everything else work. We invest time to uncover your authentic voice, understand your competitive landscape, and build the framework that separates you from everyone else. Then we craft stories that awaken, clarify, and convert through documentary-style content that feels raw, human, and unforgettable.',
    features: [
      'Strategic discovery & competitive analysis (Month 1-2)',
      '8-12 monthly strategy sessions + voice coaching framework',
      'Documentary-style video production (2-5 pieces)',
      'Content distribution and amplification strategy',
      'Performance tracking and optimization'
    ],
    benefits: [
      'Messages that make prospects think "Finally, someone who gets it"',
      'A brand voice people trust instead of scroll past',
      'Content that isn\'t just watched — it\'s felt and remembered',
      'Campaigns that awaken conviction, not just generate clicks'
    ],
    price: '€2,000–€5,000',
    timeline: '6 months',
    cta: 'Book Discovery Call',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: true,
    status: 'Available Now'
  },
  {
    id: 'leadership',
    title: 'Thought Leadership Support',
    subtitle: 'Leadership without the hype. Visibility without the noise.',
    description: 'The internet doesn\'t need another "guru." What it needs are leaders who are real. We help you step into visibility with humility, clarity, and style — so your presence inspires trust, not skepticism.',
    features: [
      '12 monthly 1:1 strategy and coaching sessions',
      'Personal brand positioning and messaging framework',
      'Camera presence and communication training',
      'Content creation and distribution guidance',
      'Ongoing performance tracking and optimization'
    ],
    benefits: [
      'Confidence to lead authentically without sounding like everyone else',
      'An audience that recognizes and trusts you as a thought leader',
      'A leadership brand built on substance, not hype',
      'Visibility rooted in expertise, not empty marketing tactics'
    ],
    price: '€3,000/month',
    timeline: '6-12 months',
    cta: 'Apply for Coaching',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: false,
    status: 'Limited Spots'
  },
  {
    id: 'lab',
    title: 'The Expansion Lab',
    subtitle: 'Find your frequency. Expand beyond the generic.',
    description: 'Most brands copy what\'s already out there. That\'s why they sound the same. The Expansion Lab is where we break that cycle. A 6-month immersive journey to uncover your brand\'s unique frequency — the signal hidden inside the noise.',
    features: [
      '6-month guided transformation journey',
      'Weekly group sessions + monthly 1:1 coaching',
      'Exclusive network of authentic leaders',
      'Complete content and communication framework',
      'Ongoing support and accountability'
    ],
    benefits: [
      'Clarity on your brand\'s authentic story',
      'A supportive network that challenges mediocrity',
      'A framework to stand out, not fade in',
      'Community of leaders who refuse to blend in',
      'Lifetime access to resources and ongoing support'
    ],
    price: '€4,000–€6,000/month',
    timeline: '6 months',
    cta: 'Join Waitlist',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: false,
    status: 'Next Cohort'
  }
];

export const ServicesSection: React.FC = () => {
  const ref = useRef(null);

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
    <section className="py-16 sm:py-24 md:py-32 px-6 relative noise-bg overflow-hidden" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div 
          className="text-center space-y-6 sm:space-y-8 lg:space-y-12 mb-12 sm:mb-16 lg:mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            Stop Blending In. <span className="text-amber-400">Start Standing Out.</span>
          </motion.h2>
          
          <motion.div 
            className="w-16 sm:w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={{ width: window.innerWidth < 640 ? 64 : 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          
          <motion.p 
            className="text-lg sm:text-xl text-foreground/80 max-w-3xl mx-auto px-4"
            variants={itemVariants}
          >
            Three paths. One mission: cut through the noise with authenticity.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="space-y-8 sm:space-y-12">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className={`relative ${service.primary ? 'border-2 border-amber-400/50 bg-gradient-to-br from-amber-400/5 to-transparent' : 'border border-border/50 bg-gradient-to-br from-slate-900/30 to-gray-900/30'} rounded-2xl p-6 sm:p-8 md:p-12 backdrop-blur-sm`}
              variants={itemVariants}
              whileHover={{ y: -5, borderColor: service.primary ? "rgba(251, 191, 36, 0.8)" : "rgba(148, 163, 184, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Status Badge */}
              <div className={`absolute -top-3 left-4 sm:left-8 px-3 sm:px-4 py-1 rounded-full text-xs sm:text-sm font-medium ${
                service.primary 
                  ? 'bg-amber-400 text-black' 
                  : service.status === 'Limited Availability'
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-600 text-white'
              }`}>
                {service.status}
              </div>

              {/* Service Header */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl font-bold">
                  {service.title}
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                  <p className="text-base sm:text-lg text-amber-400 font-medium flex-1">
                    {service.subtitle}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 text-sm">
                    <span className="bg-amber-400/10 text-amber-400 px-3 py-1 rounded-full font-medium">
                      {service.price}
                    </span>
                    <span className="bg-blue-400/10 text-blue-400 px-3 py-1 rounded-full font-medium">
                      {service.timeline}
                    </span>
                  </div>
                </div>
                <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features and Benefits Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-6 sm:mb-8">
                {/* What We Do */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-bold text-base sm:text-lg text-foreground/90">
                    What We Do:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="text-amber-400 mt-1 flex-shrink-0">→</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What You Get */}
                <div className="space-y-3 sm:space-y-4">
                  <h4 className="font-bold text-base sm:text-lg text-foreground/90">
                    What You Get:
                  </h4>
                  <ul className="space-y-2 sm:space-y-3">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-foreground/80">
                        <span className="text-amber-400 mt-1 flex-shrink-0">✓</span>
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
          className="text-center mt-16 sm:mt-20 space-y-6 sm:space-y-8 px-4"
          variants={itemVariants}
        >
          <p className="text-base sm:text-lg text-foreground/80">
            Not sure which path is right for you?
          </p>
          <a href="https://calendly.com/ermo/discoverycall" target="_blank" rel="noopener noreferrer">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-amber-400 hover:bg-amber-500 text-black font-medium px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
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
