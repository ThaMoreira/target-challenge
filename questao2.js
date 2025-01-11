const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function pertenceFibonacci(numero) {
    let a = 0, b = 1;
    
    if (numero === 0 || numero === 1) {
        return true;
    }

    while (b < numero) {

        let temp = a + b;
        a = b;
        b = temp;

        if (b === numero) {
            return true;
        }
    }
    return false;
}

rl.question('Informe um número para verificar se pertence à sequência de Fibonacci: ', (input) => {
    let numero = parseInt(input);

    if (pertenceFibonacci(numero)) {
        console.log(`O número ${numero} pertence à sequência de Fibonacci.`);
    } else {
        console.log(`O número ${numero} NÃO pertence à sequência de Fibonacci.`);
    }

    rl.close();
});