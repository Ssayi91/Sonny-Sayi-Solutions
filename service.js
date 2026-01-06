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

/* =========================
   MOBILE NAV
========================= */
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}
