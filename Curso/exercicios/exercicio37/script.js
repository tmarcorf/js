class CarrinhoDeCompras {
    constructor(itens, quantidadeTotal, valorTotal) {
        this.itens = itens;
        this.quantidadeTotal = quantidadeTotal;
        this.valorTotal = valorTotal;
    }

    adicionarItem(item) {
        let contador = 0;

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id) {
                this.itens[itemCarrinho].qtd += item.qtd;
                contador = 1;
            }
        }

        if(contador == 0){
            this.itens.push(item);
        }

        this.quantidadeTotal += item.qtd;
        this.valorTotal += item.preco * item.qtd;
    }

    removerItem(item) {

        for(let itemCarrinho in this.itens){
            if(this.itens[itemCarrinho].id == item.id) {
               
                let obj = this.itens[itemCarrinho];
                let index = this.itens.findIndex(function(obj) {return obj.id == item.id});
                

                this.quantidadeTotal -= this.itens[itemCarrinho].qtd;
                this.valorTotal -= this.itens[itemCarrinho].preco * this.itens[itemCarrinho].qtd;

                this.itens.splice(index, 1);
            }
        }
    }
}

CarrinhoDeCompras.prototype.itens = [];

var carrinho = new CarrinhoDeCompras([
    {
        id: 01,
        nome: "Camisa",
        qtd: 1,
        preco: 20
    },
    {
        id: 02,
        nome: "Calça",
        qtd: 2,
        preco: 50
    }
], 3, 120)


console.log(carrinho);

carrinho.adicionarItem({id: 01, nome: "camisa", qtd: 2, preco: 20});

console.log(carrinho);

carrinho.adicionarItem({id: 03, nome: "Boné", qtd: 1, preco: 15});

console.log(carrinho);

carrinho.removerItem({id: 01, nome: "camisa", qtd: 1, preco: 20})

console.log(carrinho);




// carrinho.adicionarItem('Câmera', 3500);
// console.log(carrinho);

// carrinho.removerItem('TV', 2500);
// console.log(carrinho);
