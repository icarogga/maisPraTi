const prompt = require('prompt-sync')();

let vetorPares = [];
let vetorImpares = [];

for(let i = 0; i < 30; i++) {
    let numero = parseInt(prompt(`Digite um número: `));

    if (numero % 2 === 0) {
        vetorPares.push(numero);
        if (vetorPares.length === 5) {
        console.log(`Vetor de números pares: ${vetorPares.join(' ')}`);
            vetorPares = [];
        }
    } else {
        vetorImpares.push(numero);
        if (vetorImpares.length === 5) {
        	console.log(`Vetor de números ímpares: ${vetorImpares.join(' ')}`);
            vetorImpares = [];
        }
    }
}

for (let i = 0; i < vetorPares.length; i++) {
    console.log(`Vetor de números pares: ${vetorPares.join(' ')}`);
}

for (let i = 0; i < vetorImpares.length; i++) {
    console.log(`Vetor de números ímpares: ${vetorImpares.join(' ')}`);
}