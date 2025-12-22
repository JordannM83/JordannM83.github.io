import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <h1>JordannM83</h1>
        </Link>
        <nav className="nav">
          <Link to="/" className="nav-link">Accueil</Link>
          <Link to="/about" className="nav-link">À propos</Link>
          <Link to="/projects" className="nav-link">Projets</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
