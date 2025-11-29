import React from 'react';
import '../styles/components/About.css';
import profileImage from '../assets/cesar-profile.jpeg';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        {/* Header Section - Spans full width */}
        <div className="about-header">
          <span className="type-museum-label">Curator's Note</span>
          <h2 className="type-gallery-header" style={{border: 'none', padding: 0, marginBottom: '3rem'}}>The<br />Profile</h2>
        </div>

        {/* Content Grid - Image and Text aligned at top */}
        <div className="about-layout">
          <div className="about-label-column">
            <div className="profile-image-container">
              <img src={profileImage} alt="Cesar Diez" className="profile-image" />
              <span className="profile-caption">Cesar Diez, 2025</span>
            </div>
          </div>
          
          <div className="curator-note-container">
            <p className="type-body-text" style={{marginBottom: '2rem', marginTop: 0}}>
              Cesar Diez operates at the intersection of rigorous financial strategy and advanced data analytics. His work is characterized by a methodical approach to risk and a creative application of quantitative methods. With a foundation in global finance and a specialization in business analytics, he bridges the often-siloed worlds of technical data science and executive decision-making.
            </p>
            <p className="type-body-text" style={{marginBottom: '2rem'}}>
              Currently at American Express, he leverages an MSBA background to transform raw data into actionable business intelligence. His expertise spans credit risk modeling, portfolio optimization, and the strategic implementation of machine learning in legacy financial systems. He has successfully led initiatives that modernized risk platforms and introduced dynamic line management strategies in volatile markets.
            </p>
            <p className="type-body-text" style={{marginBottom: '2rem'}}>
              Beyond the algorithms, Cesar is a proponent of "explainable AI" in finance—advocating for models that are not just predictive but also transparent and compliant with regulatory standards. He believes that the future of fintech lies in the responsible synthesis of human intuition and algorithmic precision.
            </p>
            <p className="type-body-text">
              Available for consulting on credit strategy, data infrastructure, and financial modeling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
