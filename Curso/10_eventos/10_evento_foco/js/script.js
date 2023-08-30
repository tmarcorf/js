let input = document.querySelector("#input1");

input.addEventListener("focus", (e) =>{
    console.log("Entrou no input");
});

input.addEventListener("blur", (e) =>{
    console.log("Saiu do input");
});