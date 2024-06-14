const prompt = require('prompt-sync')();

let nomes = [];

for (let i = 0; i < 7; i++) {
  const nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
  nomes.push(nome);
}

console.log("Os nomes informados na ordem inversa são:");
for (let i = nomes.length - 1; i >= 0; i--) {
  console.log(nomes[i]);
}
