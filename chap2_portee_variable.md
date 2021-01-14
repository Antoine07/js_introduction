# La notion de portée des variables

Nous n'utilisons plus le mot réservé **var** pour définir une variable à la place nous utilisons le mot reservé **let** qui a été introduit pour donner plus de cohérence.

Définition : La variable définie avec let a une portée scopée au niveau du bloc dans lequel elle a été déclarée.

Remarque importante : lorsque vous définissez une variable à l'intérieur d'une fonction elle est scopée (portée) dans la fonction elle-même, pas d'effet de bord avec le reste du script.

```js
function foo() {
  let a = 10;
  console.log(a); // affiche 10
}

foo();

// erreur du type ReferenceError pas d'effet de bord
console.log(a);
```

Si vous définissez une variable de même nom à l'extérieur de la fonction alors, elle n'aura pas d'effet sur la variable à l'intérieur de la fonction. Voyez ce qui suit :

```js
let a = 11;

function foo() {
  let a = 10;
  console.log(a); // affiche 10
}

// affiche 10
foo();

// affiche 11
console.log(a);
```
JS cherche la définition de ses variables en remontant les scopes. Si la variable n'est pas définie une erreur ReferenceError est levée.

```js
// bloc courant pour b
let b = 11;

function baz() {
// bloc courant pour c dans le scope de la fonction
  let c = 9;

// JS ne trouve pas b dans le bloc courant => il remonte les scopes pour rechercher sa def
  console.log(b, c);
}

baz();
```

## Exercice scope

Qu'affiche le code suivant ? Répondez sans exécuter le code : 

```js
let b = 11;

function baz() {
  console.log(b);

  function foo() {
    console.log("Valeur du symbole b : ", b);
  }

  foo();
}

baz();
```