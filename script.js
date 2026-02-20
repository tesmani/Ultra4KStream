// Toggle mobile menu
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('show');
}

// Close menu when a link is clicked
document.querySelectorAll('.nav-links li a').forEach(link => {
  link.addEventListener('click', () => {
    document.getElementById('menu').classList.remove('show');
  });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
  const navbar = document.querySelector('.navbar');
  const menu = document.getElementById('menu');
  const burger = document.querySelector('.burger');
  
  if (!navbar.contains(e.target) && menu.classList.contains('show')) {
    menu.classList.remove('show');
  }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
