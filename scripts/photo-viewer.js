// Script to enable viewing photos in fullscreen
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const PHOTOS = document.getElementsByClassName("photo");
const PHOTOCONTAINERS = document.getElementsByClassName("photo-container");
const PHOTOCONTAINERSL = PHOTOCONTAINERS.length;
const PHOTOVIEWSCREEN = document.getElementById("photo-view-screen");

// Resize photo to fullscreen
let viewPhoto = (e) => {
  e.classList.toggle("photo-view");
}

// commenting out until UX has been designed
for (let i = 0; i < PHOTOS.length; i++) {
  PHOTOS[i].addEventListener("click", function() {
    viewPhoto(this)
    PHOTOVIEWSCREEN.classList.toggle("d_none");
  });
}


let checkScroll = (elem) => {

  // console.log(`scrollWidth:${elem.scrollWidth} - clientWidth:${elem.clientWidth} = ${elem.scrollWidth - elem.clientWidth}\nscrollLeft:${elem.scrollLeft}`);

  // if before scroll end:
  if (elem.scrollLeft < (elem.scrollWidth - elem.clientWidth - 1)) {
    elem.parentElement.dataset.inFromRight = '';
  } else {
    delete elem.parentElement.dataset.inFromRight;
  }

  // if after scroll start:
  if (elem.scrollLeft > 0) {
    elem.parentElement.dataset.inFromLeft = '';
  } else {
    delete elem.parentElement.dataset.inFromLeft;
  }
}

for (let i = 0; i < PHOTOCONTAINERSL; i++) {
  PHOTOCONTAINERS[i].addEventListener("scroll", function() {
    checkScroll(this);
  })
}

// check scroll after page load
// (otherwise code runs before page renders)
window.onload = function() {
  for (let i = 0; i < PHOTOCONTAINERSL; i++) {
    checkScroll(PHOTOCONTAINERS[i]);
  }
}