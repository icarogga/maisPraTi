const prompt = require('prompt-sync')();

let fibonacci = [1, 1];

for (let i = 2; i < 15; i++) {
  fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
}

console.log("Os 15 primeiros elementos da Sequência de Fibonacci são:");
console.log(fibonacci.join(', '));
