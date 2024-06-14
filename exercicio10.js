const prompt = require('prompt-sync')();

let soma = 0;
let menor = null;
let totalValores = 0;
let totalPares = 0;

do {
  const numero = parseFloat(prompt("Digite um número: "));

  soma += numero;
  totalValores += 1;

  if (menor === null || numero < menor) {
    menor = numero;
  }

  if (numero % 2 === 0) {
    totalPares += 1;
  }

  const continuar = prompt("Você quer continuar? (S para sim, N para não): ").toUpperCase();
  if (continuar !== 'S') {
    break;
  }
} while (true);

const media = soma / totalValores;

console.log(`Somatório entre todos os valores: ${soma}`);
console.log(`Menor valor digitado: ${menor}`);
console.log(`Média entre todos os valores: ${media.toFixed(2)}`);
console.log(`Quantidade de valores pares: ${totalPares}`);
