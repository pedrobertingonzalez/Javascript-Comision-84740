
function afinar () {
    let frecuencia = Number(prompt("ingresa la frecuencia"));

if(!frecuencia){
    alert("Ingresa una frecuencia valida");
    return;

}


let notas = [
        {nombre: "Do (C4)", hz: 261.626},
        {nombre: "Re (D4)", hz: 293.665},
        {nombre: "Mi (E4)", hz: 329.628},
        {nombre: "Fa (F4)", hz: 349.228},
        {nombre: "Sol (G4)", hz: 391.995},
        {nombre: "La (A4)", hz: 440},
        {nombre: "Si (B4)", hz: 493.883},
        {nombre: "Do (C5)", hz: 523.251}
    ];

let notaEncontrada = null;


for(let i = 0; i < notas.length; i++){
    let diferencia = frecuencia - notas[i].hz;

    if(diferencia === 0){
        notaEncontrada = `${notas[i].nombre}`;
        break;
    }

else if (Math.abs(diferencia) <= 10) {
    let difAbs = Math.abs(diferencia).toFixed(2);
    if(diferencia > 0){
        notaEncontrada= `${notas[i].nombre} + ${diferencia} Hz, baja la cuerda`
    } else{
        notaEncontrada= `${notas[i].nombre} - ${diferencia} Hz, subi la cuerda`
    }
    break;
}
}
notaEncontrada = notaEncontrada ?? "no coincide con ninguna nota de la tesitura del instrumento, selecciona otro instrumento";

alert(notaEncontrada);

}

afinar();