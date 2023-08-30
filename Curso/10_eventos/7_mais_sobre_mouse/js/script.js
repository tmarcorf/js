let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");

btn1.addEventListener("mousedown", (e) => {
    console.log("Apertou o botão");
});

btn1.addEventListener("mouseup", (e) => {
    console.log("Apertou o botão up");
});

btn2.addEventListener("dblclick", (e) => {
    console.log("Clicou duas vezes");
});

btn2.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    console.log("Botao direito clicado");
});