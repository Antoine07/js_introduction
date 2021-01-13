let a = 11, b = 17, c = 20, d = 27;

// pour définir une fonction on utilisera le mot réservé function en JS
// si la fonction doit retourner une valeur dans le script courant 
// on utilisera le mot reservé return
// notez que les symboles x et y sont des symboles arbitraires et local à la fonction
function my_max(x, y){
    if(x > y){

        return x; // permet de sortir la valeur de la fonction
    }

    return y;
}

console.log( my_max(a, b) );