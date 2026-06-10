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
  heroLine: string;
  statWeb: string;
  statMobile: string;
  statBrand: string;
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
      welcome: 'Sites, apps et identités digitales',
      subtitle: 'Je conçois des expériences web et mobiles claires, performantes et alignées avec votre image de marque.',
      heroLine: 'Design soigné. Code fiable. Présence maîtrisée.',
      statWeb: 'outils métier',
      statMobile: 'expériences fluides',
      statBrand: 'image premium',
      viewProjects: 'Découvrir les projets',
      contactMe: 'Parler de mon projet',
      reactTitle: 'Applications web',
      reactDesc: 'Interfaces sur mesure, dashboards, espaces utilisateurs et outils métier pensés pour un usage quotidien.',
      jsTitle: 'Sites vitrines',
      jsDesc: 'Sites modernes, rapides et responsives pour présenter une activité avec clarté et crédibilité.',
      designTitle: 'Identité visuelle',
      designDesc: 'Logos, supports graphiques et chartes visuelles pour construire une image cohérente et professionnelle.'
    },
    
    // About
    about: {
      title: 'À propos',
      whoAmI: 'Profil',
      whoAmIDesc: 'Je suis Jordann Miso, développeur web et mobile formé à Holberton School. Avec Inked Code, j\'accompagne les indépendants, marques et petites structures dans la création d\'interfaces digitales et d\'identités visuelles professionnelles.',
      journeyTitle: 'Formation',
      journeyDesc: 'Mon parcours m\'a apporté des bases solides en développement logiciel : logique produit, frontend, backend, bases de données et livraison de projets complets.',
      workTitle: 'Approche',
      workDesc: 'Je privilégie des solutions lisibles, maintenables et adaptées au besoin réel : un site qui présente clairement, une application qui simplifie le travail, une identité qui reste cohérente partout.',
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
      subtitle: 'Des prestations pensées pour lancer une présence crédible, améliorer un parcours utilisateur ou structurer une image de marque.',
      websiteTitle: 'Sites vitrines',
      websiteDesc: 'Création de sites clairs, rapides et responsives pour présenter une activité, une offre ou un portfolio avec impact.',
      webAppTitle: 'Applications web',
      webAppDesc: 'Développement d\'interfaces sur mesure : formulaires avancés, dashboards, espaces utilisateurs et outils internes.',
      mobileAppTitle: 'Applications mobiles',
      mobileAppDesc: 'Conception d\'applications mobiles ergonomiques, simples à utiliser et adaptées aux usages sur smartphone.',
      logoTitle: 'Logo',
      logoDesc: 'Création ou refonte de logo avec une identité nette, reconnaissable et exploitable sur tous les supports.',
      graphicTitle: 'Graphisme',
      graphicDesc: 'Réalisation de visuels, supports de communication et compositions alignés avec votre univers de marque.',
      brandTitle: 'Charte graphique',
      brandDesc: 'Définition des couleurs, typographies, règles d\'usage et éléments visuels pour garder une image homogène.',
      ctaTitle: 'Vous avez un projet ?',
      ctaText: 'Je vous aide à transformer une idée en support digital concret, propre et prêt à être utilisé.',
      ctaButton: 'Demander un échange'
    },

    // Projects
    projects: {
      title: 'Réalisations',
      project1Title: 'Holbies Learning Hub',
      project1Desc: 'Plateforme de quiz pour l\'apprentissage technique, avec correction assistée par IA, suivi des résultats et interface orientée progression.',
      project2Title: 'Mnesya',
      project2Desc: 'Application mobile de rappel pensée pour les personnes âgées et leurs aidants, avec une interface simple, des notifications utiles et un couplage sécurisé.',
      project3Title: 'HBnB - Holberton Project',
      project3Desc: 'Application de location d\'hébergements développée dans le cadre du cursus Holberton School. Implémente une application web complète avec API REST, authentification JWT, ORM SQLAlchemy et frontend interactif.',
      project4Title: 'Dashboard freelance',
      project4Desc: 'Tableau de bord complet pour centraliser clients, devis, projets, factures, comptabilité, maintenance et paramètres d\'entreprise.',
      project5Title: 'Simple Shell',
      project5Desc: 'Interpréteur de commandes Unix développé en C reproduisant les fonctionnalités de /bin/sh. Shell minimal avec exécution de commandes, gestion du PATH, variables d\'environnement et commandes intégrées.',
      viewProject: 'Voir la réalisation',
      github: 'GitHub'
    },
    
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Parlons de votre projet',
      description: 'Décrivez votre besoin, votre objectif ou l\'idée à concrétiser. Je vous répondrai avec une approche claire et adaptée.',
      name: 'Nom',
      email: 'Email',
      message: 'Message',
      send: 'Envoyer le message',
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
      welcome: 'Websites, apps and digital identities',
      subtitle: 'I design clear, performant web and mobile experiences aligned with your brand identity.',
      heroLine: 'Sharp design. Reliable code. Controlled presence.',
      statWeb: 'business tools',
      statMobile: 'fluid experiences',
      statBrand: 'premium image',
      viewProjects: 'Explore projects',
      contactMe: 'Discuss a project',
      reactTitle: 'Web applications',
      reactDesc: 'Custom interfaces, dashboards, user areas, and business tools designed for daily use.',
      jsTitle: 'Showcase websites',
      jsDesc: 'Modern, fast, responsive websites that present your activity with clarity and credibility.',
      designTitle: 'Visual identity',
      designDesc: 'Logos, graphic assets, and brand guidelines for a consistent and professional image.'
    },
    
    // About
    about: {
      title: 'About',
      whoAmI: 'Profile',
      whoAmIDesc: 'I am Jordann Miso, a web and mobile developer trained at Holberton School. Through Inked Code, I help freelancers, brands, and small businesses build professional digital interfaces and visual identities.',
      journeyTitle: 'Training',
      journeyDesc: 'My background gave me solid foundations in software development: product logic, frontend, backend, databases, and complete project delivery.',
      workTitle: 'Approach',
      workDesc: 'I focus on clear, maintainable solutions matched to real needs: a website that explains, an app that simplifies work, and an identity that stays consistent everywhere.',
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
      subtitle: 'Services designed to launch a credible presence, improve a user journey, or structure a brand image.',
      websiteTitle: 'Showcase websites',
      websiteDesc: 'Clear, fast, responsive websites to present a business, offer, or portfolio with impact.',
      webAppTitle: 'Web applications',
      webAppDesc: 'Custom interfaces with advanced forms, dashboards, user areas, and internal business tools.',
      mobileAppTitle: 'Mobile applications',
      mobileAppDesc: 'Ergonomic mobile apps designed for simple, efficient use on smartphones.',
      logoTitle: 'Logo',
      logoDesc: 'Logo creation or redesign with a sharp, recognizable identity ready for every medium.',
      graphicTitle: 'Graphic design',
      graphicDesc: 'Visual assets, communication materials, and compositions aligned with your brand universe.',
      brandTitle: 'Brand guidelines',
      brandDesc: 'Colors, typography, usage rules, and visual elements to keep a consistent image.',
      ctaTitle: 'Have a project in mind?',
      ctaText: 'I help turn an idea into a clean, concrete digital asset ready to use.',
      ctaButton: 'Start a conversation'
    },

    // Projects
    projects: {
      title: 'Selected Work',
      project1Title: 'Holbies Learning Hub',
      project1Desc: 'Technical learning quiz platform with AI-assisted correction, result tracking, and a progression-focused interface.',
      project2Title: 'Mnesya',
      project2Desc: 'Mobile reminder app designed for elderly users and caregivers, with a simple interface, useful notifications, and secure pairing.',
      project3Title: 'HBnB - Holberton Project',
      project3Desc: 'Accommodation rental application developed as part of the Holberton School curriculum. Complete web application with REST API, JWT authentication, SQLAlchemy ORM, and interactive frontend.',
      project4Title: 'Freelance Dashboard',
      project4Desc: 'Complete dashboard to centralize clients, quotes, projects, invoices, accounting, maintenance, and company settings.',
      project5Title: 'Simple Shell',
      project5Desc: 'Unix command interpreter developed in C replicating /bin/sh functionality. Minimal shell with command execution, PATH management, environment variables, and built-in commands.',
      viewProject: 'View case',
      github: 'GitHub'
    },
    
    // Contact
    contact: {
      title: 'Contact',
      subtitle: 'Let\'s discuss your project',
      description: 'Share your need, objective, or idea. I will get back to you with a clear and suitable approach.',
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send message',
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
