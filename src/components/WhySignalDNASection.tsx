import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Brain, Shield, Award, CheckCircle } from 'lucide-react';

export const WhySignalDNASection: React.FC = () => {
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
    <div className="bg-gradient-to-br from-background to-muted/20 rounded-2xl p-8 border border-primary/20">
      <motion.div
        className="text-center mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-bold mb-2" style={{color: '#111111', fontFamily: 'Playfair Display, serif'}}>
          Why Founders Trust Signal DNA
        </h3>
        <p className="text-foreground/80" style={{fontFamily: 'Work Sans, sans-serif'}}>
          The science-backed approach to founder storytelling
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {valueProps.map((prop, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-4 p-4 rounded-xl"
            style={{backgroundColor: 'rgba(212, 179, 122, 0.05)', border: '1px solid rgba(212, 179, 122, 0.1)'}}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -2, backgroundColor: 'rgba(212, 179, 122, 0.1)' }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0" style={{backgroundColor: '#D4B37A'}}>
              <prop.icon className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2" style={{color: '#111111', fontFamily: 'Work Sans, sans-serif'}}>
                {prop.title}
              </h4>
              <p className="text-sm text-foreground/80" style={{fontFamily: 'Work Sans, sans-serif'}}>
                {prop.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <Button
          variant="outline"
          className="px-6 py-3 text-base font-medium transition-all duration-200 hover:scale-105"
          style={{
            borderColor: '#D4B37A',
            color: '#A67C52',
            backgroundColor: 'transparent'
          }}
          onClick={() => {
            const methodSection = document.querySelector('#method');
            if (methodSection) {
              methodSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          Learn How It Works
        </Button>
      </motion.div>
    </div>
  );
};
