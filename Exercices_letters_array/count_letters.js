let message = "Mississippi";
let dejavu = [];
for (let i = 0; i < message.length; i++) {
    let count = 0;
    let letter = message[i];

    if(dejavu.includes(letter)) continue;

    for (let j = 0; j < message.length; j++) {
        if(letter == message[j] ) count++;
    }
    console.log("Lettre :" , letter, "nombre d'occurence", count);
    dejavu.push(letter);
    count = 0;
}

console.log(dejavu);