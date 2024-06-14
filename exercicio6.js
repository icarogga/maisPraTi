const prompt = require('prompt-sync')();

const numeroSorteado = Math.floor(Math.random() * 5) + 1;

const palpite = parseInt(prompt("Tente adivinhar o número que o computador sorteou (entre 1 e 5): "));

if (palpite === numeroSorteado) {
  console.log("Parabéns! Você acertou o número sorteado.");
} else {
  console.log(`Que pena! Você errou. O número sorteado foi ${numeroSorteado}.`);
}
