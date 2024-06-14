const prompt = require('prompt-sync')();

const opcoes = ["Pedra", "Papel", "Tesoura"];

const jogadorEscolha = prompt("Escolha Pedra, Papel ou Tesoura: ");
const computadorEscolha = opcoes[Math.floor(Math.random() * opcoes.length)];

console.log(`Você escolheu: ${jogadorEscolha}`);
console.log(`O computador escolheu: ${computadorEscolha}`);

if (jogadorEscolha === computadorEscolha) {
  console.log("Empate!");
} else if (
  (jogadorEscolha === "Pedra" && computadorEscolha === "Tesoura") ||
  (jogadorEscolha === "Papel" && computadorEscolha === "Pedra") ||
  (jogadorEscolha === "Tesoura" && computadorEscolha === "Papel")
) {
  console.log("Você venceu!");
} else {
  console.log("Você perdeu!");
}
