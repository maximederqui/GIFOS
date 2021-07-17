// CREAR GIFOS

let creadorGifos = document.getElementById("creadorGifos");
let btnComenzar = document.getElementById("btnComenzar");
let btnGrabar = document.getElementById("btnGrabar");
let btnFinalizar = document.getElementById("btnFinalizar");
let btnSubirGifo = document.getElementById("btnSubirGifo");
let btnGrabacion1 = document.getElementById("btnGrabacion1");
let textBtnGrabacion1 = document.getElementById("textBtnGrabacion1");
let btnGrabacion2 = document.getElementById("btnGrabacion2");
let textBtnGrabacion2 = document.getElementById("textBtnGrabacion2");
let btnGrabacion3 = document.getElementById("btnGrabacion3");
let textBtnGrabacion3 = document.getElementById("textBtnGrabacion3");
let tituloGrabacion = document.getElementById("tituloGrabacion");
let textoGrabacion1 = document.getElementById("textoGrabacion1");
let textoGrabacion2 = document.getElementById("textoGrabacion2");
let recorder = null;
let video = document.getElementById("video");
let mostrarVideo = document.getElementById("mostrarVideo");
let cronometro = document.getElementById("cronometro");
let segundero = document.getElementById("segundero");
let minutero = document.getElementById("minutero");
let centisegundos = document.getElementById("centisegundos");
let textoSubrayado = document.getElementById("textoSubrayado");
let textosGrabacionYVideo = document.getElementById("textosGrabacionYVideo");
let btnsGrabacion = document.getElementById("btnsGrabacion");
let textoGrabacionYvideoPintado = document.getElementById(
  "textoGrabacionYvideoPintado"
);
let cuadrosVideoPintado = document.getElementById("cuadrosVideoPintado");
let imgCargando = document.getElementById("imgCargando");
let textoSubiendoGifo = document.getElementById("textoSubiendoGifo");

let apikey = "umCoI8QE3nt72GLxXUntliERdZW5J6z9";
let pathSubirGif = `https://upload.giphy.com/v1/gifs?api_key=${apikey}`;

/////////////////////
////////////////////

let btnCrearGifos = document.getElementById("btnCrearGifos");
let imgBtnCrearGifos = document.getElementById("imgBtnCrearGifos");


let sectionCrearGifos = document.getAnimations("sectionMisGifos");

sectionCrearGifos.display = "none";





//FUNCIONALIDAD GRABAR
async function getStreamAndRecord() {
    let stream = await navigator.mediaDevices.getUserMedia({
      audio: false,
      video: {
        height: { max: 480 },
      },
    });
    video.srcObject = stream;
    video.play();
    recorder = RecordRTC(stream, {
      type: "gif",
      frameRate: 1,
      quality: 10,
      width: 360,
      hidden: 240,
      onGifRecordingStarted: function () {
        console.log("started");
      },
    });
    recorder.startRecording();
  }
  
  //FUNCIONALIDAD POSTEAR
  // async function createGif(formData) {
  //     const response = await fetch(pathSubirGif, {
  //         method: 'POST',
  //         body: formData
  //     });
  //     const result = await response.json();
  //     console.log(result);
  
  // }
  
  // FUNCIONALIDAD DEL TIMER
  
  let currentTimer = 0;
  interval = 0;
  (lastUpdateTime = new Date().getTime()),
    (start = btnGrabar),
    (stop = btnFinalizar),
    (mins = minutero),
    (secs = segundero),
    (centisegundos = centisegundos);
  
  function pad(n) {
    return ("00" + n).substr(-2);
  }
  function update() {
    let now = new Date().getTime(),
      dt = now - lastUpdateTime;
  
    currentTimer += dt;
    let time = new Date(currentTimer);
  
    mins.innerHTML = pad(time.getMinutes());
    secs.innerHTML = pad(time.getSeconds());
    centisegundos.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));
  
    lastUpdateTime = now;
  }
  
  function startTimer() {
    if (!interval) {
      lastUpdateTime = new Date().getTime();
      interval = setInterval(update, 1);
      console.log("holax2");
    }
  }
  
  function stopTimer() {
    clearInterval(interval);
    interval = 0;
  }
  
  function resetTimer() {
    stopTimer();
  
    currentTimer = 0;
  
    mins.innerHTML = secs.innerHTML = centisegundos.innerHTML = pad(0);
  }
  
  function pintar(eventoPintar) {
    if (pantallaDesktop.matches) {
      const arrayDivHovers = document.querySelectorAll(".divHover");
      const divHover = document.getElementById(eventoPintar.getAttribute("key"));
      divHover.setAttribute("key", `${eventoPintar.getAttribute("key")}`);
      divHover.key = `${eventoPintar.getAttribute("key")}`;
      divHover.style.display = "block";
      let btnFavPintado = document.getElementById("btnFavPintado");
      arrayDivHovers.forEach((divsGaleria) => {
        if (arrayFavoritos.includes(eventoPintar.getAttribute("key"))) {
          btnFavPintado.src = "assets/assets/icon-fav-active.svg";
        } else {
          btnFavPintado.src = "assets/assets/icon-fav-hover.svg";
        }
      });
    }
  }
  
  function despintar(eventoDespintar) {
    if (pantallaDesktop.matches) {
      const arrayDivHovers = document.querySelectorAll(".divHover");
      const divHover = document.getElementById(
        eventoDespintar.getAttribute("key")
      );
      divHover.style.display = "none";
    }
  }
  
  async function ampliar() {
    if (!pantallaDesktop.matches) {
      const arrayImagenes = document.querySelectorAll(".imgBuscada");
      arrayImagenes.forEach((imagenesGaleria) => {
        imagenesGaleria.addEventListener("click", (eventoAmpliar) => {
          console.log(eventoAmpliar.target.getAttribute("key"));
          sectionImagenAmplificada.style.display = "block";
          imgAmplificada.src = `${eventoAmpliar.target.src}`;
          imgAmplificada.setAttribute(
            "corazon",
            `${eventoAmpliar.target.getAttribute("corazon")}`
          );
          imgAmplificada.key = `${eventoAmpliar.target.getAttribute("key")}`;
          imgAmplificada.setAttribute(
            "key",
            `${eventoAmpliar.target.getAttribute("key")}`
          );
          nombreUsuario.innerHTML = `${eventoAmpliar.target.getAttribute(
            "nombre"
          )}`;
          tituloGif.innerHTML = `${eventoAmpliar.target.getAttribute("titulo")}`;
          busquedaSection.style.display = "none";
          buscadorGifos.style.display = "none";
          trendingSection.style.display = "none";
          footer.style.display = "none";
          let cruzImgAmplificadaBtn = document.getElementById(
            "cruzImgAmplificadaBtn"
          );
          cruzImgAmplificadaBtn.addEventListener("click", (eventoReducir) => {
            busquedaSection.style.display = "block";
            sectionImagenAmplificada.style.display = "none";
            buscadorGifos.style.display = "block";
            trendingSection.style.display = "block";
            footer.style.display = "block";
            btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
            location.reload();
          });
          if (arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))) {
            btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
          } else {
            btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
          }
          btnFavImgAmpliada.setAttribute(
            "key",
            `${eventoAmpliar.target.getAttribute("key")}`
          );
          btnFavImgAmpliada.addEventListener("click", (eventoFavorito) => {
            if (
              arrayFavoritos.includes(eventoAmpliar.target.getAttribute("key"))
            ) {
              arrayFavoritos.splice(
                arrayFavoritos.indexOf(eventoAmpliar.target.getAttribute("key")),
                1
              );
              localStorage.clear();
              localStorage.setItem(
                "misFavoritos",
                JSON.stringify(arrayFavoritos)
              );
              btnFavImgAmpliada.src = "assets/assets/icon-fav-hover.svg";
            } else {
              btnFavImgAmpliada.src = "assets/assets/icon-fav-active.svg";
              eventoAmpliar.target.setAttribute("corazon", "true");
              imgAmplificada.setAttribute("corazon", "true");
              let idImgFavActive = `${imgAmplificada.getAttribute("key")}`;
              arrayFavoritos.push(idImgFavActive);
              localStorage.setItem(
                "misFavoritos",
                JSON.stringify(arrayFavoritos)
              );
            }
          });
          let btnDescargarImgAmpliada = document.getElementById(
            "btnDescargarImgAmpliada"
          );
          // console.log(btnDescargarImgAmpliada);
          btnDescargarImgAmpliada.addEventListener("click", (eventoDescargar) => {
            console.log("click");
            console.log(eventoDescargar);
            download();
          });
        });
      });
    }
  }
  
  function favDesktop(eventoFavDesktop) {
    if (pantallaDesktop.matches) {
      console.log("click");
      if (arrayFavoritos.includes(eventoFavDesktop.getAttribute("key"))) {
        arrayFavoritos.splice(
          arrayFavoritos.indexOf(eventoFavDesktop.getAttribute("key")),
          1
        );
        localStorage.clear();
        localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
        eventoFavDesktop.src = "assets/assets/icon-fav-hover.svg";
      } else {
        eventoFavDesktop.src = "assets/assets/icon-fav-active.svg";
        eventoFavDesktop.setAttribute("corazon", "true");
        let idImgFavActive = `${eventoFavDesktop.getAttribute("key")}`;
        arrayFavoritos.push(idImgFavActive);
        localStorage.setItem("misFavoritos", JSON.stringify(arrayFavoritos));
      }
    }
  }
  
  
  //Funcion para descargar el gif en img Ampliada:
  async function download() {
    const a = document.createElement("a");
    a.href = await descargarGif();
    a.download = "gif.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  async function descargarGif() {
    var source =
      "https://api.giphy.com/v1/gifs/" +
      `${imgAmplificada.key}` +
      "?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9";
    let response = await fetch(source);
    let info = await response.json();
  
    console.log(info.data.images.downsized_large.url);
  
    return fetch(info.data.images.downsized_large.url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }
  
  //Funcion descargar Gif desktop:
  async function downloadDesktop() {
    const a = document.createElement("a");
    a.href = await descargarGifDesktop();
    a.download = "gifDesktop.gif";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
  
  async function descargarGifDesktop() {
    var source =
      "https://api.giphy.com/v1/gifs/" +
      `${divHover.key}` +
      "?api_key=umCoI8QE3nt72GLxXUntliERdZW5J6z9";
    let response = await fetch(source);
    let info = await response.json();
  
    console.log(info.data.images.downsized_large.url);
  
    return fetch(info.data.images.downsized_large.url)
      .then((response) => {
        return response.blob();
      })
      .then((blob) => {
        return URL.createObjectURL(blob);
      });
  }
  