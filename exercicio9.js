const prompt = require('prompt-sync')();

let totalSalarioHomens = 0;
let totalSalarioMulheres = 0;

while (true) {
  const salario = parseFloat(prompt("Digite o salário do funcionário: "));
  const sexo = prompt("Digite o sexo do funcionário (M para masculino, F para feminino): ").toUpperCase();

  if (sexo === 'M') {
    totalSalarioHomens += salario;
  } else if (sexo === 'F') {
    totalSalarioMulheres += salario;
  } else {
    console.log("Sexo inválido. Por favor, digite 'M' para masculino ou 'F' para feminino.");
    continue;
  }

  const continuar = prompt("Você quer continuar? (S para sim, N para não): ").toUpperCase();
  if (continuar !== 'S') {
    break;
  }
}

console.log(`Total de salário pago aos homens: R$ ${totalSalarioHomens.toFixed(2)}`);
console.log(`Total de salário pago às mulheres: R$ ${totalSalarioMulheres.toFixed(2)}`);
