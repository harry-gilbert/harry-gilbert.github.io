// Script to enable nav interaction
// By Harry Gilbert, 2023

const buttons = document.getElementsByClassName("button");

// Add mousedown event listeners
for (let i = 0; i < buttons.length; i++) {
  ["mousedown","touchstart"].forEach( evt => {
    buttons[i].addEventListener(evt, function() {
      buttons[i].classList.add("button-pressed");
    });
  });
  ["mouseup","mouseout","touchend","touchcancel"].forEach( evt => {
    buttons[i].addEventListener(evt, function() {
      buttons[i].classList.remove("button-pressed");
    });
  });
}