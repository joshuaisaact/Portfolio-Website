'use strict'

// Elements
const root = document.querySelector(':root');
const skillsList = document.querySelector(".skills-list");
const overlay = document.querySelector('.modal-overlay');
const nav = document.querySelector('.nav')
const header = document.querySelector('.header');
const profileImg = document.querySelector('.profile-img')
const globalOverlay = document.querySelector('.global-overlay')

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

// Projects array (eventually replaced with DB)

const projects = [
  {
    imageSrc: './media/projects/streamshuffle.jpg',
    imageAlt: 'Stream Shuffle logo',
    title: 'Stream Shuffle',
    projectLink: 'https://joshuaisaact.github.io/StreamShuffle/',
    githubLink: 'https://github.com/joshuaisaact/StreamShuffle',
    skills: ['Express', 'Node', 'Javascript'],
    description: 'My first ever full-stack project, serving a random film to stream from UK streaming services using the TMDB API',
    fullDescription: [
      '<p>A static website built to practise using async fetch API within Javascript, and to practise working with an API key to filter and manipulate JSON files.</p>',
      '<p>The website interacts with an express.js server hosted on Render that contains a private API key, that it uses to redirect data to the client.</p>',
      '<p>The TMDB API doesn\'t let ypu filter by films available on UK streaming services, so data manipulation was required to introduce this new functionality</p>'
    ]
  },
  {
    imageSrc: './media/blog/bratquiz.png',
    imageAlt: 'brat image',
    title: 'Brat quiz',
    projectLink: 'https://joshuaisaact.github.io/bratQuiz/',
    githubLink: 'https://github.com/joshuaisaact/bratQuiz',
    skills: ['HTML', 'CSS', 'Javascript'],
    description: 'An interactive binary-choice quiz website I made to learn CSS and Javascript, based off Charli XCX\'s brat album.',
    fullDescription: [
      '<p>A brat-themed quiz created using HTML, CSS, and JavaScript. I wanted to build something that would not only help me sharpen my coding skills but also something my friends would enjoy interacting with.</p>',
      '<p>I started with the basics in Javascript, setting up the structure of the quiz. My focus was on making it user-friendly and straightforward, ensuring that each question was clear and easy to navigate. This provided a solid foundation for the project. Next, I used CSS to bring the quiz to life visually - the style of "brat" is very forgiving, so this didn\'t take me long!</p>',
      '<p>The aim was to make the quiz visually appealing without overwhelming the user — clean, modern, and in line with the "brat" theme.</p>',
      '<p>It served as a practical project to solidify my understanding of HTML, CSS, and JavaScript, while also being a fun and unique way to showcase what I’ve learned.</p>'
    ]
  },
]

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

// Project box generator function

function createProjectBox(projectData) {
  const projectBox = document.createElement('div');
  projectBox.className = "project-box";
  projectBox.innerHTML = `<img
  src = "${projectData.imageSrc}"
  height = "195px"
  width = "300px"
  alt = "${projectData.imageAlt}"
  class = "project-img-preview"
    />
            <a href="${projectData.projectLink}"
              ><h3>${projectData.title}</h3></a
            >
            <div class="project-text">
              <ul class="project-skills">
                <li>${projectData.skills[0]}</li>
                <li>${projectData.skills[1]}</li>
                <li>${projectData.skills[2]}</li>
              </ul>
              <p class="project-headline-desc">
                ${projectData.description}
              </p>
            </div>
            <div class="project-modal hidden">
              <div class="project-modal-content">
                <button class="close-btn">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="none" stroke="var(--color-primary)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"><line x1="30" y1="30" x2="70" y2="70"></line> <line x1="70" y1="30" x2="30" y2="70"></line></svg>
                </button>
                <img src="${projectData.imageSrc}" alt="${projectData.imageAlt}" class="img-modal"/>
                <ul class="project-skills">
                <li>${projectData.skills[0]}</li>
                <li>${projectData.skills[1]}</li>
                <li>${projectData.skills[2]}</li>
                </ul>
                <div class="project-links">
                  <a href="${projectData.githubLink}" class="btn"
                    >Github</a
                  >
                  <a href="${projectData.projectLink}" class="btn"
                    >Visit Site</a
                  >
                </div>
                <div class="project-text-full">
                  ${projectData.fullDescription.join("")}
                </div>
              </div>
            </div>
            <div class="info-btn">
              <button class="btn">Learn More</button>
            </div>`

  document.querySelector('.project-grid').appendChild(projectBox);

}

projects.forEach(createProjectBox);


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
    globalOverlay.classList.remove('hidden')
    projectModal.classList.remove('hidden')
    overlay.classList.remove('hidden');
  });
});

document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', function () {
    const projectBox = this.closest('.project-box');
    const projectModal = projectBox.querySelector('.project-modal')
    globalOverlay.classList.add('hidden')
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