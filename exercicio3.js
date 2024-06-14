const prompt = require('prompt-sync')();

const distanciaViagem = parseInt(prompt('Digite a distância da viagem em km: '))

if (distanciaViagem <= 200) {
    const precoPassagem = distanciaViagem * 0.5
    console.log(`O preço da passagem é de R$${precoPassagem.toFixed(2)}`)
} else { 
    const precoPassagem = distanciaViagem * 0.45
    console.log(`O preço da passagem é de R$${precoPassagem.toFixed(2)}`)
}