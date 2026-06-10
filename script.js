fetch("menu.json")
.then(response => response.json())
.then(menu => {

document.getElementById("fecha").innerHTML =
"Hoy: " + new Date().toLocaleDateString("es-EC");

document.getElementById("fotoMenu").src =
menu.imagen;

document.getElementById("sopa").innerHTML =
"🥣 " + menu.sopa;

document.getElementById("plato").innerHTML =
"🍛 " + menu.plato;

document.getElementById("bebida").innerHTML =
"🥤 " + menu.bebida;

document.getElementById("precio").innerHTML =
menu.precio;

});