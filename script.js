const typingElement = document.getElementById('typing');
const text = "Hi I'm Ritik";
let idx = 0;

function typeWriter() {
  if (idx < text.length) {
    typingElement.innerHTML += text.charAt(idx);
    idx++;
    setTimeout(typeWriter, 150);
  }
}
typeWriter();
const menuToggle = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('side-menu');

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation(); // Prevent the click event from bubbling up
  sideMenu.classList.toggle('open');
});

// Close menu if click anywhere outside the menu or hamburger icon
document.addEventListener('click', (e) => {
  // If click is outside sideMenu and menuToggle, close menu
  if (!sideMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    sideMenu.classList.remove('open');
  }
});
