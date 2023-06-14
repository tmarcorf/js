let pessoa = {
    nome: 'Marco'
}

let pessoa2 = pessoa;

console.log(pessoa == pessoa2);

pessoa2.nome = 'Pedro';

console.log(pessoa.nome);

pessoa.nome = 'Maria';

console.log(pessoa2.nome);
