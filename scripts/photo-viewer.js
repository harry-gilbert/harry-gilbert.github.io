// Script to enable viewing photos in fullscreen
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const PHOTOS = document.getElementsByClassName("photo");
const CAROUSEL = document.getElementsByClassName("carousel");
const CAROUSELL = CAROUSEL.length;
const PHOTOVIEWSCREEN = document.getElementById("photo-view-screen");

// View photo in fullscreen
let viewPhoto = (e) => {
  let targetPhoto = e.cloneNode();
  e.dataset.viewing = ''
  targetPhoto.classList.add("photo-view");
  PHOTOVIEWSCREEN.appendChild(targetPhoto);
  PHOTOVIEWSCREEN.classList.remove("d-none");
  PHOTOVIEWSCREEN.focus();
}

// Stop viewing photo in fullscreen
let resetPhotoView = () => {
  PHOTOVIEWSCREEN.classList.add("d-none");
  PHOTOVIEWSCREEN.innerHTML = "";
  let newFocusTarget = document.querySelector('img[data-viewing]');
  newFocusTarget.focus()
  delete newFocusTarget.dataset.viewing
}

// Event listeners for viewing photos in fullscreen
for (let i = 0; i < PHOTOS.length; i++) {
  PHOTOS[i].addEventListener("click", function() {
    viewPhoto(this)
    this.blur();
  });
  PHOTOS[i].addEventListener("keydown", function(evt) {
    if (evt.code == "Enter") {
      viewPhoto(this)
      this.blur();
    }
  });
}
PHOTOVIEWSCREEN.addEventListener("click", resetPhotoView);
PHOTOVIEWSCREEN.addEventListener("keydown", function(evt) {
  if (evt.code == "Escape" || evt.code == "Tab" || evt.code == "Enter" ) {
    resetPhotoView();
  }
});


let checkScroll = (elem) => {

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

for (let i = 0; i < CAROUSELL; i++) {
  CAROUSEL[i].addEventListener("scroll", function() {
    checkScroll(this);
  })
}

// check scroll after page load
// (otherwise code runs before page renders)
window.onload = function() {
  for (let i = 0; i < CAROUSELL; i++) {
    checkScroll(CAROUSEL[i]);
  }
}