'use strict'

// Elements
const root = document.querySelector(':root');
const nav = document.querySelector('.nav')
const header = document.querySelector('.header');

// Event listeners

// Nav bar - fade on hover

const handleHover = function (e, opacity) {
  if (e.target.classList.contains('nav-link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav-link');
    const logo = link.closest('.nav').querySelector('img');
    const images = link.closest('.nav').querySelectorAll('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
      logo.style.opacity = this;
    })

    images.forEach(img => {
      img.style.opacity = this;
    });
  }
}

nav.addEventListener('mouseover', handleHover.bind(0.5))
nav.addEventListener('mouseout', handleHover.bind(1))

// Return to top

document.getElementById('return-to-top').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});