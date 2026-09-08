/**
 * Dazzlon Service Card SVG Line-Drawing Animation
 * Staggers drawing of outlined service icons when scrolled into view.
 * Triggers once per page load only.
 */
(function() {
  function initIconDraw() {
    var cards = document.querySelectorAll('.cards .service-card, .page-cards .page-card');
    if (!cards.length) return;

    // Initialize SVG paths with exact path length for line drawing
    cards.forEach(function(card) {
      var svg = card.querySelector('.service-icon');
      if (!svg) return;
      svg.classList.add('draw-active');
      var paths = svg.querySelectorAll('path, line, polyline, polygon, circle, rect');
      paths.forEach(function(p) {
        try {
          var len = Math.ceil(p.getTotalLength ? p.getTotalLength() : 120) || 120;
          p.style.strokeDasharray = len;
          p.style.strokeDashoffset = len;
          p.style.setProperty('--path-len', len);
        } catch (e) {
          p.style.strokeDasharray = '120';
          p.style.strokeDashoffset = '120';
        }
      });
    });

    // Use IntersectionObserver to animate icons when cards scroll into view
    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function(entries) {
        var toAnimate = [];
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            toAnimate.push(entry.target);
            observer.unobserve(entry.target);
          }
        });

        if (toAnimate.length) {
          toAnimate.forEach(function(card, idx) {
            setTimeout(function() {
              var svg = card.querySelector('.service-icon');
              if (svg) svg.classList.add('in-view');
            }, idx * 100);
          });
        }
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
      });

      cards.forEach(function(card) {
        observer.observe(card);
      });
    } else {
      cards.forEach(function(card, idx) {
        setTimeout(function() {
          var svg = card.querySelector('.service-icon');
          if (svg) svg.classList.add('in-view');
        }, idx * 80);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIconDraw);
  } else {
    initIconDraw();
  }

  window.initIconDraw = initIconDraw;
})();
