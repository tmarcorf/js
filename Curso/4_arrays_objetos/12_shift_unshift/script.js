let carros = ['BMW', 'Audi', 'VW', 'Fiat'];

let primeiroCarroRemovido = carros.shift();

console.log(primeiroCarroRemovido);
console.log(carros);

carros.unshift('Gurgel');

console.log(carros);
console.log(carros[0]);