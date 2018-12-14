let menuOpen = document.getElementsByClassName('menu-icon')[0];

menuOpen.addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menu')[0];
    let bodyLock = document.getElementsByClassName('body')[0];
    menu.classList.toggle('menu-open');
    bodyLock.classList.toggle('body-lock');
});