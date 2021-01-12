// Exercice 1
/*
Corrigé le code suivant pour traiter toutes les options pour a (test supérieur,inférieur et égale)
*/
let a = 10;

if(a > 10){
    console.log('a est strictement supérieur à 10');
}else{
    console.log('a est strictement inférieur à 10');
}

console.log('a est égal à 10');

if(a > 10){
    console.log('a est strictement supérieur à 10');
}

if(a < 10){
    console.log('a est strictement inférieur à 10');
}

if( a == 10 ){
    console.log('a est égale 10');
}

// Une autre solution avec if/else
if(a > 10){
    console.log('a est strictement supérieur à 10');
}else{
    if( a == 10 ){
        console.log('a est égale 10');
    }else{
        console.log('a est strictement inférieur à 10');
    }
}

// Un autre solution encore if/else if/else

if(a > 10){
    console.log('a est strictement supérieur à 10');
}else if(a < 10) {
    console.log('a est strictement inférieur à 10');
}else{
    console.log('a est égale 10');
}

