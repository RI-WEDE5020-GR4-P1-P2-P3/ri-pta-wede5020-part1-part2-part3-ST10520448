/**
 * Gallery lightbox – click image to enlarge
 */
(function () {
  "use strict";

  var figures = document.querySelectorAll(".gallery-grid figure");
  if (!figures.length) return;

  var lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.setAttribute("role", "dialog");
  lightbox.setAttribute("aria-modal", "true");
  lightbox.innerHTML =
    '<div class="lightbox-inner">' +
    '<button type="button" class="lightbox-close" aria-label="Close">&times;</button>' +
    '<img src="" alt="">' +
    '<p class="lightbox-caption"></p>' +
    "</div>";
  document.body.appendChild(lightbox);

  var img = lightbox.querySelector("img");
  var caption = lightbox.querySelector(".lightbox-caption");
  var closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(src, alt, text) {
    img.src = src;
    img.alt = alt || "";
    caption.textContent = text || "";
    lightbox.classList.add("open");
    closeBtn.focus();
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    img.src = "";
  }

  figures.forEach(function (fig) {
    fig.setAttribute("tabindex", "0");
    fig.setAttribute("role", "button");
    var image = fig.querySelector("img");
    var cap = fig.querySelector("figcaption");
    function activate() {
      openLightbox(image.src, image.alt, cap ? cap.textContent : "");
    }
    fig.addEventListener("click", activate);
    fig.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        activate();
      }
    });
  });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
})();
