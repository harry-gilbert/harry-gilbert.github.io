// Script to enable nav interaction
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const BUTTONS = document.getElementsByClassName("button");

let pressIntoRedShadow = (e) => {
  e.classList.add("red-shadow-pressed");
}

let unpressOutOfRedShadow = (e) => {
  e.classList.remove("red-shadow-pressed");
}

// Add event listeners
for (let i = 0; i < BUTTONS.length; i++) {
  ["mousedown","touchstart"].forEach( evt => {
    BUTTONS[i].addEventListener(evt, function() {
      pressIntoRedShadow(BUTTONS[i]);
    }, {passive: true});
  });
  BUTTONS[i].addEventListener("keydown", function(evt) {
    if (evt.code == "Enter") {
      pressIntoRedShadow(BUTTONS[i]);
    }
  });
  ["mouseup","mouseout","touchend","touchcancel"].forEach( evt => {
    BUTTONS[i].addEventListener(evt, function() {
      unpressOutOfRedShadow(BUTTONS[i]);
    });
  });
}