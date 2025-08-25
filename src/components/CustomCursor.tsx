import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [variant, setVariant] = useState('default');

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button')) {
        setVariant('link');
      } else {
        setVariant('default');
      }
    };
    
    window.addEventListener('mousemove', mouseMove);
    document.body.addEventListener('mouseover', mouseOver, true);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      document.body.removeEventListener('mouseover', mouseOver, true);
    };
  }, []);

  const variants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: 'rgba(251, 191, 36, 0.8)',
      mixBlendMode: 'difference',
    },
    link: {
      height: 56,
      width: 56,
      backgroundColor: 'rgba(251, 191, 36, 0.25)',
      mixBlendMode: 'difference',
    }
  };

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999] hidden md:block"
      variants={variants}
      animate={variant}
      style={{
        x: position.x - (variant === 'default' ? 6 : 28),
        y: position.y - (variant === 'default' ? 6 : 28),
      }}
      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
    />
  );
};
