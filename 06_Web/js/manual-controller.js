/**
 * manual-controller.js
 * Lógica pura de navegación para el Manual de Marca 16:9 (SoC)
 * Cliente: Tejidos Manos de Luz (Sin registros en consola)
 */

(function () {
  'use strict';

  const TOTAL_SLIDES = 7;
  let currentSlide = 1;
  let touchStartX = 0;
  let touchEndX = 0;

  function initDeck() {
    // Sincronizar con el hash de la URL si existe (#slide-3)
    const hash = window.location.hash;
    if (hash && hash.startsWith('#slide-')) {
      const slideNum = parseInt(hash.replace('#slide-', ''), 10);
      if (slideNum >= 1 && slideNum <= TOTAL_SLIDES) {
        currentSlide = slideNum;
      }
    }

    renderSlide();
    bindEvents();
  }

  function renderSlide() {
    // Actualizar clases activas en diapositivas
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
      const slideElem = document.getElementById('slide-' + i);
      const dotElem = document.getElementById('dot-' + i);

      if (slideElem) {
        if (i === currentSlide) {
          slideElem.classList.add('active');
          slideElem.setAttribute('aria-hidden', 'false');
        } else {
          slideElem.classList.remove('active');
          slideElem.setAttribute('aria-hidden', 'true');
        }
      }

      if (dotElem) {
        if (i === currentSlide) {
          dotElem.classList.add('active');
          dotElem.setAttribute('aria-selected', 'true');
        } else {
          dotElem.classList.remove('active');
          dotElem.setAttribute('aria-selected', 'false');
        }
      }
    }

    // Actualizar contador numérico
    const counterElem = document.getElementById('slide-counter-display');
    if (counterElem) {
      const padCurrent = currentSlide < 10 ? '0' + currentSlide : currentSlide;
      const padTotal = TOTAL_SLIDES < 10 ? '0' + TOTAL_SLIDES : TOTAL_SLIDES;
      counterElem.textContent = padCurrent + ' / ' + padTotal;
    }

    // Actualizar hash silenciosamente sin salto de scroll
    if (window.history && window.history.replaceState) {
      window.history.replaceState(null, '', '#slide-' + currentSlide);
    }
  }

  function goToSlide(index) {
    if (index >= 1 && index <= TOTAL_SLIDES) {
      currentSlide = index;
      renderSlide();
    }
  }

  function nextSlide() {
    if (currentSlide < TOTAL_SLIDES) {
      currentSlide++;
    } else {
      currentSlide = 1; // Ciclo continuo al inicio
    }
    renderSlide();
  }

  function prevSlide() {
    if (currentSlide > 1) {
      currentSlide--;
    } else {
      currentSlide = TOTAL_SLIDES; // Ciclo continuo al final
    }
    renderSlide();
  }

  function toggleFullscreen() {
    const deck = document.getElementById('presentation-deck-container');
    if (!deck) return;

    if (!document.fullscreenElement) {
      if (deck.requestFullscreen) {
        deck.requestFullscreen();
      } else if (deck.webkitRequestFullscreen) {
        deck.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  function printDeck() {
    window.print();
  }

  function bindEvents() {
    // Navegación por teclado
    window.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        prevSlide();
      } else if (e.key === 'Home') {
        e.preventDefault();
        goToSlide(1);
      } else if (e.key === 'End') {
        e.preventDefault();
        goToSlide(TOTAL_SLIDES);
      } else if (e.key === 'f' || e.key === 'F') {
        toggleFullscreen();
      } else if (e.key === 'p' || e.key === 'P') {
        if (e.ctrlKey || e.metaKey) return;
        printDeck();
      }
    });

    // Soporte táctil (Swipe)
    const container = document.getElementById('presentation-deck-container');
    if (container) {
      container.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
      }, { passive: true });

      container.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      }, { passive: true });
    }

    // Botones de control
    const prevBtn = document.getElementById('btn-prev-slide');
    const nextBtn = document.getElementById('btn-next-slide');
    const fsBtn = document.getElementById('btn-fullscreen');
    const printBtn = document.getElementById('btn-print-deck');

    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (fsBtn) fsBtn.addEventListener('click', toggleFullscreen);
    if (printBtn) printBtn.addEventListener('click', printDeck);

    // Indicadores de puntos
    for (let i = 1; i <= TOTAL_SLIDES; i++) {
      const dot = document.getElementById('dot-' + i);
      if (dot) {
        dot.addEventListener('click', (function (idx) {
          return function () { goToSlide(idx); };
        })(i));
      }
    }
  }

  function handleSwipe() {
    const threshold = 40;
    if (touchEndX < touchStartX - threshold) {
      nextSlide();
    } else if (touchEndX > touchStartX + threshold) {
      prevSlide();
    }
  }

  // Inicializar al cargar el DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDeck);
  } else {
    initDeck();
  }

  // Exponer API mínima para integración externa
  window.ManualDeck = {
    goToSlide: goToSlide,
    nextSlide: nextSlide,
    prevSlide: prevSlide,
    print: printDeck
  };
})();
