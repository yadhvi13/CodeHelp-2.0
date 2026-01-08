function toggleMenu() {
      const navLinks = document.getElementById('navLinks');
      navLinks.classList.toggle('show');
    }
  

/* ===== SCROLL ANIMATION ===== */
const cards = document.querySelectorAll('.scroll-card');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, { threshold: 0.2 });

cards.forEach(card => observer.observe(card));

/* ===== 3D TILT + NEON FOLLOW ===== */
const tiltBox = document.getElementById('tiltBox');

tiltBox.addEventListener('mousemove', (e) => {
  const rect = tiltBox.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 2;
  const centerY = rect.height / 2;

  const rotateX = -(y - centerY) / 25;
  const rotateY = (x - centerX) / 25;

  tiltBox.style.transform = `
    rotateX(${rotateX}deg)
    rotateY(${rotateY}deg)
  `;

  tiltBox.style.boxShadow = `
    ${-rotateY * 2}px ${rotateX * 2}px 60px rgba(120,120,255,0.35),
    inset 0 0 40px rgba(255,0,150,0.15)
  `;
});

tiltBox.addEventListener('mouseleave', () => {
  tiltBox.style.transform = `rotateX(0deg) rotateY(0deg)`;
  tiltBox.style.boxShadow = `0 0 40px rgba(0,0,0,0.6)`;
});

