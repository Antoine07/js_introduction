// const permet de définir une valeur constante, vous ne pourrez plus assigner une autre valeur
// pour cette variable

// la fonction getElementById permet de sélectionner un noeud de l'arbre
// en fonction d'un identifiant unique #root
const container = document.getElementById('root');
// permet dans container de sélectionner le premier paragraphe p
// innerHTML permet de récupérer le texte dans le paragraphe
console.log(container.querySelector('p'));
console.log(container.querySelector('p').innerHTML);

const message = container.querySelector('p').innerHTML;

// création d'un ul
const ul = document.createElement('ul');

// on parcourt le message
for(let i= 0; i < message.length; i++){
    // création des li
    let li = document.createElement('li');
    li.innerHTML = message[i];
    // on ajoute les li dans le ul
    ul.appendChild(li);
}

// puis on ajoute le ul avec les li dans le ul
container.appendChild(ul);