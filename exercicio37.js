const prompt = require('prompt-sync')();

let G = [];
for (let i = 0; i < 20; i++) {
    G.push(prompt(`Digite o ${i + 1}º caractere do gabarito: `));
}

for (let aluno = 1; aluno <= 50; aluno++) {
    console.log(`\nDigite as respostas do aluno ${aluno}:`);
    
    let acertos = 0;
    for (let i = 0; i < 20; i++) {
        let resposta = prompt(`Resposta da questão ${i + 1}: `);
        if (resposta === G[i]) {
            acertos++;
        }
    }
    
    console.log(`Número de acertos do aluno ${aluno}: ${acertos}`);
    if (acertos >= 12) {
        console.log("APROVADO");
    } else {
        console.log("REPROVADO");
    }
}
