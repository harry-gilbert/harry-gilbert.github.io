// Script to enable viewing photos in fullscreen
// By Harry Gilbert, 2023

"use strict";

const photos = document.getElementsByClassName("photo");

let viewPhoto = (e) => {
  e.classList.toggle("photo-view");
}

// commenting out until UX has been designed
// for (let i = 0; i < photos.length; i++) {
//   photos[i].addEventListener("click", function() {
//     viewPhoto(this)
//   });
// }