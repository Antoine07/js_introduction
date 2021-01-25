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

## Exercice

Créez un fichier html notes.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div class="root">
    </div>
    <script>
      // Code JS
      let notes = [11, 12, 16];
    </script>
</body>
</html>
```

1. Affichez dans la chaîne de caractères suivantes les notes dans le tableau notes voir ci-après, le code doit s'affichez (dynamiquement) dans le div.root de la page HTML notes.html. Utilisez les cotes couchées pour gérer l'insertion des valeurs.

```html
 <ul>
    <li> Note : 11 </li>
    <li> Note : 12 </li>
    <li> Note : 16 </li>
</ul>
```

```js
let notes = [11, 12, 16];
```

2. Ajoutez la moyenne dans un div après la liste des notes
