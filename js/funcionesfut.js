 // Animando las piernas delos jugadores
 function animateLegsForPlayer() {
    // Obtener los elementos de las piernas de los jugadores del quipo 1
    var leftLeg = document.getElementById('leftLeg');
    var rightLeg = document.getElementById('rightLeg');
    var leftLeg2 = document.getElementById('leftLeg2');
    var rightLeg2 = document.getElementById('rightLeg2');
    var leftLeg3 = document.getElementById('leftLeg3');
    var rightLeg3 = document.getElementById('rightLeg3');
    var leftLeg4 = document.getElementById('leftLeg4');
    var rightLeg4 = document.getElementById('rightLeg4');
    var leftLeg5 = document.getElementById('leftLeg5');
    var rightLeg5 = document.getElementById('rightLeg5');
    var leftLeg6 = document.getElementById('leftLeg6');
    var rightLeg6 = document.getElementById('rightLeg6');
    var leftLeg7 = document.getElementById('leftLeg7');
    var rightLeg7 = document.getElementById('rightLeg7');
    ///////
    var leftLeg8 = document.getElementById('leftLeg8');
    var rightLeg8 = document.getElementById('rightLeg8');
    var leftLeg9 = document.getElementById('leftLeg9');
    var rightLeg9 = document.getElementById('rightLeg9');
    var leftLeg10 = document.getElementById('leftLeg10');
    var rightLeg10 = document.getElementById('rightLeg10');
    var leftLeg11 = document.getElementById('leftLeg11');
    var rightLeg11 = document.getElementById('rightLeg11');
    var leftLeg12 = document.getElementById('leftLeg12');
    var rightLeg12 = document.getElementById('rightLeg12');
    var leftLeg13 = document.getElementById('leftLeg13');
    var rightLeg13 = document.getElementById('rightLeg13');
    var leftLeg14 = document.getElementById('leftLeg14');
    var rightLeg14 = document.getElementById('rightLeg14');
    
    // Moviendo la pierna izquierda hacia adelante del equipo 1
    leftLeg.setAttribute('position', '-2.81 0.3 -2');
    rightLeg.setAttribute('position', '-3.19 0.7 -2');

    leftLeg2.setAttribute('position', '9.81 0.3 -9');
    rightLeg2.setAttribute('position', '10.19 0.7 -9');

    leftLeg3.setAttribute('position', '-9.81 0.3 -9');
    rightLeg3.setAttribute('position', '-10.19 0.7 -9');

    leftLeg4.setAttribute('position', '-0.19 0.4 -9');
    rightLeg4.setAttribute('position', '0.19 0.6 -9');

    leftLeg5.setAttribute('position', '-6.81 0.4 -19');
    rightLeg5.setAttribute('position', '-7.19 0.6 -19');

    leftLeg6.setAttribute('position', '6.81 0.4 -19');
    rightLeg6.setAttribute('position', '7.19 0.6 -19');

    leftLeg7.setAttribute('position', '-0.19 0.4 -24');
    rightLeg7.setAttribute('position', '0.19 0.6 -24');
    //////
     // Moviendo la pierna izquierda hacia adelante del equipo 1
     leftLeg8.setAttribute('position', '-2.81 0.4 2');
    rightLeg8.setAttribute('position', '-3.19 0.6 2');

    leftLeg9.setAttribute('position', '9.81 0.4 9');
    rightLeg9.setAttribute('position', '10.19 0.6 9');

    leftLeg10.setAttribute('position', '-9.81 0.4 9');
    rightLeg10.setAttribute('position', '-10.19 0.6 9');

    leftLeg11.setAttribute('position', '-0.19 0.4 9');
    rightLeg11.setAttribute('position', '0.19 0.6 9');

    leftLeg12.setAttribute('position', '-6.81 0.4 19');
    rightLeg12.setAttribute('position', '-7.19 0.6 19');

    leftLeg13.setAttribute('position', '6.81 0.4 19');
    rightLeg13.setAttribute('position', '7.19 0.6 19');

    leftLeg14.setAttribute('position', '-0.19 0.4 24');
    rightLeg14.setAttribute('position', '0.19 0.6 24');

    
    // Moviendo la pierna hacia la derecha después de 500ms
    setTimeout(function() {
        leftLeg.setAttribute('position', '-2.81 0.7 -2');
        rightLeg.setAttribute('position', '-3.19 0.3 -2');

        leftLeg2.setAttribute('position', '9.81 0.7 -9');
        rightLeg2.setAttribute('position', '10.19 0.3 -9');

        leftLeg3.setAttribute('position', '-9.81 0.7 -9');
        rightLeg3.setAttribute('position', '-10.19 0.3 -9');

        leftLeg4.setAttribute('position', '-0.19 0.6 -9');
        rightLeg4.setAttribute('position', '0.19 0.4 -9');

        leftLeg5.setAttribute('position', '-6.81 0.6 -19');
        rightLeg5.setAttribute('position', '-7.19 0.4 -19');

        leftLeg6.setAttribute('position', '6.81 0.6 -19');
        rightLeg6.setAttribute('position', '7.19 0.4 -19');

        leftLeg7.setAttribute('position', '-0.19 0.6 -24');
        rightLeg7.setAttribute('position', '0.19 0.4 -24');
        //////////////////////////////////////////////////
        leftLeg8.setAttribute('position', '-2.81 0.6 2');
        rightLeg8.setAttribute('position', '-3.19 0.4 2');

        leftLeg9.setAttribute('position', '9.81 0.6 9');
        rightLeg9.setAttribute('position', '10.19 0.4 9');

        leftLeg10.setAttribute('position', '-9.81 0.6 9');
        rightLeg10.setAttribute('position', '-10.19 0.4 9');

        leftLeg11.setAttribute('position', '-0.19 0.6 9');
        rightLeg11.setAttribute('position', '0.19 0.4 9');

        leftLeg12.setAttribute('position', '-6.81 0.6 19');
        rightLeg12.setAttribute('position', '-7.19 0.4 19');

        leftLeg13.setAttribute('position', '6.81 0.6 19');
        rightLeg13.setAttribute('position', '7.19 0.4 19');

        leftLeg14.setAttribute('position', '-0.19 0.6 24');
        rightLeg14.setAttribute('position', '0.19 0.4 24');
    }, 500);
    
    // Repetir la animación cada segundo
    setTimeout(animateLegsForPlayer, 1000);
}

// Iniciar la animación de las piernas paralos jugadores
animateLegsForPlayer();

////////////////////// DARLE MOVIMIENTO AL BALON
// Obtener el balon con su id 
var balon = document.getElementById('ball');

// Aqui se difinen las posiciones donde quiero que va a pasar el balon
var posiciones = [
  { x: 0, y: 0.6, z: 23, rotation: '0 0 0' },
  { x: -3, y: 0.6, z: -1, rotation: '0 180 0' },
  { x: 10, y: 0.6, z: -8, rotation: '0 90 0' },
  { x: -10, y: 0.6, z: -8, rotation: '0 -90 0' },
  { x: 0, y: 0.6, z: -8, rotation: '0 0 0' },
  { x: -7, y: 0.6, z: -18, rotation: '0 90 0' },
  { x: 7, y: 0.6, z: -18, rotation: '0 -90 0' },
  { x: 0, y: 0.6, z: -23, rotation: '0 180 0' },
  { x: -3, y: 0.6, z: 1, rotation: '0 0 0' },
  { x: 10, y: 0.6, z: 8, rotation: '0 90 0' },
  { x: -10, y: 0.6, z: 8, rotation: '0 -90 0' },
  { x: 0, y: 0.6, z: 8, rotation: '0 180 0' },
  { x: -7, y: 0.6, z: 18, rotation: '0 -90 0' },
  { x: 7, y: 0.6, z: 18, rotation: '0 90 0' }
];

var indiceAct= 0; // indice opara controlar la posicion actual del balon
var tiempointervalo= 4000; // permanecera durante 4s en cada posicion
var duraciontransicion= 2000; // la duracion de trancicion entre posiscion y posicion es de  2 segundos

// Ffuncion para mocver el balon entre posiciones y rotarlo
function moverbalon() {
  // se obtine la posición actual y la siguiente del balon
  
  var siguienteposicion = posiciones[(indiceAct + 1) % posiciones.length];

  // actualizar la pocision y rotacion del balón 
  balon.setAttribute('animation', {
    property: 'position',
    to: `${siguienteposicion.x} ${siguienteposicion.y} ${siguienteposicion.z}`,
    dur: duraciontransicion,
    easing: 'linear'
  });

  balon.setAttribute('animation__rotation', {
    property: 'rotation',
    to: siguienteposicion.rotation,
    dur: duraciontransicion,
    easing: 'linear'
  });

  // se incrementa  el indice para pasar a la siguiente posicion en el siguiente ciclo
  indiceAct++;
  // si se llega al final del arreglo  de posiciones, se reeinicia
  if (indiceAct >=posiciones.length) {
    indiceAct = 0;
  }
}

// Llamar a la funcion para iniciar el desplazamiento
moverbalon();

// intervalo para llamar a la funcion
var intervalId = setInterval(moverbalon, tiempointervalo);

//PONER UN CRRONOMETRO QUE ME SIMULE QUE MIDA LA DURACION DEL PARTIDO
// cachar elle elemto de texto para el cronometro
var tiempoTexto = document.getElementById('tiempo');
var tiempoTexto2 = document.getElementById('tiempo2');


// variables para poder controlar el cronometro
var segundos = 0;
var minutos = 0;

// Esta funcion para poder actualizar  el tiempo del cronometro
function actualizarTiempo() {
    segundos++;
    if (segundos >= 60) {
        segundos = 0;
        minutos++;
    }
    var tiempoString = (minutos < 10 ? '0' + minutos : minutos) + ':' + (segundos < 10 ? '0' + segundos : segundos);
    tiempoTexto.setAttribute('value', tiempoString);
    tiempoTexto2.setAttribute('value', tiempoString);

    // se detiene cuando llege a los 90 minutos que es lo que dura un partido
    if (minutos === 90) {
        clearInterval(intervaloCronometro);
    }
}

// Intervalo para actualizar el tiempo cada segundo
var intervaloCronometro = setInterval(actualizarTiempo, 800);

// cuando se inicie la pagina 
window.onload = function () {
    actualizarTiempo(); // empieza el cronometro
};

//AQUI SE ANIMA LA AFICION

function animaraficion() {
  // Obtener los elementos de las piernas de los jugadores del quipo 1
  var brazoizq = document.getElementById('brazoizq1');
  var brazoder = document.getElementById('brazoder1');
  var manoizq = document.getElementById('manoizq1');
  var manoder = document.getElementById('manoder1');
  var hombroizq = document.getElementById('hombroizq1');
  var hombroder = document.getElementById('hombroder1');

  var brazoizq2 = document.getElementById('brazoizq2');
  var brazoder2 = document.getElementById('brazoder2');
  var manoizq2 = document.getElementById('manoizq2');
  var manoder2 = document.getElementById('manoder2');
  var hombroizq2 = document.getElementById('hombroizq2');
  var hombroder2 = document.getElementById('hombroder2');

  var brazoizq3 = document.getElementById('brazoizq3');
  var brazoder3 = document.getElementById('brazoder3');
  var manoizq3 = document.getElementById('manoizq3');
  var manoder3 = document.getElementById('manoder3');
  var hombroizq3 = document.getElementById('hombroizq3');
  var hombroder3 = document.getElementById('hombroder3');

  var brazoizq4 = document.getElementById('brazoizq4');
  var brazoder4 = document.getElementById('brazoder4');
  var manoizq4 = document.getElementById('manoizq4');
  var manoder4 = document.getElementById('manoder4');
  var hombroizq4 = document.getElementById('hombroizq4');
  var hombroder4 = document.getElementById('hombroder4');


  var brazoizq5 = document.getElementById('brazoizq5');
  var brazoder5 = document.getElementById('brazoder5');
  var manoizq5 = document.getElementById('manoizq5');
  var manoder5 = document.getElementById('manoder5');
  var hombroizq5 = document.getElementById('hombroizq5');
  var hombroder5 = document.getElementById('hombroder5');

  var brazoizq6 = document.getElementById('brazoizq6');
  var brazoder6 = document.getElementById('brazoder6');
  var manoizq6 = document.getElementById('manoizq6');
  var manoder6 = document.getElementById('manoder6');
  var hombroizq6 = document.getElementById('hombroizq6');
  var hombroder6 = document.getElementById('hombroder6');

  var brazoizq7 = document.getElementById('brazoizq7');
  var brazoder7 = document.getElementById('brazoder7');
  var manoizq7 = document.getElementById('manoizq7');
  var manoder7 = document.getElementById('manoder7');
  var hombroizq7 = document.getElementById('hombroizq7');
  var hombroder7 = document.getElementById('hombroder7');


  
  var brazoizq8 = document.getElementById('brazoizq8');
  var brazoder8 = document.getElementById('brazoder8');
  var manoizq8 = document.getElementById('manoizq8');
  var manoder8 = document.getElementById('manoder8');
  var hombroizq8 = document.getElementById('hombroizq8');
  var hombroder8 = document.getElementById('hombroder8');

  var brazoizq9 = document.getElementById('brazoizq9');
  var brazoder9 = document.getElementById('brazoder9');
  var manoizq9 = document.getElementById('manoizq9');
  var manoder9 = document.getElementById('manoder9');
  var hombroizq9 = document.getElementById('hombroizq9');
  var hombroder9 = document.getElementById('hombroder9');

  var brazoizq10 = document.getElementById('brazoizq10');
  var brazoder10 = document.getElementById('brazoder10');
  var manoizq10 = document.getElementById('manoizq10');
  var manoder10 = document.getElementById('manoder10');
  var hombroizq10 = document.getElementById('hombroizq10');
  var hombroder10 = document.getElementById('hombroder10');


  var brazoizq11 = document.getElementById('brazoizq11');
  var brazoder11 = document.getElementById('brazoder11');
  var manoizq11 = document.getElementById('manoizq11');
  var manoder11 = document.getElementById('manoder11');
  var hombroizq11 = document.getElementById('hombroizq11');
  var hombroder11 = document.getElementById('hombroder11');

  var brazoizq12 = document.getElementById('brazoizq12');
  var brazoder12 = document.getElementById('brazoder12');
  var manoizq12 = document.getElementById('manoizq12');
  var manoder12 = document.getElementById('manoder12');
  var hombroizq12 = document.getElementById('hombroizq12');
  var hombroder12 = document.getElementById('hombroder12');


  ///////AFICIONADOS CHE

  
  
  // Moviendo la pierna izquierda hacia adelante del equipo 1
  brazoizq.setAttribute('position', '14.5 1.8 -20.34');
  brazoizq.setAttribute('rotation', '0 0 0');
  brazoder.setAttribute('position', '14.5 1.8 -19.26');
  brazoder.setAttribute('rotation', '0 0 0');
  manoizq.setAttribute('position', '14.5 1.5 -20.34');
  manoder.setAttribute('position', '14.5 1.5 -19.26');
  hombroizq.setAttribute('position', '14.5 2.1 -20.34');
  hombroder.setAttribute('position', '14.5 2.1 -19.26');


  brazoizq2.setAttribute('position', '14.5 1.8 -4.34');
  brazoizq2.setAttribute('rotation', '0 0 0');
  brazoder2.setAttribute('position', '14.5 1.8 -3.26');
  brazoder2.setAttribute('rotation', '0 0 0');
  manoizq2.setAttribute('position', '14.5 1.5 -4.34');
  manoder2.setAttribute('position', '14.5 1.5 -3.26');
  hombroizq2.setAttribute('position', '14.5 2.1 -4.34');
  hombroder2.setAttribute('position', '14.5 2.1 -3.26');
  

  brazoizq3.setAttribute('position', '14.5 1.8 -12.34');
  brazoizq3.setAttribute('rotation', '0 0 0');
  brazoder3.setAttribute('position', '14.5 1.8 -11.26');
  brazoder3.setAttribute('rotation', '0 0 0');
  manoizq3.setAttribute('position', '14.5 1.5 -12.34');
  manoder3.setAttribute('position', '14.5 1.5 -11.26');
  hombroizq3.setAttribute('position', '14.5 2.1 -12.34');
  hombroder3.setAttribute('position', '14.5 2.1 -11.26');


  brazoizq4.setAttribute('position', '16.5 2.9 -8.34');
  brazoizq4.setAttribute('rotation', '0 0 0');
  brazoder4.setAttribute('position', '16.5 2.9 -7.26');
  brazoder4.setAttribute('rotation', '0 0 0');
  manoizq4.setAttribute('position', '16.5 2.6 -8.34');
  manoder4.setAttribute('position', '16.5 2.6 -7.26');
  hombroizq4.setAttribute('position', '16.5 3.2 -8.34');
  hombroder4.setAttribute('position', '16.5 3.2 -7.26');

  brazoizq5.setAttribute('position', '16.5 2.9 -16.34');
  brazoizq5.setAttribute('rotation', '0 0 0');
  brazoder5.setAttribute('position', '16.5 2.9 -15.26');
  brazoder5.setAttribute('rotation', '0 0 0');
  manoizq5.setAttribute('position', '16.5 2.6 -16.34');
  manoder5.setAttribute('position', '16.5 2.6 -15.26');
  hombroizq5.setAttribute('position', '16.5 3.2 -16.34');
  hombroder5.setAttribute('position', '16.5 3.2 -15.26');

  brazoizq6.setAttribute('position', '16.5 2.9 -24.34');
  brazoizq6.setAttribute('rotation', '0 0 0');
  brazoder6.setAttribute('position', '16.5 2.9 -23.26');
  brazoder6.setAttribute('rotation', '0 0 0');
  manoizq6.setAttribute('position', '16.5 2.6 -24.34');
  manoder6.setAttribute('position', '16.5 2.6 -23.26');
  hombroizq6.setAttribute('position', '16.5 3.2 -24.34');
  hombroder6.setAttribute('position', '16.5 3.2 -23.26');




  /////////////////////////////AFICIONADOS CHELSE
  brazoizq7.setAttribute('position', '14.5 1.8 20.34');
  brazoizq7.setAttribute('rotation', '0 0 0');
  brazoder7.setAttribute('position', '14.5 1.8 19.26');
  brazoder7.setAttribute('rotation', '0 0 0');
  manoizq7.setAttribute('position', '14.5 1.5 20.34');
  manoder7.setAttribute('position', '14.5 1.5 19.26');
  hombroizq7.setAttribute('position', '14.5 2.1 20.34');
  hombroder7.setAttribute('position', '14.5 2.1 19.26');

  brazoizq8.setAttribute('position', '14.5 1.8 4.34');
  brazoizq8.setAttribute('rotation', '0 0 0');
  brazoder8.setAttribute('position', '14.5 1.8 3.26');
  brazoder8.setAttribute('rotation', '0 0 0');
  manoizq8.setAttribute('position', '14.5 1.5 4.34');
  manoder8.setAttribute('position', '14.5 1.5 3.26');
  hombroizq8.setAttribute('position', '14.5 2.1 4.34');
  hombroder8.setAttribute('position', '14.5 2.1 3.26');
  

  brazoizq9.setAttribute('position', '14.5 1.8 12.34');
  brazoizq9.setAttribute('rotation', '0 0 0');
  brazoder9.setAttribute('position', '14.5 1.8 11.26');
  brazoder9.setAttribute('rotation', '0 0 0');
  manoizq9.setAttribute('position', '14.5 1.5 12.34');
  manoder9.setAttribute('position', '14.5 1.5 11.26');
  hombroizq9.setAttribute('position', '14.5 2.1 12.34');
  hombroder9.setAttribute('position', '14.5 2.1 11.26');


  brazoizq10.setAttribute('position', '16.5 2.9 8.34');
  brazoizq10.setAttribute('rotation', '0 0 0');
  brazoder10.setAttribute('position', '16.5 2.9 7.26');
  brazoder10.setAttribute('rotation', '0 0 0');
  manoizq10.setAttribute('position', '16.5 2.6 8.34');
  manoder10.setAttribute('position', '16.5 2.6 7.26');
  hombroizq10.setAttribute('position', '16.5 3.2 8.34');
  hombroder10.setAttribute('position', '16.5 3.2 7.26');

  brazoizq11.setAttribute('position', '16.5 2.9 16.34');
  brazoizq11.setAttribute('rotation', '0 0 0');
  brazoder11.setAttribute('position', '16.5 2.9 15.26');
  brazoder11.setAttribute('rotation', '0 0 0');
  manoizq11.setAttribute('position', '16.5 2.6 16.34');
  manoder11.setAttribute('position', '16.5 2.6 15.26');
  hombroizq11.setAttribute('position', '16.5 3.2 16.34');
  hombroder11.setAttribute('position', '16.5 3.2 15.26');

  brazoizq12.setAttribute('position', '16.5 2.9 24.34');
  brazoizq12.setAttribute('rotation', '0 0 0');
  brazoder12.setAttribute('position', '16.5 2.9 23.26');
  brazoder12.setAttribute('rotation', '0 0 0');
  manoizq12.setAttribute('position', '16.5 2.6 24.34');
  manoder12.setAttribute('position', '16.5 2.6 23.26');
  hombroizq12.setAttribute('position', '16.5 3.2 24.34');
  hombroder12.setAttribute('position', '16.5 3.2 23.26');





  
  // Moviendo la pierna hacia la derecha después de 500ms
  setTimeout(function() {
    brazoizq.setAttribute('position', '14.5 2.3 -20.4');
    brazoizq.setAttribute('rotation', '135 0 0');
    brazoder.setAttribute('position', '14.5 2.2 -19.22');
    brazoder.setAttribute('rotation', '-135 0 0');
    manoizq.setAttribute('position', '14.5 2.5 -20.6');
    manoder.setAttribute('position', '14.5 2.4 -19');
    hombroizq.setAttribute('position', '14.6 1.3 -19.8');
    hombroder.setAttribute('position', '14.6 1.3 -19.8');

    brazoizq2.setAttribute('position', '14.5 2.3 -4.4');
    brazoizq2.setAttribute('rotation', '135 0 0');
    brazoder2.setAttribute('position', '14.5 2.2 -3.22');
    brazoder2.setAttribute('rotation', '-135 0 0');
    manoizq2.setAttribute('position', '14.5 2.5 -4.6');
    manoder2.setAttribute('position', '14.5 2.4 -3');
    hombroizq2.setAttribute('position', '14.6 1.3 -3.8');
    hombroder2.setAttribute('position', '14.6 1.3 -3.8');

    brazoizq3.setAttribute('position', '14.5 2.3 -12.4');
    brazoizq3.setAttribute('rotation', '135 0 0');
    brazoder3.setAttribute('position', '14.5 2.2 -11.22');
    brazoder3.setAttribute('rotation', '-135 0 0');
    manoizq3.setAttribute('position', '14.5 2.5 -12.6');
    manoder3.setAttribute('position', '14.5 2.4 -11');
    hombroizq3.setAttribute('position', '14.6 1.3 -11.8');
    hombroder3.setAttribute('position', '14.6 1.3 -11.8');

    brazoizq4.setAttribute('position', '16.5 3.4 -8.4');
    brazoizq4.setAttribute('rotation', '135 0 0');
    brazoder4.setAttribute('position', '16.5 3.3 -7.22');
    brazoder4.setAttribute('rotation', '-135 0 0');
    manoizq4.setAttribute('position', '16.5 3.6 -8.6');
    manoder4.setAttribute('position', '16.5 3.5 -7');
    hombroizq4.setAttribute('position', '16.6 2.4 -7.8');
    hombroder4.setAttribute('position', '16.6 2.4 -7.8');

    brazoizq5.setAttribute('position', '16.5 3.4 -16.4');
    brazoizq5.setAttribute('rotation', '135 0 0');
    brazoder5.setAttribute('position', '16.5 3.3 -15.2');
    brazoder5.setAttribute('rotation', '-135 0 0');
    manoizq5.setAttribute('position', '16.5 3.6 -16.6');
    manoder5.setAttribute('position', '16.5 3.5 -15');
    hombroizq5.setAttribute('position', '16.6 2.4 -15.8');
    hombroder5.setAttribute('position', '16.6 2.4 -15.8');


    brazoizq6.setAttribute('position', '16.5 3.4 -24.4');
    brazoizq6.setAttribute('rotation', '135 0 0');
    brazoder6.setAttribute('position', '16.5 3.3 -23.22');
    brazoder6.setAttribute('rotation', '-135 0 0');
    manoizq6.setAttribute('position', '16.5 3.6 -24.6');
    manoder6.setAttribute('position', '16.5 3.5 -23');
    hombroizq6.setAttribute('position', '16.6 2.4 -23.8');
    hombroder6.setAttribute('position', '16.6 2.4 -23.8');
    /////AFICIONADOS AZUL
    brazoizq7.setAttribute('position', '14.5 2.3 20.4');
    brazoizq7.setAttribute('rotation', '-135 0 0');
    brazoder7.setAttribute('position', '14.5 2.2 19.22');
    brazoder7.setAttribute('rotation', '135 0 0');
    manoizq7.setAttribute('position', '14.5 2.5 20.6');
    manoder7.setAttribute('position', '14.5 2.4 19');
    hombroizq7.setAttribute('position', '14.6 1.3 19.8');
    hombroder7.setAttribute('position', '14.6 1.3 19.8');

    brazoizq8.setAttribute('position', '14.5 2.3 4.4');
    brazoizq8.setAttribute('rotation', '-135 0 0');
    brazoder8.setAttribute('position', '14.5 2.2 3.22');
    brazoder8.setAttribute('rotation', '135 0 0');
    manoizq8.setAttribute('position', '14.5 2.5 4.6');
    manoder8.setAttribute('position', '14.5 2.4 3');
    hombroizq8.setAttribute('position', '14.6 1.3 3.8');
    hombroder8.setAttribute('position', '14.6 1.3 3.8');

    brazoizq9.setAttribute('position', '14.5 2.3 12.4');
    brazoizq9.setAttribute('rotation', '-135 0 0');
    brazoder9.setAttribute('position', '14.5 2.2 11.22');
    brazoder9.setAttribute('rotation', '135 0 0');
    manoizq9.setAttribute('position', '14.5 2.5 12.6');
    manoder9.setAttribute('position', '14.5 2.4 11');
    hombroizq9.setAttribute('position', '14.6 1.3 11.8');
    hombroder9.setAttribute('position', '14.6 1.3 11.8');

    brazoizq10.setAttribute('position', '16.5 3.4 8.4');
    brazoizq10.setAttribute('rotation', '-135 0 0');
    brazoder10.setAttribute('position', '16.5 3.3 7.22');
    brazoder10.setAttribute('rotation', '135 0 0');
    manoizq10.setAttribute('position', '16.5 3.6 8.6');
    manoder10.setAttribute('position', '16.5 3.5 7');
    hombroizq10.setAttribute('position', '16.6 2.4 7.8');
    hombroder10.setAttribute('position', '16.6 2.4 7.8');

    brazoizq11.setAttribute('position', '16.5 3.4 16.4');
    brazoizq11.setAttribute('rotation', '-135 0 0');
    brazoder11.setAttribute('position', '16.5 3.3 15.2');
    brazoder11.setAttribute('rotation', '135 0 0');
    manoizq11.setAttribute('position', '16.5 3.6 16.6');
    manoder11.setAttribute('position', '16.5 3.5 15');
    hombroizq11.setAttribute('position', '16.6 2.4 15.8');
    hombroder11.setAttribute('position', '16.6 2.4 15.8');


    brazoizq12.setAttribute('position', '16.5 3.4 24.4');
    brazoizq12.setAttribute('rotation', '-135 0 0');
    brazoder12.setAttribute('position', '16.5 3.3 23.22');
    brazoder12.setAttribute('rotation', '135 0 0');
    manoizq12.setAttribute('position', '16.5 3.6 24.6');
    manoder12.setAttribute('position', '16.5 3.5 23');
    hombroizq12.setAttribute('position', '16.6 2.4 23.8');
    hombroder12.setAttribute('position', '16.6 2.4 23.8');
    
      
  }, 500);
  
  // Repetir la animación cada segundo
  setTimeout(animaraficion, 1000);
}
animaraficion();