/*
Exercice 
Ecrire un script permettant de déterminer le nombre le plus grand parmi les 3 valeurs
a, b et c ci-dessous.
*/

// let a = 11;
// let b = 17;
// let c = 10;

let a = 11, b = 17, c = 20, d = 27;
let max ;

if(a>b){
    max = a;
}else{
    max = b;
}

if(c > max){
    max = c;
}

if(d > max){
    max = d;
}

console.log(max);