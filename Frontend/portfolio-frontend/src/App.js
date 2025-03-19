import React, { useEffect } from 'react';
import ContactModal from './components/ContactModal';
import SmoothScroll from './components/SmoothScroll';
import Snowflakes from './components/Snowflakes';
import ProjectModal from './components/ProjectModal';
import './App.css';

function App() {
  useEffect(() => {
    const hireMeButton = document.getElementById('hireMeButton');
    hireMeButton.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/hu%E1%BB%B3nh-qu%E1%BB%91c-b%E1%BA%A3o-0328883425ha/', '_blank');
    });

    const githubButtons = document.querySelectorAll('#githubButton, #githubButton1');
    githubButtons.forEach(button => {
      button.addEventListener('click', () => {
        window.open('https://github.com/baoquoc210', '_blank');
      });
    });

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
  }, []);

  return (
    <div className="App">
      <Snowflakes /> {/* Replaces <canvas id="snowCanvas"></canvas> */}

      <nav>
        <div className="logo">
          <img src="/Picture/logo.jpg" alt="Logo" />
          <a href="#" id="fintechLogo">FINTECH</a>
        </div>
        <div className="nav-links">
          <a href="#Main">Main</a>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <a href="https://www.instagram.com/hh.hqb/" target="_blank">Instagram</a>
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
              <button className="doc" id="hireMeButton">Hire Me Now <i className="ri-arrow-right-line"></i></button>
              <button className="git" id="githubButton1"><i className="ri-github-fill"></i> My Github</button>
            </div>
          </div>
          <div className="bottom">
            <p>Other Socials:</p>
            <div className="icons">
              <i className="ri-youtube-line"></i>
              <i className="ri-twitter-x-line"></i>
              <i className="ri-linkedin-box-line"></i>
              <i className="ri-instagram-line"></i>
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
              <a href="#">Programming Languages</a>
              <p>Proficient in programming languages essential for AI development, including Python (TensorFlow, PyTorch, Scikit-learn), R (statistical analysis and data visualization), and C++/Java for performance-intensive applications and deploying machine learning models in production.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="/Picture/LLM.png" alt="Data Modeling" />
              <a href="#">Data Modeling & Engineering</a>
              <p>Expert in transforming raw data into insightful information through effective data modeling and engineering. Skilled in creating conceptual data representations and optimizing data pipelines to ensure efficient storage, retrieval, and analysis of data. Committed to enabling data-driven decision-making and enhancing organizational performance.</p>
            </div>
          </div>
          <div className="item">
            <div className="inner">
              <img src="/Picture/Machine-Learning.jpg" alt="ML Models" />
              <a href="#">Machine Learning Models</a>
              <p>Proficient in developing and deploying machine learning models to solve complex problems and drive data-driven insights. Experienced in various algorithms, model evaluation, and optimization techniques.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="projects" id="projects">
        <div className="inner">
          <p className="debug"><i className="ri-command-line"></i> Troubleshoot & Debug</p>
          <h2>Projects Showcase</h2>
          <p className="info">Welcome to my portfolio! Here, you'll find some of my notable projects that highlight my expertise in designing and developing innovative artificial intelligence solutions.</p>
          <button id="exploreButton" data-file="/Picture/CV.pdf">Explore my projects <i className="ri-arrow-right-line"></i></button>
          <div className="items">
            <div className="item" data-project="Real Object Detection">
              <i className="ri-brain-line"></i>
              <a href="#" className="project-link">Real Object Detection</a>
              <p>Create an application that uses models like YOLO or SSD to detect objects in real-time video streams.</p>
            </div>
            <div className="item" data-project="Image Classification">
              <i className="ri-code-box-line"></i>
              <a href="#" className="project-link">Image Classification</a>
              <p>Develop a model that classifies audio clips into categories (e.g., different types of music genres,...).</p>
            </div>
            <div className="item" data-project="Audio Classification">
              <i className="ri-sparkling-fill"></i>
              <a href="#" className="project-link">Audio Classification</a>
              <p>Created a social media application with real-time updates and user interactions.</p>
            </div>
            <div className="item" data-project="Chatbot">
              <i className="ri-code-s-fill"></i>
              <a href="#" className="project-link">Chatbot</a>
              <p>Develop a chatbot using NLP techniques that can answer FAQs for a specific business or service.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="contact" id="contact">
        <h2>Interested in Working Together?</h2>
        <div className="items">
          <div className="item">
            <a href="#" className="contact-link">Request a Consultation</a>
            <p>Discuss your project needs and explore collaboration opportunities.</p>
            <button className="contact-button">Schedule a Call</button>
          </div>
          <div className="item">
            <a href="/Picture/AI Picture.webp" className="work-link" download>Review My Portfolio</a>
            <p>See examples of my work to understand how I can contribute to your goals.</p>
            <button className="work-button">Download Sample</button>
          </div>
        </div>
      </div>

      <footer>
        <a href="#">Terms of Service</a>
        <a href="#">Privacy Policy</a>
        <p>© Quoc Bao</p>
      </footer>

      <ContactModal />
      <ProjectModal />
      <SmoothScroll />
    </div>
  );
}

export default App;