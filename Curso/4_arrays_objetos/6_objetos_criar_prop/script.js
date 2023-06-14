let pessoa = {
    nome: 'Marco',
    idade: 26,
    profissao: 'Programador'
}

console.log(pessoa.nome);

delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

pessoa.casado = true;

console.log(pessoa);


