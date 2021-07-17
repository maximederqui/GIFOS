//hovers header:

function setImgCrearGifosNueva() {
    imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-hover.svg";
  }
  
  function setImgVolver() {
    // if (imgBtnCrearGifos.toggle === "no") {
    //     imgBtnCrearGifos.src = "./assets/assets/button-crear-gifo.svg";
    // }
    imgBtnCrearGifos.src = "./assets/assets/button-crear-gifo.svg";
  }
  
  //hovers footer:
  let fbIcon = document.getElementById("imagenIconoFacebook");
  function setHoverIconFb() {
    fbIcon.src = "./assets/assets/icon_facebook_hover.svg";
  }
  
  function setHoverIconFbVolver() {
    fbIcon.src = "./assets/assets/icon_facebook.svg";
  }
  
  let twitterIcon = document.getElementById("imagenIconoTwitter");
  function setHoverIconTwitter() {
    twitterIcon.src = "./assets/assets/icon-twitter-hover.svg";
  }
  
  function setHoverIconTwitterVolver() {
    twitterIcon.src = "./assets/assets/icon-twitter.svg";
  }
  
  let instagramIcon = document.getElementById("imagenIconoInstagram");
  function setHoverIconInstagram() {
    instagramIcon.src = "./assets/assets/icon_instagram-hover.svg";
  }
  
  function setHoverIconInstagramVolver() {
    instagramIcon.src = "./assets/assets/icon_instagram.svg";
  }
  
  window.onload = () => {};
  
  imgBtnCrearGifos.addEventListener("click", (apCreador) => {
    imgBtnCrearGifos.setAttribute("toggle", "false");
    console.log(imgBtnCrearGifos.toggle);
    buscadorGifos.style.display = "none";
    creadorGifos.style.display = "block";
    imgBtnCrearGifos.toggle = "true";
    sectionFavoritos.style.display = "none";
    sectionMisGifos.style.display = "none";
    trendingGifos.style.display = "none";
    if (!pantallaDesktop.matches) {
      site_nav.style.display = "none";
    }
    imgBtnCrearGifos.src = "./assets/assets/CTA-crear-gifo-active-modo-noc.svg";
  });
  
  btnComenzar.addEventListener("click", (eventoComenzar) => {
    console.log("hola");
    btnComenzar.style.display = "none";
    btnGrabacion1.style.backgroundColor = "#572EE5";
    textBtnGrabacion1.style.color = "#FFFFFF";
    tituloGrabacion.innerHTML = `¿Nos das acceso <br> a tu camara?`;
    textoGrabacion1.innerHTML = `El acceso a tu camara será válido sólo`;
    textoGrabacion2.innerHTML = `por el tiempo en el que estés creando el GIFO.`;
    permisos();
  });
  
  function permisos() {
    let stream = navigator.mediaDevices
      .getUserMedia({
        audio: false,
        video: {
          height: { max: 480 },
        },
      })
      .then(prepararPaso2)
      .then(grabar);
  }
  
  async function prepararPaso2() {
    btnGrabar.style.display = "flex";
    btnGrabacion2.style.backgroundColor = "#572EE5";
    textBtnGrabacion2.style.color = "#FFFFFF";
    btnGrabacion1.style.backgroundColor = "#FFFFFF";
    textBtnGrabacion1.style.color = "#572EE5";
    tituloGrabacion.style.display = "none";
    textoGrabacion1.style.display = "none";
    textoGrabacion2.style.display = "none";
    video.style.display = "block";
    textosGrabacionYVideo.style.marginLeft = 0;
  }
  
  async function grabar() {
    btnGrabar.addEventListener("click", (eventoGrabar) => {
      getStreamAndRecord();
      btnGrabar.style.display = "none";
      btnFinalizar.style.display = "flex";
      cronometro.style.display = "flex";
      startTimer();
    });
  }
  
  btnFinalizar.addEventListener("click", (eventoFinalizar) => {
    recorder.stopRecording(async () => {
      let blob = recorder.getBlob();
      let uri = URL.createObjectURL(blob);
      mostrarVideo.src = uri;
    });
    cronometro.style.display = "none";
    textoSubrayado.style.display = "flex";
    btnsGrabacion.style.marginRight = "4.8vw";
    btnFinalizar.style.display = "none";
    btnSubirGifo.style.display = "flex";
    stopTimer();
  });
  
  btnSubirGifo.addEventListener("click", () => {
    let blob = recorder.getBlob();
    let form = new FormData();
    form.append("file", blob, "myGif.gif");
    textoGrabacionYvideoPintado.style.display = "block";
    // createGif(form);
  });