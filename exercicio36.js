const prompt = require('prompt-sync')();

const quantidadeApostadores = 5;
const tamanhoResposta = 13;
const gabarito = []
let apostadores = [];

for (let i = 0; i < tamanhoResposta; i++) {
    gabarito.push(parseInt(prompt(`Digite o número ${i+1} do gabarito do sorteio: `)));
}

for (let i = 0; i < quantidadeApostadores; i++) {
    apostador = {};
    apostador.numero = parseInt(prompt(`Digite o número do apostador: `));
    apostador.resposta = [];

    for (let j = 0; j < tamanhoResposta; j++) {
        apostador.resposta.push(parseInt(prompt(`Digite o número ${j+1} da resposta do apostador: `)));
    }

    apostadores.push(apostador);
}

for (let i = 0; i < apostadores.length; i++) {
    let acertos = 0;
    for (let j = 0; j < tamanhoResposta; j++) {
        if (gabarito.includes(apostadores[i].resposta[j])) {
            acertos++;
        }
    }
    
    console.log(`O apostador de número ${apostadores[i].numero} acertou ${acertos} números`)
    if (acertos === 13) {
        console.log("Parabéns, tu foi o GANHADOR");
    }
}