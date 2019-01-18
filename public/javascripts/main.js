let menuOpen = document.getElementsByClassName('menu-icon')[0];
let modalOpen = document.getElementsByClassName('item-min__button')[0];
let messageSend = document.getElementsByClassName('modal__button-send')[0];
let addBasket = document.getElementsByClassName('item__column2-button')[0];
let countPlus = document.getElementsByClassName('item__column2-count-plus')[0];
let countMinus = document.getElementsByClassName('item__column2-count-minus')[0];
let basket = document.getElementsByClassName('nav__basket')[0];

basket.addEventListener('click', function (event) {

    let productInBasket = [];
    for (let i = 0; i< localStorage.length; i++) {

        let productId = localStorage.key(i);
        let productCount = localStorage.getItem(localStorage.key( i ));


        productInBasket.push({id: productId, count:productCount});

    }
    console.log(productInBasket);

});

countPlus.addEventListener('click', function (event) {
    let number= document.getElementsByClassName('item__column2-count-number')[0];
    let res = Number(number.value) + 1;
    number.value = res;
});

countMinus.addEventListener('click', function (event) {
    let number= document.getElementsByClassName('item__column2-count-number')[0];
    if (Number(number.value) > 1) {
        let res = Number(number.value) - 1;
        number.value = res;
    }
});

addBasket.addEventListener('click', function (event) {
    let productId = document.getElementsByClassName('item')[0].dataset.productid;
    let countProduct = document.getElementsByClassName('item__column2-count-number')[0];

    localStorage.setItem( productId, countProduct.value);
});

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


    let modalWindow = document.getElementsByClassName('modal')[0];
    modalWindow.classList.toggle('modal__visible');

    shadow.onclick = function () {
        shadow.parentNode.removeChild(shadow);
        modalWindow.classList.remove('modal__visible');
        return false;
    };

    let modalCancel = document.getElementsByClassName('modal__button-cancel')[0];
    modalCancel.onclick = function () {
        shadow.parentNode.removeChild(shadow);
        modalWindow.classList.remove('modal__visible');
        return false;
    };

});

messageSend.addEventListener('click', function (event) {
    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let data = JSON.stringify({name: name, phone: phone});

    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/create_order');
    xhr.setRequestHeader('Content-type', 'application/json');
    xhr.send(data);
});

