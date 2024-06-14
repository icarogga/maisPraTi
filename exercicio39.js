const prompt = require('prompt-sync')();

let A = [];
let B = [];
for (let i = 0; i < 100; i++) {
    A.push(parseFloat(prompt(`Digite o ${i + 1}º número do vetor A: `)));
}

for (let i = 0; i < 100; i++) {
    if (A[i] > 0) {
        B.push(A[i]);
    }
}

console.log('Vetor compactado B:', B);
