import React from 'react';
import { motion } from 'framer-motion';

export const SectionDivider: React.FC = () => {
  return (
    <motion.div
      className="w-full h-px my-20 sm:my-24 md:my-32 max-w-6xl mx-auto"
      style={{backgroundColor: '#DDDDDD'}}
      initial={{ width: "0%" }}
      whileInView={{ width: "100%" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 2, ease: "easeOut" }}
    />
  );
};