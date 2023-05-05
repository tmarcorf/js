function imprimirNoConsole() {
    console.log("Olá mundo");
}

imprimirNoConsole();

function imprimirUmNumero(num) {
    console.log(`O número é ${num}`);
}

imprimirUmNumero(5);
imprimirUmNumero(25);
imprimirUmNumero(65489);
imprimirUmNumero(352);

const numeroAleatorio = function() {
    console.log(Math.random());
}

numeroAleatorio();