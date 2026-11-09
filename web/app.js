const contador = document.getElementById("contador");
const botonLike = document.getElementById("btn-like");
const botonRestar = document.getElementById("btn-restar");
const botonReset = document.getElementById("btn-reset");
const cuerpoTabla = document.getElementById("registros");
const totalRegistros = document.getElementById("total-registros");
const estado = document.getElementById("estado");

let likes = 0;
let numeroInteraccion = 0;

function obtenerHora() {
  return new Date().toLocaleTimeString("es-CO", {
    hour: "2-digit", minute: "2-digit", second: "2-digit", hour12: false
  });
}

function actualizarVista() {
  contador.textContent = likes;
  contador.classList.toggle("hot", likes > 10);
  estado.textContent = likes > 10
    ? "¡Ya superaste los 10 likes!"
    : likes === 0 ? "¡Vamos a comenzar!" : "¡Gracias por participar!";
}

function registrar(accion) {
  const filaVacia = document.getElementById("vacio");
  if (filaVacia) filaVacia.remove();

  numeroInteraccion += 1;
  const fila = document.createElement("tr");
  const valores = [numeroInteraccion, accion, likes, obtenerHora()];
  valores.forEach((valor) => {
    const celda = document.createElement("td");
    celda.textContent = valor;
    fila.appendChild(celda);
  });
  cuerpoTabla.prepend(fila);
  totalRegistros.textContent = `${numeroInteraccion} ${numeroInteraccion === 1 ? "registro" : "registros"}`;
}

botonLike.addEventListener("click", () => {
  likes += 1;
  actualizarVista();
  registrar("Like +1");
});

botonRestar.addEventListener("click", () => {
  if (likes > 0) likes -= 1;
  actualizarVista();
  registrar("Restar -1");
});

botonReset.addEventListener("click", () => {
  likes = 0;
  actualizarVista();
  registrar("Reiniciar");
});

actualizarVista();
