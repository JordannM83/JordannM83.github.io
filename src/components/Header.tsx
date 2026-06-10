import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Header.css';

const Header: React.FC = () => {
  const { language, toggleLanguage } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = translations[language];

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    document.body.classList.toggle('nav-open', isMenuOpen);

    return () => {
      document.body.classList.remove('nav-open');
    };
  }, [isMenuOpen]);

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/about', label: t.nav.about },
    { to: '/services', label: t.nav.services },
    { to: '/projects', label: t.nav.projects },
    { to: '/contact', label: t.nav.contact }
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/images/inked-code-logo.svg" alt="Jordann Miso" className="logo-mark" />
          <span className="logo-text">
            <span className="logo-name">Jordann Miso</span>
            <span className="logo-company">Inked Code</span>
          </span>
        </Link>

        <button
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          className="menu-toggle"
          onClick={() => setIsMenuOpen((open) => !open)}
          type="button"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      <button
        aria-hidden={!isMenuOpen}
        className={isMenuOpen ? 'nav-backdrop visible' : 'nav-backdrop'}
        onClick={closeMenu}
        tabIndex={isMenuOpen ? 0 : -1}
        type="button"
      ></button>

      <nav aria-label="Navigation principale" className={isMenuOpen ? 'nav open' : 'nav'}>
        <div className="nav-panel-header">
          <div>
            <span className="nav-kicker">Menu</span>
            <p>Inked Code</p>
          </div>
          <button className="menu-close" onClick={closeMenu} type="button" aria-label="Fermer le menu">
            X
          </button>
        </div>

        <div className="nav-links">
          {links.map((link, index) => (
            <Link
              className="nav-link"
              key={link.to}
              onClick={closeMenu}
              style={{ '--nav-delay': `${index * 65}ms` } as React.CSSProperties}
              to={link.to}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
              {link.label}
            </Link>
          ))}
        </div>

        <div className="nav-panel-footer">
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
          <span>Web / Mobile / Brand</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
