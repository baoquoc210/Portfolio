import React, { useEffect, useState } from 'react';
import ContactModal from './components/ContactModal';
import SmoothScroll from './components/SmoothScroll';
import Snowflakes from './components/Snowflakes';
import ProjectModal from './components/ProjectModal';
import Skills from './components/Skills';
import './App.css'; //Global styles
import './animation/Nav.css'; 
import './animation/Hero.css';
import './animation/About.css';
import './animation/Projects.css';
import './animation/Contact.css';
import './animation/Footer.css';
import './animation/Modal.css';
import './animation/Skills.css';

function App() {
  const [activeSection, setActiveSection] = useState('Main');

  useEffect(() => {
    // Add animation class to all sections on load
    const sections = ['nav', '.hero', '.about', '.expertise', '.projects', '.contact', 'footer'];
    sections.forEach(selector => {
      const element = document.querySelector(selector);
      if (element) element.classList.add('animate');
    });

    // Add animation to items within sections
    const itemContainers = [
      '.about .items .item',
      '.expertise-items .expertise-item', // Added this
      '.projects .inner .items .item',
      '.contact .items .item'
    ];
    itemContainers.forEach(container => {
      const items = document.querySelectorAll(container);
      items.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Staggered delay
        item.classList.add('animate');
      });
    });

    // Button event listeners (unchanged)
    const hireMeButton = document.getElementById('hireMeButton');
    hireMeButton.addEventListener('click', () => window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/', '_blank'));

    const githubButtons = document.querySelectorAll('#githubButton, #githubButton1');
    githubButtons.forEach(button => button.addEventListener('click', () => window.open('https://github.com/baoquoc210', '_blank')));

    const exploreButton = document.getElementById('exploreButton');
    exploreButton.addEventListener('click', () => {
      const link = document.createElement('a');
      link.href = '/Picture/CV.pdf';
      link.download = 'CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });

    const workButtons = document.querySelectorAll('.work-button');
    workButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        e.preventDefault();
        const link = document.querySelector('.work-link');
        link.click();
      });
    });

    return () => {
      hireMeButton.removeEventListener('click', () => {});
      githubButtons.forEach(button => button.removeEventListener('click', () => {}));
      exploreButton.removeEventListener('click', () => {});
      workButtons.forEach(button => button.removeEventListener('click', () => {}));
    };
  }, []);

  const handleNavClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <Snowflakes />
      <nav>
        <div className="logo">
          <img src="/Picture/logo.jpg" alt="Logo" />
          <a href="https://www.rmitfintechclub.com/" target="_blank" rel="noreferrer" id="fintechLogo">FINTECH</a>
        </div>
        <div className="nav-links">
          <a href="#Main" className={activeSection === 'Main' ? 'active' : ''} onClick={() => handleNavClick('Main')}>
            Main
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
            About
          </a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>
            Projects
          </a>
          <a href="#expertise" className={activeSection === 'expertise' ? 'active' : ''} onClick={() => handleNavClick('expertise')}>
            Expertise
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
            Contact
          </a>
          <a href="https://www.instagram.com/hh.hqb/" target="_blank" rel="noreferrer">Instagram</a>
        </div>
        <button id="githubButton">
          <i className="ri-github-fill"></i> My Github
        </button>
      </nav>

      <div className="hero" id="Main">
        <div className="left-section">
          <div className="top">
            <h2>AI Engineer</h2>
            <p>
              As an experienced AI Engineer, I specialize in designing and deploying advanced AI solutions, with a particular focus on large language models (LLMs) and Retrieval-Augmented Generation (RAG) frameworks. Leveraging expertise in Python, TensorFlow, and PyTorch, I have developed scalable systems that integrate LLMs with dynamic knowledge retrieval to enhance accuracy and contextual relevance in applications like conversational AI, document search, and decision-support tools.
            </p>
            <div className="buttons">
              <button className="doc" id="hireMeButton">
                Hire Me Now <i className="ri-arrow-right-line"></i>
              </button>
              <button className="git" id="githubButton1">
                <i className="ri-github-fill"></i> My Github
              </button>
            </div>
          </div>
          <div className="bottom">
            <p>Other Socials:</p>
            <div className="icons">
              <a href="https://youtube.com" target="_blank" rel="noreferrer">
                <i className="ri-youtube-line"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <i className="ri-twitter-x-line"></i>
              </a>
              <a href="https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/" target="_blank" rel="noreferrer">
                <i className="ri-linkedin-box-line"></i>
              </a>
              <a href="https://instagram.com/hh.hqb" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </div>
        </div>
        <img src="/Picture/QB.jpg" alt="Profile" />
      </div>

      <div className="about" id="about">
        <p id="haha">About My Skills</p>
        <h2>I have engaged in the development of generative artificial intelligence.</h2>
        <div className="items">
          <div className="item">
            <div className="inner">
              <img src="/Picture/AI Picture.webp" alt="Programming" />
              <a href="/">Programming Languages</a>
              <p>Proficient in programming languages essential for AI development, including Python (TensorFlow, PyTorch, Scikit-learn), R (statistical analysis and data visualization), and C++/Java for performance-intensive applications and deploying machine learning models in production.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="/Picture/LLM.png" alt="Data Modeling" />
              <a href="/">Data Modeling & Engineering</a>
              <p>Expert in transforming raw data into insightful information through effective data modeling and engineering. Skilled in creating conceptual data representations and optimizing data pipelines to ensure efficient storage, retrieval, and analysis of data. Committed to enabling data-driven decision-making and enhancing organizational performance.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="/Picture/Machine-Learning.jpg" alt="ML Models" />
              <a href="/">Machine Learning Models</a>
              <p>Proficient in developing and deploying machine learning models to solve complex problems and drive data-driven insights. Experienced in various algorithms, model evaluation, and optimization techniques.</p>
            </div>
          </div>
        </div>
      </div>

      <Skills /> {/* New Skills section */}

      <div className="projects" id="projects">
        <div className="inner">
          <p className="debug"><i className="ri-command-line"></i> Troubleshoot & Debug</p>
          <h2>Projects Showcase</h2>
          <p className="info">Explore my portfolio of innovative AI solutions and projects.</p>
          <button id="exploreButton" data-file="/Picture/CV.pdf">
            Explore my projects <i className="ri-arrow-right-line"></i>
          </button>
          <div className="items">
            <div className="item" data-project="Real Object Detection">
              <i className="ri-brain-line"></i>
              <a href="/" className="project-link">Real Object Detection</a>
              <p>Real-time object detection using YOLO and SSD models.</p>
            </div>
            <div className="item" data-project="Image Classification">
              <i className="ri-code-box-line"></i>
              <a href="/" className="project-link">Image Classification</a>
              <p>Image classification with deep learning techniques.</p>
            </div>
            <div className="item" data-project="Audio Classification">
              <i className="ri-sparkling-fill"></i>
              <a href="/" className="project-link">Audio Classification</a>
              <p>Audio categorization using ML models.</p>
            </div>
            <div className="item" data-project="Chatbot">
              <i className="ri-code-s-fill"></i>
              <a href="/" className="project-link">Chatbot</a>
              <p>NLP-based chatbot for FAQs and customer support.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2>Interested in Working Together?</h2>
        <div className="items">
          <div className="item">
            <a href="/" className="contact-link">Request a Consultation</a>
            <p>Discuss your project needs and collaboration opportunities.</p>
            <button className="contact-button">Schedule a Call</button>
          </div>
          <div className="item">
            <a href="/Picture/AI Picture.webp" className="work-link" download>Review My Portfolio</a>
            <p>See examples of my work to understand my capabilities.</p>
            <button className="work-button">Download Sample</button>
          </div>
        </div>
      </div>

      <footer>
        <a href="/">Terms of Service</a>
        <a href="/">Privacy Policy</a>
        <p>© Quoc Bao</p>
      </footer>

      <ContactModal />
      <ProjectModal />
      <SmoothScroll />
    </div>
  );
}

export default App;