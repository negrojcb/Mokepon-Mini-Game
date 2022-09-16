const botonFuego = document.getElementById('boton-fuego');
const botonAgua = document.getElementById('boton-agua');
const botonTierra = document.getElementById('boton-tierra');
const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const sectionMensajes = document.getElementById('resultado');
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');
const inputHipodoge = document.getElementById('hipodoge');
const inputCapipepo = document.getElementById('capipepo');
const inputRatigueya = document.getElementById('ratigueya');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const ataqueDelJugador = document.getElementById('ataque-del-jugador');
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo');
let jugar = 1;
let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = 'none';
  seccionReiniciar.style.display = 'none';
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  botonFuego.addEventListener('click', ataqueFuego);
  botonAgua.addEventListener('click', ataqueAgua);
  botonTierra.addEventListener('click', ataqueTierra);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
  } else {
    alert('Selecciona una mascota');
    jugar = 0;
  }
  if (jugar == 1) {
    seleccionarMascotaEnemigo();
  }
}
function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(1, 3);
  if (mascotaEnemigo == 1) {
    spanMascotaEnemigo.innerHTML = 'Hipodoge';
  } else if (mascotaEnemigo == 2) {
    spanMascotaEnemigo.innerHTML = 'Capipepo';
  } else {
    spanMascotaEnemigo.innerHTML = 'Ratigueya';
  }
}

function ataqueFuego() {
  ataqueJugador = 'FUEGO';
  seleccionarAtaqueEnemigo();
}
function ataqueAgua() {
  ataqueJugador = 'AGUA';
  seleccionarAtaqueEnemigo();
}
function ataqueTierra() {
  ataqueJugador = 'TIERRA';
  seleccionarAtaqueEnemigo();
}

function seleccionarAtaqueEnemigo() {
  let ataquealeatorio = aleatorio(1, 3);
  if (ataquealeatorio == 1) {
    ataqueEnemigo = 'FUEGO';
  } else if (ataquealeatorio == 2) {
    ataqueEnemigo = 'AGUA';
  } else {
    ataqueEnemigo = 'TIERRA';
  }
  combate();
}

function combate() {
  if (ataqueEnemigo == ataqueJugador) {
    crearMensaje('EMPATE');
  } else if (ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA') {
    crearMensaje('GANASTE');
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    crearMensaje('PERDISTE');
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal('FELICITACIONES! Ganaste :)');
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento, perdiste :(');
  }
}

function crearMensaje(resultado) {
  let nuevoAtauqeDelJugador = document.createElement('p');
  let nuevoAtauqeDelenemigo = document.createElement('p');

  sectionMensajes.innerHTML = resultado;
  nuevoAtauqeDelJugador.innerHTML = ataqueJugador;
  nuevoAtauqeDelenemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtauqeDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtauqeDelenemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonTierra.disabled = true;
  seccionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);
