let b = 2;

try {
    let a = 2 + b;
}
catch(e) {
    console.log(e);
    //throw new Error(e);
} 
finally {
    console.log("executou");
}

// console.log("teste");