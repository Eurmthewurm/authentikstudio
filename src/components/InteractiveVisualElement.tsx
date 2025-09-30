import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface InteractiveVisualElementProps {
  type: 'mountain' | 'flow' | 'signal' | 'contour';
  size?: 'small' | 'medium' | 'large';
  color?: string;
  interactive?: boolean;
}

export const InteractiveVisualElement: React.FC<InteractiveVisualElementProps> = ({
  type,
  size = 'medium',
  color = '#D4B37A',
  interactive = true
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const getSize = () => {
    switch (size) {
      case 'small': return 200;
      case 'medium': return 300;
      case 'large': return 400;
      default: return 300;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const canvasSize = getSize();
    canvas.width = canvasSize;
    canvas.height = canvasSize;

    let animationId: number;
    let time = 0;

    const handleMouseMove = (e: MouseEvent) => {
      if (!interactive) return;
      
      const rect = canvas.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      });
    };

    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    if (interactive) {
      canvas.addEventListener('mousemove', handleMouseMove);
      canvas.addEventListener('mouseenter', handleMouseEnter);
      canvas.addEventListener('mouseleave', handleMouseLeave);
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvasSize, canvasSize);

      const centerX = canvasSize / 2;
      const centerY = canvasSize / 2;
      const baseRadius = canvasSize * 0.3;

      if (type === 'mountain') {
        // Mountain contour lines
        for (let i = 0; i < 8; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}${Math.floor((0.3 - i * 0.03) * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1.5;

          const radius = baseRadius - (i * 15);
          const offset = isHovered ? Math.sin(time * 0.002 + i) * 10 : 0;

          for (let angle = 0; angle < Math.PI * 2; angle += 0.02) {
            const x = centerX + Math.cos(angle) * (radius + offset);
            const y = centerY + Math.sin(angle) * (radius + offset) + 
                     Math.sin(angle * 3 + time * 0.001) * 5;

            if (angle === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

        // Central path
        ctx.beginPath();
        ctx.strokeStyle = `${color}${Math.floor(0.8 * 255).toString(16).padStart(2, '0')}`;
        ctx.lineWidth = 3;

        for (let y = centerY + baseRadius; y > centerY - baseRadius; y -= 2) {
          const x = centerX + Math.sin((y - centerY) * 0.01 + time * 0.001) * 20;
          if (y === centerY + baseRadius) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.stroke();

      } else if (type === 'flow') {
        // Flowing organic shapes
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.fillStyle = `${color}${Math.floor((0.2 - i * 0.05) * 255).toString(16).padStart(2, '0')}`;

          const radius = baseRadius - (i * 30);
          const mouseInfluence = interactive && isHovered ? 
            Math.sqrt(Math.pow(mousePos.x - centerX, 2) + Math.pow(mousePos.y - centerY, 2)) / 100 : 0;

          for (let angle = 0; angle < Math.PI * 2; angle += 0.05) {
            const x = centerX + Math.cos(angle) * (radius + 
                     Math.sin(angle * 2 + time * 0.002) * 20 + mouseInfluence);
            const y = centerY + Math.sin(angle) * (radius + 
                     Math.cos(angle * 3 + time * 0.001) * 15 + mouseInfluence);

            if (angle === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.closePath();
          ctx.fill();
        }

      } else if (type === 'signal') {
        // Signal wave patterns
        for (let i = 0; i < 5; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}${Math.floor((0.4 - i * 0.06) * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 2;

          const startY = centerY - baseRadius + (i * 30);
          const amplitude = 30 - (i * 4);

          for (let x = 0; x < canvasSize; x += 2) {
            const y = startY + Math.sin((x * 0.02) + (time * 0.003) + (i * Math.PI / 2)) * amplitude;
            
            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }

      } else if (type === 'contour') {
        // Topographic contour lines
        for (let i = 0; i < 6; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}${Math.floor((0.3 - i * 0.04) * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;

          const radius = baseRadius - (i * 25);
          const noise = Math.sin(time * 0.001 + i) * 5;

          for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
            const x = centerX + Math.cos(angle) * (radius + noise);
            const y = centerY + Math.sin(angle) * (radius + noise) + 
                     Math.sin(angle * 4 + time * 0.0008) * 8;

            if (angle === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      }

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      if (interactive) {
        canvas.removeEventListener('mousemove', handleMouseMove);
        canvas.removeEventListener('mouseenter', handleMouseEnter);
        canvas.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationId);
    };
  }, [type, size, color, interactive, mousePos, isHovered]);

  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
      whileHover={interactive ? { scale: 1.05 } : {}}
    >
      <canvas
        ref={canvasRef}
        className="block"
        style={{ cursor: interactive ? 'pointer' : 'default' }}
      />
    </motion.div>
  );
};
