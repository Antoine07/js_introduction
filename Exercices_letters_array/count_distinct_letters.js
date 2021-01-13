/*
 Exercice 
 1. Récupérez uniquement les lettres du message dans le tableau letters. Attention
 l'espace dans le message ne doit pas se retrouver dans letters.

 2. (**) Récupérez dans le tableau occurences toutes les lettres distinctes du message.

 rmq : utilisez la fonction includes sur un tableau pour savoir si une valeur se trouve dans un tableau
 let numbers = [1, 2, 3];
 numbers.includes(1) // true
 numbers.includes(7) // false
*/

let message = "Hello world!";
let letters = [];
let occurences = [];

for(let i=0; i < message.length; i++){
    if(message[i] ==" ") {
        continue;
    }

    letters.push(message[i]);
}

console.log(letters);

// deuxième version (plus simple à lire)
// for(let i=0; i < message.length; i++){
//     let letter = message[i];
//     if(letter ==" ") {
//         continue;
//     }

//     letters.push(letter);
// }

// 2.
for(let i=0; i < message.length; i++){
    let letter = message[i] ;

    if( letter ==" " || occurences.includes(letter)) {
        continue;
    }

    occurences.push(letter);
}

console.log(occurences);

// Exercice
/*
Soit la chaîne de caractères message_bis suivante, compter le nombre de i dans cette chaîne.
*/

let message_bis = "Mississippi";