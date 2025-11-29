import React from 'react';
import '../styles/components/Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <span className="type-museum-label">Inquiries</span>
        
        <div className="contact-links">
          <a href="mailto:cesardiez97@gmail.com" className="contact-link">Email</a>
          <a href="https://www.linkedin.com/in/cesar-diez-/" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">GitHub</a>
        </div>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Cesar Diez</span>
          <span>All Rights Reserved</span>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
