import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

// 🔥 TU CONFIG DE FIREBASE (debes tenerla igual en tu proyecto)
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "comedor-web.firebaseapp.com",
  projectId: "comedor-web",
  storageBucket: "comedor-web.appspot.com",
  messagingSenderId: "XXXX",
  appId: "XXXX"
};

// 🚀 Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 📅 Fecha
document.getElementById("fecha").textContent =
  "Hoy: " + new Date().toLocaleDateString("es-EC");

// 🔥 Cargar datos desde Firestore
async function cargarMenu() {

  const ref = doc(db, "menu", "hoy");
  const snap = await getDoc(ref);

  if (!snap.exists()) {
    console.log("No existe el documento");
    return;
  }

  const data = snap.data();

  // 🍛 Menú 1
  document.getElementById("sopa").textContent = data.sopa || "";
  document.getElementById("plato").textContent = data.plato || "";
  document.getElementById("bebida").textContent = data.bebida || "";
  document.getElementById("precio").textContent = data.precio || "";

  // 🍽️ Menú 2
  document.getElementById("sopa2").textContent = data.sopa2 || "";
  document.getElementById("plato2").textContent = data.plato2 || "";
  document.getElementById("bebida2").textContent = data.bebida2 || "";
  document.getElementById("precio2").textContent = data.precio2 || "";

  // 🖼️ Imagen
  document.getElementById("fotoMenu").src = data.imagen || "";
}

// ▶ ejecutar
cargarMenu();