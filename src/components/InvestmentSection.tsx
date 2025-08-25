import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const investmentItems = [
  "Strategy, coaching, content systems",
  "Editing + reporting",
  "Optional: immersive on-site storytelling (custom pricing)"
];

export const InvestmentSection: React.FC = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section className="py-24 md:py-32 px-6 relative" ref={ref}>
      {/* Animated value indicators */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-amber-400/20 rounded-full"
            style={{
              left: `${15 + (i * 35)}%`,
              top: `${20 + (i % 2) * 60}%`
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.2, 0.5, 0.2],
              borderColor: [
                "rgba(251, 191, 36, 0.2)",
                "rgba(251, 191, 36, 0.6)",
                "rgba(251, 191, 36, 0.2)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <motion.div 
        className="max-w-4xl mx-auto text-center space-y-16 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-12">
          <div className="text-center space-y-8">
            <motion.h2 
              className="font-serif text-5xl sm:text-6xl font-bold"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              Ready to <span className="text-amber-400">Invest</span> in Your Brand's Future?
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={isInView ? { width: 96 } : { width: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-3xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              After seeing how we've helped brands cut through the noise, here's what it takes to start with Authentik Studio. For Expansion Lab and Thought Leadership pricing, see our Services section above.
            </motion.p>
          </div>
        </div>
        
        <motion.div 
          className="space-y-8 text-lg sm:text-xl leading-relaxed"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.p 
            className="text-xl sm:text-2xl font-light text-foreground/90"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Authentik Studio projects start at <span className="text-amber-400 font-medium">€2,000–€5,000</span>.
          </motion.p>
          
          <motion.div 
            className="text-4xl sm:text-5xl font-serif font-bold text-amber-400 my-8"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            style={{
              textShadow: isInView ? "0 0 20px rgba(251, 191, 36, 0.6)" : "0 0 0px rgba(251, 191, 36, 0)"
            }}
          >
            €2,000–€5,000
          </motion.div>
          
          <motion.p 
            className="text-foreground/80"
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            per project
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="space-y-6"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <p className="text-lg text-foreground/90 mb-6">Includes:</p>
          <div className="space-y-4">
            {investmentItems.map((item, index) => (
              <motion.div 
                key={index}
                className="flex items-center justify-center space-x-4 group"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ duration: 0.5, delay: 1.7 + (index * 0.1) }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className="w-2 h-2 bg-amber-400 rounded-full flex-shrink-0"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0px rgba(251, 191, 36, 0)",
                      "0 0 10px rgba(251, 191, 36, 0.7)",
                      "0 0 0px rgba(251, 191, 36, 0)"
                    ]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3
                  }}
                />
                <span className="text-foreground/90 group-hover:text-amber-400 transition-colors duration-300">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          className="pt-8"
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.0 }}
        >
          <motion.p 
            className="text-xl sm:text-2xl font-medium leading-relaxed"
            animate={{
              textShadow: [
                "0 0 0px rgba(251, 191, 36, 0)",
                "0 0 10px rgba(251, 191, 36, 0.3)",
                "0 0 0px rgba(251, 191, 36, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
          >
            👉 This isn't a cost. It's an <span className="text-amber-400">investment in building the only thing that matters now: trust</span>.
          </motion.p>
        </motion.div>

        {/* Risk Reversal Guarantee */}
        <motion.div 
          className="mt-12 p-8 bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-2 border-green-500/30 rounded-xl relative overflow-hidden backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.2 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(34,197,94,0.15)_1px,transparent_0)] bg-[length:20px_20px]" />
          </div>
          
          <div className="relative z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-2xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-green-300">Risk-Free Guarantee</h3>
            </div>
            
            <div className="space-y-4 text-green-200">
              <p className="text-lg font-medium">
                We're so confident in our approach that we're putting our money where our mouth is.
              </p>
              <div className="bg-green-800/30 rounded-lg p-4 border border-green-500/30">
                <p className="font-semibold text-green-100">
                  💰 If you don't see measurable results within 90 days, we'll work an additional month for free. No questions asked.
                </p>
              </div>
              <p className="text-sm text-green-300/80">
                This isn't a marketing gimmick. It's our commitment to your success and our belief in the power of authentic storytelling.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Common Objections FAQ */}
        <motion.div 
          className="mt-12 p-8 bg-gradient-to-br from-blue-900/30 to-indigo-900/30 border-2 border-blue-500/30 rounded-xl backdrop-blur-sm"
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ duration: 0.8, delay: 2.4 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-300 mb-2">Common Questions</h3>
            <p className="text-blue-200/80">Addressing the concerns we hear most from prospects</p>
          </div>
          
          <div className="space-y-6">
            <motion.div 
              className="bg-blue-800/20 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm"
              whileHover={{ y: -2, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-bold text-blue-200 text-lg mb-3">💸 "Isn't €4,000-€6,000/month expensive?"</h4>
              <p className="text-blue-200/90 mb-3">
                Consider this: Most companies spend €15K-€25K/month on marketing with generic agencies and get €2K-€5K ROI. 
                We help you spend €18K-€24K total over 6 months and generate €45K-€120K+ in additional revenue.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                💡 <span className="text-amber-400">That's a 2.5x to 5x ROI improvement</span> - and we guarantee results.
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/20 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm"
              whileHover={{ y: -2, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-bold text-blue-200 text-lg mb-3">⏱️ "How long until I see results?"</h4>
              <p className="text-blue-200/90 mb-3">
                We see measurable improvements in engagement within 30-45 days. Full transformation takes 6 months because 
                we're building sustainable systems, not quick fixes.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                🎯 <span className="text-amber-400">Month 1: Strategy & positioning | Month 3: First results | Month 6: Full transformation</span>
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/20 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm"
              whileHover={{ y: -2, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-bold text-blue-200 text-lg mb-3">🏭 "What if my industry is different?"</h4>
              <p className="text-blue-200/90 mb-3">
                We've worked across 12+ industries - from tech startups to traditional manufacturing. The principles of 
                authentic storytelling and brand differentiation work everywhere. We adapt our approach to your unique context.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                🌟 <span className="text-amber-400">Every industry has unique stories - we help you find and tell yours.</span>
              </p>
            </motion.div>
            
            <motion.div 
              className="bg-blue-800/20 rounded-lg p-6 border border-blue-500/30 backdrop-blur-sm"
              whileHover={{ y: -2, borderColor: "rgba(59, 130, 246, 0.6)" }}
              transition={{ duration: 0.2 }}
            >
              <h4 className="font-bold text-blue-200 text-lg mb-3">🤝 "Can I work with you part-time or just for a month?"</h4>
              <p className="text-blue-200/90 mb-3">
                We only work with clients committed to the full 6-month transformation. This isn't a content service - 
                it's a strategic partnership to fundamentally change how your brand communicates and connects.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                ⚡ <span className="text-amber-400">Quick wins don't last. We build lasting competitive advantages.</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
