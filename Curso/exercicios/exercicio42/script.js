const regexId = /[0-9]\ID/;

console.log(regexId.test("555ID"));
console.log(regexId.test("555PA"));
console.log(regexId.test("ASDFASDID"));