function sumarizarVendas(vendas) {
    let totalVendas = {};

    for (const venda of vendas) {
        let vendedor = venda.vendedor;
        let valor = venda.valor;

        if (totalVendas[vendedor]) {
            totalVendas[vendedor] += valor;
        } else {
            totalVendas[vendedor] = valor;
        }
    }

    return totalVendas;
}

let vendas = [
    { vendedor: 'Alice', valor: 100 },
    { vendedor: 'Bob', valor: 200 },
    { vendedor: 'Alice', valor: 150 },
    { vendedor: 'Bob', valor: 50 },
    { vendedor: 'Charlie', valor: 300 }
];

let resultado = sumarizarVendas(vendas);
console.log(resultado);
