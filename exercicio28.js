const prompt = require('prompt-sync')();

const linhas = 10;
const colunas = 10;
let matriz = [];
let somaAcimaDiagonal = 0;
let somaAbaixoDiagonal = 0;

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor para a posição M[${i+1}][${j+1}]: `))
        if (i + 1 === j) {
            somaAcimaDiagonal += matriz[i][j];
        } else if (i === j + 1) {
            somaAbaixoDiagonal += matriz[i][j]
        }
    }
}

for (let i = 0; i < linhas; i++) {
    console.log(`${matriz[i].join(' ')}`)
}

console.log(`A soma dos elementos acima da diagonal principal é: ${somaAcimaDiagonal}`);
console.log(`A soma dos elementos abaixo da diagonal principal é: ${somaAbaixoDiagonal}`);