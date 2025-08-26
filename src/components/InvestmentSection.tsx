import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';


export const InvestmentSection: React.FC = () => {
  const ref = useRef(null);

  return (
    <section className="py-8 sm:py-12 md:py-16 container-padding relative" ref={ref}>
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
        className="content-width text-center space-y-1 sm:space-y-2 md:space-y-4 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-6 sm:space-y-8">
            <motion.h2 
              className="font-serif text-5xl sm:text-6xl font-bold"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              This Isn't a <span className="text-amber-400">Cost</span>.
              <br />
              It's an <span className="text-amber-400">Investment</span>.
            </motion.h2>
            
            <motion.div 
              className="w-24 h-px bg-amber-400 mx-auto"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            />
            
            <motion.p 
              className="text-xl text-foreground/80 max-w-4xl mx-auto"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              While others spend €15K-€25K/month on generic marketing with minimal ROI, our clients invest strategically and see measurable results. Every day you wait is money left on the table:
            </motion.p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-amber-900/20 to-orange-900/20 border-2 border-amber-500/30 rounded-xl backdrop-blur-sm"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="text-3xl sm:text-4xl font-serif font-bold text-amber-400 mb-3">
              €2K–€5K
            </div>
            <div className="font-bold text-lg mb-2 text-amber-300">Authentik Studio</div>
            <div className="text-sm text-amber-200/80">Per project (6 months)</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-blue-900/20 to-indigo-900/20 border-2 border-blue-500/30 rounded-xl backdrop-blur-sm"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-3xl sm:text-4xl font-serif font-bold text-blue-400 mb-3">
              €3K/mo
            </div>
            <div className="font-bold text-lg mb-2 text-blue-300">Leadership Coaching</div>
            <div className="text-sm text-blue-200/80">1:1 coaching (6-12 months)</div>
          </motion.div>
          
          <motion.div 
            className="text-center p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-500/30 rounded-xl backdrop-blur-sm"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-3xl sm:text-4xl font-serif font-bold text-purple-400 mb-3">
              €4K–€6K/mo
            </div>
            <div className="font-bold text-lg mb-2 text-purple-300">Expansion Lab</div>
            <div className="text-sm text-purple-200/80">6-month transformation</div>
          </motion.div>
        </div>
        
        <motion.div 
          className="text-center space-y-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <motion.p 
            className="text-2xl sm:text-3xl font-medium leading-relaxed max-w-4xl mx-auto"
            animate={{
              textShadow: [
                "0 0 0px rgba(251, 191, 36, 0)",
                "0 0 10px rgba(251, 191, 36, 0.3)",
                "0 0 0px rgba(251, 191, 36, 0)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            💰 <span className="text-amber-400">ROI Reality Check:</span> Our top client generated $6M+ in additional revenue. That's the power of authentic storytelling.
          </motion.p>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto text-left">
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-red-400">❌ The Expensive Way (Most Agencies):</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• €15K-€25K/month spent on generic content</li>
                <li>• €2K-€5K ROI (if you're lucky)</li>
                <li>• Blends in with every other competitor</li>
                <li>• No authentic brand voice or differentiation</li>
              </ul>
            </div>
            
            <div className="space-y-4">
              <h4 className="font-bold text-lg text-green-400">✅ The Smart Way (Authentik Studio):</h4>
              <ul className="space-y-2 text-foreground/80">
                <li>• €2K-€6K/month strategic investment</li>
                <li>• $6M+ additional revenue (proven results)</li>
                <li>• Stands out from every competitor</li>
                <li>• Clear, authentic brand voice that converts</li>
              </ul>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          className="pt-8"
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
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
          animate={{ y: 0, opacity: 1 }}
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
          animate={{ y: 0, opacity: 1 }}
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
              <h4 className="font-bold text-blue-200 text-lg mb-3">🔍 "What happens in the first month?"</h4>
              <p className="text-blue-200/90 mb-3">
                While others rush to create generic content, we invest Month 1 in strategic discovery - the foundation that makes everything else work. 
                We uncover your authentic voice, analyze your audience, and build the strategic framework that separates you from competitors.
              </p>
              <p className="text-blue-200/80 text-sm font-medium">
                🎯 <span className="text-amber-400">This deep-dive discovery is why our clients achieve 3-5x better ROI than generic agencies.</span>
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
