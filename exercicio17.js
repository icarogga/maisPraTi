const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i = 0; i < 9; i++) {
  const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
  const idade = parseInt(prompt(`Digite a idade da pessoa ${i + 1}: `));

  nomes.push(nome);
  idades.push(idade);
}

console.log("Listagem de pessoas menores de idade:");
for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
  }
}
