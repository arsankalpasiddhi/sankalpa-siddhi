import React, { useEffect, useRef } from 'react';

export default function InkCanvasOverlay() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    let animationFrameId;
    let particles = [];

    // Resize canvas dynamically to match viewport
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    // Particle class representing soft mist / ink bleed cloud (120 FPS physics)
    class MistCloud {
      constructor(x, y) {
        this.x = x + (Math.random() - 0.5) * 8;
        this.y = y + (Math.random() - 0.5) * 8;
        this.radius = 15; // Spawns at radius 15px
        this.maxRadius = 45 + Math.random() * 12; // Expands up to ~45-57px
        this.alpha = 0.12; // Initial soft opacity 0.12
        this.growthRate = 0.35 + Math.random() * 0.25; // Adjusted for 120 FPS high refresh
        this.decayRate = 0.0012 + Math.random() * 0.001; // Smooth 120 FPS fade out
        
        // Soft muted color choice: Deep Blue (#1E3A8A) or Saffron (#E06A3B)
        const isBlue = Math.random() > 0.45;
        this.hue = isBlue ? 224 : 18;
        this.sat = isBlue ? '64%' : '73%';
        this.light = isBlue ? '33%' : '55%';
      }

      update() {
        if (this.radius < this.maxRadius) {
          this.radius += this.growthRate;
        }
        this.alpha -= this.decayRate;
      }

      draw(context) {
        if (this.alpha <= 0) return;

        context.save();
        // Create radial gradient for soft mist bleeding effect
        const gradient = context.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, Math.max(1, this.radius)
        );

        const innerColor = `hsla(${this.hue}, ${this.sat}, ${this.light}, ${this.alpha})`;
        const midColor = `hsla(${this.hue}, ${this.sat}, ${this.light}, ${this.alpha * 0.5})`;
        const outerColor = `hsla(${this.hue}, ${this.sat}, ${this.light}, 0)`;

        gradient.addColorStop(0, innerColor);
        gradient.addColorStop(0.5, midColor);
        gradient.addColorStop(1, outerColor);

        context.fillStyle = gradient;
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.fill();
        context.restore();
      }
    }

    // 120 FPS mousemove handler (8ms throttle for 120Hz displays)
    let lastTime = 0;
    const handleMouseMove = (e) => {
      const now = performance.now();
      if (now - lastTime > 8) { // Optimized for 120 FPS high refresh rate
        lastTime = now;
        particles.push(new MistCloud(e.clientX, e.clientY));
        if (Math.random() > 0.4) {
          particles.push(new MistCloud(e.clientX + (Math.random() - 0.5) * 6, e.clientY + (Math.random() - 0.5) * 6));
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);

    // 120 FPS Animation loop via requestAnimationFrame
    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.update();
        p.draw(ctx);

        if (p.alpha <= 0) {
          particles.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      id="paintSprayCanvas"
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-30 w-full h-full"
    />
  );
}
