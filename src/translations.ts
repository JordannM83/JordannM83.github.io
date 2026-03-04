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
  backend: string;
  database: string;
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
  project4Title: string;
  project4Desc: string;
  project5Title: string;
  project5Desc: string;
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
      reactTitle: '🚀 Full Stack & Backend',
      reactDesc: 'Développement complet d\'applications et architecture serveur',
      jsTitle: '🔒 Cybersécurité',
      jsDesc: 'Sécurité des systèmes et protection des données',
      designTitle: '🎨 Graphisme',
      designDesc: 'Création visuelle et design graphique'
    },
    
    // About
    about: {
      title: 'À propos de moi',
      whoAmI: 'Qui suis-je ?',
      whoAmIDesc: 'Passionné par le développement web, je crée des applications modernes et performantes en utilisant les dernières technologies.',
      skills: 'Compétences',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Base de données',
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
      project1Title: '🧠 Holbies Learning Hub',
      project1Desc: 'Système de quiz interactif pour l\'apprentissage technique. Développé avec FastAPI et PostgreSQL, il inclut un système de correction IA avancé pour les questions à réponse libre. Interface immersive avec dashboard de performance.',
      project2Title: '📱 Mnesya',
      project2Desc: 'Application mobile de rappel pour les personnes âgées et leurs aidants. Développée avec React Native et FastAPI, elle offre une interface ultra-simple avec gros boutons, notifications intelligentes et système de couplage sécurisé.',
      project3Title: '🏠 HBnB - Holberton Project',
      project3Desc: 'Application de location d\'hébergements développée dans le cadre du cursus Holberton School. Implémente une application web complète avec API REST, authentification JWT, ORM SQLAlchemy et frontend interactif.',
      project4Title: '🎃 404 Souls Not Found',
      project4Desc: 'Escape game d\'Halloween sur le thème de la programmation. Jeu interactif avec 6 énigmes (Python, SQL, Cybersécurité), système de screamer, tableau des scores et interface effrayante avec effets sonores.',
      project5Title: '🔧 Simple Shell',
      project5Desc: 'Interpréteur de commandes Unix développé en C reproduisant les fonctionnalités de /bin/sh. Shell minimal avec exécution de commandes, gestion du PATH, variables d\'environnement et commandes intégrées.',
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
      reactTitle: '🚀 Full Stack & Backend',
      reactDesc: 'Full-stack development and server architecture',
      jsTitle: '🔒 Cybersecurity',
      jsDesc: 'Systems security and data protection',
      designTitle: '🎨 Graphic Design',
      designDesc: 'Visual creation and graphic design'
    },
    
    // About
    about: {
      title: 'About Me',
      whoAmI: 'Who am I?',
      whoAmIDesc: 'Passionate about web development, I create modern and high-performance applications using the latest technologies.',
      skills: 'Skills',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
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
      project1Title: '🧠 Holbies Learning Hub',
      project1Desc: 'Interactive quiz system for technical learning. Built with FastAPI and PostgreSQL, including an advanced AI correction system for open-ended questions. Immersive interface with performance dashboard.',
      project2Title: '📱 Mnesya',
      project2Desc: 'Mobile reminder application for elderly people and their caregivers. Built with React Native and FastAPI, featuring an ultra-simple interface with large buttons, smart notifications, and secure pairing system.',
      project3Title: '🏠 HBnB - Holberton Project',
      project3Desc: 'Accommodation rental application developed as part of the Holberton School curriculum. Complete web application with REST API, JWT authentication, SQLAlchemy ORM, and interactive frontend.',
      project4Title: '🎃 404 Souls Not Found',
      project4Desc: 'Halloween-themed programming Escape Game. Interactive game with 6 puzzles (Python, SQL, Cybersecurity), screamer system, leaderboard, and spooky interface with sound effects.',
      project5Title: '🔧 Simple Shell',
      project5Desc: 'Unix command interpreter developed in C replicating /bin/sh functionality. Minimal shell with command execution, PATH management, environment variables, and built-in commands.',
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
