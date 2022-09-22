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

const sectionVerMapa = document.getElementById('ver-mapa');
const mapa = document.getElementById('mapa');

let mokepones = [];
let ataqueJugador = [];
let jugar = 1;
let mascotaJugador;
let mascotaJugadorObjeto;
let ataqueEnemigo = [];
let ataquesMokepon;
let ataqueMokeponEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let inputLangostelvis;
let inputPydos;
let botonFuego;
let botonAgua;
let botonTierra;
let botones = [];
let indexAtaquejugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let lienzo = mapa.getContext('2d');
let intervalo;
let mapaBackground = new Image();
mapaBackground.src = '/assets/mokemap.webp';

let alturaQueBuscamos;
let anchoDelMapa = window.innerWidth - 20;
const anchoMaximoDelMapa = 350;

if (anchoDelMapa > anchoMaximoDelMapa) {
  anchoDelMapa = anchoMaximoDelMapa - 20;
}

alturaQueBuscamos = (anchoDelMapa * 600) / 800;

mapa.width = anchoDelMapa;
mapa.height = alturaQueBuscamos;

class Mokepon {
  constructor(nombre, foto, vida, fotoMapa, x = 10, y = 10) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
    this.x = x;
    this.y = y;
    this.ancho = 40;
    this.alto = 40;
    this.mapaFoto = new Image();
    this.mapaFoto.src = fotoMapa;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }
  pintarMokepon() {
    lienzo.drawImage(this.mapaFoto, this.x, this.y, this.ancho, this.alto);
  }
}

let hipodoge = new Mokepon('Hipodoge', '/assets/mokepons_mokepon_hipodoge_attack.webp', 5, '/assets/hipodoge.webp');
let capipepo = new Mokepon('Capipepo', '/assets/mokepons_mokepon_capipepo_attack.webp', 5, '/assets/capipepo.webp');
let ratigueya = new Mokepon('Ratigueya', '/assets/mokepons_mokepon_ratigueya_attack.webp', 5, '/assets/ratigueya.webp');
let langostelvis = new Mokepon('Langostelvis', '/assets/mokepons_mokepon_langostelvis_attack.png', 5);
let pydos = new Mokepon('Pydos', '/assets/mokepons_mokepon_pydos_attack.png', 5);

let hipodogeEnemigo = new Mokepon(
  'Hipodoge',
  '/assets/mokepons_mokepon_hipodoge_attack.webp',
  5,
  '/assets/hipodoge.webp',
  80,
  120
);
let capipepoEnemigo = new Mokepon(
  'Capipepo',
  '/assets/mokepons_mokepon_capipepo_attack.webp',
  5,
  '/assets/capipepo.webp',
  150,
  95
);
let ratigueyaEnemigo = new Mokepon(
  'Ratigueya',
  '/assets/mokepons_mokepon_ratigueya_attack.webp',
  5,
  '/assets/ratigueya.webp',
  200,
  190
);

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

hipodogeEnemigo.ataques.push(
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🌱', id: 'boton-tierra' }
);

capipepoEnemigo.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' }
);

ratigueyaEnemigo.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' }
);

langostelvis.ataques.push(
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '🔥', id: 'boton-fuego' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🌱', id: 'boton-tierra' }
);

pydos.ataques.push(
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '🌱', id: 'boton-tierra' },
  { nombre: '💧', id: 'boton-agua' },
  { nombre: '🔥', id: 'boton-fuego' }
);

mokepones.push(hipodoge, capipepo, ratigueya, langostelvis, pydos);

function iniciarJuego() {
  sectionVerMapa.style.display = 'none';

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
    inputLangostelvis = document.getElementById('Langostelvis');
    inputPydos = document.getElementById('Pydos');
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
    //sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = inputCapipepo.id;
    sectionSeleccionarMascota.style.display = 'none';
    //sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    spanMascotaJugador.innerHTML = inputRatigueya.id;
    sectionSeleccionarMascota.style.display = 'none';
    //sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputRatigueya.id;
  } else if (inputLangostelvis.checked) {
    spanMascotaJugador.innerHTML = inputLangostelvis.id;
    sectionSeleccionarMascota.style.display = 'none';
    //sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputLangostelvis.id;
  } else if (inputPydos.checked) {
    spanMascotaJugador.innerHTML = inputPydos.id;
    sectionSeleccionarMascota.style.display = 'none';
    //sectionSeleccionarAtaque.style.display = 'flex';
    mascotaJugador = inputPydos.id;
  } else {
    alert('Selecciona una mascota');
  }
  extraerAtaques(mascotaJugador);
  sectionVerMapa.style.display = 'flex';
  iniciarMapa();

  // if (jugar == 1) {
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

function seleccionarMascotaEnemigo(enemigo) {
  //let mascotaEnemigo = aleatorio(0, mokepones.length - 1);
  spanMascotaEnemigo.innerHTML = enemigo.nombre;
  ataqueMokeponEnemigo = enemigo.ataques;
  secuenciaAtaque();
}

//MEJORAR ESTA FUNCION PARA NO TENER QUE HARDCODEAR LOS VALORES DE LOS ATAQUES Y QUE CADA PERSONAJE TENGA LA CANTIDAD DE ATAQUES QUE CORRESPONDE

function seleccionarAtaqueEnemigo() {
  let ataquealeatorio = aleatorio(0, ataqueMokeponEnemigo.length - 1);

  if (ataquealeatorio == 0 || ataquealeatorio == 1) {
    ataqueEnemigo.push('FUEGO');
  } else if (ataquealeatorio == 2 || ataquealeatorio == 3) {
    ataqueEnemigo.push('AGUA');
  } else {
    ataqueEnemigo.push('TIERRA');
  }
  console.log(ataqueEnemigo);
  iniciarPelea();
}

function iniciarPelea() {
  if (ataqueJugador.length === 5) {
    combate();
  }
}

function indexAmbosOponentes(jugador, enemigo) {
  indexAtaquejugador = ataqueJugador[jugador];
  indexAtaqueEnemigo = ataqueEnemigo[enemigo];
}

function combate() {
  for (let i = 0; i < ataqueJugador.length; i++) {
    if (ataqueJugador[i] === ataqueEnemigo[i]) {
      indexAmbosOponentes(i, i);
      crearMensaje();
    } else if (
      (ataqueJugador[i] === 'FUEGO' && ataqueEnemigo[i] === 'TIERRA') ||
      (ataqueJugador[i] === 'AGUA' && ataqueEnemigo[i] === 'FUEGO') ||
      (ataqueJugador[i] === 'TIERRA' && ataqueEnemigo[i] === 'AGUA')
    ) {
      indexAmbosOponentes(i, i);
      crearMensaje();
      victoriasJugador++;
      spanVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexAmbosOponentes(i, i);
      crearMensaje();
      victoriasEnemigo++;
      spanVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }
  revisarVictorias();
}

function revisarVictorias() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal('Esto fue un EMPATE!!');
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal('Felicitaciones GANASTE!!');
  } else {
    crearMensajeFinal('Lo siento, PERDISTE');
  }
}

function crearMensaje() {
  let nuevoAtauqeDelJugador = document.createElement('p');
  let nuevoAtauqeDelenemigo = document.createElement('p');

  nuevoAtauqeDelJugador.innerHTML = indexAtaquejugador;
  nuevoAtauqeDelenemigo.innerHTML = indexAtaqueEnemigo;

  ataqueDelJugador.appendChild(nuevoAtauqeDelJugador);
  ataqueDelEnemigo.appendChild(nuevoAtauqeDelenemigo);
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  seccionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function pintarCanvas() {
  mascotaJugadorObjeto.x = mascotaJugadorObjeto.x + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.y = mascotaJugadorObjeto.y + mascotaJugadorObjeto.velocidadY;
  lienzo.clearRect(0, 0, mapa.width, mapa.height);
  lienzo.drawImage(mapaBackground, 0, 0, mapa.width, mapa.height);
  mascotaJugadorObjeto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();
  if (mascotaJugadorObjeto.velocidadX !== 0 || mascotaJugadorObjeto.velocidadY !== 0) {
    revisarColision(hipodogeEnemigo);
    revisarColision(capipepoEnemigo);
    revisarColision(ratigueyaEnemigo);
  }
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}
function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
}

function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function sePresionoUnaTecla(event) {
  switch (event.key) {
    case 'ArrowUp':
      moverArriba();
      break;
    case 'ArrowDown':
      moverAbajo();
      break;
    case 'ArrowLeft':
      moverIzquierda();
      break;
    case 'ArrowRight':
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaJugador);
  console.log(mascotaJugadorObjeto, mascotaJugador);
  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener('keydown', sePresionoUnaTecla);

  window.addEventListener('keyup', detenerMovimiento);
}

function obtenerObjetoMascota() {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.y;
  const abajoEnemigo = enemigo.y + enemigo.alto;
  const derechaEnemigo = enemigo.x + enemigo.ancho;
  const izquierdaEnemigo = enemigo.x;
  const arribaMascota = mascotaJugadorObjeto.y;
  const abajoMascota = mascotaJugadorObjeto.y + mascotaJugadorObjeto.alto;
  const derechaMascota = mascotaJugadorObjeto.x + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.x;
  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }
  detenerMovimiento();
  clearInterval(intervalo);
  console.log('se detecto una colision');
  sectionSeleccionarAtaque.style.display = 'flex';
  sectionVerMapa.style.display = 'none';
  seleccionarMascotaEnemigo(enemigo);
}

window.addEventListener('load', iniciarJuego);
