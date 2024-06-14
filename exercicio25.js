const prompt = require('prompt-sync')();

const linhas = 15;
const colunas = 20;
let matriz = [];
let somaColuna = Array(colunas).fill(0);

for (let i = 0; i < linhas; i++) {
    matriz[i] = []
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
        somaColuna[j] += matriz[i][j];
    }
}

for (let i = 0; i < colunas; i++) {
    console.log(`A soma dos números na coluna ${i+1} = ${somaColuna[i]}`)
}
