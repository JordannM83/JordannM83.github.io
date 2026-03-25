import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Projects.css';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  githubLabel?: string;
}

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects: Project[] = [
    {
      id: 1,
      title: t.projects.project1Title,
      description: t.projects.project1Desc,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: 'https://github.com/JordannM83/hackaton'
    },
    {
      id: 2,
      title: t.projects.project2Title,
      description: t.projects.project2Desc,
      technologies: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: 'https://www.mnesya.app',
      githubLabel: t.projects.viewProject
    },
    {
      id: 4,
      title: t.projects.project4Title,
      description: t.projects.project4Desc,
      technologies: ['Python', 'Flask', 'JavaScript', 'HTML5', 'CSS3', 'SQLite', 'Docker'],
      link: '#',
      github: 'https://github.com/krapaud/hackaton-syntax-horror'
    }
  ];

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
              <a href={project.github} target="_blank" rel="noopener noreferrer">
                {project.githubLabel || t.projects.github}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
