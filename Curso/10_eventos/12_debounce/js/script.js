let timeOut;

window.addEventListener("mousemove", (e) => {
    clearTimeout(timeOut);
    
    timeOut = setTimeout(() => {
        console.log(e.x);
    }, 500);
});