// Script to handle kinetic typing feature
// Built by Harry Gilbert, 2021

"use strict";

const typeInCont = () => {
    let elems = document.getElementsByClassName("typingElem");
    for (let i=0; i<elems.length; i++) {
        let copy = elems[i].dataset.toType;
        let count = 0;
        let interval = 100;
        setTimeout(function loop(){
            elems[i].innerHTML += copy[count];
            count++;
            if (count >= copy.length) return;
            setTimeout(loop, interval);
        }, interval);
    }
}