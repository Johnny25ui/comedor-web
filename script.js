// 📅 Mostrar fecha
const fecha = new Date();
document.getElementById("fecha").textContent =
  "Hoy: " + fecha.toLocaleDateString("es-EC");

// 🍽️ Datos de los menús (puedes editarlos aquí)
const menus = {
  menu1: {
    sopa: "🥣 Sopa de pollo",
    plato: "🍛 Arroz con pollo y ensalada",
    bebida: "🥤 Jugo de naranja",
    precio: "$2.50"
  },

  menu2: {
    sopa: "🥣 Sopa de verduras",
    plato: "🍛 Carne asada con arroz y menestra",
    bebida: "🥤 Limonada",
    precio: "$3.00"
  }
};

// 🥗 Cargar Menú 1
document.getElementById("sopa").textContent = menus.sopa;
document.getElementById("plato").textContent = menus.plato;
document.getElementById("bebida").textContent = menus.bebida;
document.getElementById("precio").textContent = menus.precio;

// 🍽️ Cargar Menú 2
document.getElementById("sopa2").textContent = menus.sopa2;
document.getElementById("plato2").textContent = menus.plato2;
document.getElementById("bebida2").textContent = menus.bebida2;
document.getElementById("precio2").textContent = menus.precio2;

// 🖼️ Imagen del menú (opcional)
document.getElementById("fotoMenu").src =
  "https://source.unsplash.com/800x400/?food,lunch";