// Highlight the "On this page" entry for the section in view.
(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('.toc a[href^="#"]'));
  if (!links.length) return;
  var targets = links.map(function (a) {
    return document.getElementById(decodeURIComponent(a.getAttribute('href').slice(1)));
  });

  function update() {
    var current = 0;
    targets.forEach(function (el, i) {
      if (el && el.getBoundingClientRect().top < 120) current = i;
    });
    links.forEach(function (a, i) { a.classList.toggle('active', i === current); });
  }

  var ticking = false;
  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { update(); ticking = false; });
  }, { passive: true });
  update();
})();
