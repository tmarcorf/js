class ContaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
        this.saldoContaCorrente = saldoContaCorrente;
        this.saldoContaPoupanca = saldoContaPoupanca;
        this.jurosPoupanca = jurosPoupanca;
    }

    depositar(valor) {
        this.saldoContaCorrente += valor;
    }

    sacar(valor) {
        this.saldoContaCorrente -= valor;
    }

    transferirPoupancaParaCorrente(valor) {
        this.saldoContaCorrente -= valor;
        this.saldoContaPoupanca += valor;
    }
}

class ContaEspecial extends ContaBancaria {
    constructor(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca) {
        super(saldoContaCorrente, saldoContaPoupanca, jurosPoupanca * 2);
    }
}

let conta = new ContaBancaria(1500, 2000, 2);

console.log(conta);

conta.depositar(500);

console.log(conta);

conta.sacar(875.69);
console.log(conta);

let contaEspecial = new ContaEspecial(1500, 2000, 2);

console.log(contaEspecial);
