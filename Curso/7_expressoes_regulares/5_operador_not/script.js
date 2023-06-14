const notab = /[^ab]/;

console.log(notab.test("a"));
console.log(notab.test("Aqui tem a"));

const az = /[a-z]/;

console.log(az.test("asdfas 132"));

