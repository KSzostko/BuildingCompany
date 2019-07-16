"use strict";

// nav
const btnMenu = document.querySelector('.navigation__button--js');
const menuList = document.querySelector('.navigation__list--js');

btnMenu.addEventListener('click', () => {
    menuList.classList.toggle('navigation__list--visible');
    btnMenu.classList.toggle('is-active');
});