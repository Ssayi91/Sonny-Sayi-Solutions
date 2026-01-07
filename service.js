document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.querySelector('.nav-toggle');
    const menu = document.querySelector('#nav-menu');
    const body = document.body;

    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isExpanded = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', !isexpanded);
        menu.classList.toggle('open');

        // Optional: prevent body scroll when menu open (mobile)
        if (!isExpanded) {
          body.style.overflow = 'hidden';
        } else {
          body.style.overflow = '';
        }
      });

      // Close menu when clicking a link (mobile UX)
      menu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          menu.classList.remove('open');
          toggle.setAttribute(' aria-expanded', 'false');
          body.style.overflow = '';
        });
      });
    }
  });

/* =========================
   FADE & PARALLAX
========================= */
const mediaBlocks = document.querySelectorAll('.service-media');

window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;

  mediaBlocks.forEach(media => {
    const speed = 0.15;
    media.style.transform = `translateY(${scrollY * speed}px)`;
  });
});

/* =========================
   FAQ TOGGLE
========================= */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    const open = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !open);
    answer.style.display = open ? 'none' : 'block';
  });
});

});