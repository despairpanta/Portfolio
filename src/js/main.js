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
