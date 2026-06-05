import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import Reveal from '../components/Reveal';
import './About.css';

const About: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="about">
      <Reveal>
        <h1>{t.about.title}</h1>
      </Reveal>
      
      <Reveal as="section" className="about-section" delay={100}>
        <h2>{t.about.whoAmI}</h2>
        <p>
          {t.about.whoAmIDesc}
        </p>
      </Reveal>

      <section className="about-highlights">
        <Reveal as="article" className="about-highlight" direction="left">
          <h2>{t.about.journeyTitle}</h2>
          <p>{t.about.journeyDesc}</p>
        </Reveal>
        <Reveal as="article" className="about-highlight" direction="right" delay={120}>
          <h2>{t.about.workTitle}</h2>
          <p>{t.about.workDesc}</p>
        </Reveal>
      </section>

      <Reveal as="section" className="about-section">
        <h2>{t.about.skills}</h2>
        <div className="skills-grid">
          <Reveal className="skill-item" delay={0}>
            <h3>{t.about.frontend}</h3>
            <ul>
              <li>React</li>
              <li>TypeScript</li>
              <li>JavaScript ES6+</li>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>{t.about.responsiveDesign}</li>
            </ul>
          </Reveal>
          <Reveal className="skill-item" delay={100}>
            <h3>{t.about.backend}</h3>
            <ul>
              <li>Python</li>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>Flask</li>
              <li>FastAPI</li>
              <li>C</li>
            </ul>
          </Reveal>
          <Reveal className="skill-item" delay={200}>
            <h3>{t.about.database}</h3>
            <ul>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>SQLite</li>
              <li>SQLAlchemy</li>
              <li>Alembic</li>
            </ul>
          </Reveal>
          <Reveal className="skill-item" delay={300}>
            <h3>{t.about.others}</h3>
            <ul>
              <li>{t.about.uiUxDesign}</li>
              <li>Trello</li>
              <li>Git/GitHub</li>
              <li>VS Code</li>
              <li>npm</li>
              <li>Docker</li>
            </ul>
          </Reveal>
        </div>
      </Reveal>
    </div>
  );
};

export default About;
