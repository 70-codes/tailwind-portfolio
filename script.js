// Light mode and dark mode
let html = document.getElementById("html");
let change_btn = document.getElementById("change_btn");
let change_image = document.getElementById("change_image");

let change_btn2 = document.getElementById("change_btn2");
let change_image2 = document.getElementById("change_image2");

change_btn.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    change_image.src = "img/sun.svg";
  } else {
    change_image.src = "img/moon.svg";
  }
});
change_btn2.addEventListener("click", () => {
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    change_image2.src = "img/sun.svg";
  } else {
    change_image2.src = "img/moon.svg";
  }
});

// Mobile Menu

let main_menu = document.getElementById("main_menu");
let menu_btn = document.getElementById("menu_btn");
menu_btn.addEventListener("click", () => {
  main_menu.classList.toggle("hidden");
});
