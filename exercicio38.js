const prompt = require('prompt-sync')();

let vetor = [];
for (let i = 0; i < 6; i++) {
    vetor.push(parseFloat(prompt(`Digite o ${i + 1}º número do vetor: `)));
}

let operacao = parseInt(prompt('Digite a operação desejada (1- Soma, 2- Produto, 3- Média, 4- Ordenar, 5- Mostrar vetor): '));

if (operacao === 1) {
    let soma = 0;
    for (let i = 0; i < 6; i++) {
        soma += vetor[i];
    }
    console.log('Soma dos elementos:', soma);
} else if (operacao === 2) {
    let produto = 1;
    for (let i = 0; i < 6; i++) {
        produto *= vetor[i];
    }
    console.log('Produto dos elementos:', produto);
} else if (operacao === 3) {
    let soma = 0;
    for (let i = 0; i < 6; i++) {
        soma += vetor[i];
    }
    let media = soma / 6;
    console.log('Média dos elementos:', media);
} else if (operacao === 4) {
    for (let i = 0; i < 6; i++) {
        for (let j = i + 1; j < 6; j++) {
            if (vetor[i] > vetor[j]) {
                let temp = vetor[i];
                vetor[i] = vetor[j];
                vetor[j] = temp;
            }
        }
    }
    console.log('Vetor ordenado:', vetor);
} else if (operacao === 5) {
    console.log('Vetor:', vetor);
} else {
    console.log('Operação inválida.');
}
