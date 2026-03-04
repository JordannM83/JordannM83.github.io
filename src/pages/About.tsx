import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './About.css';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about">
      <h1>{t.about.title}</h1>
      
      <section className="about-section">
        <h2>{t.about.whoAmI}</h2>
        <p>
          {t.about.whoAmIDesc}
        </p>
      </section>

      <section className="about-section">
        <h2>{t.about.skills}</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>{t.about.frontend}</h3>
            <ul>
              <li>React</li>
              <li>JavaScript ES6+</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>{t.about.responsiveDesign}</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>{t.about.backend}</h3>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>C</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>{t.about.database}</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>SQLAlchemy</li>
              <li>Alembic</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>{t.about.others}</h3>
            <ul>
              <li>{t.about.uiUxDesign}</li>
              <li>Trello</li>
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>npm</li>
              <li>Docker</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
