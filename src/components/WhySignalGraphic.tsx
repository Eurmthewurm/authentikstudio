import React from 'react';
import { motion } from 'framer-motion';
import { Zap, TrendingUp, Shield } from 'lucide-react';

export const WhySignalGraphic: React.FC = () => {
  const benefits = [
    {
      icon: Zap,
      title: "Cut Through Noise",
      description: "Stand out in a crowded market with authentic differentiation",
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10"
    },
    {
      icon: TrendingUp,
      title: "Shorten Sales Cycles",
      description: "Convert prospects faster with compelling narratives",
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: Shield,
      title: "Future-Proof Brand",
      description: "Build trust that AI can't replicate",
      color: "from-blue-500 to-indigo-500",
      bgColor: "bg-blue-500/10"
    }
  ];

  return (
    <div className="py-16">
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, staggerChildren: 0.2 }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            className={`${benefit.bgColor} rounded-2xl p-8 text-center group hover:shadow-xl transition-all duration-300 border border-primary/20`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            {/* Icon */}
            <motion.div
              className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300`}
              whileHover={{ rotate: 10, scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <benefit.icon className="w-8 h-8 text-white" />
            </motion.div>
            
            {/* Content */}
            <h3 className="text-xl font-bold text-foreground mb-4">{benefit.title}</h3>
            <p className="text-foreground/80 leading-relaxed">{benefit.description}</p>
            
            {/* Decorative element */}
            <motion.div
              className="w-12 h-1 bg-gradient-to-r from-primary/50 to-primary rounded-full mx-auto mt-6"
              initial={{ width: 0 }}
              animate={{ width: "3rem" }}
              transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {/* Bottom CTA */}
      <motion.div
        className="text-center mt-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="bg-gradient-to-r from-primary/10 to-amber-500/10 border border-primary/20 rounded-xl p-6 max-w-2xl mx-auto">
          <h4 className="text-lg font-bold text-primary mb-2">Ready to Transform Your Communication?</h4>
          <p className="text-foreground/80 mb-4">
            Join hundreds of founders who've discovered their Signal DNA and transformed their business results.
          </p>
          <motion.a
            href="/quiz"
            className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Assessment
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
};
