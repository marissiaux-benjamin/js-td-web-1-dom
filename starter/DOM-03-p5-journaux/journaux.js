// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
DOM - PREPA 5 : « Journaux » : construire une liste de journaux
1. Stocker les urls de ces trois journaux français dans un tableau :
	- "http://lemonde.fr",
	- "http://lefigaro.fr",
	- "http://liberation.fr"
2. Ajouter la liste des journaux sur la page, dans la div d'id "contenu"
*/
/* ATTENTION : Le balisage HTML proposé dans la solution est incorrect.
Il a sans doute été simplifié à outrance dans un souci 
de rendre la génération la plus simple possible en JS.
TODO : améliorer le balisage HTML généré !!! */

const url1 = 'http://lemonde.fr';
const url2 = 'http://lefigaro.fr';
const url3 = 'http://liberation.fr';
const urlJournaux = [url1, url2,url3];
console.log(urlJournaux);


let laListe = document.createElement('ul');
laListe.setAttribute('id', 'l');
document.getElementById('contenu').appendChild(laListe);



let lesLiens = document.createElement('li');
lesLiens.setAttribute('id', 'journal1');
lesLiens.innerHTML = 'Le <a href="http://lemonde.fr">Monde<a/>';
document.getElementById('l').appendChild(lesLiens);

let lesLiens2 = document.createElement('li');
lesLiens2.setAttribute('id', 'journal2');
lesLiens2.innerHTML = 'Le <a href="http://lefigaro.fr">Figaro<a/>'
document.getElementById('l').appendChild(lesLiens2);

let lesLiens3 = document.createElement('li');
lesLiens3.setAttribute('id', 'journal3');
lesLiens3.innerHTML = '<a href="http://liberation.fr">Libération<a/>'
document.getElementById('l').appendChild(lesLiens3);


