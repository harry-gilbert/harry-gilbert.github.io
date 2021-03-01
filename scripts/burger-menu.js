// Script to handle burger menu functions and dark mode toggle
// Built by Harry Gilbert, 2021

"use strict";

const nav = document.getElementById("nav");
const settings = document.getElementById("settings");
const burger = document.getElementById("burger");
const burgerLines = document.getElementsByClassName("burger-line");

const toggleMenu = () => {
    if ( settings.classList.contains("menu-wipe")) {
        resetMenu();
    }
    nav.classList.toggle("menu-fade");
    nav.classList.toggle("menu-wipe");
    burgerLines[0].classList.toggle("burger-cross-first-line");
    burgerLines[1].classList.toggle("burger-cross-second-line");
    burgerLines[2].classList.toggle("burger-cross-third-line");
}

const toggleSettings = () => {
    if ( settings.classList.contains("menu-wipe")) {
        resetMenu();
    } else {
        nav.classList.toggle("menu-fade");
        settings.classList.toggle("menu-fade");
        let navWidth = nav.clientWidth + 10;
        nav.style.left = `-${navWidth}px`;
        settings.style.left = `-${navWidth}px`;
        settings.classList.toggle("menu-wipe");
    }
    
}

const resetMenu = () => {
    nav.classList.toggle("menu-fade");
    settings.classList.toggle("menu-fade");
    settings.classList.toggle("menu-wipe");
    nav.style.left = "0";
    settings.style.left = "0";
}
