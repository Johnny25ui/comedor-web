import { db } from "./firebase.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const fecha = document.getElementById("fecha");
const sopa = document.getElementById("sopa");
const plato = document.getElementById("plato");
const bebida = document.getElementById("bebida");
const precio = document.getElementById("precio");
const foto = document.getElementById("fotoMenu");

async function cargarMenu() {

  const referencia = doc(db, "menu", "hoy");

  const documento = await getDoc(referencia);

  if (documento.exists()) {

    const datos = documento.data();

    fecha.innerHTML =
      "Hoy: " + new Date().toLocaleDateString("es-EC");

    sopa.innerHTML = "🥣 " + datos.sopa;
    plato.innerHTML = "🍛 " + datos.plato;
    bebida.innerHTML = "🥤 " + datos.bebida;
    precio.innerHTML = datos.precio;
    foto.src = datos.imagen;
  }
}

cargarMenu();