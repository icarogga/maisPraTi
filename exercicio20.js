const prompt = require('prompt-sync')();

let tabelaFuncionarios = [];
let contador = 0;

while(contador < 3) {
    let funcionario = {}

    funcionario.matricula = parseInt(prompt('Digite a matricula do funcionário: '));
    funcionario.nome = prompt('Digite o nome do funcionário: ');
    funcionario.salarioBruto = Number(prompt('Digite o salário bruto do funcionário: '));

    tabelaFuncionarios.push(funcionario);

    console.log();
    
    contador++;
}

for (const funcionario of tabelaFuncionarios) {
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: ${funcionario.salarioBruto}`);
    console.log(`Dedução INSS: ${funcionario.salarioBruto * 0.12}`);
    console.log(`Salário líquido: ${(funcionario.salarioBruto) - (funcionario.salarioBruto * 0.12)}\n`);
}