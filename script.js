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
document.getElementById("menu1_sopa").textContent = menus.menu1.sopa;
document.getElementById("menu1_plato").textContent = menus.menu1.plato;
document.getElementById("menu1_bebida").textContent = menus.menu1.bebida;
document.getElementById("menu1_precio").textContent = menus.menu1.precio;

// 🍽️ Cargar Menú 2
document.getElementById("menu2_sopa").textContent = menus.menu2.sopa;
document.getElementById("menu2_plato").textContent = menus.menu2.plato;
document.getElementById("menu2_bebida").textContent = menus.menu2.bebida;
document.getElementById("menu2_precio").textContent = menus.menu2.precio;

// 🖼️ Imagen del menú (opcional)
document.getElementById("fotoMenu").src =
  "https://source.unsplash.com/800x400/?food,lunch";