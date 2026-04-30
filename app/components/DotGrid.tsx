"use client";
import React, { useRef, useEffect } from 'react';

export default function DotGrid() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000 };

    const gap = 45;
    const dotSize = 1.5;
    const proximity = 120;

    const handleResize = () => {
  // Use window dimensions directly to ensure full screen coverage
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      // Calibrate mouse position relative to the canvas itself
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    handleResize();

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cols = Math.ceil(canvas.width / gap);
      const rows = Math.ceil(canvas.height / gap);

      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          // Center the dot in its grid cell
          const centerX = j * gap + gap / 2;
          const centerY = i * gap + gap / 2;

          const dx = mouse.x - centerX;
          const dy = mouse.y - centerY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          ctx.beginPath();
          
          if (distance < proximity) {
            const strength = 1 - distance / proximity;
            const scale = 1 + strength * 2.5; 
            
            // Subtle repel effect
            const moveX = centerX - (dx * 0.15 * strength);
            const moveY = centerY - (dy * 0.15 * strength);

            ctx.arc(moveX, moveY, dotSize * scale, 0, Math.PI * 2);
            ctx.fillStyle = '#475569'; 
          } else {
            ctx.arc(centerX, centerY, dotSize, 0, Math.PI * 2);
            ctx.fillStyle = '#cbd5e1'; 
          }

          ctx.fill();
        }
      }
      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
  <div className="fixed inset-0 -z-10 h-screen w-screen bg-white">
    <canvas 
      ref={canvasRef} 
      className="block w-full h-full"
    />
    {/* Gradient fade to white at the bottom of the hero */}
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-white pointer-events-none" />
  </div>
);
}