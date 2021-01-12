// Exercice
// Ajoutez chaque lettre de message dans le tableau chars
let message = "Mississippi";
let chars = [];

for(let i=0; i < message.length; i++){
    // la méthode push permet d'ajouter des éléments
    // dans un tableau
    chars.push(message[i]);
    // vous pouvez également jouer avec les indices 
    // des deux tableaux
    //chars[i] = message[i];
}

console.log(chars);

// Exercice ajoutez une lettre sur deux dans le tableau suivant
let m = "anticonstitutionnellement";
let c = []; // permet d'initialiser un tableau vide
