const escalaCromatica = ['DO', 'DO#/REb', 'RE', 'RE#/MIb', 'MI', 'FA', 'FA#/SOLb', 'SOL', 'SOL#/LAb', 'LA', 'LA#/SIb', 'SI']

const A4 = 440



// Afinador 
function detectarNota (frecuencia) {

    let n = 12 * Math.log2(frecuencia/A4)

    let nRedondeado = Math.round(n)

    let desviacion = 100 * (n - nRedondeado)

    let indice = 9 + nRedondeado

    let nota = escalaCromatica[(indice%12 + 12)%12]

    let octava = 4 + Math.floor(indice / 12)

    return {nota, octava, desviacion}
}



    // Armonicos
function armonicos(nota){

    if(escalaCromatica.includes(nota)) {

        let indiceEscala = escalaCromatica.indexOf(nota)

        let tercera = escalaCromatica[(indiceEscala + 4) % 12];
        let quinta = escalaCromatica[(indiceEscala + 7) % 12];
        let octava = escalaCromatica[indiceEscala % 12];

    console.log(`Cuerda afinada en ${nota} \n5º traste: ${nota} (dos octavas arriba) \n7º traste: ${quinta} \n9º traste: ${tercera} \n12º traste: ${nota} (una octava arriba)`)
}
}



function iniciarSimulador(){

// Indice
let bienvenida = prompt('Bienvenido al rincon de la guitarra! \ncomo te llamas?')

while (bienvenida === ""){

    alert('No ingresaste un nombre. Por favor, intenta nuevamente')

    bienvenida = prompt('Bienvenido al rincon de la guitarra! \ncomo te llamas?')

} 

if(!bienvenida){
    alert("Operacion cancelada. Saliendo del programa")


}else {
    let menu = prompt('Hola ' + bienvenida + '! Que deseas hacer hoy? \nAfinador \nArmonicos')

    if(!menu){
        alert("Operacion cancelada. Saliendo del programa")
        return
} 

    menu = menu.trim().toLowerCase()

while (menu !== 'afinador' && menu !== 'armonicos' || menu === ""){

    menu = prompt('Opcion invalida \nQue deseas hacer hoy? \nAfinador \nArmonicos')

    if(!menu){
        alert("Operacion cancelada. Saliendo del programa")
        return
} 
}





if (menu === 'afinador'){

    let frecuencia = Number(prompt('Introduzca la frecuencia (Hz)'));

    while (isNaN(frecuencia) || frecuencia <= 0){
    frecuencia = Number(prompt('Por favor ingrese una frecuencia valida(Hz)'));
    }

    const {nota, octava, desviacion} = detectarNota(frecuencia)

    if (Math.abs(desviacion) < 5){
    console.log(`${nota}${octava} afinado`)

    } else if (desviacion < 0){
    console.log(`${nota}${octava} ${desviacion.toFixed(2)}cents, tensiona la cuerda para llegar`)

    } else {
    console.log(`${nota}${octava} ${desviacion.toFixed(2)}cents, afloja la cuerda para llegar`)
}




}else if(menu === 'armonicos'){
    let nota = prompt('ingresa la nota en sistema latino ej:Do, Re, Mi').trim().toUpperCase()

    while (!escalaCromatica.includes(nota)) {
    nota = prompt('Ingresa la nota en sistema latino ej: Do, Re, Mi,..').trim().toUpperCase()
    }
    armonicos(nota)
} 

let repetir = confirm("¿Deseas realizar otra operación?");

if (repetir) {
    iniciarSimulador();  
} else {
    alert("Hasta la proxima");
}

}}

iniciarSimulador()
