function combinarInventarios(inventarioA, inventarioB) {
    let inventarioCombinado = {};

    for (const item in inventarioA) {
        inventarioCombinado[item] = inventarioA[item];
    }

    for (const item in inventarioB) {
        if (inventarioCombinado[item]) {
            inventarioCombinado[item] += inventarioB[item];
        } else {
            inventarioCombinado[item] = inventarioB[item];
        }
    }

    return inventarioCombinado;
}

let inventarioLojaA = { macas: 10, bananas: 5, laranjas: 8 };
let inventarioLojaB = { bananas: 7, laranjas: 3, peras: 4 };

let resultado = combinarInventarios(inventarioLojaA, inventarioLojaB);
console.log(resultado);
