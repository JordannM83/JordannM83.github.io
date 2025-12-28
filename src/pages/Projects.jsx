import { useLanguage } from '../contexts/LanguageContext'
import { translations } from '../translations'
import './Projects.css'

function Projects() {
  const { language } = useLanguage()
  const t = translations[language]

  const projects = [
    {
      id: 1,
      title: t.projects.project1Title,
      description: t.projects.project1Desc,
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: t.projects.project2Title,
      description: t.projects.project2Desc,
      technologies: ['React', 'Vite', 'API'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: t.projects.project3Title,
      description: t.projects.project3Desc,
      technologies: ['React', 'Router', 'Hooks'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <div className="projects">
      <h1>{t.projects.title}</h1>
      
      <div className="projects-grid">
        {projects.map(project => (
          <div key={project.id} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="technologies">
              {project.technologies.map((tech, index) => (
                <span key={index} className="tech-tag">{tech}</span>
              ))}
            </div>
            <div className="project-links">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                {t.projects.viewProject}
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {t.projects.github}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
