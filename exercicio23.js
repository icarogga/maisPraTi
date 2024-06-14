const tamanho = 7;
let matrizIdentidade = [];

for (let i = 0; i < tamanho; i++) {
  matrizIdentidade[i] = [];
  for (let j = 0; j < tamanho; j++) {
    if (i === j) {
      matrizIdentidade[i][j] = 1;
    } else {
      matrizIdentidade[i][j] = 0;
    }
  }
}

for (let i = 0; i < tamanho; i++) {
  console.log(matrizIdentidade[i].join(' '));
}
