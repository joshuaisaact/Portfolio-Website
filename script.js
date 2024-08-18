'use strict'

// Elements
const root = document.querySelector(':root');
const skillsList = document.querySelector(".skills-list");
const overlay = document.querySelector('.modal-overlay');
const nav = document.querySelector('.nav')
const header = document.querySelector('.header');
const profileImg = document.querySelector('.profile-img')

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
];

// Colours array (eventually replaced with API)
const coloursArr = [
  '#3e4072',
  '#723e5a',
  '#72703e',
  '#563e72'
];

let currentColIndex = 0;

// Skills list image generator function (with animated fade in)

function generateSkillImages() {
  skillFiles.forEach((file, index) => {

    const img = document.createElement('img');

    Object.assign(img, {
      src: `media/skills/${file}`,
      alt: file.replace('.svg', ''),
      title: file.replace('.svg', ''),
      className: 'skills-icon'
    })

    const hoverText = document.createElement('span');
    hoverText.className = 'hover-text';
    hoverText.textContent = file.replace('.svg', '');


    img.style.animationDelay = `${index * 0.2}s`;

    skillsList.appendChild(img);
  })

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 3}s`;
        entry.target.classList.add('slide-in');
        observer.unobserve(entry.target); // Stop observing once the animation starts
      }
    });
  }, {
    threshold: 1 // Adjust as needed (0.1 means the element triggers when 10% is in view)
  });

  // Observe each skill icon
  document.querySelectorAll('.skills-icon').forEach(icon => {
    observer.observe(icon);
  });
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

  allSections.forEach(function (section) {
    section.classList.add('section-hidden');
  });

  const revealSection = function (entries, observer) {
    const [entry] = entries;
    console.log(entry)
    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section-hidden')
    observer.unobserve(entry.target);
  }

  const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.3,
  });


  allSections.forEach(function (section) {
    sectionObserver.observe(section);
  });
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

// Colour changing profile clicker

profileImg.addEventListener('click', function (e) {
  e.preventDefault();
  // profileImg.classList.add("start-bouncing");
  // document.querySelector('.splash-name').classList.add("start-bouncing");
  profileImg.classList.add("start-bouncing");
  const splashName = document.querySelector('.splash-name');
  splashName.classList.add("start-bouncing");


  root.style.setProperty('--color-primary', coloursArr[currentColIndex])
  currentColIndex++;
  if (currentColIndex >= coloursArr.length) {
    currentColIndex = 0
  }
})

profileImg.onanimationend = () => {
  profileImg.classList.remove("start-bouncing");
  document.querySelector(".splash-name").classList.remove("start-bouncing")
}