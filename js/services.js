/**
 * Services page – search and category filter
 */
(function () {
  "use strict";

  var cards = document.querySelectorAll(".service-card");
  var searchInput = document.getElementById("service-search");
  var filterBtns = document.querySelectorAll("[data-filter]");
  var noResults = document.getElementById("no-results");
  if (!cards.length) return;

  var currentFilter = "all";

  function applyFilters() {
    var query = (searchInput ? searchInput.value : "").toLowerCase().trim();
    var visible = 0;

    cards.forEach(function (card) {
      var category = card.getAttribute("data-category") || "";
      var text = card.textContent.toLowerCase();
      var matchFilter = currentFilter === "all" || category === currentFilter;
      var matchSearch = !query || text.indexOf(query) !== -1;
      if (matchFilter && matchSearch) {
        card.hidden = false;
        visible++;
      } else {
        card.hidden = true;
      }
    });

    if (noResults) {
      noResults.classList.toggle("visible", visible === 0);
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", applyFilters);
  }

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });
      btn.classList.add("active");
      currentFilter = btn.getAttribute("data-filter");
      applyFilters();
    });
  });
})();
