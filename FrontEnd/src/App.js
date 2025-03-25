import React, { useEffect, useState } from 'react';
import ContactModal from './components/ContactModal';
import SmoothScroll from './components/SmoothScroll';
import Snowflakes from './components/Snowflakes';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import './App.css';
import './animation/Nav.css';
import './animation/Hero.css';
import './animation/About.css';
import './animation/Projects.css';
import './animation/Contact.css';
import './animation/Footer.css';
import './animation/Modal.css';
import './animation/Skills.css';
import './animation/darkLight.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); 
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false); 
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null); 
  const [selectedAboutItem, setSelectedAboutItem] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section, footer');
    const elements = document.querySelectorAll('.animate-target');
    sections.forEach((section) => observer.observe(section));
    elements.forEach((el, idx) => {
      el.style.animationDelay = `${idx * 0.2}s`;
      observer.observe(el);
    });

    const socialButtons = document.querySelectorAll('.social-button');
    socialButtons.forEach((button) =>
      button.addEventListener('click', () =>
        window.open(button.dataset.url, '_blank')
      )
    );

    const downloadButton = document.getElementById('download-cv');
    downloadButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = '/Picture/CV.pdf';
      link.download = 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    const projectItems = document.querySelectorAll('.project-items .item');
    projectItems.forEach((item) =>
      item.addEventListener('click', () => {
        setSelectedProject(item.dataset.project);
        setIsProjectModalOpen(true);
      })
    );

    document.body.classList.toggle('dark-mode', isDarkMode);

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      elements.forEach((el) => observer.unobserve(el));
      socialButtons.forEach((button) =>
        button.removeEventListener('click', () => {})
      );
      downloadButton.removeEventListener('click', () => {});
      projectItems.forEach((item) =>
        item.removeEventListener('click', () => {})
      );
    };
  }, [isDarkMode]);

  const handleNavClick = (section) => {
    setActiveSection(section);
    setIsMenuOpen(false);
  };

  const toggleTheme = () => setIsDarkMode((prev) => !prev);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const openContactModal = () => setIsContactModalOpen(true);
  const closeContactModal = () => setIsContactModalOpen(false);
  const closeProjectModal = () => setIsProjectModalOpen(false);
  const openAboutModal = (item) => {
    setSelectedAboutItem(item);
    setIsAboutModalOpen(true);
  };
  const closeAboutModal = () => setIsAboutModalOpen(false);

  const aboutItems = [
    {
      title: "Programming Expertise",
      image: "/Picture/AI Picture.webp",
      description: "I bring extensive proficiency in programming languages critical to artificial intelligence and machine learning development. My expertise spans Python—leveraging frameworks like TensorFlow, PyTorch, and Scikit-learn for cutting-edge AI solutions—alongside R for advanced statistical analysis and data visualization. Additionally, I am skilled in C++ and Java, enabling me to optimize performance-intensive applications and deploy robust, scalable machine learning models in production environments. This versatile skill set empowers me to craft high-quality, efficient systems tailored to diverse technical challenges.",
    },
    {
      title: "Data Engineering & Modeling",
      image: "/Picture/LLM.png",
      description: "With a deep specialization in data engineering, I excel at designing and implementing sophisticated data pipelines that transform raw, unstructured data into actionable insights. My experience includes constructing conceptual and logical data models, optimizing storage and retrieval systems, and ensuring seamless integration with AI frameworks. I am adept at leveraging tools like SQL, Apache Spark, and cloud platforms (e.g., AWS, GCP) to enhance data accessibility and scalability. This expertise drives data-driven decision-making, delivering measurable value to organizations by unlocking the full potential of their data assets.",
    },
    {
      title: "Machine Learning Solutions",
      image: "/Picture/Machine-Learning.jpg",
      description: "I possess a proven track record in developing and deploying machine learning models that address complex, real-world problems with precision and efficiency. My capabilities encompass a wide range of algorithms—from supervised and unsupervised learning to deep learning techniques—coupled with rigorous model evaluation and hyperparameter optimization. I have successfully delivered solutions such as real-time object detection, natural language processing systems, and predictive analytics tools, utilizing frameworks like YOLO, BERT, and custom neural networks. This expertise enables me to bridge the gap between theoretical research and practical, impactful applications.",
    },
  ];
  return (
    <div className="app">
      <Snowflakes />
      <nav className="navbar">
        <div className="logo">
          <img src="/Picture/logo.jpg" alt="Logo" />
          <a href="https://www.rmitfintechclub.com/" target="_blank" rel="noreferrer">
            FINTECH
          </a>
        </div>
        <button className="hamburger" onClick={toggleMenu}>
          <i className={isMenuOpen ? 'ri-close-line' : 'ri-menu-line'}></i>
        </button>
        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#home"
              className={activeSection === 'home' ? 'active' : ''}
              onClick={() => handleNavClick('home')}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === 'about' ? 'active' : ''}
              onClick={() => handleNavClick('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#expertise"
              className={activeSection === 'expertise' ? 'active' : ''}
              onClick={() => handleNavClick('expertise')}
            >
              Expertise
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={() => handleNavClick('projects')}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={() => handleNavClick('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <button className="theme-toggle" onClick={toggleTheme}>
          <i className={isDarkMode ? 'ri-sun-line' : 'ri-moon-line'}></i>
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content animate-target">
          <h1>AI Engineer & Innovator</h1>
          <p>
            I am a dedicated AI Engineer with a proven track record in designing and deploying cutting-edge artificial intelligence solutions. My expertise lies in large language models (LLMs), retrieval-augmented generation (RAG) frameworks, and scalable machine learning systems. With a strong foundation in Python, TensorFlow, and cloud technologies, I deliver impactful applications such as conversational AI, intelligent search systems, and data-driven decision tools, driving innovation and efficiency across industries.
          </p>
          <div className="buttons">
            <button
              className="social-button primary"
              data-url="https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/"
            >
              Contact Me <i className="ri-linkedin-box-line"></i>
            </button>
            <button
              className="social-button secondary"
              data-url="https://github.com/baoquoc210"
            >
              View Projects <i className="ri-github-fill"></i>
            </button>
          </div>
        </div>
        <div className="hero-image animate-target">
          <img src="/Picture/QB.jpg" alt="Quoc Bao - AI Engineer" />
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-header">
          <p className="label animate-target">About Me</p>
          <h2 className="animate-target">
            Pioneering Advanced Solutions in Generative AI and Data Engineering
          </h2>
        </div>
        <div className="about-items">
        {aboutItems.map((item, idx) => (
            <div
              className="item animate-target"
              key={idx}
              onClick={() => openAboutModal(item)}
            >
              <img src={item.image} alt={item.title} />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </section>
      
      {/* About Modal */}
      {isAboutModalOpen && selectedAboutItem && (
        <div
          id="about-modal"
          className={isAboutModalOpen ? 'visible' : ''}
          style={{ display: isAboutModalOpen ? 'flex' : 'none' }}
        >
          <div className={`modal-content ${isAboutModalOpen ? 'animate' : ''}`}>
            <span className="close" onClick={closeAboutModal}>
              ×
            </span>
            <h2>{selectedAboutItem.title}</h2>
            <p>{selectedAboutItem.description}</p>
          </div>
        </div>
      )}
      
      <Skills />

      <section className="projects" id="projects">
        <div className="projects-inner">
          <div className="projects-header">
            <p className="label animate-target">
              <i className="ri-code-line"></i> Portfolio
            </p>
            <h2 className="animate-target">Selected AI Projects</h2>
            <p className="info animate-target">
              Explore my expertise through innovative, AI-powered solutions designed to solve real-world challenges.
            </p>
          </div>
          <button id="download-cv" className="cv-button animate-target">
            Download Resume <i className="ri-download-line"></i>
          </button>
          <div className="project-items">
            <div className="item animate-target" data-project="Real Object Detection">
              <i className="ri-brain-line"></i>
              <h3>Real Object Detection</h3>
              <p>Real-time detection with YOLO and SSD.</p>
            </div>
            <div className="item animate-target" data-project="Image Classification">
              <i className="ri-image-line"></i>
              <h3>Image Classification</h3>
              <p>Deep learning-based image categorization.</p>
            </div>
            <div className="item animate-target" data-project="Audio Classification">
              <i className="ri-volume-up-line"></i>
              <h3>Audio Classification</h3>
              <p>ML-driven audio analysis and check for audio.</p>
            </div>
            <div className="item animate-target" data-project="Chatbot">
              <i className="ri-chat-3-line"></i>
              <h3>Chatbot</h3>
              <p>NLP-powered conversational AI, using LLM.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="contact-header">
          <h2 className="animate-target">Let’s Work Together</h2>
        </div>
        <div className="contact-items">
          <div className="item animate-target">
            <h3>Consultation</h3>
            <p>Discuss your project requirements.</p>
            <button className="contact-button" onClick={openContactModal}>
              Schedule Consultation
            </button>
          </div>
          <div className="item animate-target">
            <h3>Portfolio</h3>
            <p>Review my work samples and details.</p>
            <button className="download-button">Download Portfolio</button>
          </div>
          <div className="item animate-target">
            <h3>LinkedIn</h3>
            <p>Connect for professional inquiries.</p>
            <button
              className="social-button centered"
              data-url="https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/"
            >
              Visit Profile
            </button>
          </div>
        </div>
      </section>

      <footer>
        <a href="/">Terms</a>
        <a href="/">Privacy</a>
        <p>© 2025 Quoc Bao</p>
      </footer>

      <ContactModal isOpen={isContactModalOpen} onClose={closeContactModal} />
      <ProjectModal isOpen={isProjectModalOpen} onClose={closeProjectModal} project={selectedProject} />
      <SmoothScroll />
    </div>
  );
}

export default App;