// Menu Hamburgesa, añadimos un evento para deplazar el menu hacia abajo

let menu = document.getElementById("burguerBtn");
let back = document.querySelector(".Background1 .hidden");
let barraMenu = document.querySelector(".menu");

menu.addEventListener("click", () => {
  if (back.style.display === "none") {
    back.style.display = "flex";
  } else {
    back.style.display = "none";
  }
});
