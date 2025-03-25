import React from 'react';
import '../animation/Modal.css';

function ContactModal({ isOpen, onClose }) {
  return (
    <div
      id="contact-modal"
      className={isOpen ? 'visible' : ''}
      style={{ display: isOpen ? 'flex' : 'none' }}
    >
      <div className={`modal-content ${isOpen ? 'animate' : ''}`}>
        <span className="close" onClick={onClose}>
          ×
        </span>
        <h2>Request Consultation</h2>
        <p>Please submit your information to arrange a tailored consultation.</p>
        <form>
          <div className="form-group">
            <label htmlFor="name">
              Name <span className="required">*</span>
            </label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">
              Email <span className="required">*</span>
            </label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="company">
              Company <span className="required">*</span>
            </label>
            <input type="text" id="company" name="company" required />
          </div>
          <button type="submit">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;