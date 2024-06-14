const prompt = require('prompt-sync')();

const cigarrosFumadosPorDia = prompt('Digite a quantidade de cigarros fumados por dia: ')
const anosFumando = prompt("Digite a quantos anos você fuma: ")

const totalCigarrosFumados = cigarrosFumadosPorDia * (365 * anosFumando)
const diasDeVidaPerdido = (totalCigarrosFumados * 10) / 1440

console.log(`Você perdeu um total de ${diasDeVidaPerdido.toFixed(2)} dias de vida`)