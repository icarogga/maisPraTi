const prompt = require('prompt-sync')();

const linhas = 5;
const colunas = 5;
let matriz = [];
let vetorSL = Array(5).fill(0);
let vetorSC = Array(5).fill(0);

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
        vetorSL[i] += matriz[i][j];
        vetorSC[j] += matriz[i][j]; 
    }
}

for (let i = 0; i < linhas; i++) {
    console.log(`${matriz[i].join(' ')}`);
}

console.log(`Vetor com a soma das linhas: ${vetorSL.join(' ')}`)
console.log(`Vetor com a soma das colunas: ${vetorSC.join(' ')}`)