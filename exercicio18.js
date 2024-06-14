const prompt = require('prompt-sync')();

let funcionario = {
  nome: '',
  cargo: '',
  salario: 0
};

funcionario.nome = prompt("Digite o nome do funcionário: ");
funcionario.cargo = prompt("Digite o cargo do funcionário: ");
funcionario.salario = parseFloat(prompt("Digite o salário do funcionário: "));

console.log("\nConteúdo do registro do funcionário:");
console.log(`Nome: ${funcionario.nome}`);
console.log(`Cargo: ${funcionario.cargo}`);
console.log(`Salário: R$ ${funcionario.salario.toFixed(2)}`);
