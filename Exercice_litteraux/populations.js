const populations = [
    { "id" : 0, "name" : "Alan" }, // un littéral
    { "id" : 1, "name" : "Albert" },
    { "id" : 2, "name" : "Jhon" },
    { "id" : 3, "name" : "Brice" },
    { "id" : 4, "name" : "Alexendra" },
    { "id" : 5, "name" : "Brad" },
    { "id" : 6, "name" : "Carl" },
    { "id" : 7, "name" : "Dallas" },
    { "id" : 8, "name" : "Dennis" },
    { "id" : 9, "name" : "Edgar" },
    { "id" : 10, "name" : "Erika" },
    { "id" : 11, "name" : "Isaac" },
    { "id" : 12, "name" : "Ian" }
];

/**
 * 1. Soit le tableau populations de littéraux suivants, 
 * comptez le nombre de personne(s) qui a un nom dont la longueur 
 * des caractères est supérieur ou égal à 5.
 */

let nbStudent = 0;

for(let i=0; i < populations.length; i++){
    // chaque tour de boucle a son propre scope
    let student = populations[i] ;
    if( student.name.length >= 5) {
        nbStudent++;
    }
}

console.log("Nombre d'étudiants ayant plus de 4 caractères :", nbStudent);

// 2. Comptez maintenant le nombre de nom qui possède un "a" dans son nom.

let nbStudentA = 0;

for(let i=0; i < populations.length; i++){
    let student = populations[i] ; 
    // includes peut s'utiliser sur une chaîne de caractères
    if( student.name.includes('a') || student.name.includes('A') ) {
        nbStudentA++;
    }
}

console.log("Nombre d'étudiants ayant au moins un a dans son nom :", nbStudentA);
