let arr1 = [1,2,3,4,5,6,7,8];
let arr2 = [1,2,3];

function verifiqueNumeroDeElementos(array){
    if(array.length >= 5) {
        console.log("Muitos elementos");
    }
    else {
        console.log("Poucos elementos");
    }
}

verifiqueNumeroDeElementos(arr1);
verifiqueNumeroDeElementos(arr2);
