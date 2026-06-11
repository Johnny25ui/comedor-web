document.addEventListener("DOMContentLoaded", () => {

  // 📅 Fecha (ahora seguro funciona)
  const fechaEl = document.getElementById("fecha");

  if (fechaEl) {
    const fecha = new Date();
    fechaEl.textContent =
      "Hoy: " + fecha.toLocaleDateString("es-EC");
  }

  // 🍽️ Menús
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

  // 🍛 Menú 1
  document.getElementById("sopa").textContent = menus.menu1.sopa;
  document.getElementById("plato").textContent = menus.menu1.plato;
  document.getElementById("bebida").textContent = menus.menu1.bebida;
  document.getElementById("precio").textContent = menus.menu1.precio;

  // 🍽️ Menú 2
  document.getElementById("sopa2").textContent = menus.menu2.sopa;
  document.getElementById("plato2").textContent = menus.menu2.plato;
  document.getElementById("bebida2").textContent = menus.menu2.bebida;
  document.getElementById("precio2").textContent = menus.menu2.precio;

  // 🖼️ Imagen
  const img = document.getElementById("fotoMenu");
  if (img) {
    img.src = "https://source.unsplash.com/800x400/?food,lunch";
  }

});