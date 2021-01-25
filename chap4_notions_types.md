# Introduction à la notion de type

JS première version 1995, auteur Brendan Eich.

JS est un langage de script, orienté objet. Principalement exécuté dans une page Web, on le retrouve aujourd'hui dans d'autres contextes comme : Node.js (côté serveur), MongoDB (NoSQL) (interpréteur JS), ...

JS suit la norme **ECMAScript**, standard que suivent certains langages de script comme Javascript. Cette norme évolue en permance. Les principaux navigateurs Web implémentent cette norme pour le JS.

Une version majeure d'ECMAScript est celle qui a été définie en 2015 : ES2015 que l'on appelle fréquemment ES6 ... Le nom de la version étant déterminé par la dernière version du standard en cours donc ES6 pour 2016 ... Aujourd'hui la dernière version officielle est EMACScript 2020.

Bien que JS soit un langage faiblement typé, le typage est partout...

Le type d'une variable en JS est déterminé lors de l'assignation. Ce type peut changer dans un script si on re-assigne cette variable avec d'autres valeurs. C'est ce que l'on appelle un langage faiblement typé.

```js
let n = 10;
console.log(typeof n); // number

// ré-assignation
n = "Hello";

console.log(typeof n); // string
```

Dans l'exemple ci-dessus le type de la variable n a changé, n est passé du type number à string.

Notons que lorsque vous définissez une variable sans lui affecter une valeur particulière, celle-ci est de type "undefined" :

```js
let username;
console.log(typeof username); // undefined
```

## Les différents types JS

On distingue les types suivants en Javascript. Attention tous les types primitifs définissent des valeurs immuables (que l'on ne peut modifier) :

### 1. Types primitifs

- boolean : true ou false

```js

// On ne peut modifier un "true" ...
let flag = true;
```

- null

```js

// On ne peut modifier un "null" ...
let flag = null;
```

- undefined

- number : 1, 10.8, -6, ...

- bgint (un nouveau type dans ES2020 )

Il faut ajouter l'opérateur **n** pour définir des BigInt, notez que pour faire une puissance en JS on utilise deux étoiles

```js
const x = 2n ** 100n; // 2 puissance 100
console.log(x);
// 1267650600228229401496703205376n
```

- string

```js

// On ne peut modifier la chaîne de caractères "Hello World" ...
let message = "Hello World";
```

------

### 2. Les types Objects

Et de manière un peu différente on a le type 0bject. Ils sont mutables, on peut modifier un objet. Rappelons ici qu'un objet est une valeur conservée en mémoire à laquelle on fait référence grâce à un identifant. Nous reverrons ce point qui est important dans le code lorsqu'on manipule des objets.

Dans la liste des objets vous avez :

- Les objets classiques et les fonctions (ce sont des objets ...En JS), pour la culture pour l'instant, la notion d'objet sera revue plus tard dans le cours.

```js
// définition d'une classe
class Model {

  constructor(name) {
    this.name = name;
  }

  get() {
    return this.name;
  }
}

// définition d'un objet à partir d'une classe
const myModel = new Model();

function modelFunc(n) {
  let name = n;

  return name;
}
```

- Les objets natifs comme les dates

```js
const now = new Date();
```

- Les collections comme les tableaux

Les déclarations suivantes sont identiques :

```js
let notes = [1, 2, 3];
let newNotes = new Array(1, 2, 4); // faire une instance, un objet, de la classe Array
```

- Les JSON Javascript Object Notation

Il existe d'autres types d'objets que nous ne verrons pas ici.
