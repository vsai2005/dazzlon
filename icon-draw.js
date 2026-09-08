/**
 * Dazzlon Service Card SVG Line-Drawing Animation
 * Staggers drawing of outlined service icons when scrolled into view.
 * Triggers once per page load only.
 */
(function() {
  function initIconDraw() {
    var cards = document.querySelectorAll('.cards .service-card');
    if (!cards.length) return;

    // Initialize all SVG paths with exact path length for line drawing
    cards.forEach(function(card) {
      var svg = card.querySelector('.service-icon');
      if (!svg) return;
      var paths = svg.querySelectorAll('path, line, polyline, polygon, circle, rect');
      paths.forEach(function(p) {
        try {
          var len = Math.ceil(p.getTotalLength ? p.getTotalLength() : 120) || 120;
          p.style.strokeDasharray = len;
          p.style.strokeDashoffset = len;
          p.style.setProperty('--path-len', len);
        } catch (e) {
          // Fallback if SVG element is not yet rendered
          p.style.strokeDasharray = '120';
          p.style.strokeDashoffset = '120';
        }
      });
    });

    // Use IntersectionObserver to animate icons when cards scroll into view
    if ('IntersectionObserver' in window) {
      var animated = false;
      var observer = new IntersectionObserver(function(entries) {
        var toAnimate = [];
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            toAnimate.push(entry.target);
            observer.unobserve(entry.target);
          }
        });

        if (toAnimate.length) {
          // Stagger ~120ms apart if multiple cards appear at once
          toAnimate.forEach(function(card, idx) {
            setTimeout(function() {
              var svg = card.querySelector('.service-icon');
              if (svg) svg.classList.add('in-view');
            }, idx * 120);
          });
        }
      }, {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px'
      });

      cards.forEach(function(card) {
        observer.observe(card);
      });
    } else {
      cards.forEach(function(card, idx) {
        setTimeout(function() {
          var svg = card.querySelector('.service-icon');
          if (svg) svg.classList.add('in-view');
        }, idx * 120);
      });
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIconDraw);
  } else {
    initIconDraw();
  }
})();
