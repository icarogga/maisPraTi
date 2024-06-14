const prompt = require('prompt-sync')();

// Leitura do resultado oficial da Loto
let resultadoOficial = [];
for (let i = 0; i < 5; i++) {
    resultadoOficial.push(parseInt(prompt(`Digite o ${i + 1}º número do resultado oficial: `)));
}

// Leitura das 50 apostas
for (let aposta = 1; aposta <= 3; aposta++) {
    console.log(`\nDigite os números da aposta ${aposta}:`);
    
    let apostaAtual = [];
    for (let i = 0; i < 5; i++) {
        apostaAtual.push(parseInt(prompt(`Número ${i + 1}: `)));
    }
    
    // Verificação se a aposta corresponde ao resultado oficial
    let ganhador = true;
    for (let i = 0; i < 5; i++) {
        if (!resultadoOficial.includes(apostaAtual[i])) {
            ganhador = false;
            break;
        }
    }
    
    if (ganhador) {
        console.log("Ganhador");
    }
}
