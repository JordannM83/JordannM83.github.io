import './About.css'

function About() {
  return (
    <div className="about">
      <h1>À propos de moi</h1>
      
      <section className="about-section">
        <h2>Qui suis-je ?</h2>
        <p>
          Passionné par le développement web, je crée des applications modernes 
          et performantes en utilisant les dernières technologies.
        </p>
      </section>

      <section className="about-section">
        <h2>Compétences</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>Frontend</h3>
            <ul>
              <li>React</li>
              <li>JavaScript/ES6+</li>
              <li>HTML5/CSS3</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Outils</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>Vite</li>
              <li>npm/yarn</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>Autres</h3>
            <ul>
              <li>UI/UX Design</li>
              <li>Agile/Scrum</li>
              <li>Problem Solving</li>
              <li>Team Work</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
