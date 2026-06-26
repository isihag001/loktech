/* Loktech — tiny progressive-enhancement script.
   Two jobs only: the text-size controls and the back-to-top button.
   Kept vanilla and dependency-free for low-bandwidth devices. */
(function () {
  'use strict';

  // ---- Text size (persisted) ----
  var html = document.documentElement;
  var STEPS = [-1, 0, 1, 2]; // maps to html[data-size]
  var saved = parseInt(localStorage.getItem('loktech-size'), 10);
  var idx = STEPS.indexOf(isNaN(saved) ? 0 : saved);
  if (idx === -1) idx = STEPS.indexOf(0);

  function apply() {
    var v = STEPS[idx];
    if (v === 0) html.removeAttribute('data-size');
    else html.setAttribute('data-size', String(v));
    localStorage.setItem('loktech-size', String(v));
  }
  apply();

  document.querySelectorAll('[data-text]').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var action = btn.getAttribute('data-text');
      if (action === 'inc' && idx < STEPS.length - 1) idx++;
      else if (action === 'dec' && idx > 0) idx--;
      else if (action === 'reset') idx = STEPS.indexOf(0);
      apply();
    });
  });

  // ---- Back to top ----
  var btt = document.getElementById('back-to-top');
  if (btt) {
    window.addEventListener('scroll', function () {
      btt.classList.toggle('visible', window.scrollY > 300);
    });
    btt.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
})();
