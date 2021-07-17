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