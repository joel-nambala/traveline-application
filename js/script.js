'use strict';

// Select DOM elements
const containerLinks = document.querySelector('.links-container');
const navLinks = document.querySelectorAll('.nav-link');
const navigationList = document.querySelector('.navigation__list');
const navigationMenu = document.querySelector('.navigation__menu');
const header = document.getElementById('header');
const topLink = document.querySelector('.top-link');
const copyrightYear = document.querySelector('.copyright-year');

////////////////////////////////////////////////////
// Init function
const init = function () {
  const today = new Date();

  const copyYear = today.getFullYear();

  copyrightYear.textContent = copyYear;
};

init();

//////////////////////////////////////////////////////
// Responsive navigation bar
const responsiveNav = function () {
  // 1. Calculate the heigths
  const navHeight = navigationList.getBoundingClientRect().height;
  const containerHeight = containerLinks.getBoundingClientRect().height;

  // 2. Manipulate the heights
  if (containerHeight === 0) containerLinks.style.height = `${navHeight}px`;
  else containerLinks.style.height = 0;
};

navigationMenu.addEventListener('click', responsiveNav);

///////////////////////////////////////////////////////
// Smooth scroll
navLinks.forEach(function (links) {
  links.addEventListener('click', function (e) {
    // 1. Prevent default behaviour
    e.preventDefault();

    // 2. Get the target element
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

    // 3. Calculate the heights
    const containerHeight = containerLinks.getBoundingClientRect().height;
    const navHeight = navigationList.getBoundingClientRect().height;

    // 4. Calculate the position of the element
    let position = element.offsetTop - navHeight;

    // if (navHeight > 82) position = position + containerHeight;

    // 5. Window scroll event
    window.scrollTo({
      left: 0,
      top: position,
    });

    containerLinks.style.height = 0;
  });
});

////////////////////////////////////////////////////
// Window event listener
const windowScroll = function () {
  // 1. Get the heights of the elements
  const headerHeight = header.getBoundingClientRect().height;
  const scrollHeight = window.scrollY;

  if (scrollHeight > headerHeight) topLink.style.opacity = 1;
  else topLink.style.opacity = 0;
};

window.addEventListener('scroll', windowScroll);
