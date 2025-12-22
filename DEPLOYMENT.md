# Guide de Déploiement - GitHub Pages

## Configuration initiale

### 1. Installation des dépendances
```bash
npm install
```

### 2. Test en local
```bash
npm run dev
```
Le site sera accessible sur `http://localhost:5173`

### 3. Build du projet
```bash
npm run build
```

## Déploiement sur GitHub Pages

### Option 1: Déploiement automatique avec GitHub Actions (Recommandé)

Le fichier `.github/workflows/deploy.yml` est déjà configuré pour déployer automatiquement votre site à chaque push sur la branche `main`.

**Étapes:**

1. Poussez votre code sur GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Activez GitHub Pages dans les paramètres du repository:
   - Allez dans `Settings` > `Pages`
   - Source: sélectionnez `gh-pages` branch
   - Cliquez sur `Save`

3. Le déploiement se fera automatiquement à chaque push

### Option 2: Déploiement manuel

Si vous préférez déployer manuellement:

```bash
npm run deploy
```

Cette commande va:
- Construire le projet (`npm run build`)
- Déployer le dossier `dist` sur la branche `gh-pages`

## Configuration du repository GitHub

### Paramètres GitHub Pages
1. Allez dans `Settings` de votre repository
2. Dans le menu latéral, cliquez sur `Pages`
3. Sous "Source", sélectionnez:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Cliquez sur `Save`

### URL de votre site
Votre site sera accessible à l'adresse:
```
https://jordannm83.github.io/
```

## Structure des fichiers

```
JordannM83.github.io/
├── .github/
│   └── workflows/
│       └── deploy.yml          # Configuration GitHub Actions
├── public/
│   └── vite.svg               # Assets statiques
├── src/
│   ├── components/            # Composants réutilisables
│   │   ├── Header.jsx
│   │   ├── Header.css
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── pages/                 # Pages de l'application
│   │   ├── Home.jsx
│   │   ├── Home.css
│   │   ├── About.jsx
│   │   ├── About.css
│   │   ├── Projects.jsx
│   │   ├── Projects.css
│   │   ├── Contact.jsx
│   │   └── Contact.css
│   ├── App.jsx               # Composant principal
│   ├── App.css
│   ├── main.jsx             # Point d'entrée
│   └── index.css            # Styles globaux
├── .gitignore
├── index.html               # Template HTML
├── package.json            # Dépendances et scripts
└── vite.config.js         # Configuration Vite
```

## Scripts disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Construit le projet pour la production
- `npm run preview` - Prévisualise le build de production
- `npm run deploy` - Déploie sur GitHub Pages

## Résolution de problèmes

### Le site ne s'affiche pas correctement
1. Vérifiez que la branche `gh-pages` existe
2. Assurez-vous que GitHub Pages est activé dans les paramètres
3. Attendez quelques minutes après le déploiement

### Erreur 404 sur les routes
Si vous utilisez React Router et obtenez des erreurs 404:
- GitHub Pages ne supporte pas nativement les SPAs avec routing
- Solution: Utilisez HashRouter au lieu de BrowserRouter dans App.jsx

### Les styles ne se chargent pas
Vérifiez que le `base` dans `vite.config.js` est correctement configuré:
- Pour `username.github.io`: `base: '/'`
- Pour `username.github.io/repo-name`: `base: '/repo-name/'`

## Personnalisation

### Modifier le titre du site
Éditez le fichier `index.html`:
```html
<title>Votre Titre</title>
```

### Modifier les couleurs du thème
Éditez `src/index.css` et modifiez les variables CSS dans `:root`

### Ajouter de nouvelles pages
1. Créez un nouveau composant dans `src/pages/`
2. Ajoutez une route dans `src/App.jsx`
3. Ajoutez un lien dans `src/components/Header.jsx`

## Mises à jour

Pour mettre à jour votre site:
1. Modifiez vos fichiers
2. Commitez les changements
3. Poussez sur GitHub (déploiement automatique) OU exécutez `npm run deploy`

## Support

Pour plus d'informations:
- [Documentation Vite](https://vitejs.dev/)
- [Documentation React](https://react.dev/)
- [Documentation GitHub Pages](https://docs.github.com/pages)
