import React, { useEffect, useRef } from 'react';

interface MorphingBackgroundProps {
  className?: string;
}

const MorphingBackground: React.FC<MorphingBackgroundProps> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const gradients = useRef<any[]>([]);

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

    const initGradients = () => {
      gradients.current = [];
      
      const isDark = document.documentElement.classList.contains('dark');
      
      const colors = isDark 
        ? [
            ['#ec4899', '#f472b6', '#f9a8d4'], 
            ['#a855f7', '#c084fc', '#d8b4fe'], 
            ['#3b82f6', '#60a5fa', '#93c5fd'], 
            ['#ec4899', '#a855f7', '#3b82f6'], 
            ['#f472b6', '#8b5cf6', '#60a5fa'], 
            ['#a855f7', '#3b82f6', '#ec4899'], 
            ['#3b82f6', '#ec4899', '#a855f7'],
            ['#c084fc', '#93c5fd', '#f9a8d4'], 
          ]
        : [
            ['#1e40af', '#2563eb', '#3b82f6'], 
            ['#7c3aed', '#8b5cf6', '#a78bfa'], 
            ['#be185d', '#db2777', '#ec4899'], 
            ['#059669', '#10b981', '#34d399'], 
            ['#d97706', '#f59e0b', '#fbbf24'], 
            ['#dc2626', '#ef4444', '#f87171'], 
            ['#4338ca', '#5b21b6', '#7c3aed'], 
            ['#0891b2', '#0284c7', '#0ea5e9'], 
          ];

      for (let i = 0; i < 12; i++) {
        gradients.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 300 + 100,
          dx: (Math.random() - 0.5) * 0.5,
          dy: (Math.random() - 0.5) * 0.5,
          dr: (Math.random() - 0.5) * 0.2,
          colors: colors[i % colors.length],
          opacity: isDark ? 0.15 : 0.15
        });
      }
    };

    initGradients();

    let mouseX = 0;
    let mouseY = 0;
    let isMouseMoving = false;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMouseMoving = true;
      
      setTimeout(() => {
        isMouseMoving = false;
      }, 100);
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      gradients.current.forEach((gradient) => {
        gradient.x += gradient.dx;
        gradient.y += gradient.dy;
        gradient.r += gradient.dr;

        if (isMouseMoving) {
          const distanceX = mouseX - gradient.x;
          const distanceY = mouseY - gradient.y;
          const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
          
          if (distance < 200) {
            gradient.x += distanceX * 0.002;
            gradient.y += distanceY * 0.002;
          }
        }

        if (gradient.x < -gradient.r || gradient.x > canvas.width + gradient.r) {
          gradient.dx *= -1;
        }
        if (gradient.y < -gradient.r || gradient.y > canvas.height + gradient.r) {
          gradient.dy *= -1;
        }
        if (gradient.r < 50 || gradient.r > 400) {
          gradient.dr *= -1;
        }

        const radialGradient = ctx.createRadialGradient(
          gradient.x, gradient.y, 0,
          gradient.x, gradient.y, gradient.r
        );

        radialGradient.addColorStop(0, `${gradient.colors[0]}${Math.floor(gradient.opacity * 255).toString(16).padStart(2, '0')}`);
        radialGradient.addColorStop(0.5, `${gradient.colors[1]}${Math.floor(gradient.opacity * 0.7 * 255).toString(16).padStart(2, '0')}`);
        radialGradient.addColorStop(1, `${gradient.colors[2]}${Math.floor(gradient.opacity * 0.3 * 255).toString(16).padStart(2, '0')}`);

        ctx.globalCompositeOperation = 'screen';
        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(gradient.x, gradient.y, gradient.r, 0, Math.PI * 2);
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    const observer = new MutationObserver(() => {
      initGradients();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-0 ${className}`}
      style={{ 
        mixBlendMode: 'multiply',
        filter: 'blur(1px)'
      }}
    />
  );
};

export default MorphingBackground;