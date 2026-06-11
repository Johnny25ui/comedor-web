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

const sopa2 = document.getElementById("sopa2");
const plato2 = document.getElementById("plato2");
const bebida2 = document.getElementById("bebida2");
const precio2 = document.getElementById("precio2");

const foto = document.getElementById("fotoMenu");

async function cargarMenu() {

  const ref = doc(db, "menu", "hoy");
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    console.log("No existe el documento menu/hoy");
    return;
  }

  const datos = snap.data();

  // 📅 Fecha
  fecha.innerHTML =
    "Hoy: " + new Date().toLocaleDateString("es-EC");

  // 🍛 Menú 1
  sopa.innerHTML = "🥣 " + (datos.sopa || "");
  plato.innerHTML = "🍛 " + (datos.plato || "");
  bebida.innerHTML = "🥤 " + (datos.bebida || "");
  precio.innerHTML = datos.precio || "";

  // 🍽️ Menú 2
  sopa2.innerHTML = "🥣 " + (datos.sopa2 || "");
  plato2.innerHTML = "🍛 " + (datos.plato2 || "");
  bebida2.innerHTML = "🥤 " + (datos.bebida2 || "");
  precio2.innerHTML = datos.precio2 || "";

  // 🖼️ Imagen
  foto.src = datos.imagen || "";
}

cargarMenu();