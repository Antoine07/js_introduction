let letters = ['a', 'b', 'c', 'd', 'e', 'f'];

// transformer le tableau letters en une chaîne de caractères

let m = '';
for (let i = 0; i < letters.length; i++) {
    m = m + letters[i]   ;
}

console.log(m);

// on peut également utiliser la fonction join sur un array de string 
console.log(letters.join(' '));
console.log(letters.join(''));

let message = "Mississippi";
let chars = [];

