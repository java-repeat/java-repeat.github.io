// Client-side search over the index.json that Hugo builds for the home page.
(function () {
  var input = document.getElementById('sq');
  var status = document.getElementById('search-status');
  var list = document.getElementById('search-results');
  var query = (new URLSearchParams(location.search).get('q') || '').trim();
  input.value = query;
  if (!query) return;

  function escape(s) {
    return s.replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  // A short excerpt around the first match, with the match marked.
  function snippet(text, at, length) {
    var start = Math.max(0, at - 60);
    var end = Math.min(text.length, at + length + 100);
    // Snap to word boundaries.
    if (start > 0) start = text.indexOf(' ', start) + 1 || start;
    var space = text.lastIndexOf(' ', end);
    if (end < text.length && space > at + length) end = space;
    var before = (start > 0 ? '… ' : '') + text.slice(start, at);
    var after = text.slice(at + length, end) + (end < text.length ? ' …' : '');
    return escape(before) + '<mark>' + escape(text.slice(at, at + length)) + '</mark>' + escape(after);
  }

  fetch(window.SEARCH_INDEX)
    .then(function (r) { return r.json(); })
    .then(function (pages) {
      var q = query.toLowerCase();
      var results = [];
      pages.forEach(function (p) {
        var body = (p.lede + ' ' + p.content).replace(/\s+/g, ' ').trim();
        var inTitle = p.title.toLowerCase().indexOf(q) !== -1;
        var at = body.toLowerCase().indexOf(q);
        if (!inTitle && at === -1) return;
        results.push({
          page: p,
          score: (inTitle ? 2 : 0) + (at !== -1 ? 1 : 0),
          excerpt: at !== -1 ? snippet(body, at, q.length) : escape(p.lede || body.slice(0, 160))
        });
      });
      results.sort(function (a, b) { return b.score - a.score; });

      var noun = results.length === 1 ? 'result' : 'results';
      status.textContent = results.length + ' ' + noun + ' for “' + query + '”';
      list.innerHTML = results.map(function (r) {
        return '<li><span class="label">' + escape(r.page.section) + '</span>' +
          '<a href="' + escape(r.page.url) + '">' + escape(r.page.title) + '</a>' +
          '<p>' + r.excerpt + '</p></li>';
      }).join('');
    })
    .catch(function () {
      status.textContent = 'Search is unavailable right now.';
    });
})();
