let numero = 1569876;

if(numeroEhPrimo(numero)) {
    console.log(`${numero} é primo.`);
} else {
    console.log(`${numero} não é primo.`);
}

function numeroEhPrimo(numero) {
    if(numero <= 1) return false;

    let contadorDeDivisoesExatas = 0;

    for(let i = numero; i >= 1; i--) {
        if(numero % i == 0){
            contadorDeDivisoesExatas++;
        }
    }

    return contadorDeDivisoesExatas == 2;
}