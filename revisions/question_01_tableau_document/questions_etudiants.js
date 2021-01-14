// Question 1 : array accéder à un élément
// array JS collection de valeurs
// chaque élément du tableau a un indice
    // indices 0  1  2
let numbers = [7, 8, 13];

// lecture/accès des éléments d'un tableau à l'aide de l'indice
// ici l'indice 0 permet d'accéder au premier élément
console.log(numbers[0]);

// deuxième élément lecture
console.log(numbers[1]);

// etc

// question 2 : incrémentation de +1
let i = 1;
i = i + 1; // de manière équivalente on écrira i++;

// décrémenter
i = i - 1; // i--;

// multiplier par 2
i = i*2; // i *=2 ;

// Question 3, 4

// Script dans le contexte d'une page Web

// document => la racine de la page Web point d'entrée
// document.createElement : permet de créer un élément HTML

// dans la page Web avec JS on peut créer un élément
const el = document.createElement('li'); 

// mettre du contenu dans l'élément créé
el.innerHTML = "Bonjour tout le monde";
// <li>Bonjour tout le monde</li>

// on peut également mettre du HTML dans le contenu du li
el.innerHTML = "Bonjour tout le monde<span>!</span>";
// <li>Bonjour tout le monde<span>!</span></li>

// Monter l'élément dans l'arbre du document
const ul = document.createElement('ul'); 
ul.appendChild(li);
document.body.appendChild(ul);

// Question 5 
// sélectionner un élément dans l'arbre du document

/*
<body>
    <div id="root">
        <p>1 Hello World !</p>
        <p>2 Hello World !</p>
        <p>3 Hello World !</p>
    </div>
</body>
*/

// on utilise la syntaxe CSS pour sélectionner un élément
// querySelector permet de sélectionner le premier élément trouvé
// par la règle CSS
const p = document.querySelector('#root > p'); // <p>1 Hello World !</p>
p.innerHTML = "1 HELLO WORLD !";

// si on veut en sélectionner plus d'un, tu les sélectionnes tous
document.querySelectorAll('#root > p');

// Question 6 length et push
let numbers = [7, 8, 13];
console.log(numbers.length); // donne la taille du tableau ici 3

// Pour ajouter un élément dans le tableau numbers on utilise la méthode push 
numbers.push(11); // [7, 8, 13, 11];

// si tu veux tester si un élément est présent dans un tableau on utilise la méthode includes
numbers.includes(7); // cette méthode retournera true

numbers.includes(77); // cette méthode retournera false
