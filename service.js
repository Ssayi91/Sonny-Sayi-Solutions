// ================= PRELOADER =================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    preloader.style.display = 'none';
});

// ================= MOBILE NAV =================
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// ================= FADE-IN ON SCROLL =================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(0px)";
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// ================= MICRO-PARALLAX =================
const parallaxImages = document.querySelectorAll('.parallax');

window.addEventListener('scroll', () => {
    parallaxImages.forEach(img => {
        let speed = 0.3;
        let offset = window.pageYOffset;
        img.style.transform = `translateY(${offset * speed}px)`;
    });
});

// ================= WHATSAPP FORM =================
const form = document.getElementById('serviceInquiryForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const phone = form.querySelector('input[type="tel"]').value;
    const service = form.querySelector('select').value;
    const message = form.querySelector('textarea').value;

    const text = `Hello, my name is ${name}. Email: ${email}, WhatsApp: ${phone}. Service: ${service}. Message: ${message}`;
    const whatsappUrl = `https://wa.me/254736194051?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
});
