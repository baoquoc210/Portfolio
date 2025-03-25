import React from 'react';
import '../animation/Modal.css';

function ProjectModal({ isOpen, onClose, project }) {
  const projectDetails = {
    "Real Object Detection": {
      title: "Real Object Detection",
      description: "A real-time object detection system leveraging YOLO and SSD frameworks for high accuracy and performance.",
    },
    "Image Classification": {
      title: "Image Classification",
      description: "A deep learning-based solution for categorizing images with high precision using convolutional neural networks.",
    },
    "Audio Classification": {
      title: "Audio Classification",
      description: "Machine learning-driven audio analysis tool for classifying sound patterns and events.",
    },
    "Chatbot": {
      title: "Chatbot",
      description: "An NLP-powered conversational AI designed for seamless user interaction and automation.",
    },
  };

  const selected = project ? projectDetails[project] : null;

  return (
    <div
      id="project-modal"
      className={isOpen ? 'visible' : ''}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className={`modal-content ${isOpen ? 'animate' : ''}`}>
        <span className="close" onClick={onClose}>
          &times;
        </span>
        {selected ? (
          <>
            <h2>{selected.title}</h2>
            <p>{selected.description}</p>
          </>
        ) : (
          <p>No project selected.</p>
        )}
      </div>
    </div>
  );
}

export default ProjectModal;