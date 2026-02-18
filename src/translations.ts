// Types pour les traductions
export interface NavTranslations {
  home: string;
  about: string;
  projects: string;
  contact: string;
}

export interface HomeTranslations {
  welcome: string;
  subtitle: string;
  viewProjects: string;
  contactMe: string;
  reactTitle: string;
  reactDesc: string;
  jsTitle: string;
  jsDesc: string;
  designTitle: string;
  designDesc: string;
}

export interface AboutTranslations {
  title: string;
  whoAmI: string;
  whoAmIDesc: string;
  skills: string;
  frontend: string;
  tools: string;
  others: string;
  responsiveDesign: string;
  uiUxDesign: string;
  agile: string;
  problemSolving: string;
  teamWork: string;
}

export interface ProjectsTranslations {
  title: string;
  project1Title: string;
  project1Desc: string;
  project2Title: string;
  project2Desc: string;
  project3Title: string;
  project3Desc: string;
  viewProject: string;
  github: string;
}

export interface ContactTranslations {
  title: string;
  subtitle: string;
  description: string;
  name: string;
  email: string;
  message: string;
  send: string;
  emailLabel: string;
  linkedinLabel: string;
  githubLabel: string;
}

export interface FooterTranslations {
  rights: string;
}

export interface Translations {
  nav: NavTranslations;
  home: HomeTranslations;
  about: AboutTranslations;
  projects: ProjectsTranslations;
  contact: ContactTranslations;
  footer: FooterTranslations;
}

export type Language = 'fr' | 'en';

export interface TranslationsData {
  fr: Translations;
  en: Translations;
}

export const translations: TranslationsData = {
  fr: {
    // Header
    nav: {
      home: 'Accueil',
      about: 'À propos',
      projects: 'Projets',
      contact: 'Contact'
    },
    
    // Home
    home: {
      welcome: 'Bienvenue sur mon Portfolio',
      subtitle: 'Étudiant en développement Web & Mobile avec une passion pour la cybersécurité',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      reactTitle: '🚀 React',
      reactDesc: 'Développement d\'interfaces modernes et réactives',
      jsTitle: '💻 JavaScript',
      jsDesc: 'Maîtrise des dernières technologies JS',
      designTitle: '🎨 Design',
      designDesc: 'Création d\'expériences utilisateur intuitives'
    },
    
    // About
    about: {
      title: 'À propos de moi',
      whoAmI: 'Qui suis-je ?',
      whoAmIDesc: 'Passionné par le développement web, je crée des applications modernes et performantes en utilisant les dernières technologies.',
      skills: 'Compétences',
      frontend: 'Frontend',
      tools: 'Outils',
      others: 'Autres',
      responsiveDesign: 'Responsive Design',
      uiUxDesign: 'UI/UX Design',
      agile: 'Agile/Scrum',
      problemSolving: 'Problem Solving',
      teamWork: 'Team Work'
    },
    
    // Projects
    projects: {
      title: 'Mes Projets',
      project1Title: 'Projet 1',
      project1Desc: 'Description du premier projet',
      project2Title: 'Projet 2',
      project2Desc: 'Description du deuxième projet',
      project3Title: 'Projet 3',
      project3Desc: 'Description du troisième projet',
      viewProject: 'Voir le projet',
      github: 'GitHub'
    },
    
    // Contact
    contact: {
      title: 'Contactez-moi',
      subtitle: 'Restons en contact',
      description: 'N\'hésitez pas à me contacter pour discuter de vos projets ou opportunités.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer',
      emailLabel: '📧 Email',
      linkedinLabel: '💼 LinkedIn',
      githubLabel: '🐙 GitHub'
    },
    
    // Footer
    footer: {
      rights: 'Tous droits réservés.'
    }
  },
  
  en: {
    // Header
    nav: {
      home: 'Home',
      about: 'About',
      projects: 'Projects',
      contact: 'Contact'
    },
    
    // Home
    home: {
      welcome: 'Welcome to my Portfolio',
      subtitle: 'Web & Mobile Development Student with a passion for cybersecurity',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      reactTitle: '🚀 React',
      reactDesc: 'Building modern and responsive interfaces',
      jsTitle: '💻 JavaScript',
      jsDesc: 'Mastering the latest JS technologies',
      designTitle: '🎨 Design',
      designDesc: 'Creating intuitive user experiences'
    },
    
    // About
    about: {
      title: 'About Me',
      whoAmI: 'Who am I?',
      whoAmIDesc: 'Passionate about web development, I create modern and high-performance applications using the latest technologies.',
      skills: 'Skills',
      frontend: 'Frontend',
      tools: 'Tools',
      others: 'Others',
      responsiveDesign: 'Responsive Design',
      uiUxDesign: 'UI/UX Design',
      agile: 'Agile/Scrum',
      problemSolving: 'Problem Solving',
      teamWork: 'Team Work'
    },
    
    // Projects
    projects: {
      title: 'My Projects',
      project1Title: 'Project 1',
      project1Desc: 'Description of the first project',
      project2Title: 'Project 2',
      project2Desc: 'Description of the second project',
      project3Title: 'Project 3',
      project3Desc: 'Description of the third project',
      viewProject: 'View project',
      github: 'GitHub'
    },
    
    // Contact
    contact: {
      title: 'Contact Me',
      subtitle: 'Keep in touch',
      description: 'Feel free to contact me to discuss your projects or opportunities.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send',
      emailLabel: '📧 Email',
      linkedinLabel: '💼 LinkedIn',
      githubLabel: '🐙 GitHub'
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved.'
    }
  }
};
