// const permet de définir une valeur constante, vous ne pourrez plus assigner une autre valeur
// pour cette variable

// la fonction getElementById permet de sélectionner un noeud de l'arbre
// en fonction d'un identifiant unique #root
const container = document.getElementById('root');
console.log(container);

// permet dans container de sélectionner le premier paragraphe p
const message = container.querySelector('p');
console.log(message.innerHTML);

