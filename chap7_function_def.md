# Fonction

### Paramètres par défaut

Lorsque vous définissez une fonction avec des paramètres, vous pouvez donner des valeurs par défaut à certain(s) de ses paramètre(s) lors de sa définition :

```js
function add(a, sup = 1) {
  return a + sup;
}

add(10); // affiche 11

add(10, 0); // affiche 10

```

### Exercice ttc

1. Créez une fonction qui permet de calculer un prix ttc connaissant un prix HT. Donnez une valeur par défaut pour la tva en paramètre de la fonction, valeur de la tva par défaut : 20%.

2. Vérifiez que le type des variables passées en paramètre ne posent pas de problème. Utilisez **parseFloat** pour la vérification des types. Affichez les résultats avec au plus 2 chiffres après la virgule. 

```js

// 1.
ttc(100, 0.2); // 120
ttc(100.50, 0.2); // 144.72

// 2.
// Gestion du type
ttc("hello", 0.2); // Erreur de type
ttc(100.50, "hello"); // Erreur de type
ttc("100", ".3"); // 130
```

Remarques :

Pour savoir si une valeur dans une variable est un nombre flottant (nombre à virgule) utilisez le code suivant.

L'expression suivante vaut true si parseFloat à réussi à caster val en flottant. Le == ne vérifie pas le type des valeurs :

```js
let val = 10.8 ;

parseFloat(val) == val ; 

```

Par exemple si on compare un flottant dans une chaîne de caractères et un floattant classique, la condition suivante renverra true. JS fait ce que l'on appelle du transtipage dans l'évaluation.

```js
"12.8" == 12.8
```

## Syntaxe par décomposition

Si vous avez une fonction avec de nombreux paramètres ou des paramètres variables, utilisez le spread operator pour passer les valeurs à la fonction :

```js
function sum(x, y, z) {
  return x + y + z;
}

let numbers = [1, 2, 3];

sum(...numbers); // sum(1, 2, 3) unpacking
```

## Fonction JS definition classique

En JS vous avez des fonctions déclarées et des expressions de fonction.

- fonction déclarée :

```js
function foo(){

}
```

- Expression de fonction

```js
setTimeout( function (){

})
```

### Exercice function & expression

Nommez les types de fonction ci-dessous :

```js
const myFunc = function(){

  function bar(){
    // ...
  }
}
```

Les fonctions déclarées sont définies dès le début du script ou de la fonction qui la contient.

Pour les expressions de fonction elles sont définies après leur évaluation.

### Exercice déclaration

Sans exécuter le code. 

1. Est-ce que à votre avis le code suivant est valide ?

```js
bar();

function bar(){
  console.log("bar");
}
```

2. Est-ce que à votre avis le code suivant est valide ?

```js
myFunc(); 

const myFunc = function(){
    console.log("Expression");
}
```

### Arguments d'une fonction

Vous n'êtes pas obligé de renseigner le nombre d'argument d'une fonction JS. La fonction possède en interne une propriété (objet) arguments qui récupère les paramètres de la fonction, attention arguments n'est pas un tableau :

```js
function sum(){
  let total = 0;
  for(let i =0; i < arguments.length; ++i ) total += arguments[i];

  return total;
}

console.log(sum(1,2,3,4, 5, 6));
```

L'objet arguments peut-être converti en tableau à l'aide de la méthode from sur l'objet Array :

```js
const args = Array.from(arguments);

```

On peut par exemple définir la fonction sum en utilisant la méthode from :

```js
function sum(){
  const args = Array.from(arguments);
  
  return [ ...args ].reduce( (acc, curr) => acc + curr );
}

console.log( sum(1,2,3,5) ); // 11

```

Une fonction classique peut définir un constructeur,  dans ce cas par convention la fonction commence par une majuscule :

```js

function User(name){
  // constructeur
  this.name = name;

  console.log(this.name);
}

const u1 = new user("Alan");
const u2 = new user("Alan");

// Le code qui suit produira une erreur 
// pas de constructeur dans ce cas
/*const userArrow = name => {
  this.name = name;

  console.log(this.name);
}

const uA1 = new userArrow("Alan");
const uA2 = new userArrow("Alan");
*/
```

Remarque, sur la fonction user et this. Si vous appelez la fonction constructeur this sans le mode strict prendra la valeur du contexte de la fonction : window par exemple... Si vous mettez le mode strict dans ce cas this est undefined et si vous appelez une propriété comme name ci-dessous une exception sera levée :

```js
'use strict'; // on utilise cette syntaxe pour définir un mode strict en JS pour plus de rigueur

function User(name){
  console.log(this);
  this.name = name;
}

User('Alan'); // this undefined
```

### Comment ajouter une propriété sur un constructeur

Reprenons l'exemple précédent, nous allons voir comment ajouter une propriété au constructeur User qui sera partagée par toutes les instances :

```js
'use strict';

function User(name, lastname){
  this.name = name;
  this.lastname = lastname;
}

let u1 = new User('Alan', 'Phi'); 

// On ajoute sur le constructeur lui-même la propriété
User.prototype.fullName = function (){

  return this.name + ' ' + this.lastname;
}

console.log(u1.fullName()); // Alan Phi
```

Quand JS appelle cette méthode il ne la trouvera pas dans l'instance de User mais dans le prototype de l'instance User. Le this est donc bien le this de l'instance de User. Cette technique permet donc de créer des méthodes partagées par toutes les instances de User. Notez que vous pouvez tout à fait définir la méthode fullName après avoir fait l'instance de User.

JS possède depuis **ES6** un mot clé class pour définir une classe, nous verrons qu'en fait ce mot clé permet de définir, comme dans l'exemple précédent, un constructeur.
