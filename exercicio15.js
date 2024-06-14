const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 10; i++) {
  const numero = parseInt(prompt(`Digite o número ${i + 1}: `));
  numeros.push(numero);
}

console.log("Números pares e suas posições:");
for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    console.log(`Número ${numeros[i]} na posição ${i}`);
  }
}
