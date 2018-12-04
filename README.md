# Documentation Environnement Webpack + React
![Webpack](https://www.supinfo.com/articles/resources/204459/2863/0.png)
## 1 - Pré-requis
![NodeJS](https://img.shields.io/badge/NodeJS-10.x.x-%2378e08f.svg)
![npm](https://img.shields.io/badge/npm-6.x.x-%23fc5c65.svg)
## 2 - Installation
Depuis la racine du dossier Web, faites la commande `npm run setup`.

Cette commande va lancer la `presetup` automatiquement qui exécutera un `npm install`, puis, lancera la commande de production Webpack de l'environnement.

Cela peut prendre un peu de temps
## 3 - Les commandes
- `npm run prod` : Lance le processus de production de l'environnement Webpack,

- `npm run dev` : Lance le processus de Développement de l'environnement Webpack, avec un Watcher intégré qui permet l'autocompilation des assets à la sauvegarde,

- `npm run new:component` : Lance le générateur de components.

- `npm run new:page` : Lance le générateur de pages et implémente l'import de cette page dans le point d'entré de l'Application React
et implémente aussi une route associé à celle-ci automatiquement.

## 4 - Technologies Font-End Utilisés
![Sass](https://img.shields.io/badge/Style-Sass-%23f8a5c2.svg)
![JavaScript](https://img.shields.io/badge/Script-JavaScript-%23f7d794.svg)
![React](https://img.shields.io/badge/Framework-React-%2374b9ff.svg)

## 5 - Workflow
- Les components ou les pages à la racine du dossier **src**, sont à générer avec les commandes de préférence, il faut faire la commande `npm run new:component` ou la commande `npm run new:page` suivant le besoin, un nom sera à renseigner,

- Les styles propres au component ou à la page ce modifient dans **[Page/Component]/*.sass**, chaque nouvelles feuilles de style est à importer dans le .jsx du component ou de la page

- Les styles globaux ce modifient dans **style/global/*.sass**, chaque nouvelles feuilles de style est à importer dans le **index.sass** à la racine du dossier style

- Pour les images, importez les dans le dossier de la page ou du component, puis importez leurs chemins dans le .jsx de ce dossier ou le .sass suivant le besoin
