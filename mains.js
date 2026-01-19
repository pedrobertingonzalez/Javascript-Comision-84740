const escalaCromatica = [
    'DO',
    'DO#/REb',
    'RE',
    'RE#/MIb',
    'MI',
    'FA',
    'FA#/SOLb',
    'SOL',
    'SOL#/LAb',
    'LA',
    'LA#/SIb',
    'SI'];

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

    return `Cuerda afinada en ${nota} \n5º traste: ${nota} (dos octavas arriba) \n7º traste: ${quinta} \n9º traste: ${tercera} \n12º traste: ${nota} (una octava arriba)`;
}
}

// Interfaz de usuario
const menu = document.getElementById('menu');
const boton = document.getElementById('boton');

boton.addEventListener('click', () => {
    const seleccion = menu.value;

if (seleccion === 'afinador') {
    iniciarAfinador();}

else if (seleccion === 'armonicos') {
    iniciararmonicos();}
});


// Función para iniciar el afinador
function iniciarAfinador() {

    const app = document.getElementById('app');

    app.innerHTML = `
    <h2>Afinador</h2>
    <input type="number" id="frecuenciaEntrada" class="css" placeholder="Ingrese la frecuencia en Hz" />
    <button id="detectarBtn" class="css">Detectar Nota</button>
    <pre id="resultadoAfinador"></pre>
  `;
  document.getElementById('detectarBtn').addEventListener('click', () => {
    const frecuencia = parseFloat(document.getElementById('frecuenciaEntrada').value);
    const resultado = detectarNota(frecuencia);

    if (!frecuencia || frecuencia <= 0) {
  document.getElementById('resultadoAfinador').textContent = "Frecuencia inválida";
  return;
}

    document.getElementById('resultadoAfinador').textContent = `Nota: ${resultado.nota}, Octava: ${resultado.octava}, Desviación: ${resultado.desviacion.toFixed(2)}%`;
  });
}

// Función para iniciar los armónicos
function iniciararmonicos() {  
    const app = document.getElementById('app');

    app.innerHTML = `
    <h2>Armónicos</h2>
    <input type="text" id="notaEntrada" class="css" placeholder="Ingrese la nota (ej. DO, RE, MI)" />
    <button id="calcularBtn" class="css">Calcular Armónicos</button>
    <pre id="resultadoArmonicos"></pre>
  `;

  document.getElementById('calcularBtn').addEventListener('click', () => {
    const nota = document.getElementById('notaEntrada').value.trim().toUpperCase();
    const resultado = armonicos(nota);

    if (!resultado) {
  document.getElementById('resultadoArmonicos').textContent = "Nota inválida (ej: DO, RE, MI...)";
  return;}

    document.getElementById('resultadoArmonicos').textContent = resultado;
    });
}