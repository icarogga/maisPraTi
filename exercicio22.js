const prompt = require('prompt-sync')();

function coletarDados() {
  let totalSalarios = 0;
  let totalFilhos = 0;
  let maiorSalario = 0;
  let totalPessoas = 0;
  let totalSalarioAte350 = 0;

  while (true) {
    const salario = parseFloat(prompt("Digite o salário da pessoa: "));

    const numeroFilhos = parseInt(prompt("Digite o número de filhos da pessoa: "));

    totalSalarios += salario;
    totalFilhos += numeroFilhos;
    totalPessoas += 1;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      totalSalarioAte350 += 1;
    }

    const continuar = prompt("Deseja continuar? (S/N) ").toUpperCase();

    if (continuar === 'N') {
      break;
    }
  }

  const mediaSalarios = totalSalarios / totalPessoas;
  const mediaFilhos = totalFilhos / totalPessoas;
  const percentualSalarioAte350 = (totalSalarioAte350 / totalPessoas) * 100;

  return {
    mediaSalarios: mediaSalarios.toFixed(2),
    mediaFilhos: mediaFilhos.toFixed(2),
    maiorSalario: maiorSalario.toFixed(2),
    percentualSalarioAte350: percentualSalarioAte350.toFixed(2)
  };
}

const resultados = coletarDados();

console.log(`Média de salário da população: R$ ${resultados.mediaSalarios}`);
console.log(`Média do número de filhos: ${resultados.mediaFilhos}`);
console.log(`Maior salário: R$ ${resultados.maiorSalario}`);
console.log(`Percentual de pessoas com salário até R$ 350,00: ${resultados.percentualSalarioAte350}%`);
