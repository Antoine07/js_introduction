# Examen

Vous devez me rendre sur Teams votre travail zippé (dossier avec l'ensemble des fichiers exercices) avec votre nom et section E1 A ou B. Attention, pas d'espace et de caractères spéciaux dans le nom de vos fichiers et dossiers.

Vous travaillez comme nous l'avons fait en cours dans un fichier html et dans la balise script. Certains résultats sont à afficher dans le DOM.

Il n'y a pas de barême sur les exercices. Vous avez toute la journée pour faire les 3 exercices ci-dessous. Courage à vous tous !


## Exercice 01

Créez une page **exercice_01.html** et traitez toutes les questions de cet exercice dans ce même fichier.

1. Comptez tous les docteurs qui ont eu une note supérieur à 17 (console.log dans la balise script)

2. Affichez le nom des docteurs ayant eu la meilleur note dans un div.root comme vu en cours.

3. Faites la moyenne des notes et affichez la dans le DOM.

```js
const populations = [
  { id: 0, name: "Alan", jobs : 'doctor', password : "tyeedsa00", note : 19 },
  { id: 1, name: "Albert", jobs : 'doctor', password : "tyeidii00", note : 18 },
  { id: 2, name: "Jhon" , jobs : 'doctor', password : "xyuuuoi00", note : 17},
  { id: 3, name: "Brice", jobs : 'doctor', password : "xytoiab00", note : 11},
  { id: 4, name: "Alexendra", jobs : 'doctor',  password : "aaaoiab33", note : 11 },
  { id: 5, name: "Brad", note : 16 },
  { id: 6, name: "Carl" ,jobs : 'doctor', note : 14},
  { id: 7, name: "Dallas" , jobs : 'doctor', note : 12},
  { id: 8, name: "Dennis", jobs : 'doctor' , note : 11},
  { id: 9, name: "Edgar", jobs : 'mathematician', note : 20 },
  { id: 10, name: "Erika", jobs : 'computer scientist', note : 11 },
  { id: 11, name: "Isaac", jobs : 'doctor', password : "Axgkj22Kl", note : 14 },
  { id: 12, name: "Ian", password : "Axgkj00Kl", note : 3 },
];

```

\newpage

## Exercice 02

Créez une page exercice_02.html.

1. Soit la variable scores suivante. Affichez chacune des notes dans un ul/li dans le DOM.

2. Créez une fonction average pour calculer la moyenne et affichez la dans une balise p dans le DOM.

3. Trouvez le plus grand élément et affichez le dans une balise p dans le DOM.

 
```js
let scores = [11, 12, 16, 11, 15, 17, 18, 19, 11, 12, 14];
```

\newpage

## Exercice 03

Créez une page exercice_03.html.

1. Soit la variable message suivante. Affichez chacun des caractères dans un ul/li dans le DOM.

2. Calculez le nombre de A et affichez le dans le DOM.

3. Créez une fonction pour inverser les lettres de cette chaîne de caractères.

 
```js
let message = `J'AIME JS C'EST UN LANGAGE TRES EXPRESSIF`;
```