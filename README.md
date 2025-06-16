Application fonctionnelle : https://generateur-affiche-match.vercel.app/
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

## Auteur

Ce projet, à but démonstratif et pédogagique, est librement utilisable et adaptable dans un cadre éducatif, personnel ou associatif.

Développé par **DANTAN Aymeric**.
