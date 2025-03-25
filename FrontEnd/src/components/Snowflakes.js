import { useEffect } from 'react';

const SNOWFLAKES_COUNT = 150;
const MAX_SPEED = 2;
const MAX_SIZE = 4;

function Snowflakes() {
  useEffect(() => {
    const canvas = document.createElement('canvas');
    canvas.id = 'snowflakes';
    document.body.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '5';
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const snowflakes = Array.from({ length: SNOWFLAKES_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * MAX_SIZE + 1,
      speed: Math.random() * MAX_SPEED + 1,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach((flake) => {
        flake.y += flake.speed;
        if (flake.y > canvas.height) flake.y = -flake.radius;
        ctx.beginPath();
        ctx.arc(flake.x, flake.y, flake.radius, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff80';
        ctx.fill();
      });
      requestAnimationFrame(animate);
    };

    animate();
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
}

export default Snowflakes;