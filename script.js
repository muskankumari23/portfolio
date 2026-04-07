// script.js - Portfolio UI Enhancements

// Smooth scrolling for navbar links (fallback for older browsers)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    const targetId = link.getAttribute('href').substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Active section highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.4,
};
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href').substring(1) === id);
      });
    }
  });
}, observerOptions);
sections.forEach(sec => sectionObserver.observe(sec));

// Modal handling for certificates and project previews
const modal = document.getElementById('modal');
const modalFrame = document.getElementById('modal-frame');
const closeBtn = document.querySelector('.close-btn');

function openModal(url) {
  modalFrame.src = url;
  modal.classList.add('show');
  modal.classList.remove('hidden');
}
function closeModal() {
  modal.classList.remove('show');
  modal.classList.add('hidden');
  modalFrame.src = '';
}

// Certificate view buttons
document.querySelectorAll('.view-cert').forEach(btn => {
  btn.addEventListener('click', () => {
    const url = btn.getAttribute('data-url');
    openModal(url);
  });
});

// Close modal on overlay click or close button
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Fade‑in animation on scroll using IntersectionObserver
const fadeElems = document.querySelectorAll('.section, .card, .cert-card');
const fadeObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });
fadeElems.forEach(el => fadeObserver.observe(el));

// Add basic fade‑in CSS via JS (in case not defined)
const style = document.createElement('style');
style.textContent = `
  .fade-in { opacity: 0; transform: translateY(20px); animation: fadeIn 0.6s forwards; }
  @keyframes fadeIn { to { opacity: 1; transform: translateY(0); } }
`;
document.head.appendChild(style);
