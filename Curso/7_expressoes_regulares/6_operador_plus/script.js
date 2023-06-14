const umOuMaisNumeros = /\d+/;

console.log(umOuMaisNumeros.test("1518"));
console.log(umOuMaisNumeros.test(""));
console.log(umOuMaisNumeros.test("askdjfasçdkj"));
console.log(umOuMaisNumeros.test("1"));
console.log(umOuMaisNumeros.test("64987649876541987945654987"));
