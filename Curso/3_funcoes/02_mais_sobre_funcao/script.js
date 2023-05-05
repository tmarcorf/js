
function multiplicarTresNumeros(x, y, z) {
    return x * y * z;
}

console.log(multiplicarTresNumeros(2, 4, 3));

function podeDirigir(idade, cnh) {
    if(idade >= 18 && cnh == true) {
        console.log("Pode dirigir");
    } else {
        console.log("Nâo pode dirigir");
    }
}

console.log(podeDirigir(18, true));
console.log(podeDirigir(25, false));
console.log(podeDirigir(15, true));