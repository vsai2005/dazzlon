/**
 * Dazzlon Page Transition Wipe Effect
 * Intercepts internal links and plays a brand-colored wipe animation between pages.
 */
(function() {
  var DURATION = 350; // ms per wipe (exit 350ms + enter 350ms = 700ms round trip)
  var STORAGE_KEY = 'dazzlon_transitioning';

  function getPanel() {
    return document.getElementById('page-transition-panel');
  }

  // Run enter animation on page load if arriving from an internal transition
  function handleEnter() {
    var panel = getPanel();
    if (!panel) return;

    var wasTransitioning = false;
    try {
      wasTransitioning = sessionStorage.getItem(STORAGE_KEY) === '1';
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}

    if (wasTransitioning || panel.classList.contains('wipe-covered')) {
      // Ensure panel starts covering the viewport
      panel.classList.add('wipe-covered');
      panel.style.transform = 'translateY(0)';
      panel.style.pointerEvents = 'auto';

      // Small tick to ensure browser renders the covered state before transitioning
      requestAnimationFrame(function() {
        requestAnimationFrame(function() {
          panel.classList.remove('wipe-covered');
          panel.classList.add('wipe-enter');

          setTimeout(function() {
            panel.classList.remove('wipe-enter');
            panel.style.transform = 'translateY(100%)';
            panel.style.pointerEvents = 'none';
          }, DURATION + 30);
        });
      });
    } else {
      panel.style.transform = 'translateY(100%)';
      panel.style.pointerEvents = 'none';
    }
  }

  // Intercept internal link clicks and trigger exit animation
  function handleClick(e) {
    var link = e.target.closest('a');
    if (!link) return;

    var href = link.getAttribute('href');
    if (!href) return;

    // Exclude external links, hashes, mailto, tel, javascript, new tab targets, and modifier clicks
    if (
      href.startsWith('#') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('javascript:') ||
      link.getAttribute('target') === '_blank' ||
      link.hasAttribute('download') ||
      e.ctrlKey || e.metaKey || e.shiftKey || e.altKey ||
      e.button !== 0
    ) {
      return;
    }

    var targetUrl;
    try {
      targetUrl = new URL(link.href, window.location.href);
    } catch (err) {
      return;
    }

    // Must be same origin and an HTML page or root
    if (targetUrl.origin !== window.location.origin) return;

    // Check if it's the exact same page URL with only hash or no change
    if (targetUrl.pathname === window.location.pathname && targetUrl.search === window.location.search) {
      if (targetUrl.hash) return; // let hash jump work
    }

    var panel = getPanel();
    if (!panel) return;

    e.preventDefault();

    try {
      sessionStorage.setItem(STORAGE_KEY, '1');
    } catch (e) {}

    panel.classList.remove('wipe-enter', 'wipe-covered');
    panel.classList.add('wipe-exit');
    panel.style.pointerEvents = 'auto';

    setTimeout(function() {
      window.location.href = targetUrl.href;
    }, DURATION);
  }

  // Reset panel on bfcache restore (browser Back / Forward navigation)
  window.addEventListener('pageshow', function(event) {
    var panel = getPanel();
    if (!panel) return;
    panel.classList.remove('wipe-exit', 'wipe-enter', 'wipe-covered');
    panel.style.transform = 'translateY(100%)';
    panel.style.pointerEvents = 'none';
    try {
      sessionStorage.removeItem(STORAGE_KEY);
    } catch (e) {}
  });

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', handleEnter);
  } else {
    handleEnter();
  }

  document.addEventListener('click', handleClick);
})();
