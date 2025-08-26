import React from 'react';
import { motion } from 'framer-motion';
import { useRef } from 'react';

export const SectionDivider: React.FC = () => {
  const ref = useRef(null);

  return (
    <div ref={ref} className="py-2 sm:py-3 md:py-4">
      <motion.div
        className="flex items-center justify-center gap-x-3"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.3 }}
      >
        <motion.div
          className="h-px w-8 bg-amber-400/30"
          variants={{ hidden: { scaleX: 0, originX: 1 }, visible: { scaleX: 1, originX: 1 } }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
        <motion.div
          className="h-1.5 w-1.5 rounded-full bg-amber-400"
          variants={{ hidden: { scale: 0 }, visible: { scale: 1 } }}
          transition={{ duration: 0.5, ease: 'backOut' }}
        />
        <motion.div
          className="h-px w-8 bg-amber-400/30"
          variants={{ hidden: { scaleX: 0, originX: 0 }, visible: { scaleX: 1, originX: 0 } }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
        />
      </motion.div>
    </div>
  );
};
