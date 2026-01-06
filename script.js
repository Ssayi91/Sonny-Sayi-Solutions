document.addEventListener("DOMContentLoaded", () => {
  // Mobile Nav Toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      navToggle.classList.toggle("active");
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll(".nav-links a").forEach(link => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("open");
        navToggle.classList.remove("active");
      });
    });
  }

  // Scroll-based active nav link
  const sections = document.querySelectorAll("section[id]");
  const navLinksAll = document.querySelectorAll(".nav-links a");

  function activateNavByScroll() {
    let current = "";
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinksAll.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", activateNavByScroll);

  // Header scroll effect
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      header.classList.toggle("scrolled", window.scrollY > 50);
    });
  }

  // Respect reduced motion preference
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.body.classList.add("reduced-motion");
  }
});

// Pricing: Toggle extra features
document.querySelectorAll('.btn-toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const extra = btn.previousElementSibling?.classList.contains('extra-features') 
      ? btn.previousElementSibling 
      : btn.nextElementSibling;

    if (extra) {
      const isVisible = extra.style.display === 'block';
      extra.style.display = isVisible ? 'none' : 'block';
      btn.querySelector('span').textContent = isVisible 
        ? '+ View Full Features' 
        : '– Show Less';
    }
  });
});
// FAQ Accordion Toggle
document.addEventListener('DOMContentLoaded', function () {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach(button => {
    button.addEventListener('click', () => {
      // Toggle aria-expanded
      const isExpanded = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', !isExpanded);

      // Toggle icon rotation (optional but visual)
      const icon = button.querySelector('i');
      if (icon) {
        icon.style.transform = !isExpanded ? 'rotate(180deg)' : 'rotate(0deg)';
      }

      // Toggle answer visibility
      const answer = button.closest('.faq-item').querySelector('.faq-answer');
      if (answer) {
        answer.style.display = !isExpanded ? 'block' : 'none';
      }
    });
  });
});