function transformarObjeto(obj, fn) {
    let novoObjeto = {};

    for (const chave in obj) {
        novoObjeto[chave] = fn(obj[chave]);
    }

    return novoObjeto;
}

let exemplo = { a: 1, b: 2, c: 3 };
let funcao = (valor) => valor * 2;

let resultado = transformarObjeto(exemplo, funcao);
console.log(resultado);
