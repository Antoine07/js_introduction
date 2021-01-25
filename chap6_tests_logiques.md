# Tests logiques

## Ce qui est faux en JS

```text
0, NaN, undefined, false, "", '', ``, null
```

Notez que tout ce qui est vrai en JS c'est tout sauf ce qui est faux.

Remarques vous pouvez tester les valeurs vraies ou fausses à l'aide d'un simple ternaire :

```js
console.log( 1 ? 'yes' : 'no'); // yes
console.log( 0? 'yes' : 'no'); // no

console.log( NaN ? 'yes' : 'no'); // no

console.log( "bonjour le monde"  ? 'yes' : 'no'); // yes
```

## Evaluations courcicuits 

- Evaluation courcicuit, par exemple user n'est pas défini, mais ne sera pas évalué :

```js
false && user 
```
Une deuxième évaluation courcicuit, renverra true

```js
true || user
```

## Exercice d'application 

Trouvez une méthode pour vérifier les valeurs fausses JS.


## Exercice tests logiques

Dire si la conditions suivantes sont vraies ou fausses ?


1.

```js

let cd1 = (!true || true);

```

2.

```js

let cd2 = (!true || false);

```

3.

```js

let cd3 = !(true || true);

```

4.

```js

let cd4 = (true || false) && false;;

```

5.

```js
let cd5 = (true || false) && true;

```

6.

```js
let cd6 = (true || false) && ( (!false && true) || true );

```

7.

```js
let cd7 = ((false || false) && (!false && false)) || true;

```

8.

```js
let cd8 = (false || false) && (!false && false) || true;

```

9.

```js
let cd9 = = (0!= 0 && 1/0 == 2);

```

10.

```js
let cd9 = = (0 === 0 || 1/0 == 2);

```
