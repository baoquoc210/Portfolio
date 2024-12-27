document.addEventListener('DOMContentLoaded', function() {  
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
        const start = window.scrollY; // Current scroll position  
        const end = target.getBoundingClientRect().top + start; // Target scroll position  
        const distance = end - start; // Distance to scroll  
        let startTime = null;  

        function animation(currentTime) {  
            if (startTime === null) startTime = currentTime;  
            const timeElapsed = currentTime - startTime;  
            const progress = Math.min(timeElapsed / duration, 1); // Calculate progress  
            const ease = easeInOutQuad(progress); // Apply easing function  

            window.scrollTo(0, start + distance * ease); // Scroll to the calculated position  

            if (progress < 1) {  
                requestAnimationFrame(animation); // Continue the animation  
            }  
        }  

        requestAnimationFrame(animation); // Start the animation  

        // Easing function for smooth effect  
        function easeInOutQuad(t) {  
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t; // Quadratic easing  
        }  
    }  

    // Button to hire me  
    const hireMeButton = document.getElementById('hireMeButton');  
    hireMeButton.addEventListener('click', function() {  
        window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/', '_blank'); // Opens in a new tab  
    });  

    // Button to GitHub  
    const githubButton = document.getElementById('githubButton');  
    githubButton.addEventListener('click', function() {  
        window.open('https://github.com/baoquoc210', '_blank'); // Opens in a new tab  
    });  

    // Button to GitHub
    const githubButton1 = document.getElementById('githubButton1');  
    githubButton1.addEventListener('click', function() {  
        window.open('https://github.com/baoquoc210', '_blank'); // Opens in a new tab  
    });  

    // Modal functionality for project links  
    const projectLinks = document.querySelectorAll('.project-link');  
    const modal = document.getElementById('projectModal');  
    const modalTitle = document.getElementById('modalTitle');  
    const modalDescription = document.getElementById('modalDescription');  
    const closeModal = document.querySelector('.close');  

    projectLinks.forEach(link => {  
        link.addEventListener('click', function(event) {  
            event.preventDefault(); // Prevent default link behavior  
            const item = this.parentElement; // Get the parent item  
            const projectName = item.getAttribute('data-project');  
            const projectDescription = item.querySelector('p').innerText;  

            // Set modal content  
            modalTitle.textContent = projectName;  
            modalDescription.textContent = projectDescription;  

            // Display the modal  
            modal.style.display = 'block';  
        });  
    });  

    // Close modal functionality  
    closeModal.addEventListener('click', function() {  
        modal.style.display = 'none';  
    });  

    window.addEventListener('click', function(event) {  
        if (event.target === modal) {  
            modal.style.display = 'none';  
        }  
    });  

    const exploreButton = document.getElementById('exploreButton');  
    exploreButton.addEventListener('click', function() {  
        const cvFile = this.getAttribute('data-file');  

        const link = document.createElement('a');  
        link.href = cvFile; 
        link.download = 'CV.pdf'; 
        document.body.appendChild(link);  
        link.click(); 
        document.body.removeChild(link); 
    });  
});

//Snow Flake
const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SPEED = 2;
const SNOWFLAKE_COLOUR = '#ddd';
const snowflakes = [];

const canvas = document.createElement('canvas');
canvas.style.position = 'absolute';
canvas.style.top = '0px';
canvas.style.pointerEvents = 'none';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

const ctx = canvas.getContext('2d');

const createSnowflake = () => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 10, // Snowflake size range
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 1,
    sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
    ctx.fillStyle = SNOWFLAKE_COLOUR;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('❄', snowflake.x, snowflake.y);
};

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake(), { y: -snowflake.size });
    }
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