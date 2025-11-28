import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section container">
      <h1 className="hero-title">
        Cesar<br />Diez
      </h1>
      <div className="hero-subtitle">
        Credit Risk Strategy @Amex<br />
        Finance & Data Analytics<br />
        MSBA
      </div>
      <div className="hero-tags">
        <span className="hero-tag">Strategy</span>
        <span className="hero-tag">Analytics</span>
        <span className="hero-tag">Finance</span>
      </div>
    </section>
  );
};

export default Hero;
