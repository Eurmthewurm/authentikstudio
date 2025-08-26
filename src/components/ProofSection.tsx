import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { VideoTestimonial } from './VideoTestimonial';

const testimonials = [
  {
    quote: "The content didn't look like anything else. We stopped competing — because no one else sounded like us.",
    author: "Jessica Kaufman",
    title: "COO"
  },
  {
    quote: "This felt real. I went from reluctant to fully committed in seconds.",
    author: "Philip Fortuna", 
    title: "Executive Coach"
  }
];

const metrics = [
  {
    number: "87%",
    label: "Average increase in engagement",
    description: "across all client campaigns"
  },
  {
    number: "3.2x",
    label: "Higher conversion rates",
    description: "compared to generic content"
  },
  {
    number: "$6M+",
    label: "Additional revenue generated",
    description: "for top-performing clients in 18 months"
  },
  {
    number: "94%",
    label: "Client retention rate",
    description: "after first 6 months"
  }
];

export const ProofSection: React.FC = () => {
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
    <section className="py-8 sm:py-12 md:py-16 container-padding relative" ref={ref}>
      <motion.div 
        className="content-width relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="space-y-1 sm:space-y-2 md:space-y-4">
          <div className="text-center space-y-1 sm:space-y-2">
            <motion.h2 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Real Brands.
              <br />
              <span className="text-amber-400">Real Results</span>.
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              While other agencies create forgettable content, we help leaders discover their authentic voice and achieve the revelation moment: "This is who I really am, and this is what my audience needs from me."
            </motion.p>
          </div>
        </div>

        {/* Metrics Showcase */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-24"
          variants={containerVariants}
        >
          {metrics.map((metric, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 border border-border/30 rounded-lg group hover:border-amber-400/50 transition-all duration-300 hover:bg-amber-50/20"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <motion.div 
                className="text-4xl lg:text-5xl font-serif font-bold text-amber-400 mb-3"
                animate={{
                  textShadow: [
                    "0 0 0px rgba(251, 191, 36, 0)",
                    "0 0 15px rgba(251, 191, 36, 0.4)",
                    "0 0 0px rgba(251, 191, 36, 0)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3
                }}
              >
                {metric.number}
              </motion.div>
              <div className="font-medium text-lg mb-2">{metric.label}</div>
              <div className="text-sm text-foreground/70">{metric.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Showreel Section */}
        <motion.div 
          className="mb-16 sm:mb-24 text-center"
          variants={itemVariants}
        >
          <div className="space-y-4 sm:space-y-6 mb-8 sm:mb-12">
            <h3 className="font-serif text-3xl font-bold">
              Our <span className="text-amber-400">Work</span> in Action
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              See the projects that have helped brands like National Geographic, BBC, Discovery, and Black Magic stand out from the noise
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <VideoTestimonial
              platform="vimeo"
              videoId="901343199"
              author="John Sullivan"
              title="Shooting Director / Editor"
            />
          </div>
        </motion.div>

        {/* Before/After Case Study */}
        <motion.div 
          className="mb-16 sm:mb-24 p-8 bg-gradient-to-br from-slate-900/50 to-gray-900/50 border border-border/50 rounded-xl backdrop-blur-sm"
          variants={itemVariants}
        >
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold mb-4">
              The <span className="text-amber-400">Transformation</span> in Action
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              See how we transformed a generic AI-generated content strategy into authentic, engaging storytelling
            </p>
          </div>
          
                      <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Before */}
            <motion.div 
              className="p-6 bg-red-900/20 border-2 border-red-500/30 rounded-lg relative backdrop-blur-sm"
              whileHover={{ y: -5, borderColor: "rgba(239, 68, 68, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-3 left-6 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                BEFORE
              </div>
              <h4 className="font-bold text-red-400 text-xl mb-4 mt-2">Generic AI Content Strategy</h4>
              <div className="space-y-3 text-red-300/90">
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Posts sounded like every other brand</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>0.8% engagement rate</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>No brand differentiation</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>Generic templates & formulas</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-red-400 mt-1">✗</span>
                  <span>€15K/month spent, €2K ROI</span>
                </div>
              </div>
            </motion.div>
            
            {/* After */}
            <motion.div 
              className="p-6 bg-green-900/20 border-2 border-green-500/30 rounded-lg relative backdrop-blur-sm"
              whileHover={{ y: -5, borderColor: "rgba(34, 197, 94, 0.6)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="absolute -top-3 left-6 bg-green-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                AFTER
              </div>
              <h4 className="font-bold text-green-400 text-xl mb-4 mt-2">Authentic Storytelling Strategy</h4>
              <div className="space-y-3 text-green-300/90">
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Unique brand voice & personality</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>4.2% engagement rate (5.25x increase)</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Clear market positioning</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>Custom content frameworks</span>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-green-400 mt-1">✓</span>
                  <span>€18K/month spent, €65K+ ROI</span>
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-3 bg-amber-900/30 text-amber-300 px-6 py-3 rounded-full font-medium border border-amber-500/30">
              <span className="text-xl">🎯</span>
              <span>Result: 3.6x ROI improvement in 6 months</span>
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-8 sm:space-y-12 mb-16 sm:mb-24">
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Client <span className="text-amber-400">Success Stories</span>
            </h3>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              See how we've helped brands transform from generic to authentic, and the measurable results that followed.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 text-left">
            <motion.div 
              className="space-y-6 p-8 bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-500/30 rounded-xl group hover:border-green-400/50 transition-all duration-300 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-green-400">The Level Up Collective</h3>
                <div className="text-xs bg-green-500/20 text-green-400 px-3 py-1 rounded-full font-medium">
                  18 Months
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-green-800/30 rounded-lg p-4 border border-green-500/30">
                  <p className="text-green-300 font-medium text-sm mb-2">THE CHALLENGE:</p>
                  <p className="text-green-100">Financial literacy educator struggling to scale his mastermind beyond word-of-mouth and reach ambitious growth targets.</p>
                </div>
                
                <div className="bg-green-800/30 rounded-lg p-4 border border-green-500/30">
                  <p className="text-green-300 font-medium text-sm mb-2">THE TRANSFORMATION:</p>
                  <p className="text-green-100">"We discovered my authentic voice wasn't just teaching—it was empowering people to take control of their financial future through real stories and proven systems."</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-green-400">$2M → $8M</div>
                    <div className="text-xs text-green-200/80">Revenue Growth</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-green-400">350+</div>
                    <div className="text-xs text-green-200/80">Mastermind Members</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="space-y-6 p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-2 border-blue-500/30 rounded-xl group hover:border-blue-400/50 transition-all duration-300 backdrop-blur-sm"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif text-2xl font-bold text-blue-400">Tuff Pupper</h3>
                <div className="text-xs bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full font-medium">
                  Product Launch
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-blue-800/30 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-blue-300 font-medium text-sm mb-2">THE CHALLENGE:</p>
                  <p className="text-blue-100">Pet product brand needed authentic storytelling to differentiate from generic pet accessories and connect with dog owners.</p>
                </div>
                
                <div className="bg-blue-800/30 rounded-lg p-4 border border-blue-500/30">
                  <p className="text-blue-300 font-medium text-sm mb-2">THE TRANSFORMATION:</p>
                  <p className="text-blue-100">"We shifted from product features to the authentic bond between dogs and their owners through real adventure stories."</p>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-blue-400">285%</div>
                    <div className="text-xs text-blue-200/80">Engagement Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-serif font-bold text-blue-400">$180K+</div>
                    <div className="text-xs text-blue-200/80">First Year Revenue</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Video Testimonials */}
        <motion.div className="mb-16 sm:mb-24" variants={itemVariants}>
          <div className="text-center mb-12">
            <h3 className="font-serif text-3xl font-bold mb-4">
              Hear From Leaders We've <span className="text-amber-400">Guided</span>
            </h3>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
              Listen to J-Griff share his revelation moment and how our guidance helped him discover his authentic voice as a storyteller
            </p>
          </div>
          
          <VideoTestimonial
              platform="vimeo"
              videoId="1112128628"
              author="J-Griff"
              title="Founder & CEO"
          />
        </motion.div>
        
        {/* Text Testimonials */}
        <motion.div 
                        className="grid md:grid-cols-2 gap-6 sm:gap-8"
          variants={containerVariants}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="space-y-6 p-8 border border-border/50 rounded-lg relative group hover:border-amber-400/50 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-amber-400/5 opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"
              />
              
              <motion.p 
                className="text-lg leading-relaxed text-foreground/90 relative z-10"
              >
                "{testimonial.quote}"
              </motion.p>
              
              <motion.div 
                className="space-y-1 relative z-10"
              >
                <p className="font-medium text-amber-400">— {testimonial.author}</p>
                <p className="text-sm text-foreground/60">{testimonial.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};
