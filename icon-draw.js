/**
 * Dazzlon Service Card Icon Enhancement
 * Ensures icons are fully rendered and initializes smooth interaction.
 */
(function() {
  function initIconDraw() {
    var cards = document.querySelectorAll('.cards .service-card, .page-cards .page-card');
    cards.forEach(function(card) {
      var svg = card.querySelector('.service-icon');
      if (svg) {
        svg.classList.add('in-view');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initIconDraw);
  } else {
    initIconDraw();
  }

  window.initIconDraw = initIconDraw;
})();
