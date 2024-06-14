const prompt = require('prompt-sync')();

const segmentoA = parseFloat(prompt("Informe o tamanho do primeiro segmento de reta: "));
const segmentoB = parseFloat(prompt("Informe o tamanho do segundo segmento de reta: "));
const segmentoC = parseFloat(prompt("Informe o tamanho do terceiro segmento de reta: "));

if ((segmentoA < segmentoB + segmentoC) && (segmentoB < segmentoA + segmentoC) && (segmentoC < segmentoA + segmentoB)) {
  console.log("Os segmentos podem formar um triângulo.");
} else {
  console.log("Os segmentos não podem formar um triângulo.");
}
