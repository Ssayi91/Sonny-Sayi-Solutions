
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

        // FAQ Toggle Functionality
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');
            
            question.addEventListener('click', () => {
                item.classList.toggle('active');
            });
        });

        // WhatsApp Form Submission
        const contactForm = document.getElementById('contactForm');
        const feedbackElement = document.getElementById('form-feedback');
        
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const phone = document.getElementById('phone').value;
            const service = document.getElementById('service').value;
            const message = document.getElementById('message').value;
            const installment = document.getElementById('installment').checked;
            
            // Basic validation
            if(!name || !email || !phone || !service || !message) {
                showFeedback('Please fill in all required fields', 'error');
                return;
            }
            
           // Format WhatsApp message
            const serviceNames = {
            'web': 'Website Design & Development',
            'logo': 'Logo & Branding',
            'network': 'Network Infrastructure',
            'consulting': 'IT Consulting',
            'other': 'Other Service'
            };

            let whatsappMessage = `
            Hi Sonny Sayi Solutions!\n\n
            *Name:* ${name}\n
            *Email:* ${email}\n
            *Phone:* ${phone}\n
            *Service:* ${serviceNames[service]}\n
            *Installment Plan:* ${installment ? 'Yes' : 'No'}\n\n
            *Project Details:*\n${message}\n\n
            I'm interested in discussing this project further.
            `;

            // Encode entire message
            let encodedMessage = encodeURIComponent(whatsappMessage);

            // Create WhatsApp URL
            const whatsappUrl = `https://wa.me/254736194051?text=${encodedMessage}`;

            // Open WhatsApp in new tab
            window.open(whatsappUrl, '_blank');

            // Show success message
            showFeedback('Your message has been sent successfully! We will contact you shortly.', 'success');

            // Reset form
            contactForm.reset();
            showFeedback('Your message has been sent successfully! We will contact you shortly.', 'success');
            contactForm.reset();    
            });
        
        function showFeedback(message, type) {
            feedbackElement.textContent = message;
            feedbackElement.className = `form-feedback ${type}-message`;
            feedbackElement.style.display = 'block';
            
            // Auto-hide after 5 seconds
            setTimeout(() => {
                feedbackElement.style.display = 'none';
            }, 5000);
        }
