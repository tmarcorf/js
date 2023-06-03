function verifiqueIdadeParaAutoescola(idade){
    const mensagemPode = "Pode entrar na autoescola.";
    const mensagemNaoPode = "Não pode entrar na autoescola";

    idade >= 18 ? console.log(mensagemPode) : console.log(mensagemNaoPode);
}

verifiqueIdadeParaAutoescola(15);
verifiqueIdadeParaAutoescola(18);
verifiqueIdadeParaAutoescola(35);