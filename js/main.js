'use strict';

const burgerOpenBtn = document.querySelector('.header-mobile-btn'),
  burger = document.querySelector('.burger'),
  burgerCloseBtn = document.querySelector('.burger-close-btn'),
  modal = document.querySelector('.modal-wrapper'),
  orderBtn = document.querySelector('.hero-cta-button'),
  modalCloseBtn = document.querySelector('.modal-close-btn');

burgerOpenBtn.addEventListener('click', () => {
  burger.classList.add('is-open');
});

burgerCloseBtn.addEventListener('click', () => {
  burger.classList.remove('is-open');
});

orderBtn.addEventListener('click', () => {
  modal.classList.add('is-open');
});

modalCloseBtn.addEventListener('click', () => {
  modal.classList.remove('is-open');
});
