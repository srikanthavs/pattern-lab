import { useEffect, useRef } from 'react';

/**
 * Animated Space Background using Canvas + CSS Gradients.
 * Renders twinkling stars and occasional shooting stars.
 */
export default function SpaceBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Handle resizing
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    // Star data
    const NUM_STARS = 150;
    const stars = Array.from({ length: NUM_STARS }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.5 + 0.5,
      alpha: Math.random(),
      speed: Math.random() * 0.05 + 0.01,
      twinkleDir: Math.random() > 0.5 ? 1 : -1
    }));

    // Shooting stars
    const shooters = [];
    const spawnShooter = () => {
      shooters.push({
        x: Math.random() * canvas.width * 1.5,
        y: 0,
        length: Math.random() * 80 + 20,
        speed: Math.random() * 10 + 15,
        thickness: Math.random() * 2 + 1,
        angle: Math.PI / 4 // 45 degrees
      });
      // Schedule next one randomly between 2s and 8s
      setTimeout(spawnShooter, Math.random() * 6000 + 2000);
    };
    setTimeout(spawnShooter, 2000);

    let animationFrameId;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw twinkling stars
      stars.forEach(star => {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();

        // Update twinkle
        star.alpha += star.speed * star.twinkleDir;
        if (star.alpha >= 1) {
          star.alpha = 1;
          star.twinkleDir = -1;
        } else if (star.alpha <= 0.1) {
          star.alpha = 0.1;
          star.twinkleDir = 1;
          // Randomize position slightly when dim to make it feel dynamic
          if (Math.random() > 0.95) {
            star.x = Math.random() * canvas.width;
            star.y = Math.random() * canvas.height;
          }
        }
      });

      // Draw shooting stars
      for (let i = shooters.length - 1; i >= 0; i--) {
        const s = shooters[i];
        
        ctx.beginPath();
        ctx.moveTo(s.x, s.y);
        ctx.lineTo(s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length);
        
        const grad = ctx.createLinearGradient(
          s.x, s.y, 
          s.x - Math.cos(s.angle) * s.length, s.y - Math.sin(s.angle) * s.length
        );
        grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
        grad.addColorStop(1, 'rgba(255, 255, 255, 0)');
        
        ctx.strokeStyle = grad;
        ctx.lineWidth = s.thickness;
        ctx.stroke();

        // Move
        s.x -= Math.cos(s.angle) * s.speed;
        s.y += Math.sin(s.angle) * s.speed;

        // Remove if off screen
        if (s.y > canvas.height || s.x < 0) {
          shooters.splice(i, 1);
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      <div className="space-bg" aria-hidden="true" />
      <canvas 
        ref={canvasRef} 
        style={{ 
          position: 'fixed', 
          inset: 0, 
          zIndex: 1, 
          pointerEvents: 'none',
          opacity: 0.8
        }} 
        aria-hidden="true"
      />
    </>
  );
}
