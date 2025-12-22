import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-container">
        <p>&copy; {currentYear} JordannM83. Tous droits réservés.</p>
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
