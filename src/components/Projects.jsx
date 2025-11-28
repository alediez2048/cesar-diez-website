import React from 'react';
import '../styles/components/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Risk Model',
      description: 'Predictive machine learning assessment.',
      tech: 'Python / ML',
      year: '2024'
    },
    {
      title: 'Financial Dashboard',
      description: 'Real-time executive KPI visualization.',
      tech: 'Tableau / SQL',
      year: '2023'
    },
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="type-gallery-header">Selected<br />Works</h2>
        <div className="gallery-grid">
          {projects.map((project, index) => (
            <div key={index} className="gallery-item">
              <div className="gallery-visual"></div>
              <h3 className="gallery-title">{project.title}</h3>
              <div className="gallery-meta">
                <span>{project.tech}</span>
                <span>{project.year}</span>
              </div>
              <p className="type-body-text" style={{marginTop: '1rem', fontSize: '1rem'}}>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
