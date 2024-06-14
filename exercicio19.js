const prompt = require('prompt-sync')();

let contador = 1;

while (contador <= 5) {
    const hora = parseInt(prompt('Digite a hora: '));
    const minutos = parseInt(prompt('Digite os minutos: '));
    const segundos = parseInt(prompt('Digite os segundos: '));

    if (Number.isInteger(hora) && Number.isInteger(minutos) && Number.isInteger(segundos)) {
        console.log(`São ${hora}.${minutos}.${segundos}`);
    } else {
        break;
    }

    contador++;
}

