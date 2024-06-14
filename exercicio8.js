const prompt = require('prompt-sync')();

const horasAtividade = parseFloat(prompt("Digite o número de horas de atividade física no mês: "));

let pontos;

if (horasAtividade <= 10) {
  pontos = horasAtividade * 2;
} else if (horasAtividade <= 20) {
  pontos = horasAtividade * 5;
} else {
  pontos = horasAtividade * 10;
}

const dinheiroGanho = pontos * 0.05;

console.log(`Você ganhou ${pontos} pontos.`);
console.log(`Você ganhou R$ ${dinheiroGanho.toFixed(2)}.`);
