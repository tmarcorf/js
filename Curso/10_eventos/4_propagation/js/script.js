let botao1 = document.querySelector('#btn1');
let botao2 = document.querySelector('#btn2');
let p = document.querySelector("p");

function msg(e) {
    console.log("Clicou no button");
    e.stopPropagation();
}

botao1.addEventListener("click", msg);

botao2.addEventListener("click", (e) => {
    console.log(e)
});

p.addEventListener("click", function() {
    console.log("clicou no paragrafo")
});