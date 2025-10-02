import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Shield, Award, CheckCircle } from 'lucide-react';

export const WhyFoundersTrustSection: React.FC = () => {
  const valueProps = [
    {
      icon: Brain,
      title: "Expert-Crafted Story Frameworks",
      description: "Hand-crafted storytelling systems developed by communication experts who understand founder challenges"
    },
    {
      icon: Award,
      title: "Proven €6M-Raising Founder Playbook",
      description: "The same methodology that helped J-Griff grow from €2M to €6M in 18 months"
    },
    {
      icon: Shield,
      title: "Psychology-Driven Connection Techniques",
      description: "Human-centered approaches based on decades of research into how investors, customers, and teams make decisions"
    },
    {
      icon: CheckCircle,
      title: "30-Day Satisfaction Guarantee",
      description: "If you don't see measurable improvement in your communication within 30 days, we'll refund every penny"
    }
  ];

  return (
    <section className="py-16 md:py-20 container-clean text-foreground relative">
      <div className="content-clean text-center">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-heading-clean text-gradient-gold mb-8">Why Founders Trust Signal DNA</h2>
          <p className="text-body-clean text-foreground/80 max-w-3xl mx-auto">Build trust and connect with your audience on a deeper level</p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {valueProps.map((prop, index) => (
              <motion.div
                key={index}
                className="flex items-start gap-4 p-6 rounded-xl border border-primary/20 bg-white/50 backdrop-blur-sm"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#D4B37A'}}>
                  <prop.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg mb-2" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>{prop.title}</h4>
                  <p className="text-sm text-foreground/70" style={{fontFamily: 'Work Sans, sans-serif'}}>{prop.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#method">
              <Button
                variant="outline"
                className="px-8 py-4 text-lg font-bold transition-all duration-200 hover:bg-primary/10"
                style={{borderColor: '#A67C52', color: '#A67C52', fontFamily: 'Work Sans, sans-serif', borderRadius: '12px'}}
              >
                Learn How It Works
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
