import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Users, Target, Zap, BookOpen } from 'lucide-react';
import { AnimatedSectionBackground } from './AnimatedSectionBackground';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" as const },
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What is Signal DNA Discovery™?",
      answer: "It's our proprietary method combining AI analysis and deep human psychology to uncover your unique founder story, market positioning, and future vision, making you impossible to ignore or replicate in the AI era.",
      icon: HelpCircle,
      color: "#D4B37A"
    },
    {
      question: "How is this different from traditional branding or storytelling?",
      answer: "Traditional methods often focus on external messaging. Signal DNA Discovery™ goes deeper, extracting your authentic core truth (your 'DNA') and engineering it into a powerful signal that resonates on a visceral level, not just a logical one. It's about being, not just appearing.",
      icon: Target,
      color: "#A67C52"
    },
    {
      question: "Who is the Free Signal DNA Audit for?",
      answer: "It's for ambitious founders who are brilliant but feel invisible, struggling to cut through the noise, attract investors, customers, or top talent. If you know your product is great but your story isn't landing, this is for you.",
      icon: Users,
      color: "#C49E58"
    },
    {
      question: "What happens after the Free Signal DNA Audit?",
      answer: "You'll receive a personalized report, a competitive differentiation blueprint, and a 90-day action plan. You'll have a clear understanding of your story's strengths and weaknesses, and actionable steps to amplify your signal. There's no obligation to continue, but many founders choose to explore our deeper programs.",
      icon: Zap,
      color: "#D4B37A"
    },
    {
      question: "Is this only for tech founders?",
      answer: "While many of our clients are in tech, the principles of Signal DNA apply to any founder in any industry who needs to stand out, build trust, and create an unforgettable narrative in a crowded market.",
      icon: BookOpen,
      color: "#A67C52"
    },
  ];

  return (
    <section id="faq" className="section-off-white container-clean text-foreground relative">
      <AnimatedSectionBackground variant="organic" intensity="subtle" color="#C49E58" />
      <div className="content-clean text-center relative z-10">
        <motion.h2
          className="text-heading text-gradient-gold mb-12"
          {...fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <button
                  className="w-full p-6 text-left flex items-start gap-4 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  style={{minHeight: '44px'}} // Touch target optimization
                >
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300" style={{backgroundColor: `${faq.color}15`, border: `2px solid ${faq.color}`}}>
                    <faq.icon className="w-6 h-6" style={{color: faq.color}} />
                  </div>
                  
                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-foreground mb-2" style={{fontFamily: 'Playfair Display, serif'}}>
                      {faq.question}
                    </h3>
                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? 'auto' : 0,
                        opacity: openIndex === index ? 1 : 0
                      }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p className="text-sm text-foreground/70 leading-relaxed" style={{fontFamily: 'Work Sans, sans-serif'}}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  </div>
                  
                  {/* Chevron */}
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0 mt-1"
                  >
                    <ChevronDown className="w-5 h-5" style={{color: faq.color}} />
                  </motion.div>
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
