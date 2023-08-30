let botao1 = document.querySelector('#btn1');
let botao2 = document.querySelector('#btn2');

function msg(e) {
    console.log(e);
}

botao1.addEventListener("click", msg);

botao2.addEventListener("click", (e) => {
    console.log(e)
});