const prompt = require('prompt-sync')();

const primeiroTermo = parseFloat(prompt("Digite o primeiro termo da PA: "));
const razao = parseFloat(prompt("Digite a razão da PA: "));

let soma = 0;
let termoAtual = primeiroTermo;

console.log("Os 10 primeiros elementos da PA são:");
for (let i = 0; i < 10; i++) {
  console.log(termoAtual);
  soma += termoAtual;
  termoAtual += razao;
}

console.log(`A soma entre todos os valores da sequência é: ${soma}`);
