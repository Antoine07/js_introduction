/*
Exercice 
Utilisez la fonction my_max pour déterminer le maximun des valeurs a, b, c et d 
suivantes :
*/

let a = 11, b = 17, c = 20, d = 27;

function my_max(x, y){
    if(x > y){

        return x; 
    }

    return y;
}

let m = my_max(a, b);
m = my_max(m, c);
m = my_max(m, d);

console.log(m);

// Expression plus rapide mais moins lisible
let m_bis = my_max(a,  my_max( b, my_max(c, d) ) );
console.log(m_bis);

