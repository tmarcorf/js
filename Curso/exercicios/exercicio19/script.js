function obtenhaNumeroAleatorio(numeroMaximo){
    return Math.floor(Math.random() * numeroMaximo + 1);
}

console.log(obtenhaNumeroAleatorio(10));
console.log(obtenhaNumeroAleatorio(100));
console.log(obtenhaNumeroAleatorio(1000));