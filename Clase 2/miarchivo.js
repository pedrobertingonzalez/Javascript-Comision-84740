
//se define la escala//
const escala = ["DO","RE","MI","FA","SOL","LA","SI"];

//funcion principal
function armonicos(){

    //obtiene la nota ingresada en el input
    let nota = document.getElementById("notaingresada").value.trim().toUpperCase();

    //chequea de que sea valida
    if (!nota || !escala.includes(nota)) {
        alert("Ingresa la nota en sistema latino ej: Do, Re, Mi,..");

    } else {

    //Calcula el numero que le corresponde a cada nota (0-6)
    let indiceBase = escala.indexOf(nota);

    //calcula los intervalos usando modulo (%--->El módulo es el resto de una división.)
    let tercera = escala[(indiceBase + 2) % 7];
    let quinta = escala[(indiceBase + 4) % 7];
    let octava = escala[indiceBase];

    //mostrar resultados
    let texto = `
    Cuerda afinada en: ${nota}<br>
    5º traste: ${nota} (dos octavas arriba)<br>
    7º traste: ${quinta}<br>
    9º traste: ${tercera}<br>
    12º traste: ${nota} (una octava arriba)<br>
    `;

    document.getElementById("resultado").innerHTML = texto;
}
}

