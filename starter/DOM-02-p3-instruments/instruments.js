// 02-DOM : PARCOUREZ LE DOM
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/
/*
 DOM - PREPA 3 : « Instruments » : attributs et classes
- Créez une fonction getInfosLiens qui doit afficher :
    - le nombre total de liens dans la page web ;
    - la cible du premier et du dernier lien.
    N.B. Cette fonction doit afficher un résultat correct, quel que soit le nombre de liens présents dans la page.
- Ajoutez un nouvel instrument à la page web, puis vérifiez le nouveau résultat de votre programme.
    <li id="clavecin" class="cordes pincees">
        Le <a href="https://fr.wikipedia.org/wiki/Clavecin">clavecin</a>
    </li>
- Écrivez la fonction possede qui vérifie qu'un élément avec un certain id possède une classe
- Testez grâce à cette foncion 
    - si l'élément d'id "saxophone" possède la classe "bois" (doit afficher true)
    - si l'élément d'id "saxophone" possède la classe "cuivre" (doit afficher false)
    - si l'élément d'id "trompette" possède la classe "cuivre" (doit afficher true)
    - si l'élément d'id "contrebasse" possède la classe "cordes" (doit afficher "Aucun élément ne possède l'id contrebasse")
*/
function getInfosLiens(balise) {
    const selection = document.querySelectorAll(balise);
    const premierLien = document.querySelector(balise);
    const dernierLien = selection[selection.length - 1];
    console.log(selection.length);
    console.log(premierLien.getAttribute('href'));
    console.log(dernierLien.getAttribute('href'));
}


const nouvLi = document.createElement('li');
nouvLi.innerHTML = 'Le <a href="https://fr.wikipedia.org/wiki/Piano">piano</a>';
nouvLi.setAttribute('id', 'piano');
nouvLi.setAttribute('class', 'cordes frappées');
document.querySelector('ul').appendChild(nouvLi);

getInfosLiens('a');








