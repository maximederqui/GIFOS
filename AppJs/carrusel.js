// importamos API KEY de Gifphy para el carrusel de trnding

const carrusel = document.getElementById("imgsTrendGifos");
const API_KEY =
  "https://api.giphy.com/v1/gifs/trending?api_key=P006ylmrABdk3f6kVUjdOUVMkQ6tIcqV&limit=5";

async function imgCarr() {
  const respuesta = await fetch(API_KEY);
  const info = await respuesta.json();
  info.data.forEach((element) => {
    carrusel.innerHTML += `
      <div class="divcontenedor" </div>
        <img src="${element.images.fixed_height.url}" alt="gif">
      `;
  });
}

imgCarr();


// SLIDER DEL CARRUSEL ///

const flechaIzquierda = document.getElementById("prev");
const flechaDerecha = document.getElementById("next");

flechaDerecha.addEventListener("click", (desplazarIzquierda) => {
  carrusel.scrollBy(-1150, 0);
});

flechaIzquierda.addEventListener("click", (desplazarDerecha) => {
  carrusel.scrollBy(1150, 0);
});