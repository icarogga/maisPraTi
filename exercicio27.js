const prompt = require("prompt-sync")();

const linhas = 6;
const colunas = 6;
let matriz = [];
let vetor = []

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `))
    }
}

const valorA = parseFloat(prompt(`Digite o valor para multiplicar a matriz: `));

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] *= valorA;
        vetor.push(matriz[i][j])
    }
}

console.log(`Vetor com valores multiplicados: ${vetor.join(' ')}`)



