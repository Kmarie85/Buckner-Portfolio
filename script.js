const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.getElementById('mobileMenu');
const menuClose = document.querySelector('.menu-close');
const mobileLinks = document.querySelectorAll('.mobile-menu a');

function openMenu() {
  mobileMenu.hidden = false;
  document.body.style.overflow = 'hidden';
  menuToggle?.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
  mobileMenu.hidden = true;
  document.body.style.overflow = '';
  menuToggle?.setAttribute('aria-expanded', 'false');
}

menuToggle?.addEventListener('click', openMenu);
menuClose?.addEventListener('click', closeMenu);
mobileLinks.forEach(link => link.addEventListener('click', closeMenu));

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !mobileMenu.hidden) {
    closeMenu();
  }
});
