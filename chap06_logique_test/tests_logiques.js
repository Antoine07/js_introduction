
// 1.

let cd1 = (!true || true);
// (false || true) = true
console.log(cd1); // false

//2.

let cd2 = (!true || false);
// (false || false) = false
console.log(cd2); // false

//3.

let cd3 = !(true || true);
// !(true) = flase
console.log(cd3); // false

//4.
// parenthèses => prioritaire sur le reste
let cd4 = (true || false) && false;;
// (true) &&  flase = false
console.log(cd4); // false

//5.

let cd5 = (true || false) && true;
// (true) && true = true
console.log(cd5); // true

// 6.

let cd6 = (true || false) && ( (!false && true) || true );
// (true) && ((true && true) || true)
// true && true = true
console.log(cd6); // true

//7.

let cd7 = ((false || false) && (!false && false)) || true;
// ( (false) && (true && false) ) || true
// priorité sur l'opérateur && les parenthèses de l'expression ci-dessous ici sont facultatives
// (false && false ) || true  ~ false && false || true 
// false || true = true
console.log(cd7); // true

//8.
let cd8 = (false || false) && (!false && false) || true;
// (false) && (false) || true
// false || true = true
console.log(cd8); // true

//9.
// évaluation courcircuit
let cd9 = (0!= 0 && 1/0 == 2);
//  false && Error = false
console.log(cd9); // true

// 10.
let cd9 = (0 === 0 || 1/0 == 2);
//  true || Error = true
console.log(cd9); // true

// 11.
let cd10 = (false || false) && ( (!false && false) || true );
// (false) && (false || true)
// false && true = false
console.log(cd10); // true
