import React, { useEffect, useRef } from 'react';

interface AnimatedSectionBackgroundProps {
  variant?: 'flowing' | 'geometric' | 'organic';
  intensity?: 'subtle' | 'medium' | 'strong';
  color?: string;
}

export const AnimatedSectionBackground: React.FC<AnimatedSectionBackgroundProps> = ({
  variant = 'flowing',
  intensity = 'subtle',
  color = '#D4B37A'
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let time = 0;

    const getOpacity = () => {
      switch (intensity) {
        case 'subtle': return 0.05;
        case 'medium': return 0.1;
        case 'strong': return 0.2;
        default: return 0.05;
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (variant === 'flowing') {
        // Flowing wave patterns
        for (let i = 0; i < 3; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `${color}${Math.floor(getOpacity() * 255).toString(16).padStart(2, '0')}`;
          ctx.lineWidth = 1;

          for (let x = 0; x < canvas.width; x += 2) {
            const y = canvas.height / 2 + 
                     Math.sin((x * 0.01) + (time * 0.002) + (i * Math.PI / 3)) * 30 +
                     Math.sin((x * 0.005) + (time * 0.001)) * 15;

            if (x === 0) {
              ctx.moveTo(x, y);
            } else {
              ctx.lineTo(x, y);
            }
          }
          ctx.stroke();
        }
      } else if (variant === 'geometric') {
        // Geometric patterns
        const gridSize = 40;
        const cols = Math.ceil(canvas.width / gridSize);
        const rows = Math.ceil(canvas.height / gridSize);

        for (let col = 0; col < cols; col++) {
          for (let row = 0; row < rows; row++) {
            const x = col * gridSize;
            const y = row * gridSize;
            
            const offset = Math.sin((time * 0.001) + (col * 0.1) + (row * 0.1)) * 5;
            
            ctx.beginPath();
            ctx.arc(x + gridSize/2, y + gridSize/2 + offset, 2, 0, Math.PI * 2);
            ctx.fillStyle = `${color}${Math.floor(getOpacity() * 255).toString(16).padStart(2, '0')}`;
            ctx.fill();
          }
        }
      } else if (variant === 'organic') {
        // Organic flowing shapes
        for (let i = 0; i < 2; i++) {
          ctx.beginPath();
          ctx.fillStyle = `${color}${Math.floor(getOpacity() * 255).toString(16).padStart(2, '0')}`;
          
          const centerX = canvas.width * (0.2 + i * 0.6);
          const centerY = canvas.height * (0.3 + i * 0.4);
          const radius = 50 + Math.sin(time * 0.001 + i) * 20;

          ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      time += 16;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, [variant, intensity, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.3 }}
    />
  );
};
