function organizarTransacoes(transacoes) {
    let resultado = {};

    for (const transacao of transacoes) {
        let categoria = transacao.categoria;

        if (!resultado[categoria]) {
            resultado[categoria] = {
                transacoes: [],
                subtotal: 0
            };
        }

        resultado[categoria].transacoes.push(transacao);
        resultado[categoria].subtotal += transacao.valor;
    }

    return resultado;
}

let transacoes = [
    { id: 1, valor: 100, data: '2024-06-01', categoria: 'alimentação' },
    { id: 2, valor: 50, data: '2024-06-02', categoria: 'transporte' },
    { id: 3, valor: 200, data: '2024-06-03', categoria: 'alimentação' },
    { id: 4, valor: 150, data: '2024-06-04', categoria: 'lazer' },
    { id: 5, valor: 80, data: '2024-06-05', categoria: 'transporte' }
];

let resultado = organizarTransacoes(transacoes);
console.log(resultado);
