function* criadorDeId() {
    let id = 0;

    while(true) {
        yield id++;
    }
}

let criaId = criadorDeId();

console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next().value);
console.log(criaId.next());