import React from 'react';
import '../animation/Skills.css';

function Skills() {
  const skills = [
    {
      name: 'Python',
      icon: 'ri-code-s-slash-line',
      description: 'AI/ML frameworks: TensorFlow, PyTorch.',
    },
    {
      name: 'Java',
      icon: 'ri-java-line',
      description: 'Backend development with Spring Boot.',
    },
    {
      name: 'React',
      icon: 'ri-reactjs-line',
      description: 'Dynamic UI development.',
    },
    {
      name: 'Node.js',
      icon: 'ri-server-line', 
      description: 'Scalable server-side applications.',
    },
  ];

  return (
    <section className="skills" id="expertise">
      <div className="skills-header">
        <p className="label animate-target">Expertise</p>
        <h2 className="animate-target">My Specific Skills</h2>
      </div>
      <div className="skills-grid">
        {skills.map((skill, idx) => (
          <div className="skill-card animate-target" key={idx}>
            <i className={skill.icon}></i>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;