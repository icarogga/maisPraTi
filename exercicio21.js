const prompt = require('prompt-sync')();

function calcularPesoIdeal(altura, sexo) {
  if (sexo === 'M') {
    return 72.7 * altura - 58;
  } else if (sexo === 'F') {
    return 62.1 * altura - 44.7;
  } else {
    return null;
  }
}

const altura = parseFloat(prompt("Digite a altura da pessoa (em metros): "));
const sexo = prompt("Digite o sexo da pessoa (M para masculino, F para feminino): ").toUpperCase();

const pesoIdeal = calcularPesoIdeal(altura, sexo);

if (pesoIdeal !== null) {
  console.log(`O peso ideal para a altura ${altura} e sexo ${sexo} é: ${pesoIdeal.toFixed(2)} kg`);
} else {
  console.log("Sexo inválido. Use 'M' para masculino ou 'F' para feminino.");
}
