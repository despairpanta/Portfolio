// cursor blend effect
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.mixBlendMode = "difference";
    cursor.style.background = "#05a1a6";
    cursor.style.width = "167px";
    cursor.style.height = "167px";
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.mixBlendMode = "normal";
    cursor.style.background = "#EF403B";
    cursor.style.width = "40px";
    cursor.style.height = "40px";
  });
});

// eye tracker
const eyePupil = document.querySelector(".pupil");
const innerEye = document.querySelector(".inner-eye");
var minX = 22;
var maxX = 38;
var minY = 24;
var maxY = 94;

document.addEventListener("mousemove", (e) => {
  var xPercent = e.clientX / window.innerWidth;
  var yPercent = e.clientY / window.innerWidth;
  eyePupil.setAttribute("cx", minX + xPercent * (maxX - minX));
  eyePupil.setAttribute("cy", minY + yPercent * (maxY - minY));
});

// carousel
import Swiper, { Navigation, Pagination } from "swiper";

Swiper.use([Navigation, Pagination]);

const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
