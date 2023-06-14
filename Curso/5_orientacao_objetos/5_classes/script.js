let cachorro = {
    patas: 4,
    raca: 'SRD',
    latir: function() {
        console.log("Au Au");
    }
}

let labrador = Object.create(cachorro);

labrador.latir();

labrador.raca = "Labrador";
console.log(labrador.raca);
console.log(cachorro.raca);

let pastorAlemao = Object.create(cachorro);
pastorAlemao.raca = "Pastor alemão";

console.log(pastorAlemao.raca);