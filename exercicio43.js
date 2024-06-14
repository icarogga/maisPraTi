function combinarObjetos(obj1, obj2) {
    let objCombinado = {};

    for (const chave in obj1) {
        objCombinado[chave] = obj1[chave];
    }

    for (const chave in obj2) {
        objCombinado[chave] = obj2[chave];
    }

    return objCombinado;
}

let obj1 = { a: 1, b: 2, c: 3 };
let obj2 = { b: 4, c: 5, d: 6 };

let resultado = combinarObjetos(obj1, obj2);
console.log(resultado);
