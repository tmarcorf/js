class Carro {
    constructor(marca, cor, gasolinaRestante, consumo) {
        this.marca = marca;
        this.cor = cor;
        this.gasolinaRestante = gasolinaRestante;
        this.consumo = consumo;
    }

    dirigir(km) {
        let litrosConsumidos = km / this.consumo;      

        this.gasolinaRestante -= litrosConsumidos;
    }

    abastecer(litros) {
        this.gasolinaRestante += litros;
    }
}

let carro = new Carro('Fiat', 'Cinza', 45, 14);

console.log(carro);

carro.dirigir(5);
carro.dirigir(5);
carro.dirigir(5);
carro.dirigir(5);
carro.dirigir(5);
carro.dirigir(5);
carro.dirigir(5);

console.log(carro);

carro.abastecer(10);
carro.abastecer(10);

console.log(carro);