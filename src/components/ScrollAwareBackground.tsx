import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const ScrollAwareBackground: React.FC = () => {
  const { scrollYProgress } = useScroll();

  // This creates a subtle shift in background color as you scroll down
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [
      'hsl(12 12% 8%)',
      'hsl(12 12% 10%)',
      'hsl(12 12% 7%)',
      'hsl(12 12% 11%)',
      'hsl(12 12% 9%)',
      'hsl(12 12% 8%)',
    ]
  );

  return (
    <motion.div
      className="fixed inset-0"
      style={{ backgroundColor, zIndex: -1 }}
    />
  );
};
