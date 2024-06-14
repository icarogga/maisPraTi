const prompt = require('prompt-sync')();

let A = parseInt(prompt("Digite o valor de A: "));
let matrizV = [];
let matrizX = [];
let contagem = 0;

for (let i = 0; i < 30; i++) {
    matrizV[i] = [];
    for (let j = 0; j < 30; j++) {
        matrizV[i][j] = parseInt(prompt(`Digite o valor para V[${i}][${j}]: `));
        if (matrizV[i][j] === A) {
            contagem++;
        } else {
            matrizX.push(matrizV[i][j]);
        }
    }
}

console.log(`O valor ${A} aparece ${contagem} vezes na matriz V.`);
console.log("Matriz X contendo todos os elementos de V diferentes de A:");
console.log(matrizX);
