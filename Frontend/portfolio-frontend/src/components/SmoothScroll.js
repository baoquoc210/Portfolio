import { useEffect } from 'react';

function SmoothScroll() {
  useEffect(() => {
    const links = document.querySelectorAll('nav a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        smoothScroll(targetElement, 1300);
      });
    });

    function smoothScroll(target, duration) {
      const start = window.scrollY;
      const end = target.getBoundingClientRect().top + start;
      const distance = end - start;
      let startTime = null;

      function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, start + distance * ease);
        if (progress < 1) requestAnimationFrame(animation);
      }

      requestAnimationFrame(animation);

      function easeInOutQuad(t) {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      }
    }
  }, []);

  return null;
}

export default SmoothScroll;