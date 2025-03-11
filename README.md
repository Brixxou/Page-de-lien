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

## 🚀 Déploiement

L'application est configurée pour être déployée sur Vercel :

1. Installez Vercel CLI :
```bash
npm install -g vercel
```

2. Connectez-vous à Vercel :
```bash
vercel login
```

3. Déployez l'application :
```bash
vercel
```

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
