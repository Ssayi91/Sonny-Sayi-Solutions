
  // Navbar toggle
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('active');
    links.classList.toggle('open');
  });

  // Scroll animations
  const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
      if(entry.isIntersecting){
        entry.target.classList.add('active');
      }
    });
  }, {threshold:0.2});

  document.querySelectorAll('.fade-up, .slide-left, .slide-right, .slide-up, .stagger > *').forEach(el=>{
    observer.observe(el);
  });
