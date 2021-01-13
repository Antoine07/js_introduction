const container = document.getElementById('root');
// classList permet de récupérer toutes les classes d'un élément
console.log(container.classList);
// querySelector ici sélectionne le premier p dans container
// innerHTML récupère le contenu du p
const message = container.querySelector('p').innerHTML;

// Faites l'algorithme qui permettra d'inverser la chaîne de caractères.

let message_reverse = '';
for(let i = 0; i < message.length; i++){
    message_reverse = message[i] + message_reverse;
}

// console.log(message_reverse);

const ul = document.createElement('ul');
for(let i = 0; i < message_reverse.length; i++){
    let li = document.createElement('li');
    li.innerHTML = message_reverse[i];
    if(i % 2 == 0){
        li.classList.add('red-li');
    }
    else{
        li.classList.add('green-li');
    }

    ul.appendChild(li);
}
// console.log(ul);
container.appendChild(ul);