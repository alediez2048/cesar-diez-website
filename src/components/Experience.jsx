import React from 'react';
import '../styles/components/Experience.css';

const Experience = () => {
  const experiences = [
    {
      company: 'American Express',
      location: 'New York City Metropolitan Area',
      roles: [
        {
          title: 'Manager - Portfolio Analytics',
          date: 'Jul 2025 - Present',
          type: 'Full-time · Hybrid',
          description: [
            // Assuming this is a future role or current promotion based on the text provided "Jul 2025"
          ]
        },
        {
          title: 'Credit Risk Strategist',
          date: 'Feb 2023 - Present',
          type: 'Full-time · Hybrid',
          description: [
            'Partnered with product, tech, and servicing teams to implement the migration of legacy risk platforms, increasing delinquent and risky spend coverage by 20% for commercial and consumer portfolios',
            'Introduced new communication strategies based on payment reminders and line increase options to the corporate portfolio, increasing spend for pilot accounts by 12%',
            'Generated and automated monthly risk KPI reports on POA systems, improving efficiency and idea generation for unforeseen risk trends',
            'Integrated delinquent credit card variables into the business loan portfolio, allowing this team to leverage past due card variables for their risk capabilities and decisioning',
            'Developed variable controls for the commercial segment in SQL, tracking data trends, table ingestion errors'
          ]
        }
      ]
    },
    {
      company: 'A & S Capital',
      location: 'Miami-Fort Lauderdale Area',
      roles: [
        {
          title: 'Senior Analyst',
          date: 'Mar 2021 - Feb 2023',
          type: 'Full-time',
          description: [
            'Automated financial reporting by integrating Excel and QuickBooks, and developed a model showing monthly ROE',
            'Synced our CRM pipeline data to a dashboard showing our capital needs and improving closing time by 5 days',
            'Performed monthly loan portfolio reviews to ensure covenant compliance, resulting in 2x additional access to leverage',
            'Prepared models and pitch decks to sell a third of the portfolio, accounting for ~100m in debt assets sold to institutions'
          ]
        }
      ]
    },
    {
      company: 'Morgan Stanley',
      location: 'Miami-Fort Lauderdale Area',
      roles: [
        {
          title: 'Wealth Management Intern',
          date: 'Jun 2019 - Aug 2019',
          type: 'Internship',
          description: [
            'Utilized Bloomberg Terminal to perform equity analytics and reduced portfolio beta by 75 basis points',
            'Conducted DCFs and comp analysis to identify undervalued assets in the portfolio and increased their exposure',
            'Created candidate portfolios with different industry weights to compare returns from the primary portfolio'
          ]
        }
      ]
    },
    {
      company: 'International Finance Bank (IFB)',
      location: 'Miami-Fort Lauderdale Area',
      roles: [
        {
          title: 'Credit Analyst Intern',
          date: 'May 2019 - Jul 2019',
          type: 'Internship',
          description: [
            'Analyzed and presented a loan underwriting for a residential project ($400K+) to the board of directors',
            'Executed sensitivity scenarios, using Excel, for upcoming and existing loans to minimize interest rate risk',
            'Engaged in biweekly board meetings to discuss potential new clients for loan services'
          ]
        }
      ]
    },
    {
      company: 'EY',
      location: 'Caracas, Federal District, Venezuela',
      roles: [
        {
          title: 'Financial Business Analyst',
          date: 'May 2018 - Aug 2018',
          type: 'Internship', // Assuming internship based on duration/context, though text says Role
          description: [
            'Prepared a business strategy to tackle hyperinflation for the largest phone manufacturer in LATAM, Samsung',
            'Created the first big database for the company, using SQL, containing all financial data from each client',
            'Recruited a new client (QUALITY plastics) for risk management services and cash flow advisory'
          ]
        }
      ]
    }
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2 className="type-gallery-header">Professional<br />Timeline</h2>
        <div className="timeline-container">
          {experiences.map((company, index) => (
            <div key={index} className="timeline-company-group">
              {company.roles.map((role, roleIndex) => (
                <div key={roleIndex} className="timeline-entry">
                  <div className="timeline-date">{role.date}</div>
                  <div className="timeline-header">
                    <h3 className="timeline-role">{role.title}</h3>
                    <div className="timeline-company">
                      {company.company} <span className="timeline-location">· {company.location}</span>
                    </div>
                    {role.type && <div className="timeline-type">{role.type}</div>}
                  </div>
                  <ul className="timeline-description-list">
                    {role.description.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
