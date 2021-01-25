# Interpolation

Vous pouvez écrire des chaînes de caractères sur plusieurs lignes et insérer des expressions JS qui seront évaluées à l'aide de backquotes (accent grave).

Intérêt la concaténation sans l'interpolation donne une expression comme suit :

```js
let a = 51;
let b = 90;
console.log("Somme " + (a + b) + " et\n multiplication " + a * b + ".");
```

Avec les backquotes on aura une expression plus facile à écrire :

```js
let a = 51;
let b = 90;
console.log(`Somme : ${a + b} et \n multiplication : ${a * b}.`);
```

On peut également intégrer des ternaires comme suit avec les cotes couchés :

```js
let isLoading = true;
const message = `Data is ${isLoading ? 'loading...' : 'done!'}`;
```

Remarque sur la syntaxe ternaire, très pratique pour écrire une condition sur une ligne :

```js

console.log( true ? 'yes' : 'no'; ); // yes
console.log( false ? 'yes' : 'no'; ); // no

```

Les ternaires sont très pratiques également pour assigner des valeurs avec une condition :

```js
logged = true ? 'yes' : 'no'; ; // yes

logeed =  false ? 'yes' : 'no'; ; // no

```

Vous pouvez enchâiner les ternaires mais, attention à la lisibilité de ces derniers.

```js
logged = true ? ( true ? 'toujours yes' : 'no' )  : 'no'; ; // toujours yes
```