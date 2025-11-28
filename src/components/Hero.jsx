import React from 'react';
import '../styles/components/Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-section container">
      <div className="hero-subtitle-container">
        <p className="hero-intro">
          Bridging the gap between<br />
          financial strategy and<br />
          advanced analytics.
        </p>
        <div className="hero-meta">
          <span>Credit Risk Strategy @Amex</span>
          <span>Finance & Analytics</span>
          <span>MSBA</span>
        </div>
      </div>
      
      <div className="hero-title-container">
        <h1 className="type-exhibition-title hero-title">
          <span>Cesar</span><br />
          <span>Diez</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;
