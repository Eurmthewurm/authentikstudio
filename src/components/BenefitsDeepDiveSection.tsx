import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, TrendingUp, Users, Shield, Zap, CheckCircle, Target } from 'lucide-react';
import { WhySignalGraphic } from './WhySignalGraphic';

export const BenefitsDeepDiveSection: React.FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const benefitItems = [
    {
      icon: Lightbulb,
      title: "Uncover Your Unique Signal",
      description: "Stop blending in. Our method cuts through the noise to reveal your authentic, impossible-to-replicate founder story that truly resonates."
    },
    {
      icon: TrendingUp,
      title: "Accelerate Investor & Customer Acquisition",
      description: "A clear, compelling narrative shortens sales cycles, increases engagement, and converts prospects into loyal advocates."
    },
    {
      icon: Users,
      title: "Attract Top Talent & Build Cohesive Teams",
      description: "Inspire your team and future hires with a shared vision and purpose, fostering a culture of alignment and passion."
    },
    {
      icon: Shield,
      title: "Future-Proof Your Brand in the AI Era",
      description: "In a world of AI-generated content, human authenticity is your ultimate competitive moat. Build trust that machines can't replicate."
    },
    {
      icon: Zap,
      title: "Transform Your Story into a Growth Engine",
      description: "Your narrative isn't just branding; it's a strategic asset that drives funding, revenue, and market leadership."
    },
    {
      icon: Target,
      title: "Precision-Target Your Ideal Audience",
      description: "Stop wasting time on wrong-fit prospects. Our method helps you identify and connect with your perfect customer segments who are ready to buy."
    },
  ];

  return (
    <section className="section-off-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading text-gradient-gold mb-16"
          {...fadeIn}
        >
          Why Signal DNA Works When Everything Else Fails
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {benefitItems.map((benefit, index) => (
            <motion.div
              key={index}
              className="card-modern p-8 shadow-modern text-left group relative overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.15)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -translate-y-10 translate-x-10 group-hover:scale-150 transition-transform duration-700"></div>
              <motion.div
                className="text-primary mb-4"
                animate={{ rotate: [0, 5, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              >
                <benefit.icon size={36} />
              </motion.div>
              <h3 className="font-semibold text-xl text-foreground mb-3">{benefit.title}</h3>
              <p className="text-body text-foreground/70">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Guarantee Section */}
        <motion.div
          className="mt-16 p-8 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-2xl shadow-modern"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              className="text-green-500 mr-3"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <CheckCircle size={48} />
            </motion.div>
            <h3 className="text-2xl font-bold text-gradient-gold">30-Day Satisfaction Guarantee</h3>
          </div>
          <p className="text-center text-body text-foreground/80 max-w-2xl mx-auto">
            Not satisfied with our Signal DNA services? We'll work with you at no extra cost for 30 days to ensure you get the results you need. 
            Your success is our commitment.
          </p>
        </motion.div>
        
        {/* Why Signal DNA Visual Graphic */}
        <WhySignalGraphic />
      </div>
    </section>
  );
};
