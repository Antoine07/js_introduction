
function ttc(price, tva = 0.2) {

    // let priceTTC = price * tva + price ;

    let priceTTC = Math.floor(price * (1 + tva) * 100) / 100;

    return priceTTC;
}

console.log(ttc(100));
console.log(ttc(100, 0.3));

// deuxième version

function ttc_v2(price, tva = 0.2) {

    if ( parseFloat(price) != price || parseFloat(tva) != tva  ) {
    
        return `Le price ou la tva pose(nt) problème(s), price : ${price} et  TVA :${tva}`

    } else {
        // parseFloat vous permet de transformer les valeurs en flottant
        // c'est pour être sûr dans nos calculs de ne pas avoir de problème 
        // notez que la concaténation est prioritaire sur l'addition
        price = parseFloat(price);
        tva = parseFloat(tva);

        let priceTTC = Math.floor(price * (1 + tva) * 100) / 100;

        return priceTTC;
    }

}

console.log(ttc_v2(100));

console.log(ttc_v2(100, "0.3"));
console.log(ttc_v2("100", 0.3));
console.log(ttc_v2("100", "0.3"));

console.log(ttc_v2(100, "bonjour"));

console.log(ttc_v2("bonjour", 0.3));