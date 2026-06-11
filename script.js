import { db } from "./firebase.js";

import {
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/12.14.0/firebase-firestore.js";

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
  try {
    const ref = doc(db, "menu", "hoy");
    const snap = await getDoc(ref);

    if (!snap.exists()) {
      console.log("No existe el documento menu/hoy");
      return;
    }

    const data = snap.data();

    fecha.textContent =
      "Hoy: " +
      new Date().toLocaleDateString("es-EC");

    sopa.textContent = data.sopa || "";
    plato.textContent = data.plato || "";
    bebida.textContent = data.bebida || "";
    precio.textContent = data.precio || "";

    sopa2.textContent = data.sopa2 || "";
    plato2.textContent = data.plato2 || "";
    bebida2.textContent = data.bebida2 || "";
    precio2.textContent = data.precio2 || "";

    foto.src = data.imagen || "";
  } catch (error) {
    console.error("Error Firestore:", error);
  }
}

cargarMenu();