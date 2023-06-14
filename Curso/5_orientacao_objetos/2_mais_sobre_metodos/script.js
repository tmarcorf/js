const cachorro = {
    raca: 'SRD',
    uivar: function() {
        console.log("Auuuuuuuuuuuuuu");
    },
    rosnar: function() {
        console.log("Grrrrrrrrrrr");
    },
    setRaca: function(raca) {
        this.raca = raca;
    },
    getRaca: function() {
        return "A raça é " + this.raca;
    }
}

console.log(cachorro.raca);

cachorro.setRaca("Dobberman");

console.log(cachorro.raca);

console.log(cachorro.getRaca())