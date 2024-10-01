const navEl = document.querySelector('.header__nav');
const burgerEl = document.querySelector('.menu-burger');

burgerEl.addEventListener('click' , () => {
    navEl.classList.toggle('header__nav--open')
    burgerEl.classList.toggle('burger--open')
});

navEl.addEventListener('click' , () => {
    navEl.classList.remove('header__nav--open')
    burgerEl.classList.remove('burger--open')
});