// ScrollReveal animations
ScrollReveal().reveal('.home-text', { delay: 200, distance: '50px', origin: 'bottom' });
ScrollReveal().reveal('.about-content', { delay: 300, distance: '50px', origin: 'left' });
ScrollReveal().reveal('.skill-bars', { delay: 400, distance: '50px', origin: 'right' });
ScrollReveal().reveal('.project-card', { delay: 200, interval: 150 });
ScrollReveal().reveal('.contact form', { delay: 300, origin: 'bottom' });

// Contact form
document.getElementById("contactForm").addEventListener("submit", e => {
  e.preventDefault();
  alert("Message sent successfully! Thank you for reaching out.");
  e.target.reset();
});