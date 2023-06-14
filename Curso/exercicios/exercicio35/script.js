let calculadora = {
    somar: function(num1, num2) {
        return num1 + num2;
    },
    subtrair: function(num1, num2) {
        return num1 - num2;
    },
    multiplicar: function(num1, num2) {
        return num1 * num2;
    },
    dividir: function(num1, num2) {
        if(num2 == 0) {
            console.log("Impossível dividir por 0");
            return;
        }

        return num1 / num2;
    }
}

console.log(calculadora.somar(10, 5));
console.log(calculadora.subtrair(389, 426));
console.log(calculadora.multiplicar(2, 2));
console.log(calculadora.dividir(5, 2));