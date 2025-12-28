import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './About.css'

function About() {
  const { language } = useLanguage()
  const t = translations[language]

  return (
    <div className="about">
      <h1>{t.about.title}</h1>
      
      <section className="about-section">
        <h2>{t.about.whoAmI}</h2>
        <p>
          {t.about.whoAmIDesc}
        </p>
      </section>

      <section className="about-section">
        <h2>{t.about.skills}</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <h3>{t.about.frontend}</h3>
            <ul>
              <li>React</li>
              <li>JavaScript/ES6+</li>
              <li>HTML5/CSS3</li>
              <li>{t.about.responsiveDesign}</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>{t.about.tools}</h3>
            <ul>
              <li>Git/GitHub</li>
              <li>Vite</li>
              <li>npm/yarn</li>
              <li>VS Code</li>
            </ul>
          </div>
          <div className="skill-item">
            <h3>{t.about.others}</h3>
            <ul>
              <li>{t.about.uiUxDesign}</li>
              <li>{t.about.agile}</li>
              <li>{t.about.problemSolving}</li>
              <li>{t.about.teamWork}</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
