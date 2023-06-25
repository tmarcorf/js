const nomeUsuarioRegex = /^(?=.{3,16}$)[a-z0-9-_]/;

console.log(nomeUsuarioRegex.test("playboyzinho123"));
console.log(nomeUsuarioRegex.test("playboyzinho_123"));

