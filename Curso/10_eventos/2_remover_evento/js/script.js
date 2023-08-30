let botao1 = document.querySelector('#btn1');
let botao2 = document.querySelector('#btn2');

function msg() {
    console.log("Clicou em mim");
}

botao1.addEventListener("click", msg);

botao2.addEventListener("click", () => {
    botao1.removeEventListener("click", msg);
});