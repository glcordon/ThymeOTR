(function () {
  'use strict';

  // ---- Nav: solid background on scroll ----
  var nav = document.getElementById('nav');
  function onScroll() {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // ---- Hamburger menu toggle ----
  var hamburger = document.getElementById('hamburger');
  var navLinks = document.getElementById('nav-links');
  hamburger.addEventListener('click', function () {
    var isOpen = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile nav when a link is clicked
  navLinks.querySelectorAll('.nav__link').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // ---- Menu / Specials tab switcher ----
  var tabBtns = document.querySelectorAll('.tab-btn');
  var tabPanels = document.querySelectorAll('.tab-panel');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var target = btn.dataset.tab;

      tabBtns.forEach(function (b) {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      tabPanels.forEach(function (p) {
        p.classList.remove('tab-panel--active');
      });

      btn.classList.add('tab-btn--active');
      btn.setAttribute('aria-selected', 'true');
      var panel = document.getElementById(target);
      if (panel) panel.classList.add('tab-panel--active');
    });
  });

  // "Specials" nav link should open the specials tab, then scroll to #menu
  var specialsNavLink = document.querySelector('.nav__link--specials');
  if (specialsNavLink) {
    specialsNavLink.addEventListener('click', function (e) {
      e.preventDefault();
      var specialsBtn = document.querySelector('[data-tab="specials"]');
      if (specialsBtn) specialsBtn.click();
      var menuSection = document.getElementById('menu');
      if (menuSection) {
        setTimeout(function () {
          menuSection.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      }
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
