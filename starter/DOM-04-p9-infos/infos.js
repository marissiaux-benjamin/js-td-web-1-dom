// 04-DOM : DONNEZ DU STYLE À VOS ÉLÉMENTS
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 9 : « Infos » : informations sur un élément
Récupérez la largeur et la hauteur de la section d'id "contenu"
et affichez les deux informations dans une liste
(un item pour la largeur et un item pour la hauteur)
que vous insérez dans la section d'id "infos" après le titre
*/

const div = document.getElementById('contenu');
const largeur = div.offsetWidth;
const hauteur = div.offsetHeight;

const creaListe = document.createElement('ul');
creaListe.setAttribute('id', 'l');
document.getElementById('infos').appendChild(creaListe);

const liHauteur = document.createElement('li')
liHauteur.textContent = `hauteur : ${hauteur} px`;
document.getElementById('l').appendChild(liHauteur);

const lilargeur = document.createElement('li')
lilargeur.textContent = `hauteur : ${largeur} px`;
document.getElementById('l').appendChild(lilargeur);










