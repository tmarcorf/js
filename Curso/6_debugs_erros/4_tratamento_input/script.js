function checarNumero(valor) {
    let number = Number(valor);

    if(Number.isNaN(number)) {
        alert("Por favor, passe só números para o programa");
    }
    else {
        return number;
    }
}

checarNumero(5);
checarNumero("asdfasdf");

let number = prompt("Digite um número");

checarNumero(number);
