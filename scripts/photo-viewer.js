// Script to enable viewing photos in fullscreen
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const PHOTOS = document.getElementsByClassName("photo");
const CAROUSEL = document.getElementsByClassName("carousel");
const CAROUSELL = CAROUSEL.length;
const PHOTOVIEWSCREEN = document.getElementsByClassName("photo-view-screen")[0];
const PHOTOMASKS = document.querySelectorAll(".carousel .photo-mask");
const PHOTOMASKSL = PHOTOMASKS.length;
const LOADINGSPINNER = document.getElementsByClassName("img-load-spinner")[0];

let insertImageIntoPhotoViewScreen = (image) => {
  PHOTOVIEWSCREEN.insertBefore(image, PHOTOVIEWSCREEN.children[0]);
}

// View photo in fullscreen
let viewPhoto = (e) => {
  let pictureElem = document.createElement('picture');
  pictureElem.classList.add("picture-view");
  let sourceElem = document.createElement('source');
  sourceElem.type = "image/webp";
  sourceElem.srcset = e.parentElement.firstElementChild.srcset.replace("/previews/", "/hi-res/");
  let imageElem = document.createElement('img');
  imageElem.classList = e.classList;
  imageElem.classList.add("photo-view");
  imageElem.src = e.src.replace("/previews/", "/hi-res/");
  imageElem.alt = e.alt;
  e.dataset.viewing = ''
  pictureElem.appendChild(sourceElem);
  pictureElem.appendChild(imageElem);
  if (imageElem.complete) {
    PHOTOVIEWSCREEN.classList.remove("o-none");
    insertImageIntoPhotoViewScreen(pictureElem);
    PHOTOVIEWSCREEN.focus();
  } else {
    LOADINGSPINNER.classList.remove("d-none", "o-none");
    PHOTOVIEWSCREEN.classList.remove("o-none");
    PHOTOVIEWSCREEN.focus();
    imageElem.addEventListener("load", function() {
      LOADINGSPINNER.classList.add("d-none", "o-none");
      insertImageIntoPhotoViewScreen(pictureElem);
    })
  }
}

// Stop viewing photo in fullscreen
let resetPhotoView = () => {
  PHOTOVIEWSCREEN.classList.add("o-none");
  PHOTOVIEWSCREEN.removeChild(PHOTOVIEWSCREEN.firstElementChild);
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