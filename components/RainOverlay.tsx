import React, { useEffect, useRef } from 'react';

export const RainOverlay: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let raindrops: { x: number; y: number; length: number; speed: number; opacity: number }[] = [];

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Reset/Re-init count based on width to maintain density
      const count = Math.floor(canvas.width * 0.15); // Adjust density
      raindrops = [];
      for (let i = 0; i < count; i++) {
        raindrops.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          length: Math.random() * 20 + 10,
          speed: Math.random() * 10 + 15, // Fast falling
          opacity: Math.random() * 0.2 + 0.1 // Subtle opacity
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = '#a5f3fc'; // Light cyan tint
      ctx.lineWidth = 1;

      for (let i = 0; i < raindrops.length; i++) {
        const drop = raindrops[i];

        ctx.beginPath();
        ctx.moveTo(drop.x, drop.y);
        ctx.lineTo(drop.x, drop.y + drop.length);
        ctx.globalAlpha = drop.opacity;
        ctx.stroke();

        // Update position
        drop.y += drop.speed;

        // Reset if off bottom
        if (drop.y > canvas.height) {
          drop.y = -drop.length;
          drop.x = Math.random() * canvas.width;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Init
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-20 mix-blend-screen opacity-60"
    />
  );
};
