const body = document.querySelector('body');
const header = document.querySelector('.header');
const header_logo = document.querySelector('.header__logo');
const btnHamburger = document.querySelector('#btnHamburger');
const overlay = document.querySelector('.overlay');
const hamburgerMenu = document.querySelector('.hamburger__menu');

btnHamburger.addEventListener('click', function() {
    console.log('btnHamburger_clicked');
    if(header.classList.contains('open')) {
        overlay.classList.add('has-fade');
        hamburgerMenu.classList.add('has-fade');

        body.classList.remove('no-scroll');
        header_logo.classList.remove('has-fade');
        header.classList.remove('open');
    }
    else {
        overlay.classList.remove('has-fade');
        hamburgerMenu.classList.remove('has-fade');

        body.classList.add('no-scroll');
        header_logo.classList.add('has-fade');
        header.classList.add('open');
    }
})