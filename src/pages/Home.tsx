import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import Reveal from '../components/Reveal';
import './Home.css';

const Home: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="home">
      <section className="hero">
        <Reveal className="hero-logo-shell" direction="scale">
          <img src="/images/inked-code-logo.svg" alt="Jordann Miso" className="hero-logo" />
        </Reveal>
        <Reveal delay={100}>
          <p className="brand-kicker">Jordann Miso</p>
        </Reveal>
        <Reveal delay={180}>
          <p className="company-name">Inked Code</p>
        </Reveal>
        <Reveal delay={260}>
          <h1>{t.home.welcome}</h1>
        </Reveal>
        <Reveal delay={340}>
          <p className="subtitle">{t.home.subtitle}</p>
        </Reveal>
        <Reveal className="cta-buttons" delay={420}>
          <a href="#projects" className="btn btn-primary">{t.home.viewProjects}</a>
          <a href="#contact" className="btn btn-secondary">{t.home.contactMe}</a>
        </Reveal>
      </section>
      <section className="features">
        <Reveal className="feature-card" delay={0}>
          <h3>{t.home.reactTitle}</h3>
          <p>{t.home.reactDesc}</p>
        </Reveal>
        <Reveal className="feature-card" delay={120}>
          <h3>{t.home.jsTitle}</h3>
          <p>{t.home.jsDesc}</p>
        </Reveal>
        <Reveal className="feature-card" delay={240}>
          <h3>{t.home.designTitle}</h3>
          <p>{t.home.designDesc}</p>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
