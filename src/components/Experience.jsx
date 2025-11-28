import React from 'react';
import '../styles/components/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'American Express',
      role: 'Credit Risk Strategy',
      date: 'Present',
    },
    {
      company: 'Previous Company',
      role: 'Data Analyst',
      date: '2021 - 2023',
    },
    // Add more experience as needed
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-company">{exp.company}</div>
              <div className="experience-role">{exp.role}</div>
              <div className="experience-date">{exp.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
