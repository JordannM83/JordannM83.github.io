import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import Reveal from '../components/Reveal';
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
  visual: 'learning' | 'mobile' | 'dashboard';
  metric: string;
  accent: string;
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
      github: 'https://github.com/JordannM83/hackaton',
      visual: 'learning',
      metric: 'Quiz + IA',
      accent: 'Backend'
    },
    {
      id: 2,
      category: 'mobile-app',
      title: t.projects.project2Title,
      description: t.projects.project2Desc,
      technologies: ['React Native', 'TypeScript', 'Python', 'FastAPI', 'PostgreSQL'],
      link: '#',
      github: 'https://www.mnesya.app',
      githubLabel: t.projects.viewProject,
      visual: 'mobile',
      metric: 'App mobile',
      accent: 'Care'
    },
    {
      id: 4,
      category: 'web-app',
      title: t.projects.project4Title,
      description: t.projects.project4Desc,
      technologies: ['React', 'TypeScript', 'CSS3', 'Dashboard', 'UI'],
      link: '/dashboard-perso',
      github: 'https://github.com/JordannM83/Dashboard-perso',
      internalPath: '/dashboard-perso',
      visual: 'dashboard',
      metric: 'CRM + factures',
      accent: 'SaaS'
    }
  ];

  const visibleCategories = activeCategory
    ? categories.filter((category) => category.id === activeCategory)
    : categories;

  const renderProjectCard = (project: Project, index: number) => {
    const cardContent = (
      <>
        <div className={`project-visual project-visual-${project.visual}`} aria-hidden="true">
          <div className="project-visual-topbar">
            <span></span>
            <span></span>
            <span></span>
          </div>
          {project.visual === 'mobile' ? (
            <div className="project-phone-preview">
              <div className="project-phone-notch"></div>
              <div className="project-phone-time"></div>
              <div className="project-phone-action"></div>
              <div className="project-phone-list">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          ) : (
            <div className="project-screen-preview">
              <div className="project-screen-sidebar"></div>
              <div className="project-screen-main">
                <div className="project-screen-chart"></div>
                <div className="project-screen-row"></div>
                <div className="project-screen-row short"></div>
              </div>
            </div>
          )}
          <span className="project-floating-label">{project.metric}</span>
        </div>

        <div className="project-card-body">
          <div className="project-card-heading">
            <span className="project-accent">{project.accent}</span>
            <h3>{project.title}</h3>
          </div>
          <p>{project.description}</p>
          <div className="technologies">
            {project.technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
          <span className="project-card-cta">{project.githubLabel || t.projects.viewProject}</span>
        </div>
      </>
    );

    return project.internalPath ? (
      <Reveal
        as={Link}
        key={project.id}
        className="project-card"
        delay={(index % 3) * 110}
        to={project.internalPath}
      >
        {cardContent}
      </Reveal>
    ) : (
      <Reveal
        as="a"
        key={project.id}
        className="project-card"
        delay={(index % 3) * 110}
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
      >
        {cardContent}
      </Reveal>
    );
  };

  return (
    <div className="projects">
      <Reveal>
        <h1>{t.projects.title}</h1>
      </Reveal>

      <Reveal className="project-category-tabs" delay={100}>
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
      </Reveal>

      <div className="project-category-list">
        {visibleCategories.map((category, sectionIndex) => {
          const categoryProjects = projects.filter((project) => project.category === category.id);

          return (
            <Reveal
              as="section"
              className="project-category-section"
              delay={(sectionIndex % 2) * 80}
              key={category.id}
            >
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
            </Reveal>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
