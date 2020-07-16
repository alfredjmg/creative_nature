let menu = document.getElementById('js-menu');
let downMenu = document.getElementById('js-down-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    downMenu.classList.toggle('active');
    menu.classList.toggle('active');
});