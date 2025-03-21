import { useEffect } from 'react';

const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SPEED = 2;
const MAX_SNOWFLAKE_SIZE = 5;
const SNOWFLAKE_COLOUR = '#ddd';

function Snowflakes() {
  useEffect(() => {
    const canvas = document.getElementById('snowCanvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0';
    canvas.style.left = '0';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = '10'; // Ensure snowflakes are above all content
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const ctx = canvas.getContext('2d');
    const snowflakes = [];

    const createSnowflake = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,
      colour: SNOWFLAKE_COLOUR,
      speed: Math.random() * MAX_SNOWFLAKE_SPEED + 3,
      sway: Math.random() - 0.5
    });

    const drawSnowflake = (snowflake) => {
      ctx.beginPath();
      ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
      ctx.fillStyle = snowflake.colour;
      ctx.fill();
      ctx.closePath();
    };

    const updateSnowflake = (snowflake) => {
      snowflake.y += snowflake.speed;
      snowflake.x += snowflake.sway;
      if (snowflake.y > canvas.height) Object.assign(snowflake, createSnowflake());
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      snowflakes.forEach(snowflake => {
        updateSnowflake(snowflake);
        drawSnowflake(snowflake);
      });
      requestAnimationFrame(animate);
    };

    for (let i = 0; i < NUMBER_OF_SNOWFLAKES; i++) {
      snowflakes.push(createSnowflake());
    }

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    animate();

    // Cleanup resize listener on unmount
    return () => {
      window.removeEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      });
    };
  }, []);

  return <canvas id="snowCanvas"></canvas>;
}

export default Snowflakes;