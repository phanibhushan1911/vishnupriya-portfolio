import React, { useEffect, useRef } from 'react';

export const CanvasBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let particles: Particle[] = [];
    const maxParticles = 60; // Optimal particle limit for mobile performance
    const connectionDist = 120; // Connecting line threshold distance

    class Particle {
      x: number = 0;
      y: number = 0;
      vx: number = 0;
      vy: number = 0;
      radius: number = 0;

      constructor(width: number, height: number) {
        this.reset(width, height, true);
      }

      reset(width: number, height: number, initialRandom = false) {
        this.x = initialRandom ? Math.random() * width : Math.random() > 0.5 ? 0 : width;
        this.y = initialRandom ? Math.random() * height : Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 2 + 1;
      }

      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        // Boundaries checks
        if (this.x < 0 || this.x > width || this.y < 0 || this.y > height) {
          this.reset(width, height);
        }
      }

      draw(context: CanvasRenderingContext2D, color: string) {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fillStyle = color;
        context.fill();
      }
    }

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Initialize particles
      particles = [];
      for (let i = 0; i < Math.min(maxParticles, (canvas.width * canvas.height) / 25000); i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    // Initial setup
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Track state to pause animation when offscreen
    let isTabVisible = true;
    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const drawLoop = () => {
      if (!isTabVisible) {
        animationId = requestAnimationFrame(drawLoop);
        return;
      }

      // Check support for theme setting to match canvas particles colors
      const isDark = document.documentElement.classList.contains('dark-theme') || 
                     (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches);
      
      const particleColor = isDark ? 'rgba(56, 189, 248, 0.4)' : 'rgba(10, 110, 209, 0.25)';
      const lineColor = isDark ? 'rgba(45, 212, 191, 0.12)' : 'rgba(13, 148, 136, 0.08)';

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update & Draw particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx, particleColor);
      });

      // Draw connecting lines between particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < connectionDist) {
            const alpha = (1 - dist / connectionDist) * 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = lineColor.replace('0.12', (alpha * 0.12).toFixed(2)).replace('0.08', (alpha * 0.08).toFixed(2));
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="canvas-background" aria-hidden="true" />;
};
