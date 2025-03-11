# Dashboard des Widgets

Une application web moderne permettant de créer et gérer des widgets personnalisés organisés en menus. Construite avec React et Vite, elle offre une interface élégante avec support des thèmes clair et sombre.

## 🌟 Fonctionnalités

- ✨ Interface utilisateur moderne et responsive
- 🌓 Thème clair/sombre avec transition fluide
- 📱 Widgets personnalisables avec icônes et liens
- 📂 Organisation en menus personnalisables
- 🎯 Ajout/suppression de widgets via une interface modale
- 💫 Animations élégantes pour une meilleure expérience utilisateur

## 🚀 Technologies Utilisées

- [React](https://reactjs.org/) - Bibliothèque UI
- [Vite](https://vitejs.dev/) - Build tool et serveur de développement
- [Material-UI](https://mui.com/) - Composants UI et icônes
- [Emotion](https://emotion.sh/) - Styling

## 📦 Installation

1. Clonez le repository :
```bash
git clone [url-du-repo]
cd [nom-du-dossier]
```

2. Installez les dépendances :
```bash
npm install
```

3. Lancez l'application en mode développement :
```bash
npm run dev
```

L'application sera accessible à l'adresse `http://localhost:5173` (ou un autre port si celui-ci est occupé).

## 🌍 Accès Réseau

Pour accéder à l'application depuis d'autres appareils sur le réseau local :

1. Lancez avec la commande :
```bash
npm run dev
```

2. L'application sera accessible via les adresses IP affichées dans la console.

## 🚀 Déploiement sur Internet

### Déploiement sur Vercel (Recommandé)

Vercel est la solution la plus simple pour déployer votre application :

1. Créez un compte sur [Vercel](https://vercel.com/signup)

2. Installez Vercel CLI globalement :
```bash
npm install -g vercel
```

3. Connectez-vous à votre compte Vercel :
```bash
vercel login
```

4. Préparez votre application pour la production :
```bash
npm run build
```

5. Déployez sur Vercel :
```bash
vercel
```

6. Pour les déploiements suivants :
```bash
vercel --prod
```

Votre application sera automatiquement déployée et accessible via une URL du type : `https://votre-app.vercel.app`

### Configuration du Domaine Personnalisé

Pour utiliser votre propre nom de domaine :

1. Allez dans le tableau de bord Vercel
2. Sélectionnez votre projet
3. Cliquez sur "Settings" > "Domains"
4. Ajoutez votre domaine et suivez les instructions pour configurer les DNS

### Alternatives de Déploiement

#### Netlify
1. Créez un compte sur [Netlify](https://www.netlify.com/)
2. Installez Netlify CLI :
```bash
npm install -g netlify-cli
```
3. Connectez-vous :
```bash
netlify login
```
4. Déployez :
```bash
netlify deploy
```

#### GitHub Pages
1. Ajoutez dans `vite.config.js` :
```javascript
export default defineConfig({
  base: '/nom-du-repo/',
  // ... autres configurations
})
```
2. Créez un fichier `.github/workflows/deploy.yml` pour le déploiement automatique
3. Activez GitHub Pages dans les paramètres du repository

### Variables d'Environnement

Si votre application utilise des variables d'environnement :

1. Créez un fichier `.env.production` :
```env
VITE_API_URL=https://votre-api.com
```

2. Dans Vercel, configurez les variables d'environnement :
   - Dashboard > Project Settings > Environment Variables
   - Ajoutez vos variables

### Bonnes Pratiques pour la Production

1. **Performance**
   - Optimisez les images et assets
   - Activez la compression Gzip/Brotli
   - Utilisez le lazy loading pour les composants

2. **Sécurité**
   - Configurez les en-têtes de sécurité
   - Utilisez HTTPS
   - Protégez vos variables d'environnement

3. **Monitoring**
   - Intégrez des outils d'analyse (Google Analytics, Plausible)
   - Configurez la surveillance des erreurs (Sentry)

4. **SEO**
   - Ajoutez les meta tags appropriés
   - Générez un sitemap
   - Configurez le robots.txt

### Maintenance

Pour mettre à jour votre application en production :

1. Testez localement :
```bash
npm run build
npm run preview
```

2. Déployez les modifications :
```bash
vercel --prod
```

3. Vérifiez le déploiement :
   - Testez les fonctionnalités principales
   - Vérifiez les performances
   - Surveillez les logs d'erreur

## 🛠️ Scripts Disponibles

- `npm run dev` - Lance le serveur de développement
- `npm run build` - Crée une version de production
- `npm run preview` - Prévisualise la version de production
- `npm run lint` - Vérifie le code avec ESLint

## 🎨 Personnalisation

### Widgets
- Ajoutez des widgets via le bouton "+" dans chaque menu
- Personnalisez le titre, l'URL et l'icône (emoji) de chaque widget
- Les widgets par défaut ne peuvent pas être supprimés

### Menus
- Créez de nouveaux menus via le bouton "Nouveau menu"
- Organisez vos widgets par catégories

## 📝 License

MIT License - voir le fichier [LICENSE.md](LICENSE.md) pour plus de détails.

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou soumettre une pull request.