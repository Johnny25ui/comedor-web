import { db } from "./firebase.js";

import {
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/12.0.0/firebase-firestore.js";

const btnEntrar =
document.getElementById("btnEntrar");

const btnGuardar =
document.getElementById("btnGuardar");

btnEntrar.addEventListener("click", () => {

  const clave =
  document.getElementById("clave").value;

  if (clave === "1234") {

    document.getElementById("panel").style.display =
    "block";

  } else {

    alert("Contraseña incorrecta");

  }

});

btnGuardar.addEventListener("click", async () => {

  const sopa =
  document.getElementById("sopa").value;

  const plato =
  document.getElementById("plato").value;

  const bebida =
  document.getElementById("bebida").value;

  const precio =
  document.getElementById("precio").value;

  const imagen =
  document.getElementById("imagen").value;

  await updateDoc(
    doc(db, "menu", "hoy"),
    {
      sopa,
      plato,
      bebida,
      precio,
      imagen
    }
  );

  alert("Menú actualizado correctamente");

});