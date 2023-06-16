const validarData = /[1-31]{2}[/][0-12]{2}[/][1901-2034]{4}/;

console.log(validarData.test("15/10/2022"));
console.log(validarData.test("1/1/2022"));
console.log(validarData.test("15-10-2022"));
console.log(validarData.test("15/10/22"));
console.log(validarData.test("15/10/2035"));
console.log(validarData.test('15/10/2022'));

console.log("Email");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail(email) {
  return emailRegex.test(email);
}


const email = 'test@example.com';
console.log(validateEmail(email)); // Output: true

const invalidEmail = 'invalid.email';
console.log(validateEmail(invalidEmail)); // Output: false
