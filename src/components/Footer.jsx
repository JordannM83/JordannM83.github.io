import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Footer.css'

function Footer() {
  const { language } = useLanguage()
  const t = translations[language]
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} JordannM83. {t.footer.rights}</p>
        <div className="social-links">
          <a href="https://github.com/JordannM83" target="_blank" rel="noopener noreferrer">
            <img src="/images/github_logo.png" alt="GitHub" className="social-icon" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jordann-miso-64a252255/" target="_blank" rel="noopener noreferrer">
            <img src="/images/linkedin_logo.png" alt="LinkedIn" className="social-icon" />
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
