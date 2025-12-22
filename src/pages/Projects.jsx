import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Projet 1',
      description: 'Description du premier projet',
      technologies: ['React', 'JavaScript', 'CSS'],
      link: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Projet 2',
      description: 'Description du deuxième projet',
      technologies: ['React', 'Vite', 'API'],
      link: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Projet 3',
      description: 'Description du troisième projet',
      technologies: ['React', 'Router', 'Hooks'],
      link: '#',
      github: '#'
    }
  ]

  return (
    <div className="projects">
      <h1>Mes Projets</h1>
      
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
                Voir le projet
              </a>
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects
