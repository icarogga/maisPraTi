const prompt = require('prompt-sync')();

let numeros = [];

for (let i = 0; i < 20; i++) {
  const numeroAleatorio = Math.floor(Math.random() * 100);
  numeros.push(numeroAleatorio);
}

console.log("Números gerados:");
console.log(numeros);

numeros.sort((a, b) => a - b);

console.log("Números ordenados em ordem crescente:");
console.log(numeros);
