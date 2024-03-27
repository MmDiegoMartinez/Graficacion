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

