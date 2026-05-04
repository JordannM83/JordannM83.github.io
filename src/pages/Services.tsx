import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Services.css';

const Services: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const services = [
    {
      category: 'website',
      title: t.services.websiteTitle,
      description: t.services.websiteDesc
    },
    {
      category: 'web-app',
      title: t.services.webAppTitle,
      description: t.services.webAppDesc
    },
    {
      category: 'mobile-app',
      title: t.services.mobileAppTitle,
      description: t.services.mobileAppDesc
    },
    {
      category: 'logo',
      title: t.services.logoTitle,
      description: t.services.logoDesc
    },
    {
      category: 'graphic',
      title: t.services.graphicTitle,
      description: t.services.graphicDesc
    },
    {
      category: 'brand',
      title: t.services.brandTitle,
      description: t.services.brandDesc
    }
  ];

  return (
    <div className="services">
      <section className="services-hero">
        <p className="services-kicker">Inked Code</p>
        <h1>{t.services.title}</h1>
        <p>{t.services.subtitle}</p>
      </section>

      <section className="services-grid">
        {services.map((service) => (
          <Link className="service-card" key={service.title} to={`/projects?category=${service.category}`}>
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </Link>
        ))}
      </section>

      <section className="services-cta">
        <div>
          <h2>{t.services.ctaTitle}</h2>
          <p>{t.services.ctaText}</p>
        </div>
        <Link to="/contact" className="services-cta-link">
          {t.services.ctaButton}
        </Link>
      </section>
    </div>
  );
};

export default Services;
