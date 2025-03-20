import React from 'react';
import '../animation/Skills.css';

function Skills() {
  const expertise = [
    { name: 'Python', icon: 'ri-code-s-slash-line', description: 'Expert in AI/ML frameworks like TensorFlow and PyTorch.' },
    { name: 'Java', icon: 'ri-java-line', description: 'Proficient in Spring Boot for backend development.' },
    { name: 'React', icon: 'ri-reactjs-line', description: 'Building dynamic UIs with modern JavaScript.' }
  ];

  return (
    <section className="expertise" id="expertise">
      <div className="expertise-header">
        <p id="expertise-label">My Expertise</p>
        <h2>Technical Proficiencies</h2>
      </div>
      <div className="expertise-items">
        {expertise.map((item, index) => (
          <div className="expertise-item" key={index}>
            <div className="expertise-inner">
              <i className={item.icon}></i>
              <a href="#">{item.name}</a>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;