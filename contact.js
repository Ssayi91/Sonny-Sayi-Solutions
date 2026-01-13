
        // Preloader
        window.addEventListener('load', function() {
            const preloader = document.getElementById('preloader');
            setTimeout(() => {
                preloader.style.opacity = '0';
                preloader.style.visibility = 'hidden';
            }, 1000);
        });

       // Mobile menu toggle (same as homepage)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  navToggle.classList.toggle('active');
});

// FAQ toggle
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.faq-item');
    const answer = parent.querySelector('.faq-answer');
    const isOpen = btn.getAttribute('aria-expanded') === 'true';

    btn.setAttribute('aria-expanded', !isOpen);
    answer.style.display = isOpen ? 'none' : 'block';
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
