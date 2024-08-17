'use strict'

// Elements
const skillsList = document.querySelector(".skills-list");


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