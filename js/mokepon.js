const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque');
const seccionReiniciar = document.getElementById('reiniciar');
const sectionMensajes = document.getElementById('resultado');
const sectionSeleccionarMascota = document.getElementById('seleccionar-mascota');
const botonMascotaJugador = document.getElementById('boton-mascota');
const botonReiniciar = document.getElementById('boton-reiniciar');
const spanMascotaJugador = document.getElementById('mascota-jugador');
const spanMascotaEnemigo = document.getElementById('mascota-enemigo');
const spanVidasJugador = document.getElementById('vidas-jugador');
const spanVidasEnemigo = document.getElementById('vidas-enemigo');
const ataqueDelJugador = document.getElementById('ataque-del-jugador');
const ataqueDelEnemigo = document.getElementById('ataque-del-enemigo');
const contenedorTarjetas = document.getElementById('contenedorTarjetas');
const contenedorAtaques = document.getElementById('contenedorAtaques');
let mokepones = [];
let ataqueJugador = [];
let jugar = 1;
let mascotaJugador;
let ataqueEnemigo;
let ataquesMokepon;
let vidasJugador = 3;
let vidasEnemigo = 3;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon('Hipodoge', '/assets/mokepons_mokepon_hipodoge_attack.webp', 5);
let capipepo = new Mokepon('Capipepo', '/assets/mokepons_mokepon_capipepo_attack.webp', 5);
let ratigueya = new Mokepon('Ratigueya', '/assets/mokepons_mokepon_ratigueya_attack.webp', 5);

hipodoge.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' }
);

capipepo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' }
);

ratigueya.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto} alt=${mokepon.nombre}>
        </label>
        `;
    contenedorTarjetas.innerHTML += opcionDeMokepones;

    inputHipodoge = document.getElementById('Hipodoge');
    inputCapipepo = document.getElementById('Capipepo');
    inputRatigueya = document.getElementById('Ratigueya');
  });

  sectionSeleccionarAtaque.style.display = 'none';
  seccionReiniciar.style.display = 'none';
  botonMascotaJugador.addEventListener('click', seleccionarMascotaJugador);
  botonReiniciar.addEventListener('click', reiniciarJuego);
}

function seleccionarMascotaJugador() {
  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = inputHipodoge.id;
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    sectionSeleccionarMascota.style.display = 'none';
    sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputRatigueya.id;
  } else {
    alert('Selecciona una mascota');
    jugar = 0;
  }
  if (jugar == 1) {
    extraerAtaques(mascotaJugador);
    seleccionarMascotaEnemigo();
  }
}
function extraerAtaques(mascotaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }
  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataques) => {
    ataquesMokepon = `<button id=${ataques.id} class="btn-ataque btnAtaque">${ataques.nombre}</button>`;
    contenedorAtaques.innerHTML += ataquesMokepon;
  });

  botonFuego = document.getElementById('boton-fuego');
  botonAgua = document.getElementById('boton-agua');
  botonTierra = document.getElementById('boton-tierra');
  botones = document.querySelectorAll('.btnAtaque');
}

function secuenciaAtaque() {
  botones.forEach((boton) => {
    boton.addEventListener('click', (e) => {
      if (e.target.textContent === '🔥') {
        ataqueJugador.push('FUEGO');
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = '#112f58';
      } else if (e.target.textContent === '💧') {
        ataqueJugador.push('AGUA');
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = '#112f58';
      } else {
        ataqueJugador.push('TIERRA');
        console.log(ataqueJugador);
        boton.disabled = true;
        boton.style.background = '#112f58';
      }
      seleccionarAtaqueEnemigo();
    });
  });
}

function seleccionarMascotaEnemigo() {
  let mascotaEnemigo = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = mokepones[mascotaEnemigo].nombre;
  secuenciaAtaque();
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
