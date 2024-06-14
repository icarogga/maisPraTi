const prompt = require('prompt-sync')();

const tipoCarro = prompt("Digite o tipo de carro alugado (popular ou luxo): ").toLowerCase();
const diasAlugados = parseInt(prompt("Digite a quantidade de dias de aluguel: "));
const kmPercorridos = parseFloat(prompt("Digite a quantidade de Km percorridos: "));

let precoPorDia;
let precoPorKm;

if (tipoCarro === "popular") {
  precoPorDia = 90;
  if (kmPercorridos <= 100) {
    precoPorKm = 0.20;
  } else {
    precoPorKm = 0.10;
  }
} else if (tipoCarro === "luxo") {
  precoPorDia = 150;
  if (kmPercorridos <= 200) {
    precoPorKm = 0.30;
  } else {
    precoPorKm = 0.25;
  }
} else {
  console.log("Tipo de carro inválido.");
  process.exit(1); // Encerra o programa se o tipo de carro for inválido
}

const custoDias = diasAlugados * precoPorDia;
const custoKm = kmPercorridos * precoPorKm;
const custoTotal = custoDias + custoKm;

console.log(`O preço total a ser pago é R$ ${custoTotal.toFixed(2)}.`);
