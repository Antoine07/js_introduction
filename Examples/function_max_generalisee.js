

// On peut généraliser le passage d'arguments à une fonction en JS avec les trois petits points devant la
// la variable, ils s'appelent spread operator
function my_max_list(...args){

    // on vérifie que l'on a bien au moins deux arguments.
    if(args.length < 2){

        return; // permet d'arrêter les scripts lorsqu'on a une exception
    }

    // fonction locale on peut si on le souhaite définir une fonction dans une fonction en JS
    function my_max(x, y){
        if(x > y){
            
            return x; // permet de sortir la valeur de la fonction
        }
    
        return y;
    }

    let m = args[0];
    for(let i=1; i < args.length ; i++){
        m = my_max(m, args[i]);
        // console.log(m, args[i]);
    }

    return m;
}

console.log(my_max_list(1, 20, 4, 180, 9, 10));