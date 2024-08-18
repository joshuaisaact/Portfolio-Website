'use strict'

// Elements
const skillsList = document.querySelector(".skills-list");
const overlay = document.querySelector('.modal-overlay');
const nav = document.querySelector('.nav')
const header = document.querySelector('.header');


// Skills array (will eventually replace with fetch API)
const skillFiles = [
  'html5.svg',
  'css3.svg',
  'javascript.svg',
  'nodejs.svg',
  'express.svg',
  'npm.svg',
  'postgresql.svg',
  'github.svg',
  'git.svg'
]


// Skills list image generator function

function generateSkillImages() {
  skillFiles.forEach(file => {

    const img = document.createElement('img');

    Object.assign(img, {
      src: `media/skills/${file}`,
      alt: file.replace('.svg', ''),
      title: file.replace('.svg', ''),
      className: 'skills-icon'
    })

    skillsList.appendChild(img);
  })
}

generateSkillImages();

// Event listeners

// Nav bar shortcuts - smooth scrolling

document.querySelector('.nav-menu').addEventListener('click', function (e) {
  e.preventDefault()
  let targetElement = e.target;
  console.log(e.target.parentElement)
  //Matching strategy
  if (e.target.classList.contains('nav-link')) {
    const id = e.target.getAttribute('href')
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' })
  } else {
    const href = e.target.parentElement.getAttribute('href');
    window.location.href = href;
  }
})

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

// Reveal sections
document.addEventListener('DOMContentLoaded', function () {
  const allSections = document.querySelectorAll('.section')


  const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry)
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target);
  }

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.5,
  });


  allSections.forEach(function (section) {
    sectionObserver.observe(section);
    section.classList.add('section-hidden');
  })
});
// Project modal pop-ups

document.querySelectorAll('.info-btn .btn').forEach(button => {
  button.addEventListener('click', function () {
    const projectBox = this.closest('.project-box');
    const projectModal = projectBox.querySelector('.project-modal')
    projectModal.classList.remove('hidden')
    overlay.classList.remove('hidden');
  });
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function () {
    const projectBox = this.closest('.project-box');
    const projectModal = projectBox.querySelector('.project-modal')
    projectModal.classList.add('hidden');
    overlay.classList.add('hidden');
  });
});
