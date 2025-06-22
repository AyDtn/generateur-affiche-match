![Version](https://img.shields.io/badge/version-1.1.0-blue)
![Statut](https://img.shields.io/badge/status-released-brightgreen)<br>
![Tech](https://img.shields.io/badge/Made%20with-React-blue)
![Déployé sur Vercel](https://img.shields.io/badge/deploy-Vercel-black)<br>
![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)

## Version 1.1.0

- Forçage du **mode sombre** via meta `color-scheme` et CSS `color-scheme: dark`
- Contrôle des **espacements** (entre matchs et inputs) grâce aux variables CSS `--match-spacing`, `gap`, `margin-bottom`
- Ajout de labels **« Match N »** pour chaque ligne de saisie
- **Commentaires détaillés** dans `App.jsx` et `App.css` pour faciliter la compréhension et la maintenance
- Correction du **double-scroll** et adoption du **zoom natif** sur mobile

---

## Licence

Ce projet est sous licence [GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.html).

Vous êtes libre de l’utiliser, de le modifier, de le partager, tant que toute distribution du projet ou d’une version modifiée respecte cette même licence et inclut le code source.

**Toute utilisation à des fins commerciales ou professionnelles est strictement interdite.** Le projet est destiné exclusivement à un usage personnel, éducatif ou associatif non lucratif.

---

Application fonctionnelle : https://generateur-affiche-match.vercel.app/

---

# Générateur d’Affiches de Match

Cette application web génère dynamiquement des affiches de scores sportifs à partir d’un formulaire de saisie et d’un modèle graphique.  
Pensée pour une utilisation simple, rapide et esthétique par des clubs, organisateurs de tournois, associations sportives ou tout autre besoin de communication visuelle autour de résultats de match.

Développé avec React et Vite, il fournit un rendu professionnel exportable en PNG, sans compétence graphique requise.

---

## Objectif du projet

Ce générateur répond au besoin de créer rapidement des affiches de scores harmonisées, sans passer par des outils de PAO traditionnels.

L'application permet :
- De **saisir** les noms des équipes et leurs scores
- D’**automatiser l’intégration** de ces données sur un modèle graphique
- De **sélectionner** automatiquement un fond adapté selon le nombre de matchs
- D’**exporter** le rendu final en image PNG, prêt à être partagé ou imprimé

---

## Fonctionnalités principales

- **Ajout / suppression** de lignes de match
- **Labels « Match N »** pour chaque ligne pour plus de clarté
- **Espacements** configurables via CSS variables
- **Forçage du mode sombre** quel que soit le mode de l’OS
- **Téléchargement en PNG** "haute résolution" (largeur 1080p * hauteur variable)
- **Zoom natif** sur mobile pour consultation sans casse de layout

---

## Choix techniques

- **React** pour le UI dynamique  
- **Vite** pour un dev-server ultra-rapide  
- **html-to-image** pour transformer le DOM en image  
- **Antonio (Google Fonts)** pour un style sportif  
- **CSS figé** + variables pour un rendu constant et facilement ajustable  

---

## Spécifications de style

Élément        | Couleur    | Taille | Police   | Position (X,Y)
---------------|------------|--------|----------|------------------------
Nom équipe 1   | #004096    | 36px   | Antonio  | 340, Y variable  
Nom équipe 2   | #004096    | 36px   | Antonio  | 740, Y variable  
Score équipe 1 | #FFFFFF    | 48px   | Antonio  | 70, Y variable  
Score équipe 2 | #FFFFFF    | 48px   | Antonio  | 1010, Y variable  

**Décalage vertical (Y)** :  
- Match 1 : 347  
- Match 2 : 467  
- Match 3 : 587  
- Match N : Y = 347 + (N - 1) × 120

---

## Structure des fichiers

```
generateur-affiche-match/
├── public/
│   ├── background1.png
│   ├── background2.png
│   ├── background3.png
│   └── favicon.svg
├── src/
│   ├── App.jsx         # Composant principal React avec commentaires
│   ├── App.css         # Styles principaux avec annotations
│   ├── main.jsx        # Point d’entrée Vite/React
│   └── index.css       # Reset global minimal
├── index.html          # Template HTML (inclut meta color-scheme)
├── package.json        # Dépendances & scripts (version 1.1.0)
├── vite.config.js      # Config Vite
├── .gitignore
├── README.md           # Ce fichier mis à jour
└── LICENSE             # Licence GPL v3
```

---

## Installation & Lancement

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/votre-utilisateur/generateur-affiche-match.git
   cd generateur-affiche-match
   ```

2. Installez les dépendances :
   ```bash
   npm install
   ```

3. Démarrez le serveur de développement :
   ```bash
   npm run dev
   ```

4. Ouvrez votre navigateur sur :
   ```
   http://localhost:5173
   ```

---

## Déploiement sur Vercel

1. Créez un compte sur https://vercel.com  
2. Connectez votre repo GitHub  
3. Ajoutez un nouveau projet, sélectionnez ce dépôt  
4. Vercel détecte automatiquement Vite  
5. Déployez avec les paramètres par défaut  

URL générée : https://generateur-affiche-match.vercel.app

---

## Auteur

Développé par **DANTAN Aymeric**.  
Projet libre pour un usage personnel, éducatif ou associatif non lucratif.
