function saudacao(nome) {
    if(typeof nome != 'String') {
        throw new Error("O parâmetro precisa ser uma string");
    }
    else {
        console.log(`Olá ${nome}.`);
    }
}

saudacao("Marco");
saudacao(65);

console.log("teste");