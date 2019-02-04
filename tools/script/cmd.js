const colors = require('colors');
console.log(`\n\rListe de Commande :\n\
            \r===============================`.cyan);
console.log(`
                \rnpm run setup : Installe les dépendances du projet et lance l'environnement de développement.\n
                \rnpm run dev : Lance L'environnement de développement.\n
                \rnpm run prod : Lance la compilation des assets en mode prodution\n
                \rnpm run new:component : Lance un prompt pour créer un component.\n
                \rnpm run new:page : Lance un prompt pour créer une page.\n`.yellow);