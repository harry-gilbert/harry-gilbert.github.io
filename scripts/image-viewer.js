// Script to handle image viewing on the photography page
// Built by Harry Gilbert, 2021

"use strict";

const images = document.getElementsByClassName("photo-cont");

const toggleImageView = (e) => {
    e.classList.toggle("photo-cont-view")
}

for (let i=0; i<images.length; i++) {
    images[i].addEventListener("click", function() {
        toggleImageView(images[i]);
    });
}