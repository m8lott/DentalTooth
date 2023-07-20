'use strict'

let hamburger = document.querySelector('.header__hamburger');
let menu = document.querySelector('.header__mobile-menu');
let close = document.querySelector('.header__mobile-menu-close');
let links = document.querySelectorAll('.header__mobile-menu-nav-link');


hamburger.addEventListener('click', () => {
menu.classList.add('active');
})
close.addEventListener('click', () => {
  menu.classList.remove('active');
})

for (let link of links) {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  })
}