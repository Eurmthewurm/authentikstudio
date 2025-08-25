import React from 'react';
import { motion, useInView } from 'framer-motion';
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
    number: "€4.2M+",
    label: "Additional revenue generated",
    description: "for top-performing clients in 12 months"
  },
  {
    number: "94%",
    label: "Client retention rate",
    description: "after first 6 months"
  }
];

export const ProofSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    <section className="py-24 md:py-32 px-6 relative" ref={ref}>
      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <div className="space-y-16">
          <div className="text-center space-y-8">
            <motion.h2 
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              The <span className="text-amber-400">Proof</span> Is in the Results
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              See how leaders discover their authentic voice and experience the revelation moment: "This is who I really am, and this is what my audience needs from me."
            </motion.p>
          </div>
        </div>

        {/* Metrics Showcase */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
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
          className="mb-24 text-center"
          variants={itemVariants}
        >
          <div className="space-y-6 mb-12">
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
          className="mb-24 p-8 bg-gradient-to-br from-slate-900/50 to-gray-900/50 border border-border/50 rounded-xl backdrop-blur-sm"
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
          
          <div className="grid lg:grid-cols-2 gap-8">
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
        <div className="grid lg:grid-cols-2 gap-12 mb-24 text-left">
          <motion.div 
            className="space-y-6 p-8 border border-border/50 rounded-lg group hover:border-amber-400/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-serif text-3xl font-bold text-amber-400">J-Griff</h3>
            <p className="text-lg text-foreground/90">
              <span className="font-bold">The Revelation:</span> "I realized I wasn't just a filmmaker—I was a storyteller who could help other leaders find their voice." We guided J-Griff through his voice awakening, and he grew from <span className="font-bold">$2M to $8M in 18 months</span> through documentary-style storytelling that felt true.
            </p>
            <div className="flex items-baseline space-x-4 pt-4">
              <span className="font-serif text-4xl font-bold text-amber-400">800K+</span>
              <span className="text-foreground/80">video views</span>
            </div>
          </motion.div>

          <motion.div 
            className="space-y-6 p-8 border border-border/50 rounded-lg group hover:border-amber-400/50 transition-all duration-300"
            variants={itemVariants}
            whileHover={{ y: -5 }}
          >
            <h3 className="font-serif text-3xl font-bold text-amber-400">The Great Awakening Podcast</h3>
            <p className="text-lg text-foreground/90">
              <span className="font-bold">The Revelation:</span> "We discovered our authentic voice wasn't about teaching—it was about awakening." After collaborating with Aaron Abke and Jeremy Griffin, we helped them achieve 23K+ views on key videos and grow to nearly 7,500 subscribers in just one year.
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-4 pt-4">
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-4xl font-bold text-amber-400">23K+</span>
                <span className="text-foreground/80">key video views</span>
              </div>
              <div className="flex items-baseline space-x-3">
                <span className="font-serif text-4xl font-bold text-amber-400">~7.5K</span>
                <span className="text-foreground/80">subscribers</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Video Testimonials */}
        <motion.div className="mb-24" variants={itemVariants}>
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
          className="grid md:grid-cols-2 gap-8"
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
