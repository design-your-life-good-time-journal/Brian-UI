//makes 'hamburger' menu button clickable and changeable
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

//makes close button on modal clickable
const modalMenuButton = document.querySelector('.modal-menu-btn');
const loginBox = document.querySelector('.login-box');

//makes login button open modal
const loginButton = document.querySelector('.open-login-modal');

//menu section does stuff
//initial state of menu is hidden
let showMenu = false;

//event listener for mobile friendly menu
menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');
    navItems.forEach(item => item.classList.add('show'));
    showMenu = true;
    console.log('close menu active');
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));
    showMenu = false;
    console.log('open menu active');
  }
}

//login click event handler
modalMenuButton.addEventListener('click', closeModal);
loginButton.addEventListener('click', openModal);

function closeModal() {
  loginBox.classList.remove('show');
  console.log('closed modal');
}

function openModal() {
  loginBox.classList.add('show');
  console.log('opened modal');
}
