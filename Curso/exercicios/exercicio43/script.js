const validaMarca = /Marca: (Nike|Adidas|Puma|Asics)/;

console.log(validaMarca.test("Marca: Nike"));
console.log(validaMarca.test("Marca: asdf"));
console.log(validaMarca.test("Marca: Adidas"));
console.log(validaMarca.test("Marca: Hocks"));
console.log(validaMarca.test("Marca: 6549874"));
