import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import './Projects.css';

type ProjectCategory = 'website' | 'web-app' | 'mobile-app' | 'logo' | 'graphic' | 'brand';

interface Project {
  id: number;
  category: ProjectCategory;
  title: string;
  description: string;
  technologies: string[];
  link: string;
  github: string;
  internalPath?: string;
  githubLabel?: string;
}

const Projects: React.FC = () => {
  const { language } = useLanguage();
  const [searchParams] = useSearchParams();
  const t = translations[language];
  const activeCategory = searchParams.get('category') as ProjectCategory | null;

  const categories: Array<{ id: ProjectCategory; label: string }> = [
    { id: 'website', label: t.services.websiteTitle },
    { id: 'web-app', label: t.services.webAppTitle },
    { id: 'mobile-app', label: t.services.mobileAppTitle },
    { id: 'logo', label: t.services.logoTitle },
    { id: 'graphic', label: t.services.graphicTitle },
    { id: 'brand', label: t.services.brandTitle }
  ];

  const projects: Project[] = [
    {
      id: 1,
      category: 'web-app',
      title: t.projects.project1Title,
      description: t.projects.project1Desc,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: 'https://github.com/JordannM83/hackaton'
    },
    {
      id: 2,
      category: 'mobile-app',
      title: t.projects.project2Title,
      description: t.projects.project2Desc,
      technologies: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: 'https://www.mnesya.app',
      githubLabel: t.projects.viewProject
    },
    {
      id: 4,
      category: 'web-app',
      title: t.projects.project4Title,
      description: t.projects.project4Desc,
      technologies: ['React', 'TypeScript', 'CSS3', 'Dashboard', 'UI'],
      link: '/dashboard-perso',
      github: 'https://github.com/JordannM83/Dashboard-perso',
      internalPath: '/dashboard-perso'
    }
  ];

  const visibleCategories = activeCategory
    ? categories.filter((category) => category.id === activeCategory)
    : categories;

  const renderProjectCard = (project: Project) => {
    const cardContent = (
      <>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="technologies">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-tag">{tech}</span>
          ))}
        </div>
      </>
    );

    return project.internalPath ? (
      <Link key={project.id} className="project-card" to={project.internalPath}>
        {cardContent}
      </Link>
    ) : (
      <a
        key={project.id}
        className="project-card"
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </a>
    );
  };

  return (
    <div className="projects">
      <h1>{t.projects.title}</h1>

      <div className="project-category-tabs">
        <Link className={!activeCategory ? 'category-tab active' : 'category-tab'} to="/projects">
          Tous
        </Link>
        {categories.map((category) => (
          <Link
            key={category.id}
            className={activeCategory === category.id ? 'category-tab active' : 'category-tab'}
            to={`/projects?category=${category.id}`}
          >
            {category.label}
          </Link>
        ))}
      </div>

      <div className="project-category-list">
        {visibleCategories.map((category) => {
          const categoryProjects = projects.filter((project) => project.category === category.id);

          return (
            <section className="project-category-section" key={category.id}>
              <h2>{category.label}</h2>
              {categoryProjects.length > 0 ? (
                <div className="projects-grid">
                  {categoryProjects.map(renderProjectCard)}
                </div>
              ) : (
                <p className="empty-project-category">
                  {language === 'fr'
                    ? 'Aucun projet publié dans cette catégorie pour le moment.'
                    : 'No published project in this category yet.'}
                </p>
              )}
            </section>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
