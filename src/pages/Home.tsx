import React from 'react';
import { Link } from 'react-router-dom';
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
        <div className="hero-copy">
          <Reveal delay={100}>
            <p className="brand-kicker">Jordann Miso / Inked Code</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="company-name">{t.home.heroLine}</p>
          </Reveal>
          <Reveal delay={260}>
            <h1>{t.home.welcome}</h1>
          </Reveal>
          <Reveal delay={340}>
            <p className="subtitle">{t.home.subtitle}</p>
          </Reveal>
          <Reveal className="hero-stats" delay={380}>
            <span><strong>Web</strong> {t.home.statWeb}</span>
            <span><strong>Mobile</strong> {t.home.statMobile}</span>
            <span><strong>Brand</strong> {t.home.statBrand}</span>
          </Reveal>
          <Reveal className="cta-buttons" delay={420}>
            <Link to="/projects" className="btn btn-primary">{t.home.viewProjects}</Link>
            <Link to="/contact" className="btn btn-secondary">{t.home.contactMe}</Link>
          </Reveal>
        </div>

        <Reveal className="hero-showcase" direction="scale" delay={220}>
          <div className="hero-logo-shell">
            <img src="/images/inked-code-logo.svg" alt="Jordann Miso" className="hero-logo" />
          </div>
          <div className="interface-card interface-card-main">
            <div className="window-dots"><span></span><span></span><span></span></div>
            <div className="dashboard-lines">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="dashboard-chart">
              <i></i><i></i><i></i><i></i>
            </div>
          </div>
          <div className="interface-card interface-card-side">
            <span className="pulse-dot"></span>
            <p>Design + Code</p>
          </div>
        </Reveal>
      </section>
      <section className="features">
        <Reveal className="feature-card feature-card-web" delay={0}>
          <span className="feature-index">01</span>
          <h3>{t.home.reactTitle}</h3>
          <p>{t.home.reactDesc}</p>
        </Reveal>
        <Reveal className="feature-card feature-card-site" delay={120}>
          <span className="feature-index">02</span>
          <h3>{t.home.jsTitle}</h3>
          <p>{t.home.jsDesc}</p>
        </Reveal>
        <Reveal className="feature-card feature-card-brand" delay={240}>
          <span className="feature-index">03</span>
          <h3>{t.home.designTitle}</h3>
          <p>{t.home.designDesc}</p>
        </Reveal>
      </section>
    </div>
  );
};

export default Home;
