const reg1 = new RegExp('bola');

console.log(reg1.test("tem bola?"));
console.log(reg1.test("Não tem."));

const reg2 = /bola/;

let text = "Tem bola na cesta.";

console.log(reg2.test("tem bola?"));
console.log(reg2.test("Não tem."));
console.log(reg2.test(text));

console.log(/quadrado/.test("tem quadrado."));
