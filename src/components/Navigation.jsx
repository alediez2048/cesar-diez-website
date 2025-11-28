import React from 'react';
import '../styles/components/Navigation.css';

const Navigation = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="museum-nav">
      <div className="nav-logo">CD.25</div>
      <ul className="nav-menu">
        <li className="nav-item">
          <span className="nav-link" onClick={() => scrollToSection('about')}>Overview</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={() => scrollToSection('experience')}>Timeline</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={() => scrollToSection('insights')}>Insights</span>
        </li>
        <li className="nav-item">
          <span className="nav-link" onClick={() => scrollToSection('contact')}>Inquiries</span>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
