# Structure de données

En JS vous pouvez définir une **structure de données particulière**, comme les tableaux, que l'on appelle des littéraux. Ces derniers sont des **objets JS** (nous reviendrons sur la définition d'un objet plus tard).

def d'un littéral :

```js
const student = {
    name : "Alan",
    address : "Paris"
}
```

Pour accéder à un élément d'un littéral vous utiliserez la syntaxe suivante :

```js
student.name; // afficher Alan
student.address; // Paris
```

## Exercice littéral / array

1. Soit le tableau populations de littéraux suivants, comptez le nombre de personne(s) qui a un nom dont la longueur des caractères est supérieur ou égal à 5.

2. Comptez maintenant le nombre de nom qui possède un "a" dans son nom.

```js
populations = [
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
]

```

## Exercice littéral / array partie 2

Reprendre le tableau populations de l'exercice précédent.

1. Créez une fonction search elle admet un paramètre name. Cette fonction recherchera un nom dans le littéral populations. Elle retournera true ou false selon qu'elle trouvera ou nom le nom rechercher. Cette première version est sensible à la casse.


```js
function search(name){
    // TODO
}

search("Albert") ; // retourne true
search("Alice") ; // retourne false
```

2. Faites une deuxième fonction qu'on appelera search_casse, elle sera insensible à la casse.

```js
function search_casse(name){
    // TODO
}

search_casse("Albert") ; // retourne true
search_casse("albert") ; // retourne true
```

3. Ajoutez une clé aux littéraux dans le tableau populations age et donnez les ages respectifs suivants aux personnes :

```js
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
```
