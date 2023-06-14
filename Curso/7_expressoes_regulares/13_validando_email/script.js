const validarEmail = /\w+@\w+\.\w+/;

console.log(validarEmail.test("joao@gmail.com"));
console.log(validarEmail.test("joao@gmail"));
console.log(validarEmail.test("@gmail.com"));
console.log(validarEmail.test("joaogmail.com"));