// Script to handle kinetic typing feature
// Built by Harry Gilbert, 2021

"use strict";

async function typeInCont() {
    let elems = document.getElementsByClassName("typingElem");
    for (let i=0; i<elems.length; i++) {
        let copy = elems[i].dataset.toType;
        let comedyError = elems[i].dataset.typeError;
        if (comedyError) {
            let matchCount = 0;
            let copyRemaining;
            for (let a=0; a<copy.length; a++) {
                if ( copy[a] == comedyError[a] ) {
                    //console.log(`comparing ${copy[a]} & ${comedyError[a]}`);
                    matchCount++;
                } else {
                    break;
                };
            };
            if ( matchCount == 0) copyRemaining = copy;
            else copyRemaining = copy.slice(matchCount);
            await typeChars(elems[i], comedyError);
            await removeChars(elems[i], matchCount);
            await typeChars(elems[i], copyRemaining);
        } else {
            typeChars(elems[i], copy);
        };
    };
}

let typeChars = (element, text) => {
    return new Promise((resolve,reject)=>{
        let count = 0;
        let interval = 100;
        setTimeout(function loop(){
            element.innerHTML += text[count];
            count++;
            if (count >= text.length) {resolve(); return;};
            setTimeout(loop, interval);
        }, interval);
    });
}

let removeChars = (element, matchCount) => {
    return new Promise((resolve,reject)=>{
        setTimeout(function holdup() {
            let interval = 100;
            setTimeout(function loop(){
                element.innerHTML = element.innerHTML.slice(0, -1);
                if (element.innerHTML.length == matchCount) {resolve(); return;};
                setTimeout(loop, interval);
            }, interval);
        }, 400);
    });
}