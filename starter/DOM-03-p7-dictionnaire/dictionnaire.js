// 03-DOM : MODIFIEZ LA STRUCTURE DE LA PAGE
/*
SOURCE : https://github.com/oc-courses/javascript-web
*/

/*
DOM - PREPA 7 : « Dictionnaire » : construire un dictionnaire
1. Votre dictionnaire contient les mots et les définitions suivantes :
    - Procrastination : Tendance pathologique à remettre systématiquement au lendemain
    - Tautologie : Phrase dont la formulation ne peut être que vraie
    - Oxymore : unit dans un même syntagme deux termes sémantiquement opposés
2. Stockez la liste des mots du dictionnaire dans la variable mots,
    qui est un tableau d'objets :
    - chaque élément du tableau représente un mot ;
    - chaque mot est lui-même un objet avec deux propriétés :
        * une propriété "terme", et
        * une propriété "definition"
3. Créer le dictionnaire sur la page web, dans la div d'id "contenu"
AIDE : utilisez la méthode forEach() pour parcourir le tableau de mots
*/

const mots = {
    tableauMots: [
        {
            therme: 'Procrastination',
            def: 'Tendance pathologique à remettre systématiquement au lendemain'
        },
        {
            therme: 'Tautologie',
            def: 'Phrase dont la formulation ne peut être que vraie'
        },
        {
            therme: 'Oxymore',
            def: 'unit dans un même syntagme deux termes sémantiquement opposés'
        }
    ]
}

const creationListe = document.createElement('ul');
creationListe.setAttribute('id', 'liste');
document.getElementById('contenu').appendChild(creationListe);

mots.tableauMots.forEach((motE) => {
    const lesLi = document.createElement('li');
    lesLi.textContent = motE;
    document.getElementById('liste').appendChild(lesLi);

    const lesLi2 = document.createElement('li');
    lesLi2.textContent = motE;
    document.getElementById('liste').appendChild(lesLi2);

    const lesLi3 = document.createElement('li');
    lesLi3.textContent = motE;
    document.getElementById('liste').appendChild(lesLi3);
});





