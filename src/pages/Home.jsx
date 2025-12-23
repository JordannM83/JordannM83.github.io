import './Home.css'

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <h1>Bienvenue sur mon Portfolio</h1>
        <p className="subtitle">Étudiant en développement Web & Mobile avec une passion pour la cybersécurité</p>
        <div className="cta-buttons">
          <a href="#projects" className="btn btn-primary">Voir mes projets</a>
          <a href="#contact" className="btn btn-secondary">Me contacter</a>
        </div>
      </section>
      <section className="features">
        <div className="feature-card">
          <h3>🚀 React</h3>
          <p>Développement d'interfaces modernes et réactives</p>
        </div>
        <div className="feature-card">
          <h3>💻 JavaScript</h3>
          <p>Maîtrise des dernières technologies JS</p>
        </div>
        <div className="feature-card">
          <h3>🎨 Design</h3>
          <p>Création d'expériences utilisateur intuitives</p>
        </div>
      </section>
    </div>
  )
}

export default Home
