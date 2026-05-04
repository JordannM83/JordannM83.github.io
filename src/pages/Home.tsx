import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Home.css';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home">
      <section className="hero">
        <img src="/images/inked-code-logo.svg" alt="Jordann Miso" className="hero-logo" />
        <p className="brand-kicker">Jordann Miso</p>
        <p className="company-name">Inked Code</p>
        <h1>{t.home.welcome}</h1>
        <p className="subtitle">{t.home.subtitle}</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">{t.home.viewProjects}</a>
          <a href="#contact" className="btn btn-secondary">{t.home.contactMe}</a>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>{t.home.reactTitle}</h3>
          <p>{t.home.reactDesc}</p>
        </div>
        <div className="feature-card">
          <h3>{t.home.jsTitle}</h3>
          <p>{t.home.jsDesc}</p>
        </div>
        <div className="feature-card">
          <h3>{t.home.designTitle}</h3>
          <p>{t.home.designDesc}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
