const pontoRegex = /./;

console.log("/./");
console.log(pontoRegex.test("asdfa"));
console.log(pontoRegex.test(" "));
console.log(pontoRegex.test("123"));
console.log(pontoRegex.test("321asdf"));


const dRegex = /\d/;

console.log("/\d/");
console.log(dRegex.test("asdfa"));
console.log(dRegex.test(" "));
console.log(dRegex.test("123"));
console.log(dRegex.test("321asdf"));

const dRegex2 = /\D/; 

console.log("/\D/");
console.log(dRegex2.test("asdfa"));
console.log(dRegex2.test(" "));
console.log(dRegex2.test("123"));
console.log(dRegex2.test("321asdf"));

const sRegex = /\s/;

console.log("/\s/");
console.log(sRegex.test("asdfa"));
console.log(sRegex.test(" "));
console.log(sRegex.test("123"));
console.log(sRegex.test("321asdf"));

const wRegex = /\w/;

console.log("/\w/");
console.log(wRegex.test("asdfa"));
console.log(wRegex.test(" "));
console.log(wRegex.test("123"));
console.log(wRegex.test("321asdf"));