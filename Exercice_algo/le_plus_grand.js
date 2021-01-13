/*
Exercice de recherche, à l'aide d'un algorithme écrit en JS trouvez le plus 
grand nombre du tableau numbers ci-dessous :
*/

let numbers = [11, 2, 4, 67, 19, 10, 5, 17, 0, 7];

let candidate = numbers[0];

for(let i =1 ;i < numbers.length; i++){
    if(numbers[i] > candidate) {
        candidate = numbers[i];
    }
}
console.log('Cdt plus grand :', candidate);