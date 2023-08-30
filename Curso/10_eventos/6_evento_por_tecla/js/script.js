window.addEventListener("keydown", (e) =>{
    if(e.key == 'q') {
        console.log("Apertou a letra q");
    }
});

window.addEventListener("keyup", (e) => {
    if(e.key == "Enter") {
        console.log("Soltou o enter");
    }
});