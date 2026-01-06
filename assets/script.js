document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobile-menu');
  const navMenu = document.querySelector('.nav-menu');
  
  mobileMenuBtn.addEventListener('click', function() {
      this.classList.toggle('active');
      navMenu.classList.toggle('active');
      document.body.classList.toggle('no-scroll');
  });
  
  // Close mobile menu when clicking on a link
  document.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', function() {
          mobileMenuBtn.classList.remove('active');
          navMenu.classList.remove('active');
          document.body.classList.remove('no-scroll');
      });
  });
  
  // Typing Animation
  const typed = new Typed('.typing', {
      strings: ['Business', 'Brand', 'Online Presence', 'Vision'],
      typeSpeed: 120,
      backSpeed: 90,
      loop: true,
      smartBackspace: true,
      cursorChar: '|',
      shuffle: true
  });
  
  // Smooth Scroll with Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const target = document.querySelector(this.getAttribute('href'));
          const headerHeight = document.querySelector('header').offsetHeight;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          
          window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
          });
      });
  });
  
  // Active Link Highlighting
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');
  
  window.addEventListener('scroll', function() {
      let current = '';
      
      sections.forEach(section => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          
          if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
              current = section.getAttribute('id');
          }
      });
      
      navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
              link.classList.add('active');
          }
      });
  });
  

  // Form Submission with Animation
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
          e.preventDefault();
          
          const submitBtn = this.querySelector('.submit-button');
          submitBtn.innerHTML = '<i class="ri-loader-4-line animate-spin"></i> Sending...';
          submitBtn.disabled = true;
          
          // Simulate API call
          setTimeout(() => {
              submitBtn.innerHTML = '<i class="ri-check-line"></i> Message Sent!';
              
              // Add confetti effect
              createConfetti();
              
              setTimeout(() => {
                  this.reset();
                  submitBtn.innerHTML = '<span>Send Message</span> <i class="ri-send-plane-line"></i>';
                  submitBtn.disabled = false;
              }, 2000);
          }, 1500);
      });
  }
  
  // Back to Top Button
  const backToTop = document.getElementById('backToTop');
  window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
          backToTop.classList.add('active');
      } else {
          backToTop.classList.remove('active');
      }
  });
  
  backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  
  // Current Year in Footer
  document.getElementById('current-year').textContent = new Date().getFullYear();
});

// Simple Confetti Effect
function createConfetti() {
  const colors = ['#00f0ff', '#ff2d75', '#ffffff', '#0097b2'];
  const confettiContainer = document.createElement('div');
  confettiContainer.style.position = 'fixed';
  confettiContainer.style.top = '0';
  confettiContainer.style.left = '0';
  confettiContainer.style.width = '100%';
  confettiContainer.style.height = '100%';
  confettiContainer.style.pointerEvents = 'none';
  confettiContainer.style.zIndex = '1000';
  document.body.appendChild(confettiContainer);
  
  for (let i = 0; i < 100; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '10px';
      confetti.style.height = '10px';
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.borderRadius = '50%';
      confetti.style.left = `${Math.random() * 100}vw`;
      confetti.style.top = '-10px';
      confetti.style.opacity = '0.8';
      confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
      
      const animation = confetti.animate([
          { top: '-10px', opacity: 0.8 },
          { top: '100vh', opacity: 0 }
      ], {
          duration: Math.random() * 400000000 + 200000000,
          easing: 'cubic-bezier(0.3, 0.8, 0.6, 5)'
      });
      
      confettiContainer.appendChild(confetti);
      
      animation.onfinish = () => {
          confetti.remove();
          if (confettiContainer.children.length === 0) {
              confettiContainer.remove();
          }
      };
  }
}

// Open Modal
function openModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

// Close Modal
function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Image Carousel Logic
let currentSlide = 0;

function moveCarousel(direction) {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentSlide = (currentSlide + direction + items.length) % items.length;
    carousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Open Image Popup
function openImagePopup(imageSrc, description) {
    document.getElementById('popupImage').src = imageSrc;
    document.getElementById('popupDescription').innerText = description;
    document.getElementById('imagePopup').style.display = 'flex';
}

// Close Image Popup
function closeImagePopup() {
    document.getElementById('imagePopup').style.display = 'none';
}
