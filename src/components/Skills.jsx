import React from 'react';
import '../styles/components/Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Finance',
      skills: ['Credit Risk Modeling', 'Financial Analysis', 'Portfolio Strategy', 'Risk Management'],
    },
    {
      title: 'Data Analytics',
      skills: ['Machine Learning', 'Statistical Analysis', 'Predictive Modeling', 'Data Visualization'],
    },
    {
      title: 'Tools',
      skills: ['Python', 'SQL', 'Tableau', 'Excel', 'R'],
    },
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="type-gallery-header">Technical<br />Inventory</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div key={index} className="skill-category">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="skill-item">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
