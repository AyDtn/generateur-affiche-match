![Version](https://img.shields.io/badge/version-1.0.0-blue)
![Statut](https://img.shields.io/badge/status-en%20cours-yellow)<br>
![Tech](https://img.shields.io/badge/Made%20with-React-blue)
![Déployé sur Vercel](https://img.shields.io/badge/deploy-Vercel-black)<br>
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)


## Licence

Ce projet est sous licence [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).

Vous êtes libre de l’utiliser, de le modifier, de le partager, tant que toute distribution du projet ou d’une version modifiée respecte cette même licence et inclut le code source.

**Toute utilisation à des fins commerciales ou professionnelles est strictement interdite.** Le projet est destiné exclusivement à un usage personnel, éducatif ou associatif non lucratif.

---

Application fonctionnelle : https://generateur-affiche-match.vercel.app/

---

# Générateur d’Affiches de Match

Ce projet est une application web conçue pour générer dynamiquement des affiches de scores sportifs à partir d’un formulaire de saisie et d’un modèle graphique.  
Il est pensé pour une utilisation simple, rapide et esthétique par des clubs, organisateurs de tournois, associations sportives ou tout autre cadre nécessitant une communication visuelle autour de résultats de match.

Développé avec React et Vite, il permet de générer des visuels de qualité professionnelle directement depuis un navigateur, sans compétence graphique.

---

## Objectif du projet

Ce générateur répond à un besoin courant : produire des affiches de scores visuellement harmonisées, facilement exportables, sans avoir à utiliser des outils comme Photoshop, Canva ou PowerPoint à chaque match.

L'application permet :
- De **saisir rapidement les noms des équipes et leurs scores**
- D’**automatiser l’affichage** de ces données sur un modèle graphique
- De **choisir automatiquement un fond adapté** selon le nombre de matchs
- D’**exporter le rendu final en image PNG**, prête à être publiée ou imprimée

---

## Fonctionnalités

- **Formulaire de saisie** des scores et équipes pour 1 à 10 matchs ou plus
- **Ajout et suppression de matchs à la volée**
- **Positionnement précis des éléments** sur l’image à l’aide de coordonnées prédéfinies
- **Affichage des données** sur une **image de fond dynamique**
- **Téléchargement en PNG haute résolution du rendu final
- **Responsivité partielle** pour consultation sur différents écrans
- **Prévisualisation immédiate** dans le navigateur

---

## Choix techniques

- **React** pour sa simplicité de mise en place avec Vite, son efficacité en interface dynamique
- **Vite** pour un environnement de développement moderne et rapide
- **html-to-image** pour capturer le rendu HTML dans une image exportable
- **Antonio (Google Fonts)** pour une police moderne, inspirée de modèles graphiques sportifs comme ceux utilisés sur Canva
- **Styles CSS figés** pour garantir un rendu constant quelle que soit la longueur des noms d'équipes

---

## Spécifications de style (figées)

Élément        | Couleur    | Taille | Police   | Position (X,Y)
---------------|------------|--------|----------|------------------------
Nom équipe 1   | #004096    | 36px   | Antonio  | 340, Y variable
Nom équipe 2   | #004096    | 36px   | Antonio  | 740, Y variable
Score équipe 1 | #FFFFFF    | 48px   | Antonio  | 70, Y variable
Score équipe 2 | #FFFFFF    | 48px   | Antonio  | 1010, Y variable

**Décalage vertical (Y)** :  
- Match 1 : 347  
- Match 2 : 467  
- Match 3 : 587  
- Match N : Y = 347 + (N - 1) + 120

---

## Structure des fichiers

```
generateur-affiche-match/
├── public/
│   ├── background1.png
│   ├── background2.png
│   ├── background3.png
│   ├── favicon.png
├── src/
│   ├── App.jsx          # Composant principal React
│   ├── App.css          # Feuille de style associée
│   ├── main.jsx         # Point d’entrée Vite/React
│   └── index.css
├── package.json
├── vite.config.js
├── README.md
├── LICENCE
```

---

Voici le détail de la structure du projet, avec le rôle de chaque fichier :

### Dossier `public/`

- `background1.png`, `background2.png`, `background3.png`  
  Images de fond utilisées selon le nombre de matchs (1, 2 ou 3). Elles servent de modèle graphique pour l'affiche.
- `favicon.svg`  
  Logo du club de sport pour lequel cette application web a été initialement créée.

---

### Dossier `src/`

- `App.jsx`  
  Fichier principal de l'application. Contient :
  - Le formulaire de saisie des matchs
  - La logique de positionnement des scores/équipes
  - Le rendu dynamique de l’affiche sur fond d’image
  - Le bouton de téléchargement PNG
- `App.css`  
  Styles principaux pour l'application. Gère :
  - La mise en page du panneau de contrôle
  - Le positionnement fixe et précis des éléments sur l’image
  - Les couleurs, tailles de texte, espacement
- `main.jsx`  
  Point d’entrée de l’application React. Monte le composant `App` dans le DOM.
- `index.css`  
  Styles globaux très simples (réinitialisation minimale).

---

### Racine du projet

- `index.html`  
  Gabarit HTML initial utilisé par Vite pour insérer le rendu React. Définit la police, les métadonnées, etc.
- `package.json`  
  Liste les dépendances (`react`, `vite`, `html-to-image`...) et contient les scripts de démarrage et de build.
- `package-lock.json`  
  Fichier généré automatiquement par npm pour verrouiller les versions exactes des dépendances.
- `vite.config.js`  
  Configuration minimale pour Vite.
- `eslint.config.js` *(optionnel selon l'environnement)*  
  Configuration de linting pour maintenir un code propre.
- `.gitignore`  
  Fichier qui indique à Git les fichiers à ignorer (ex: `node_modules`, `dist`, etc.)
- `README.md`  
  Fichier que vous lisez actuellement. Il explique le projet, son installation, son fonctionnement, et son auteur.

---

## Lancement en local

1. Cloner le dépôt :
```
git clone https://github.com/votre-utilisateur/nom-du-depot.git
cd nom-du-depot
```

3. Installer les dépendances :
```
npm install
```

5. Lancer le serveur de développement :
```
npm run dev
```

7. Accéder à l’application dans le navigateur :
```
http://localhost:5173
```

---

## Déploiement sur Vercel

1. Créez un compte (gratuit) sur https://vercel.com
2. Connectez votre compte GitHub à Vercel
3. Cliquez sur "Add New Project"
4. Sélectionnez le dépôt contenant ce projet (generateur-affiche-match)
5. Vercel détectera automatiquement Vite comme framework
6. Laissez les paramètres par défaut et cliquez sur "Deploy"

Une URL publique sera générée automatiquement, par exemple :
```
https://generateur-affiche-match.vercel.app
```

---

## Choix de rester sur une version Web

Bien qu’il soit techniquement possible de transformer cette application en version exécutable pour Windows, macOS, Android ou iOS, le choix a été fait de la laisser sous forme de web app.
Ce choix s’explique par plusieurs raisons pratiques et stratégiques :

- Accessibilité universelle : Une simple URL suffit pour accéder à l’outil, sans installation ni configuration sur l’appareil de l’utilisateur.
- Simplicité de mise à jour : Une seule version est maintenue côté serveur. Toute mise à jour est immédiatement disponible pour tous les utilisateurs.
- Gain de temps et de ressources : Pas besoin de gestion des builds pour chaque système (Windows, macOS, Android, iOS), ni de passer par les étapes de validation des stores.
- Cohérence graphique garantie : Le rendu visuel est contrôlé et identique quel que soit l’appareil utilisé, tant que le navigateur est moderne.

### Comparatif des options

| Plateforme        | Facilité de mise en place | Nécessite une installation | Maintenance | Avantages | Inconvénients |
|-------------------|---------------------------|-----------------------------|-------------|-----------|---------------|
| Web (React + Vite) | Très facile avec Vercel | Non | Centralisée | Accessible partout, rapide à déployer | Dépend du navigateur |
| Windows (.exe via Electron) | Complexité moyenne | Oui | Multi-plateforme | Accès hors-ligne, intégration système | Fichier lourd, dépendance à Node |
| macOS (.app via Electron) | Complexité moyenne | Oui | Multi-plateforme | Accès hors-ligne, intégration système | Signature requise, notarisation Apple |
| Android (via WebView ou PWA) | Configuration spécifique | Oui (APK) | Stores & compatibilité | installation sur téléphone | Publication Play Store, fragmentation Android |
| iOS (PWA ou WebView dans App) | Très contraignant | Oui (IPA) | App Store strict | Installation possible, icône sur écran d’accueil | Règles Apple restrictives, coût développeur |

Ainsi, la version web reste la plus adaptée pour un outil simple, efficace, régulièrement mis à jour et partagé entre utilisateurs sans contrainte technique.
Ce choix s’aligne avec les objectifs initiaux du projet : rapidité, accessibilité et fiabilité.

---

## Auteur

Ce projet, est librement utilisable et adaptable dans un cadre éducatif, personnel et non lucratif.

Développé par **DANTAN Aymeric**.
