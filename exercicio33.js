const prompt = require('prompt-sync')();

const linhas = 3;
const colunas = 3;
let matriz = [];
let somaDiagonalSecundaria = 0;

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
        if (i + j === linhas - 1) {
            somaDiagonalSecundaria += matriz[i][j];
        }
    }
}

let mediaDiagonalSecundaria = somaDiagonalSecundaria / linhas;

for (let i = 0; i < linhas; i++) {
    matriz[i][i] *= mediaDiagonalSecundaria;
}

console.log("Matriz resultante:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join(' '));
}
