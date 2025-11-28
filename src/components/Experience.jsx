import React from 'react';
import '../styles/components/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'American Express',
      role: 'Credit Risk Strategy',
      date: 'Present',
      description: 'Leading strategic initiatives in credit risk management, utilizing advanced data analytics to optimize portfolio performance and minimize exposure.'
    },
    {
      company: 'Previous Company',
      role: 'Data Analyst',
      date: '2021 - 2023',
      description: 'Analyzed large datasets to identify market trends and customer behaviors, directly influencing product development roadmaps.'
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="type-gallery-header">Professional<br />Timeline</h2>
        <div className="timeline-container">
          {experiences.map((exp, index) => (
            <div key={index} className="timeline-entry">
              <div className="timeline-date">{exp.date}</div>
              <div className="timeline-header">
                <h3 className="timeline-role">{exp.role}</h3>
                <div className="timeline-company">{exp.company}</div>
              </div>
              <p className="timeline-description">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
