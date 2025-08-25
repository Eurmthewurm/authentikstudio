import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Button } from './ui/button';

const services = [
  {
    id: 'studio',
    title: 'Authentik Studio',
    subtitle: 'Project-based storytelling for brands ready to stand out from the noise.',
    description: 'Transform your brand message into documentary-style content that feels authentic, not artificial. We create campaigns that your audience remembers, trusts, and acts on.',
    features: [
      'Brand voice discovery and positioning strategy',
      'Documentary-style video production (2-5 pieces)',
      'Content distribution and amplification strategy',
      'Performance tracking and optimization'
    ],
    benefits: [
      '3.2x higher engagement than generic content',
      'Authentic brand voice that differentiates you',
      'Content that converts prospects into customers',
      '6-month content strategy roadmap'
    ],
    price: '€2,000–€5,000',
    timeline: '4-8 weeks',
    cta: 'Book Discovery Call',
    ctaLink: 'https://calendly.com/ermo/discoverycall',
    primary: true,
    status: 'Available Now'
  },
  {
    id: 'leadership',
    title: 'Thought Leadership Coaching',
    subtitle: 'Private 1:1 coaching for CEOs who want to build authentic personal brands.',
    description: 'Develop the confidence and clarity to become the trusted voice in your industry. We help you communicate with conviction, not just volume.',
    features: [
      'Monthly 1:1 strategy and coaching sessions',
      'Personal brand positioning and messaging',
      'Camera presence and communication training',
      'Content creation and distribution guidance'
    ],
    benefits: [
      'Authentic leadership presence that builds trust',
      'Clear personal brand positioning in your market',
      'Confidence to share your expertise publicly',
      'Sustainable content strategy for long-term growth'
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
    subtitle: 'Comprehensive 6-month transformation program for visionary leaders.',
    description: 'Join an exclusive cohort of leaders on a journey to discover and amplify your authentic voice. This isn\'t just about content—it\'s about becoming the leader your industry needs.',
    features: [
      '6-month guided transformation journey',
      'Weekly group sessions + monthly 1:1 coaching',
      'Exclusive network of authentic leaders',
      'Complete content and communication framework',
      'Ongoing support and accountability'
    ],
    benefits: [
      'Complete brand and leadership transformation',
      'Authentic voice that sets you apart from competitors',
      'Supportive network of like-minded leaders',
      'Scalable systems for long-term growth',
      'Lifetime access to community and resources'
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
          className="text-center space-y-8 sm:space-y-12 mb-16 sm:mb-20"
          variants={itemVariants}
        >
          <motion.h2 
            className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold"
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ duration: 0.8 }}
          >
            Stop Blending In. <span className="text-amber-400">Start Standing Out.</span>
          </motion.h2>
          
          <motion.div 
            className="w-16 sm:w-24 h-px bg-amber-400 mx-auto"
            initial={{ width: 0 }}
            animate={isInView ? { width: window.innerWidth < 640 ? 64 : 96 } : { width: 0 }}
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
        <div className="space-y-12">
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
          className="text-center mt-12 sm:mt-16 space-y-4 sm:space-y-6 px-4"
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
