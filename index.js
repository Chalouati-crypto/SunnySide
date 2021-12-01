import "./index.scss";
import "tailwindcss/tailwind.css";
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
