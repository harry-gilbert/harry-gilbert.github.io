// Script to enable nav interaction
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const BUTTONS = document.getElementsByClassName("button");

// Add event listeners
for (let i = 0; i < BUTTONS.length; i++) {
  ["mousedown","touchstart"].forEach( evt => {
    BUTTONS[i].addEventListener(evt, function() {
      BUTTONS[i].classList.add("button-pressed");
    });
  });
  BUTTONS[i].addEventListener("keydown", function(evt) {
    if (evt.code == "Enter") {
      BUTTONS[i].classList.add("button-pressed");
    }
  });
  ["mouseup","mouseout","touchend","touchcancel"].forEach( evt => {
    BUTTONS[i].addEventListener(evt, function() {
      BUTTONS[i].classList.remove("button-pressed");
    });
  });
}