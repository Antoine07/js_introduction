/*
 Exercice soit la chaîne de caractères message suivante, créez un tableau pour récupérer
 chacune des lettres. Puis inverser l'ordre des lettres dans le tableau.

 rmq : vous n'utiliserez pas de fonction JS déjà définie.
*/

let message = "Mississippi";
let letters = [];

for(let i = 0; i < message.length; i++ ){
    letters.push(message[i]);
}

console.log(letters);

// reverse tableau
let reverses_letters = [];
for(let i = message.length - 1; i >= 0 ; i--){
    reverses_letters.push(letters[i]);
}

console.log(reverses_letters);
