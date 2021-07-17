// API PARA LOS FAVORITOS Y MIS GIFOS

let fav = document.getElementById("fav");
let migif = document.getElementById("misgif");
let h3 = document.getElementById("gifsection");
let gifssection = document.querySelector(".misGifs");
let barrita = document.getElementById("linea");
let inicio = document.getElementById("inicio");
let trending = document.getElementById("trending");
let favsection = document.getElementById("favsection");
let favgrid = document.querySelector(".favoritos");
let crearGif = document.getElementById("sectionMisGifos");

fav.addEventListener("click", () => {
  inicio.style.display = "none";
  searchCTN.style.display = "none";
  vermas.style.display = "none";
  gifssection.style.display = "none";
  trending.style.display = "none";
  favsection.style.display = "block";
  crearGif.style.display = "none";
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

//Cargar array de favoritos del usuario:
function loadFavoritosLs() {
  let favoritosGifs = JSON.parse(localStorage.getItem("misFavoritos"));
  if (favoritosGifs) {
    arrayFavoritos = favoritosGifs;
  }
}
loadFavoritosLs();
