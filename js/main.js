/**
 * TechFix Solutions – shared scripts (Part 3)
 * Active nav highlight + FAQ accordion
 */
(function () {
  "use strict";

  // Mark current page in navigation
  var path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("nav a").forEach(function (link) {
    var href = link.getAttribute("href");
    if (href === path) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  // Accordion
  document.querySelectorAll(".accordion-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var panel = btn.nextElementSibling;
      var isOpen = panel.classList.contains("open");
      document.querySelectorAll(".accordion-panel").forEach(function (p) {
        p.classList.remove("open");
      });
      document.querySelectorAll(".accordion-btn").forEach(function (b) {
        b.setAttribute("aria-expanded", "false");
        var icon = b.querySelector(".icon");
        if (icon) icon.textContent = "+";
      });
      if (!isOpen) {
        panel.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
        var icon = btn.querySelector(".icon");
        if (icon) icon.textContent = "−";
      }
    });
  });
})();
