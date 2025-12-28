import { Link } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Header.css'

function Header() {
  const { language, toggleLanguage } = useLanguage()
  const t = translations[language]

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>Jordann Miso</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">{t.nav.home}</Link>
          <Link to="/about" className="nav-link">{t.nav.about}</Link>
          <Link to="/projects" className="nav-link">{t.nav.projects}</Link>
          <Link to="/contact" className="nav-link">{t.nav.contact}</Link>
          <button onClick={toggleLanguage} className="language-toggle">
            {language === 'fr' ? '🇬🇧 EN' : '🇫🇷 FR'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
