function contarOcorrencias(array) {
    let contagem = {};

    for (const str of array) {
        if (contagem[str]) {
            contagem[str]++;
        } else {
            contagem[str] = 1;
        }
    }

    return contagem;
}

let arrayDeStrings = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

let resultado = contarOcorrencias(arrayDeStrings);
console.log(resultado);
