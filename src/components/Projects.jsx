import React from 'react';
import '../styles/components/Projects.css';

const Projects = () => {
  const projects = [
    {
      title: 'Credit Risk Model',
      description: 'Developed a predictive model to assess credit risk using machine learning algorithms, improving approval accuracy by 15%.',
      tech: 'Python, Scikit-learn, Pandas',
    },
    {
      title: 'Financial Dashboard',
      description: 'Interactive dashboard for real-time monitoring of key financial metrics and KPIs for executive reporting.',
      tech: 'Tableau, SQL, Excel',
    },
    // Add more projects
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">{project.tech}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
