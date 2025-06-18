    // Toggle dark mode
    document.getElementById('toggleTheme').addEventListener('click', function() {
      document.documentElement.classList.toggle('dark');
      localStorage.theme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
    });
    
    // Set initial theme based on preference
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Mobile menu toggle
    document.getElementById('mobileMenuBtn').addEventListener('click', function() {
      const menu = document.getElementById('mobileMenu');
      menu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', function(e) {
      const menu = document.getElementById('mobileMenu');
      const menuBtn = document.getElementById('mobileMenuBtn');
      
      if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
        menu.classList.add('hidden');
      }
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 80,
            behavior: 'smooth'
          });
          
          // Close mobile menu if open
          document.getElementById('mobileMenu').classList.add('hidden');
        }
      });
    });
    
    // Initialize GSAP animations
    document.addEventListener('DOMContentLoaded', function() {
      // Hero title animation
      gsap.from('#heroTitle', {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out'
      });
      
      // Services animation
      gsap.utils.toArray('.portfolio-item').forEach((item, index) => {
        gsap.from(item, {
          scrollTrigger: {
            trigger: item,
            start: 'top 90%'
          },
          duration: 0.5,
          y: 30,
          opacity: 0,
          delay: index * 0.1,
          ease: 'power2.out'
        });
      });
      
      // Pricing cards animation
      gsap.utils.toArray('.pricing-card').forEach((card, index) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%'
          },
          duration: 0.7,
          y: 40,
          opacity: 0,
          delay: index * 0.15,
          ease: 'back.out(1.7)'
        });
      });
    });

    document.getElementById('quoteForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = this.name.value.trim();
    const email = this.email.value.trim();
    const service = this.service.value;

    const phone = '254736194051'; // Replace with your WhatsApp number
    let message = `Hello, I would like a quote.\n\nName: ${name}\nService: ${service}`;
    if (email) message += `\nEmail: ${email}`;

    const whatsappURL = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, '_blank');
  });

   document.getElementById('quoteForms').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent normal form submission
    
    // WhatsApp number you want to send messages to (include country code, no + or spaces)
    const whatsappNumber = "254736194051"; 
    
    // Get form values
    const name = encodeURIComponent(document.getElementById('name').value.trim());
    const email = encodeURIComponent(document.getElementById('email').value.trim());
    const service = encodeURIComponent(document.getElementById('service').value);
    const message = encodeURIComponent(document.getElementById('message').value.trim());
    
    // Compose WhatsApp message text
    const text = `*New Quote Request*%0A` +
                 `*Name:* ${name}%0A` +
                 `*Email:* ${email}%0A` +
                 `*Service Interested:* ${service}%0A` +
                 `*Project Details:* ${message}`;
                 
    // WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    
    // Open WhatsApp in a new tab/window
    window.open(whatsappURL, '_blank');
  });

  // FAQ toggle functionality
  document.querySelectorAll('.faq-toggle').forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');

      // Toggle content visibility
      if(content.classList.contains('hidden')){
        content.classList.remove('hidden');
        icon.style.transform = 'rotate(180deg)';
      } else {
        content.classList.add('hidden');
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });