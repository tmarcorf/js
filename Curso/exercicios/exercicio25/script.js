function imprimaPares(numero){
    while(numero >= 0){
        if(numero % 2 == 0){
            console.log(numero);
        }
        
        numero--;
    }

    console.log("Fim.");
}

imprimaPares(5);
imprimaPares(10);
imprimaPares(85);