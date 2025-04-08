// cursor blend effect
const cursor = document.querySelector(".cursor");
document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

document.querySelectorAll("a").forEach((link) => {
  link.addEventListener("mouseenter", () => {
    cursor.style.mixBlendMode = "difference";
  });
  link.addEventListener("mouseleave", () => {
    cursor.style.mixBlendMode = "color-dodge";
  });
});

// eye tracker
const eyePupil = document.querySelector(".pupil");
const innerEye = document.querySelector(".inner-eye");

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
