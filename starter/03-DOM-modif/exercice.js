// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE :
- https://openclassrooms.com/fr/courses/3306901-creez-des-pages-web-interactives-avec-javascript/3501891-modifiez-la-structure-de-la-page
- https://github.com/oc-courses/javascript-web
*/

/* EXERCICE RÉCAPITULATIF : 
Vous disposez d'un document HTML contenant juste un body
et un titre "Mes jeux". Écrire le code JS qui
- place dans un objet "mesJeux" les 3 jeux suivants avec leur catégorie
	* League of Legends	: jeu de stratégie/action
	* World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)
	* Call of Duty - Modern Warfare : FPS (jeu de tir)
	* Fifa 2020 : jeu de simulation
- parcourt le tableau avec une boucle pour récupérer ces infos
  et afficher dans le HTML, au chargement de la page, une liste
  d'id "jeux" créée dynamiquement qui reprend les jeux suivis de
  leur catégorie entre parenthèses  
  */

const liste = document.createElement('ul');
liste.setAttribute('id', 'jeux');
document.body.appendChild(liste);
console.log(document.getElementById('jeu'));

const lol = document.createElement('li');
lol.textContent = 'League of Legends : jeu de stratégie/action';
lol.setAttribute('id', 'League of Legends');
liste.appendChild(lol);

const wow = document.createElement('li');
wow.textContent = 'World of Warcraft : MMORPG (jeu de rôle en ligne massivement multijoueur)';
wow.setAttribute('id', 'World of Warcraft');
liste.appendChild(wow);

const cod = document.createElement('li');
cod.textContent = 'Call of Duty : FPS (jeu de tir)';
cod.setAttribute('id', 'Call of Duty');
liste.appendChild(cod);

const fifa = document.createElement('li');
fifa.textContent = 'Fifa 2020 : jeu de simulation';
fifa.setAttribute('id', 'Fifa2020');
liste.appendChild(fifa);

console.log(document.getElementById('jeux').children);


const tableau = [document.getElementById('jeux').children];




