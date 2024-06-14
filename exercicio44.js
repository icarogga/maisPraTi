function contarStrings(obj) {
    let contador = 0;

    for (const chave in obj) {
        if (typeof obj[chave] === 'string') {
            contador++;
        }
    }

    return contador;
}

let exemplo = { a: 1, b: 'texto', c: 'outro texto', d: 4, e: 'mais um texto' };

let resultado = contarStrings(exemplo);
console.log(resultado);
