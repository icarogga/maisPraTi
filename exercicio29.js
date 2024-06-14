const prompt = require('prompt-sync')();

const linhas = 5;
const colunas = 5;
let matriz = [];
let somaLinha4 = 0;
let somaColuna2 = 0;
let somaDiagonalPrincipal = 0;
let somaTotal = 0;


for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
        somaTotal += matriz[i][j];

        if (i === j) {
            somaDiagonalPrincipal += matriz[i][j];
        }
        if (j === 1) {
            somaColuna2 += matriz[i][j];
        }
        if (i === 3) {
            somaLinha4 += matriz[i][j]; 
        }

    }
}

for (let i = 0; i < linhas; i++) {
    console.log(`${matriz[i].join(' ')}`);
}

console.log(`A soma da linha 4 é: ${somaLinha4}`)
console.log(`A soma da coluna 2 é: ${somaColuna2}`)
console.log(`A soma da diagonal principal é: ${somaDiagonalPrincipal}`)
console.log(`A soma de todos os elemntos é: ${somaTotal}`)