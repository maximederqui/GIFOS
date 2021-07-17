

// Conexion de la barra de bsuqueda con la API
const titulo = document.getElementById("tituloSearch");
const input = document.getElementById("inputid");
const URL_BASE =
  "https://api.giphy.com/v1/gifs/search?api_key=P006ylmrABdk3f6kVUjdOUVMkQ6tIcqV&q=";
const parameters = "&limit=12&rating=g&lang=en&offset=";
let searchCTN = document.getElementById("grid");
let lupa = document.getElementById("lupa");
let prueba = document.getElementById("carrusel");
let vermas = document.getElementById("verMas");
let offset = 0;
let mascotas = document.querySelector(".mascotas");

async function busquedaBar() {
  let url1 = URL_BASE + input.value + parameters + offset;
  let resultado = await fetch(url1);
  let info = await resultado.json();

  info.data.forEach((gif) => {
    searchCTN.innerHTML += `
    <div id="fotogif">
    <img src="${gif.images.fixed_height.url}" alt="" />
    </div>
    `;
  });
}

input.addEventListener("keypress", (e) => {
  offset = 0;
  if (e.key === "Enter") {
    searchCTN.innerHTML = "";
    mascotas.style.display = "block";
    busquedaBar();
  }
  titulo.innerHTML = input.value;
});

lupa.addEventListener("click", () => {
  busquedaBar();
});

vermas.addEventListener("click", () => {
  offset += 5;
  busquedaBar();
});