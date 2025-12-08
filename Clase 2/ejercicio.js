
let ofertaBase = 2000

let oferta = Number(prompt("ingresa tu oferta"));

function comparacion(){
if(ofertaBase < oferta) {
    console.log ("lo vendo");

} else if (ofertaBase > oferta && oferta > 1500) {
    console.log("que se estire un poco mas");

} else if (oferta <= 1500) {
    console.log("sos un rata");
}
}

comparacion();
