import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

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
      answer: "It's our proprietary method combining AI analysis and deep human psychology to uncover your unique founder story, market positioning, and future vision, making you impossible to ignore or replicate in the AI era."
    },
    {
      question: "How is this different from traditional branding or storytelling?",
      answer: "Traditional methods often focus on external messaging. Signal DNA Discovery™ goes deeper, extracting your authentic core truth (your 'DNA') and engineering it into a powerful signal that resonates on a visceral level, not just a logical one. It's about being, not just appearing."
    },
    {
      question: "Who is the Free Signal DNA Audit for?",
      answer: "It's for ambitious founders who are brilliant but feel invisible, struggling to cut through the noise, attract investors, customers, or top talent. If you know your product is great but your story isn't landing, this is for you."
    },
    {
      question: "What happens after the Free Signal DNA Audit?",
      answer: "You'll receive a personalized report, a competitive differentiation blueprint, and a 90-day action plan. You'll have a clear understanding of your story's strengths and weaknesses, and actionable steps to amplify your signal. There's no obligation to continue, but many founders choose to explore our deeper programs."
    },
    {
      question: "Is this only for tech founders?",
      answer: "While many of our clients are in tech, the principles of Signal DNA apply to any founder in any industry who needs to stand out, build trust, and create an unforgettable narrative in a crowded market."
    },
  ];

  return (
    <section id="faq" className="section-off-white container-clean text-foreground">
      <div className="content-clean text-center">
        <motion.h2
          className="text-heading text-gradient-gold mb-12"
          {...fadeIn}
        >
          Frequently Asked Questions
        </motion.h2>

        <motion.div
          className="max-w-3xl mx-auto text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
              >
                <button
                  className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => toggleFAQ(index)}
                  style={{minHeight: '44px'}} // Touch target optimization
                >
                  <h3 className="font-semibold text-lg text-foreground pr-4" style={{fontFamily: 'Work Sans, sans-serif'}}>
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  </motion.div>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: openIndex === index ? 'auto' : 0,
                    opacity: openIndex === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                  className="overflow-hidden"
                >
                  <div className="px-6 pb-6">
                    <p className="text-body text-foreground/70 leading-relaxed" style={{fontFamily: 'Work Sans, sans-serif'}}>
                      {faq.answer}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
