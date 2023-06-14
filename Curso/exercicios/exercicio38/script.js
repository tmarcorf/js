class Endereco {
    constructor(rua, bairro, cidade, estado) {
        this.rua = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }

    set setRua(rua) {
        this.rua = rua;
    }
    
    set setBairro(bairro) {
        this.bairro = bairro;
    }

    set setCidade(cidade) {
        this.cidade = cidade;
    }

    set setEstado(estado) {
        this.estado = estado;
    }
}

let endereco = new Endereco('Alameda das Rosas','St. Marista','Goiânia','Goiás');

console.log(endereco);

endereco.setRua = 'asdfsadf';
endereco.setBairro = 'asdfasdf';
endereco.setCidade = 'adsf5asd4f';
endereco.setEstado = 'asdfas6'

console.log(endereco);
