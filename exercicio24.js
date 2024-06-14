const prompt = require('prompt-sync')();

const linhas = 6;
const colunas = 8;
let matriz = [];
let vetorC = [];

for (let i = 0; i < linhas; i++) {
  matriz[i] = [];
  for (let j = 0; j < colunas; j++) {
    matriz[i][j] = parseFloat(prompt(`Digite o valor para M[${i+1}][${j+1}]: `));
  }
}

for (let i = 0; i < linhas; i++) {
  let negativos = 0;
  for (let j = 0; j < colunas; j++) {
    if (matriz[i][j] < 0) {
      negativos++;
    }
  }
  vetorC.push(negativos);
}

console.log("Matriz M:");
for (let i = 0; i < linhas; i++) {
  console.log(matriz[i].join(' '));
}

console.log("Vetor C com a quantidade de elementos negativos por linha:");
console.log(vetorC);
