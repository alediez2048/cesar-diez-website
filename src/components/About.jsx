import React from 'react';
import '../styles/components/About.css';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-content">
          <div className="about-label">About</div>
          <div className="about-text">
            <p>
              I am a <span className="about-highlight">Credit Risk Strategist</span> with a passion for leveraging data to drive financial decisions. Currently at American Express, I combine my background in Finance with advanced Data Analytics.
            </p>
            <p>
              My approach is analytical yet creative, finding patterns in numbers to solve complex business challenges. With an MSBA degree, I bridge the gap between technical data science and strategic business execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
