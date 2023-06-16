const validaIP = /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}/;

console.log(validaIP.test("127.0.0.1"));
console.log(validaIP.test("asdfasdf"));
console.log(validaIP.test("12.0.0.155"));
console.log(validaIP.test("127.0.0.1"));
