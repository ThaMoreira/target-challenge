function calcularSoma(indice) {
    let soma = 0 , k = 0;

    while (k < indice){
        k += 1;
        soma += + k;
    }
    return soma
}

console.log('A soma é: ' + calcularSoma(13));