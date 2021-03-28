// Menu Hamburgesa, añadimos un evento para deplazar el menu hacia abajo

let menu = document.getElementById("burguerBtn");
let back = document.querySelector(".Background1");
let barraMenu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  back.classList.toggle("hidden");
  if (menu.src.endsWith("burger.svg")) {
    menu.src = "./../GIFOS/assets/assets/close.svg";
  } else {
    menu.src = "./../GIFOS/assets/assets/burger.svg";
  }
});

// imporamos API KEY de Gifphy para el carrusel de trnding

const carrusel = document.getElementById("imgsTrendGifos");
const API_KEY =
  "https://api.giphy.com/v1/gifs/trending?api_key=P006ylmrABdk3f6kVUjdOUVMkQ6tIcqV&limit=5";

async function imgCarr() {
  const respuesta = await fetch(API_KEY);
  const info = await respuesta.json();
  info.data.forEach((element) => {
    carrusel.innerHTML += `
      <img src="${element.images.fixed_height.url}" alt="gif">`;
  });
}

imgCarr();

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

// API PARA LOS FAVORITOS Y MIS GIFOS

let fav = document.getElementById("fav");
let migif = document.getElementById("misgif");
let h3 = document.getElementById("gifsection");
let gifssection = document.querySelector(".misGifs");
let barrita = document.getElementById("linea");
let inicio = document.getElementById("inicio");
let trending = document.getElementById("trendig");
let favsection = document.getElementById("favsection");
let favgrid = document.querySelector(".favoritos");

fav.addEventListener("click", () => {
  inicio.style.display = "none";
  gifssection.style.display = "none";
  trending.style.display = "none";
  favsection.style.display = "block";
  favgrid.style.display = "block";
  back.classList.toggle("hidden");
  barrita.style.display = "none";
  menu.src = "./../GIFOS/assets/assets/burger.svg";
});

migif.addEventListener("click", () => {
  inicio.style.display = "none";
  trending.style.display = "none";
  barrita.style.display = "none";
  favgrid.style.display = "none";
  h3.style.display = "block";
  gifssection.style.display = "block";
  back.classList.toggle("hidden");
  menu.src = "./../GIFOS/assets/assets/burger.svg";
});

async function busquedafav() {
  let url1 =
    "https://api.giphy.com/v1/gifs/random?api_key=P006ylmrABdk3f6kVUjdOUVMkQ6tIcqV&tag=cat&rating=g" +
    parameters +
    offset;
  let resultado = await fetch(url1);
  let info = await resultado.json();

  info.data.forEach((gif) => {
    favgrid.innerHTML += `
    <div id="fotogif">
    <img src="${gif.images.fixed_height.url}" alt="" />
    </div>
    `;
  });
}
