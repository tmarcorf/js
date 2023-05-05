let idade = 17;
let temCnh = true;

if (idade >= 18 && !temCnh) {
    console.log("Você não possui CNH.");
} else if(idade >= 18 && temCnh) {
    console.log("Pode dirigir.");
} else {
    console.log("Não pode dirigir.");
}