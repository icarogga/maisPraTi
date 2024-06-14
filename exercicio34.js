const prompt = require('prompt-sync')();

const linhas = 50;
const colunas = 50;
let matriz = [];

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
    }
}

for (let i = 0; i < linhas; i++) {
    let elementoDiagonal = matriz[i][i];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] *= elementoDiagonal;
    }
}

console.log("Matriz após as multiplicações:");
for (let i = 0; i < linhas; i++) {
    console.log(matriz[i].join(' '));
}
