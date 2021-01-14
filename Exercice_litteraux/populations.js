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
    // JS est sensible à la casse par exemple a est différent de A
    if( student.name.includes('a') || student.name.includes('A') ) {
        nbStudentA++;
    }
}

console.log("Nombre d'étudiants ayant au moins un a dans son nom :", nbStudentA);

/*


1. Créez une fonction search elle admet un paramètre name. 
Cette fonction recherchera un nom dans le littéral populations. 
Elle retournera true ou false selon qu'elle trouvera ou nom le nom rechercher. 
Cette première version est sensible à la casse.

*/

function search(name){

    for(let i = 0; i < populations.length; i++){
        let student = populations[i];

        // c'est plus sûr de mettre includes pour les pb d'espaces avant ou après

        // sinon une autre solution, en utilisant trim qui supprime les espaces avant et après la chaîne :
        // student.name.trim() == name.trim()
        if(student.name.includes(name)){
            return true;
        }
    }

    return false;
}

// console.log(search("Brice"));

/*
2. Faites une deuxième fonction qu'on appelera search_casse, elle sera insensible à la casse.
*/

function search_casse(name){
    name = name.toLowerCase(); // mettre en minuscule la variable du paramètre de la fonction

    for(let i = 0; i < populations.length; i++){
        let student = populations[i];
        let keyName = student.name.toLowerCase(); // on met également le name du littéral en minuscule
        if(keyName.includes(name)){
            return true;
        }
    }

    return false;
}

console.log("search_casse")
console.log(search_casse("BRICE"));
console.log(search_casse("brice"));
console.log(search_casse("Brice"));
console.log(search_casse("BriCe"));

console.log(search_casse(" BriCe "));

/*
3. Ajoutez une clé age aux littéraux dans le tableau populations et donnez les ages respectifs suivants aux personnes :

*/

// On peut ajouter une clé aux littéraux ceci les modifiera
// for(let i =0; i < populations.length; i++){
//     populations[i].age = 18;
// }

// console.log(populations);

const ages = { 
    "Alan" : 16,
    "Albert" : 19,
    "Jhon" : 16,
    "Brice": 90,
    "Alexendra" : 77,
    "Brad" : 89,
    "Carl" : 67,
    "Dallas" : 90,
    "Dennis" : 75,
    "Edgar" : 23,
    "Erika" : 30,
    "Isaac" : 56,
    "Ian" : 45
}

for(let i =0; i < populations.length; i++){
    // le nom c'est la clé du littéral ages
    let name = populations[i].name ;
    // console.log(ages[name]);
    // on crée une nouvelle clé dans chaque littéral
    // puis on assigne pour cette clé l'age correspondant
    populations[i].age = ages[name];
}

console.log(populations);