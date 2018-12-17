let menuOpen = document.getElementsByClassName('menu-icon')[0];
let modalOpen = document.getElementsByClassName('item-min__button')[0];
let modalCancel = document.getElementsByClassName('form__button-cancel')[0];



menuOpen.addEventListener('click', function (event) {
    let menu = document.getElementsByClassName('menu')[0];
    let bodyLock = document.getElementsByClassName('body')[0];
    menu.classList.toggle('menu-open');
    bodyLock.classList.toggle('body-lock');
});

modalOpen.addEventListener('click', function (event) {
    let shadow = document.createElement('div');
    shadow.id = 'shadow';
    document.body.appendChild(shadow);

    let modalWindow = document.getElementsByClassName('modal__form')[0];
    modalWindow.classList.toggle('modal__visible');

    shadow.onclick = function () {  // при клике на слой затемнения все исчезнет
        shadow.parentNode.removeChild(shadow); // удаляем затемнение
        modalWindow.classList.remove('modal__visible');
        return false;
    };

});

modalCancel.addEventListener('click', function (event) {
    let modalWindow = document.getElementsByClassName('modal__form')[0];
    modalWindow.classList.remove('modal__visible');
});
