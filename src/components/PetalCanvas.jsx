import React, { useEffect, useRef } from 'react';

export default function PetalCanvas({ isInteractive = false, count = 28 }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle types: Rose petals and Gold sparkles
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height - height,
      size: Math.random() * 8 + 4,
      speedY: Math.random() * 0.8 + 0.4,
      speedX: (Math.random() - 0.5) * 0.6,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 1.5,
      type: Math.random() > 0.4 ? 'petal' : 'gold',
      opacity: Math.random() * 0.5 + 0.3,
      sway: Math.random() * 2,
      swaySpeed: Math.random() * 0.02 + 0.01,
    }));

    let step = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      step += 1;

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += p.speedX + Math.sin(step * p.swaySpeed + p.sway) * 0.4;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;

        if (p.type === 'petal') {
          // Romantic Rose / Marigold petal
          const gradient = ctx.createLinearGradient(-p.size, -p.size, p.size, p.size);
          gradient.addColorStop(0, '#f43f5e'); // Rose pink
          gradient.addColorStop(0.6, '#be123c'); // Deep rose
          gradient.addColorStop(1, '#881337'); // Burgundy

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.bezierCurveTo(p.size * 0.8, -p.size * 0.5, p.size * 0.8, p.size * 0.6, 0, p.size);
          ctx.bezierCurveTo(-p.size * 0.8, p.size * 0.6, -p.size * 0.8, -p.size * 0.5, 0, -p.size);
          ctx.fill();
        } else {
          // Shimmering Gold Particle
          const goldGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 0.8);
          goldGradient.addColorStop(0, '#fff6d1');
          goldGradient.addColorStop(0.5, '#d4af37');
          goldGradient.addColorStop(1, 'transparent');

          ctx.fillStyle = goldGradient;
          ctx.beginPath();
          ctx.arc(0, 0, p.size * 0.6, 0, Math.PI * 2);
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [count]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-10 ${
        isInteractive ? 'pointer-events-auto' : ''
      }`}
      style={{ opacity: 0.85 }}
    />
  );
}
