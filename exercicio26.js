const prompt = require('prompt-sync')();

let A = [], B = [], P = [];

for (let i = 0; i < 3; i++) {
    A[i] = [];
    for (let j = 0; j < 5; j++) {
        A[i][j] = parseInt(prompt(`Digite o valor de A[${i}][${j}]: `));
    }
}

for (let i = 0; i < 5; i++) {
    B[i] = [];
    for (let j = 0; j < 3; j++) {
        B[i][j] = parseInt(prompt(`Digite o valor de B[${i}][${j}]: `));
    }
}

for (let i = 0; i < 3; i++) {
    P[i] = [];
    for (let j = 0; j < 3; j++) {
        P[i][j] = 0;
        for (let k = 0; k < 5; k++) {
            P[i][j] += A[i][k] * B[k][j];
        }
    }
}

console.log("Matriz P:");
for (let i = 0; i < 3; i++) {
    console.log(P[i]);
}
