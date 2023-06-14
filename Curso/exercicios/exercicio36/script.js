class ContaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    depositar(valor) {
        this.saldo += valor;
    }

    sacar(valor) {
        if (valor > this.saldo) {
            console.log("Saldo insuficiente.");
            return;
        }

        this.saldo -= valor;
    }
}

let conta = new ContaBancaria(5698.35);
console.log(conta);

conta.depositar(135.50);
console.log(conta);

conta.sacar(3500);
console.log(conta);
