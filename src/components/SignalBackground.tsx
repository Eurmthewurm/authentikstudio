import React from 'react';
import { motion } from 'framer-motion';

export const SignalBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Dark charcoal overlay for dramatic contrast */}
      <div className="absolute inset-0" style={{backgroundColor: 'rgba(0, 0, 0, 0.75)'}}></div>
      {/* Animated signal waves */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgb(251, 191, 36)" stopOpacity="0.3" />
            <stop offset="50%" stopColor="rgb(245, 158, 11)" stopOpacity="0.6" />
            <stop offset="100%" stopColor="rgb(251, 191, 36)" stopOpacity="0.3" />
          </linearGradient>
        </defs>
        
        {/* Signal wave 1 */}
        <motion.path
          d="M0,400 Q300,200 600,400 T1200,400"
          stroke="url(#signalGradient)"
          strokeWidth="3"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Signal wave 2 */}
        <motion.path
          d="M0,500 Q300,300 600,500 T1200,500"
          stroke="url(#signalGradient)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
        
        {/* Signal wave 3 */}
        <motion.path
          d="M0,300 Q300,100 600,300 T1200,300"
          stroke="url(#signalGradient)"
          strokeWidth="2.5"
          fill="none"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        
        {/* Floating signal dots */}
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.circle
            key={i}
            cx={100 + i * 100}
            cy={200 + (i % 3) * 200}
            r="4"
            fill="rgb(251, 191, 36)"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 0.6, 0],
              scale: [0, 1, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}></div>
      </div>
    </div>
  );
};
