import React, { useState, useEffect } from 'react';

function ContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '' });

  useEffect(() => {
    const contactLinks = document.querySelectorAll('.contact-link, .contact-button');
    contactLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        setIsOpen(true);
      });
    });
  }, []);
  // Adding more details when error catching (F12 --> )
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Sending request:', {
        url: 'http://localhost:8080/api/contacts',
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      const response = await fetch('http://localhost:8080/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
  
      console.log('Response status:', response.status, 'OK:', response.ok);
      const responseData = await response.text();
      console.log('Response body:', responseData);
  
      if (response.ok) {
        alert(`Thank you, ${formData.name}! Your request has been sent.`);
        setFormData({ name: '', email: '', company: '' });
        setIsOpen(false);
      } else {
        throw new Error(`Request failed with status: ${response.status} - ${responseData}`);
      }
    } catch (error) {
      console.error('Fetch error:', error);
      alert(`Failed to send request: ${error.message}. Please try again.`);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div id="contactModal" className={isOpen ? 'd-flex' : ''} style={{ display: isOpen ? 'flex' : 'none' }}>
      <div className="modal-content">
        <span className="close-contact" onClick={() => setIsOpen(false)}>×</span>
        <h2>Request a Consultation</h2>
        <p>Please provide your details below, and I’ll reach out to discuss how I can assist with your project.</p>
        <form id="contactForm" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="hrName">Full Name <span className="required">*</span></label>
            <input
              type="text"
              id="hrName"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Bao Huynh"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hrEmail">Email Address <span className="required">*</span></label>
            <input
              type="email"
              id="hrEmail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="e.g., FinTech@rmit.com"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="hrCompany">Company Name <span className="required">*</span></label>
            <input
              type="text"
              id="hrCompany"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="e.g., FinTech Company"
              required
            />
          </div>
          <button type="submit" className="submit-btn">Submit Request</button>
        </form>
      </div>
    </div>
  );
}

export default ContactModal;