import React, { useState, useEffect } from 'react';

function ProjectModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    const projectLinks = document.querySelectorAll('.project-link');
    projectLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const item = link.parentElement;
        setTitle(item.getAttribute('data-project'));
        setDescription(item.querySelector('p').textContent);
        setIsOpen(true);
      });
    });
  }, []);

  return (
    <div id="projectModal" className={isOpen ? 'd-flex' : ''} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal-content">
        <span className="close" onClick={() => setIsOpen(false)}>×</span>
        <h2 id="modalTitle">{title}</h2>
        <p id="modalDescription">{description}</p>
      </div>
    </div>
  );
}

export default ProjectModal;