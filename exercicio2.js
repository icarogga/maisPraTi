const prompt = require('prompt-sync')();

const velocidade = parseInt(prompt('Digite a velocidade do carro: '))

if (velocidade > 80) {
    console.log('Você ultrapassou a velocidade permitida. Multado!')
    const valorMulta = (velocidade - 80) * 5
    console.log(`O valor da multa é de R$${valorMulta.toFixed(2)}`)
} else { 
    console.log('Você está dentro da velocidade permitida. Parabéns!')
}