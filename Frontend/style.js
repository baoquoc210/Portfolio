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

            if (progress < 1) {  
                requestAnimationFrame(animation);  
            }  
        }  

        requestAnimationFrame(animation);  

        function easeInOutQuad(t) {  
            return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;  
        }  
    }  

    // Button to hire me  
    const hireMeButton = document.getElementById('hireMeButton');  
    hireMeButton.addEventListener('click', function() {  
        window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/', '_blank');  
    });  

    // Button to GitHub  
    const githubButton = document.getElementById('githubButton');  
    githubButton.addEventListener('click', function() {  
        window.open('https://github.com/baoquoc210', '_blank');  
    });  

    const githubButton1 = document.getElementById('githubButton1');  
    githubButton1.addEventListener('click', function() {  
        window.open('https://github.com/baoquoc210', '_blank');  
    });  

    // Modal functionality for project links  
    const projectLinks = document.querySelectorAll('.project-link');  
    const modal = document.getElementById('projectModal');  
    const modalTitle = document.getElementById('modalTitle');  
    const modalDescription = document.getElementById('modalDescription');  
    const closeModal = document.querySelector('.close');  

    projectLinks.forEach(link => {  
        link.addEventListener('click', function(event) {  
            event.preventDefault();  
            const item = this.parentElement;  
            const projectName = item.getAttribute('data-project');  
            const projectDescription = item.querySelector('p').innerText;  

            modalTitle.textContent = projectName;  
            modalDescription.textContent = projectDescription;  
            modal.style.display = 'block';  
            modal.style.display = 'center'; // Note: Fixed typo 'dislay' to 'display', but 'center' isn't valid here
        });  
    });  

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

    // Contact Modal functionality
    const contactLinks = document.querySelectorAll('.contact-link, .contact-button');
    const contactModal = document.getElementById('contactModal');
    const closeContactModal = document.querySelector('.close-contact');
    const contactForm = document.getElementById('contactForm');

    contactLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            contactModal.style.display = 'flex';
        });
    });

    // Close contact modal
    closeContactModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });

    // Handle form submission to backend
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const contactData = {
            name: document.getElementById('hrName').value,
            email: document.getElementById('hrEmail').value,
            company: document.getElementById('hrCompany').value
        };

        fetch('http://localhost:8080/api/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(contactData)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log('Success:', data);
            alert(`Thank you, ${contactData.name}! Your consultation request has been sent. Check your email for confirmation.`);
            contactForm.reset();
            contactModal.style.display = 'none';
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Failed to send consultation request. Please try again.');
        });
    });

    // Download button functionality
    const workButtons = document.querySelectorAll('.work-button');
    workButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const link = document.querySelector('.work-link');
            link.click();
        });
    });
});

// Snowflakes animation
const NUMBER_OF_SNOWFLAKES = 300;
const MAX_SNOWFLAKE_SPEED = 2;
const MAX_SNOWFLAKE_SIZE = 5;
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
    radius: Math.floor(Math.random() * MAX_SNOWFLAKE_SIZE) + 1,      
    colour: SNOWFLAKE_COLOUR,
    speed: Math.random() * MAX_SNOWFLAKE_SPEED + 3,
    sway: Math.random() - 0.5
});

const drawSnowflake = snowflake => {
    ctx.beginPath();
    ctx.arc(snowflake.x, snowflake.y, snowflake.radius, 0, Math.PI * 2);
    ctx.fillStyle = snowflake.colour;
    ctx.fill();
    ctx.closePath();
};

const updateSnowflake = snowflake => {
    snowflake.y += snowflake.speed;
    snowflake.x += snowflake.sway;
    if (snowflake.y > canvas.height) {
        Object.assign(snowflake, createSnowflake());
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