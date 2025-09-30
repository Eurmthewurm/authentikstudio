import React, { useEffect, useRef } from 'react';

export const AnimatedHeroBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Animation variables
    let animationId: number;
    let time = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create flowing contour lines
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.min(canvas.width, canvas.height) * 0.6;

      // Draw multiple flowing layers
      for (let layer = 0; layer < 3; layer++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(212, 179, 122, ${0.1 - layer * 0.02})`;
        ctx.lineWidth = 2 - layer * 0.5;

        for (let angle = 0; angle < Math.PI * 2; angle += 0.01) {
          const radius = maxRadius * (0.3 + layer * 0.2) + 
                        Math.sin(angle * 3 + time * 0.002) * 50 +
                        Math.sin(angle * 7 + time * 0.003) * 20;

          const x = centerX + Math.cos(angle) * radius;
          const y = centerY + Math.sin(angle) * radius;

          if (angle === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.closePath();
        ctx.stroke();
      }

      // Draw flowing signal paths
      for (let i = 0; i < 5; i++) {
        ctx.beginPath();
        ctx.strokeStyle = `rgba(166, 124, 82, ${0.15 - i * 0.02})`;
        ctx.lineWidth = 1.5;

        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;

        ctx.moveTo(startX, startY);

        for (let j = 0; j < 20; j++) {
          const nextX = startX + Math.cos(time * 0.001 + j * 0.3) * 100;
          const nextY = startY + Math.sin(time * 0.001 + j * 0.3) * 50 + j * 20;
          ctx.lineTo(nextX, nextY);
        }

        ctx.stroke();
      }

      // Draw floating particles
      for (let i = 0; i < 30; i++) {
        const x = (Math.sin(time * 0.001 + i) * canvas.width * 0.3) + centerX;
        const y = (Math.cos(time * 0.0008 + i * 0.5) * canvas.height * 0.2) + centerY;
        
        ctx.beginPath();
        ctx.arc(x, y, 1 + Math.sin(time * 0.002 + i) * 0.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(196, 158, 88, ${0.6 + Math.sin(time * 0.003 + i) * 0.3})`;
        ctx.fill();
      }

      time += 16; // ~60fps
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ background: 'linear-gradient(135deg, #111111 0%, #1a1a1a 100%)' }}
      />
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
    </div>
  );
};
