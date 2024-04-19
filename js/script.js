'use strict'

// ui elements
const hamburger = document.querySelector('.hamburger');
const navUl = document.querySelector('.navbar-nav--navs')


hamburger.addEventListener('click', ()=> {
    if(navUl.classList.contains('d-none')) {
        navUl.style.display = ''
    }
})