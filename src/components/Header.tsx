import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Header.css';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/images/inked-code-logo.svg" alt="Jordann Miso" className="logo-mark" />
          <span className="logo-text">
            <span className="logo-name">Jordann Miso</span>
            <span className="logo-company">Inked Code</span>
          </span>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">{t.nav.home}</Link>
          <Link to="/about" className="nav-link">{t.nav.about}</Link>
          <Link to="/services" className="nav-link">{t.nav.services}</Link>
          <Link to="/projects" className="nav-link">{t.nav.projects}</Link>
          <Link to="/contact" className="nav-link">{t.nav.contact}</Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
