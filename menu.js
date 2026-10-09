/* Mobiles Menü (Prototyp #34). Ohne JavaScript bleibt das Menü immer sichtbar. */
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var button = document.querySelector(".menu-button");
  var nav = document.getElementById("site-nav");
  if (!button || !nav) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", open ? "true" : "false");
    button.querySelector(".menu-text").textContent = open ? "Schließen" : "Menü";
    nav.classList.toggle("is-open", open);
  }

  button.addEventListener("click", function () {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && button.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      button.focus();
    }
  });
});
