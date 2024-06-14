const prompt = require('prompt-sync')();

const linhas = 12;
const colunas = 13;
let matriz = [];
let maiorValorLinha = Array(12).fill(0);

for (let i = 0; i < linhas; i++) {
    matriz[i] = [];
    for (let j = 0; j < colunas; j++) {
        matriz[i][j] = parseFloat(prompt(`Digite o valor da posição M[${i+1}][${j+1}]: `));
        if (Math.abs(matriz[i][j]) > maiorValorLinha[i]) {
            maiorValorLinha[i] = matriz[i][j];
        } 
    }
}

for (let i = 0; i < linhas; i++) {
    console.log(`${matriz[i].join(' ')}`)
}

for (let i = 0; i < linhas; i++) {
    for (let j = 0; j < colunas; j++){
        matriz[i][j] = matriz[i][j] / maiorValorLinha[i];
    }
}

for (let i = 0; i < linhas; i++) {
    console.log(`${matriz[i].join(' ')}`)
}