import React from 'react';
import '../styles/components/About.css';
import profileImage from '../assets/cesar-profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="about-layout">
          <div className="about-label-column">
            <span className="type-museum-label">Curator's Note</span>
            <h2 className="type-gallery-header" style={{border: 'none', padding: 0}}>The<br />Profile</h2>
            
            <div className="profile-image-container">
              <img src={profileImage} alt="Cesar Diez" className="profile-image" />
              <span className="profile-caption">Cesar Diez, 2025</span>
            </div>
          </div>
          
          <div className="curator-note-container">
            <p className="type-body-text" style={{marginBottom: '2rem'}}>
              Cesar Diez operates at the intersection of rigorous financial strategy and advanced data analytics. His work is characterized by a methodical approach to risk and a creative application of quantitative methods.
            </p>
            <p className="type-body-text">
              Currently at American Express, he leverages an MSBA background to transform raw data into actionable business intelligence, ensuring robust portfolio health and strategic growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
