let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
  sectionSeleccionarAtaque.style.display = 'none';

  let seccionReiniciar = document.getElementById('reiniciar');
  seccionReiniciar.style.display = 'none';

  let botonMascotaJugador = document.getElementById('boton-mascota');
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener('click', ataqueFuego);
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener('click', ataqueAgua);
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener('click', ataqueTierra);
  let botonReiniciar = document.getElementById('boton-reiniciar');
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  let inputHipodoge = document.getElementById('hipodoge');
  let inputCapipepo = document.getElementById('capipepo');
  let inputRatigueya = document.getElementById('ratigueya');
  let spanMascotaJugador = document.getElementById('mascota-jugador');
  let jugar = 1;

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge';
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = 'Capipepo';
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
    sectionSeleccionarAtaque.style.display = 'flex';
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya';
    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
    sectionSeleccionarMascota.style.display = 'none';
    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
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
  let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
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
  let spanVidasJugador = document.getElementById('vidas-jugador');
  let spanVidasEnemigo = document.getElementById('vidas-enemigo');

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
  let sectionMensajes = document.getElementById('resultado');
  let ataqueDelJugador = document.getElementById('ataque-del-jugador');
  let ataqueDelEnemigo = document.getElementById('ataque-del-enemigo');

  let nuevoAtauqeDelJugador = document.createElement('p');
  let nuevoAtauqeDelenemigo = document.createElement('p');

  sectionMensajes.innerHTML = resultado;
  nuevoAtauqeDelJugador.innerHTML = ataqueJugador;
  nuevoAtauqeDelenemigo.innerHTML = ataqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtauqeDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtauqeDelenemigo);
}

function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById('resultado');

  sectionMensajes.innerHTML = resultadoFinal;

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.disabled = true;
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.disabled = true;
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.disabled = true;

  let seccionReiniciar = document.getElementById('reiniciar');
  seccionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
window.addEventListener('load', iniciarJuego);
