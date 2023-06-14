let pessoa = {
    "nome": "Matheus",
    "idade": 28,
    "profissao": "Programador",
    "hobbies": ["Video game", "Leitura", "Correr"]
}

let pessoaTexto = JSON.stringify(pessoa);

console.log(pessoaTexto);
// console.log(pessoaTexto.nome);

let pessoaJson = JSON.parse(pessoaTexto);

console.log(pessoaJson);
console.log(pessoaJson.hobbies[0]);