# JordannM83.github.io

Portfolio personnel développé avec React et TypeScript

## Technologies utilisées

- **React 18** - Bibliothèque JavaScript pour construire l'interface utilisateur
- **TypeScript** - Superset de JavaScript avec typage statique
- **React Router** - Gestion de la navigation
- **EmailJS** - Service d'envoi d'emails
- **Webpack 5** - Bundler de modules
- **CSS3** - Styles personnalisés

## Structure du projet

```
├── public/          # Fichiers statiques (images, favicon)
├── src/
│   ├── components/  # Composants réutilisables (Header, Footer)
│   ├── pages/       # Pages de l'application (Home, About, Projects, Contact)
│   ├── contexts/    # Contextes React (LanguageContext)
│   ├── config/      # Configuration (EmailJS)
│   ├── translations.ts  # Traductions FR/EN
│   ├── App.tsx      # Composant principal
│   ├── index.tsx    # Point d'entrée
│   └── *.css        # Fichiers de styles
├── tsconfig.json    # Configuration TypeScript
├── webpack.config.js # Configuration Webpack
└── package.json     # Dépendances et scripts

```

## Installation

```bash
# Installer les dépendances
npm install
```

## Scripts disponibles

```bash
# Démarrer le serveur de développement
npm start

# Créer la version de production
npm run build

# Déployer sur GitHub Pages
npm run deploy
```

## Fonctionnalités

- ✅ Multi-langues (Français/Anglais)
- ✅ Navigation avec React Router
- ✅ Formulaire de contact fonctionnel avec EmailJS
- ✅ Responsive Design
- ✅ TypeScript pour un code type-safe
- ✅ Déploiement automatique sur GitHub Pages

## Configuration EmailJS

Pour configurer l'envoi d'emails :
1. Créez un compte sur [EmailJS](https://www.emailjs.com/)
2. Créez un service email et un template
3. Mettez à jour les clés dans `src/config/emailjs.ts`

## Auteur

**Jordann Miso**
- GitHub: [@JordannM83](https://github.com/JordannM83)
- LinkedIn: [Jordann Miso](https://www.linkedin.com/in/jordann-miso-64a252255/)

## Licence

Ce projet est un portfolio personnel.

