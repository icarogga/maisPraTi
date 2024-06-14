let dados = {
    nome: "Maria",
    idade: 25,
    hobbies: ["ler", "viajar", "nadar"],
    endereco: "Rua A, 123",
    notas: [10, 9, 8],
    ativo: true
};

function extrairPropriedadesArrays(obj) {
    let resultado = {};
    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            resultado[chave] = obj[chave];
        }
    }
    return resultado;
}

let propriedadesArrays = extrairPropriedadesArrays(dados);
console.log(propriedadesArrays);
