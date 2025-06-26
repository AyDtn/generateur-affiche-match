![Version](https://img.shields.io/badge/version-1.2.0-blue)
![Statut](https://img.shields.io/badge/status-released-brightgreen)<br>
![Tech](https://img.shields.io/badge/Made%20with-React-blue)
![Déployé sur Vercel](https://img.shields.io/badge/deploy-Vercel-black)<br>
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## Version 1.2.0

- **Saisie assistée des équipes** : liste déroulante (`<datalist>`) pour le choix des équipes, tout en conservant la saisie libre.
- **Sélecteur dynamique de fonds** : choix du dossier `PosterX` (Poster1, Poster2, …) via un `<select>` pour modifier l'image de fond, sans passer par une modification au code.
- **Import automatique via `import.meta.glob`** : tous les fonds présents dans `src/assets/Posters/Poster*/` sont détectés et chargés.
- **Viewport fixe desktop** redimensionné sur mobile (`<meta viewport width=1080, initial-scale=0.5>`).
- **Centrage des contrôles** (ajout, sélecteur, téléchargement) grâce à `justify-content: center`.
- **Dark mode forcé** via `meta color-scheme` et CSS `color-scheme: dark`.
- **Bumps Git** : version `1.2.0`, branche `release/v1.2.0`, tag annoté `v1.2.0`.

---

## Licence

Ce projet est sous licence [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).

Vous êtes libre de l’utiliser, de le modifier et de le partager, à condition que toute distribution respecte cette même licence et inclue le code source.  
**Toute utilisation à des fins commerciales ou professionnelles est interdite.**

---

Application en ligne : https://generateur-affiche-match.vercel.app/

---

# Générateur d’Affiches de Match

Cette application web génère des affiches de scores sportifs à partir d’un formulaire.  
Pensée pour une utilisation rapide et esthétique par des clubs, associations ou organisateurs de tournois.

Développée en **React** avec **Vite**, elle offre un rendu professionnel exportable en PNG, sans compétence graphique requise.

---

## Objectif

Créer facilement des affiches de scores harmonisées, sans outils de PAO :

- Saisie des noms d’équipes et scores  
- Suggestions de noms (datalist) ou saisie libre  
- Choix automatique de fonds selon le nombre de matchs  
- Export haute résolution en PNG  
- Affichage fixe desktop, zoom mobile  

---

## Fonctionnalités principales

- **Ajout / suppression** de lignes de match  
- **Labels « Match N »** pour chaque ligne  
- **Saisie libre** ou **suggestions** d’équipes  
- **Sélecteur de fonds** dynamiques (Poster1, Poster2, …)  
- **Import glob** pour détection automatique des fichiers  
- **Téléchargement PNG** (1080px × hauteur variable)  
- **Dark mode** forcé et **contrôles centrés**  
- **Zoom natif** sur mobile, layout fixe desktop  

---

## Choix techniques

- **React** pour le rendu interactif  
- **Vite** pour un dev-server ultra-rapide  
- **html-to-image** pour exporter le DOM en image  
- **Google Font “Antonio”** pour le style sportif  
- **CSS variables et flexbox** pour un layout ajustable  

---

## Spécifications de style

| Élément          | Couleur  | Taille | Police   | Position (X, Y)     |
|------------------|----------|--------|----------|---------------------|
| Nom équipe 1     | #004096  | 36px   | Antonio  | 340, Y variable     |
| Nom équipe 2     | #004096  | 36px   | Antonio  | 740, Y variable     |
| Score équipe 1   | #FFFFFF  | 48px   | Antonio  | 70, Y variable      |
| Score équipe 2   | #FFFFFF  | 48px   | Antonio  | 1010, Y variable    |

**Décalage vertical**  
Y = 347 + (n − 1) × 120

---

## Structure du projet

```
generateur-affiche-match/
├── public/
│   └── favicon.png
├── src/
│   ├── assets/
│   │   └── Posters/
│   │       ├── Poster1/…Poster2/… (FicheNmatchs.png)
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   ├── index.html
│   └── index.css
├── package.json
├── vite.config.js
├── README.md         # Ce fichier
└── LICENSE
```

---

## Installation & Lancement

```bash
git clone https://github.com/AyDtn/generateur-affiche-match.git
cd generateur-affiche-match
npm install
npm run dev
# ouvrez http://localhost:5173
```

---

## Déploiement sur Vercel

1. Connectez le repo à Vercel  
2. Sélectionnez le projet  
3. Déployez en mode Vite (paramètres par défaut)  
4. L’URL se met à jour automatiquement  

---

## Auteur

**DANTAN Aymeric**  
Projet libre pour usage personnel, éducatif et associatif.
