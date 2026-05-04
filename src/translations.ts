// Types pour les traductions
export interface NavTranslations {
  home: string;
  about: string;
  services: string;
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
  journeyTitle: string;
  journeyDesc: string;
  workTitle: string;
  workDesc: string;
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

export interface ServicesTranslations {
  title: string;
  subtitle: string;
  websiteTitle: string;
  websiteDesc: string;
  webAppTitle: string;
  webAppDesc: string;
  mobileAppTitle: string;
  mobileAppDesc: string;
  logoTitle: string;
  logoDesc: string;
  graphicTitle: string;
  graphicDesc: string;
  brandTitle: string;
  brandDesc: string;
  ctaTitle: string;
  ctaText: string;
  ctaButton: string;
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
  services: ServicesTranslations;
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
      services: 'Services',
      projects: 'Projets',
      contact: 'Contact'
    },
    
    // Home
    home: {
      welcome: 'Développement web, mobile et cybersécurité',
      subtitle: 'Des interfaces nettes, du code solide et une identité visuelle marquée.',
      viewProjects: 'Voir mes projets',
      contactMe: 'Me contacter',
      reactTitle: 'Full Stack & Backend',
      reactDesc: 'Développement complet d\'applications et architecture serveur',
      jsTitle: 'Cybersécurité',
      jsDesc: 'Sécurité des systèmes et protection des données',
      designTitle: 'Graphisme',
      designDesc: 'Création visuelle et design graphique'
    },
    
    // About
    about: {
      title: 'À propos de moi',
      whoAmI: 'Qui suis-je ?',
      whoAmIDesc: 'Je suis Jordann Miso, développeur d\'applications web et web mobile diplômé d\'une formation à Holberton School. Je crée des sites, applications, logos, supports graphiques, designs commerciaux comme des cartes de visite, et chartes graphiques pour construire une identité professionnelle cohérente.',
      journeyTitle: 'Formation',
      journeyDesc: 'Mon parcours à Holberton School m\'a formé aux bases solides du développement logiciel : logique algorithmique, backend, frontend, bases de données, travail en équipe et construction de projets complets.',
      workTitle: 'Ce que je fais',
      workDesc: 'Avec Inked Code, je développe des sites vitrines, applications web et applications mobiles. J\'accompagne aussi la partie visuelle avec logo, graphisme et charte graphique pour livrer une présence digitale cohérente.',
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
    services: {
      title: 'Services',
      subtitle: 'Je conçois des supports digitaux et visuels pour lancer, structurer ou renforcer une présence professionnelle.',
      websiteTitle: 'Sites web vitrine',
      websiteDesc: 'Création de sites modernes, responsives et clairs pour présenter une activité, une marque, un portfolio ou une offre.',
      webAppTitle: 'Applications web',
      webAppDesc: 'Développement d\'interfaces web sur mesure avec formulaires, dashboards, espaces utilisateurs ou outils métier.',
      mobileAppTitle: 'Applications mobiles',
      mobileAppDesc: 'Conception d\'applications mobiles ergonomiques, pensées pour une utilisation simple sur smartphone et tablette.',
      logoTitle: 'Logo',
      logoDesc: 'Création ou refonte de logo avec une identité reconnaissable, exploitable sur le web, les réseaux et les supports imprimés.',
      graphicTitle: 'Graphisme',
      graphicDesc: 'Réalisation de visuels, compositions, supports de communication et éléments graphiques cohérents avec votre univers.',
      brandTitle: 'Charte graphique',
      brandDesc: 'Définition des couleurs, typographies, règles d\'usage et éléments visuels pour garder une image homogène.',
      ctaTitle: 'Un projet à lancer ?',
      ctaText: 'Je peux vous accompagner de l\'idée au rendu final, avec une approche claire et adaptée à votre besoin.',
      ctaButton: 'Demander un devis'
    },

    // Projects
    projects: {
      title: 'Mes Projets',
      project1Title: 'Holbies Learning Hub',
      project1Desc: 'Système de quiz interactif pour l\'apprentissage technique. Développé avec FastAPI et PostgreSQL, il inclut un système de correction IA avancé pour les questions à réponse libre. Interface immersive avec dashboard de performance.',
      project2Title: 'Mnesya',
      project2Desc: 'Application mobile de rappel pour les personnes âgées et leurs aidants. Développée avec React Native et FastAPI, elle offre une interface ultra-simple avec gros boutons, notifications intelligentes et système de couplage sécurisé.',
      project3Title: 'HBnB - Holberton Project',
      project3Desc: 'Application de location d\'hébergements développée dans le cadre du cursus Holberton School. Implémente une application web complète avec API REST, authentification JWT, ORM SQLAlchemy et frontend interactif.',
      project4Title: 'Dashboard perso',
      project4Desc: 'Dashboard freelance complet pour gérer clients, devis, projets, factures, comptabilité, maintenance et paramètres société.',
      project5Title: 'Simple Shell',
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
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub'
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
      services: 'Services',
      projects: 'Projects',
      contact: 'Contact'
    },
    
    // Home
    home: {
      welcome: 'Web, mobile and cybersecurity development',
      subtitle: 'Sharp interfaces, solid code, and a marked visual identity.',
      viewProjects: 'View my projects',
      contactMe: 'Contact me',
      reactTitle: 'Full Stack & Backend',
      reactDesc: 'Full-stack development and server architecture',
      jsTitle: 'Cybersecurity',
      jsDesc: 'Systems security and data protection',
      designTitle: 'Graphic Design',
      designDesc: 'Visual creation and graphic design'
    },
    
    // About
    about: {
      title: 'About Me',
      whoAmI: 'Who am I?',
      whoAmIDesc: 'I am Jordann Miso, a web and mobile web application developer trained and graduated through Holberton School. I create websites, applications, logos, graphic assets, commercial designs such as business cards, and brand guidelines to build a consistent professional identity.',
      journeyTitle: 'Training',
      journeyDesc: 'My Holberton School background gave me solid foundations in software development: algorithms, backend, frontend, databases, teamwork, and complete project delivery.',
      workTitle: 'What I do',
      workDesc: 'With Inked Code, I build showcase websites, web applications, and mobile applications. I also support visual identity work with logos, graphic design, and brand guidelines.',
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
    
    // Services
    services: {
      title: 'Services',
      subtitle: 'I design digital and visual assets to launch, structure, or strengthen a professional presence.',
      websiteTitle: 'Showcase websites',
      websiteDesc: 'Modern, responsive, and clear websites for a business, brand, portfolio, or offer.',
      webAppTitle: 'Web applications',
      webAppDesc: 'Custom web interfaces with forms, dashboards, user areas, or business tools.',
      mobileAppTitle: 'Mobile applications',
      mobileAppDesc: 'Ergonomic mobile apps designed for simple use on smartphones and tablets.',
      logoTitle: 'Logo',
      logoDesc: 'Logo creation or redesign with a recognizable identity for web, social media, and print use.',
      graphicTitle: 'Graphic design',
      graphicDesc: 'Visuals, layouts, communication materials, and graphic elements aligned with your identity.',
      brandTitle: 'Brand guidelines',
      brandDesc: 'Colors, typography, usage rules, and visual elements to keep a consistent image.',
      ctaTitle: 'Have a project to launch?',
      ctaText: 'I can support you from idea to final delivery with a clear approach adapted to your needs.',
      ctaButton: 'Request a quote'
    },

    // Projects
    projects: {
      title: 'My Projects',
      project1Title: 'Holbies Learning Hub',
      project1Desc: 'Interactive quiz system for technical learning. Built with FastAPI and PostgreSQL, including an advanced AI correction system for open-ended questions. Immersive interface with performance dashboard.',
      project2Title: 'Mnesya',
      project2Desc: 'Mobile reminder application for elderly people and their caregivers. Built with React Native and FastAPI, featuring an ultra-simple interface with large buttons, smart notifications, and secure pairing system.',
      project3Title: 'HBnB - Holberton Project',
      project3Desc: 'Accommodation rental application developed as part of the Holberton School curriculum. Complete web application with REST API, JWT authentication, SQLAlchemy ORM, and interactive frontend.',
      project4Title: 'Personal Dashboard',
      project4Desc: 'Complete freelance dashboard to manage clients, quotes, projects, invoices, accounting, maintenance, and company settings.',
      project5Title: 'Simple Shell',
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
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      githubLabel: 'GitHub'
    },
    
    // Footer
    footer: {
      rights: 'All rights reserved.'
    }
  }
};
