const cep = /\d{5}-\d{3}/;

console.log(cep.test("74665-555"));
console.log(cep.test("asdf"));
console.log(cep.test("99999-999"));

const tel = /\(\d{2}\)\d{4,5}-\d{4}/;

console.log(tel.test("(62)98567-4896"));
console.log(tel.test("asdfa"));
console.log(tel.test("(62)987-4896"));