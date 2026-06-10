function login(){

const clave =
document.getElementById("clave").value;

if(clave === "1234"){

document.getElementById("panel").style.display = "block";

}else{

alert("Contraseña incorrecta");

}

}

function guardar(){

const datos = {

sopa: document.getElementById("sopa").value,
plato: document.getElementById("plato").value,
bebida: document.getElementById("bebida").value,
precio: document.getElementById("precio").value,
imagen: document.getElementById("imagen").value

};

console.log(datos);

alert(
"GitHub Pages no permite guardar archivos directamente. Más adelante conectaremos Firebase para guardar cambios reales."
);

}