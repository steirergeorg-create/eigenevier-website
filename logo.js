// Renders the eigenevier logo into every .sidebar-logo element
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.sidebar-logo').forEach(function (el) {
    el.innerHTML =
      '<div class="bautraeger">Bauträger</div>' +
      '<div class="logo-text">' +
      '<a href="projekt.html">' +
      '<span class="c1">e</span>' +
      '<span class="c2">i</span>' +
      '<span class="c3">g</span>' +
      '<span class="c4">e</span>' +
      '<span class="c5">n</span>' +
      '<span class="c6">e</span>' +
      '<span class="c7">v</span>' +
      '<span class="c8">i</span>' +
      '<span class="c9">e</span>' +
      '<span class="c10">r</span>' +
      '<span class="l-at"> [at]</span>' +
      '</a>' +
      '</div>';
  });
});
