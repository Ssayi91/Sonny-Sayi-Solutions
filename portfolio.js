
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1000);
        });

        // Mobile Menu Toggle
        const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');
        
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            mobileMenuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Header scroll effect
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            if (anchor.getAttribute('href') !== '#') {
                anchor.addEventListener('click', function(e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 80,
                            behavior: 'smooth'
                        });
                        
                        // Close mobile menu if open
                        if (navLinks.classList.contains('active')) {
                            navLinks.classList.remove('active');
                            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
                        }
                    }
                });
            }
        });

        // Scroll animation for fade-in elements
        const fadeElements = document.querySelectorAll('.fade-in');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        fadeElements.forEach(el => {
            observer.observe(el);
        });

        // Logo Carousel
        const logoCarousel = document.getElementById('logoCarousel');
        const prevBtn = document.getElementById('prevLogo');
        const nextBtn = document.getElementById('nextLogo');
        const dotsContainer = document.getElementById('carouselDots');
        const slides = document.querySelectorAll('.logo-slide');
        let currentIndex = 0;
        const slidesToShow = 1; // Default number of slides to show
        
        // Create dots based on number of slides
        slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => goToSlide(index));
            dotsContainer.appendChild(dot);
        });
        
        // Update dots
        function updateDots() {
            document.querySelectorAll('.dot').forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }
        
        // Go to specific slide
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        // Update carousel position
        function updateCarousel() {
            const slideWidth = 100 / slidesToShow;
            logoCarousel.style.transform = `translateX(-${currentIndex * slideWidth}%)`;
            updateDots();
        }
        
        // Previous slide
        prevBtn.addEventListener('click', () => {
            currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
            updateCarousel();
        });
        
        // Next slide
        nextBtn.addEventListener('click', () => {
            currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
            updateCarousel();
        });
        
        // Auto-rotate carousel
        // setInterval(() => {
        //     currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
        //     updateCarousel();
        // }, 5000);
        
        // Initialize carousel
        updateCarousel();
document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  toggleButton.addEventListener('click', () => {
    navLinks.classList.toggle('open'); // match CSS
    toggleButton.classList.toggle('active'); // animate hamburger
  });
});