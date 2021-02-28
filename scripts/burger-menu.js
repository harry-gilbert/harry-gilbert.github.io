// Script to handle burger menu functions and dark mode toggle
// Built by Harry Gilbert, 2021

"use strict";

const nav = document.getElementById("nav");
const settings = document.getElementById("settings");
const burger = document.getElementById("burger");
const burgerLines = document.getElementsByClassName("burger-line");

const dmStatus = document.getElementById("dark-mode-status");
const lmBackground = getComputedStyle(document.documentElement).getPropertyValue('--hg-lm-bg');
const lmText = getComputedStyle(document.documentElement).getPropertyValue('--hg-lm-text');
const lmTextActive = getComputedStyle(document.documentElement).getPropertyValue('--hg-lm-text-active');
const lmAccent = getComputedStyle(document.documentElement).getPropertyValue('--hg-lm-accent');
const dmBackground = getComputedStyle(document.documentElement).getPropertyValue('--hg-dm-bg');
const dmText = getComputedStyle(document.documentElement).getPropertyValue('--hg-dm-text');
const dmTextActive = getComputedStyle(document.documentElement).getPropertyValue('--hg-dm-text-active');
const dmAccent = getComputedStyle(document.documentElement).getPropertyValue('--hg-dm-accent');

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

const toggleDM = () => {
    if ( dmStatus.innerHTML == "on" ) {
        dmStatus.innerHTML = "off";
        document.documentElement.style.setProperty('--hg-dm-bg', lmBackground);
        document.documentElement.style.setProperty('--hg-dm-text', lmText);
        document.documentElement.style.setProperty('--hg-dm-text-active', lmTextActive);
        document.documentElement.style.setProperty('--hg-dm-accent', lmAccent);
        localStorage.setItem("currentMode", "lm");
    } else {
        dmStatus.innerHTML = "on";
        document.documentElement.style.setProperty('--hg-dm-bg', dmBackground);
        document.documentElement.style.setProperty('--hg-dm-text', dmText);
        document.documentElement.style.setProperty('--hg-dm-text-active', dmTextActive);
        document.documentElement.style.setProperty('--hg-dm-accent', dmAccent);
        localStorage.setItem("currentMode", "dm");
    }
}

let currentMode = localStorage.getItem("currentMode");
console.log(currentMode);
if ( currentMode == "lm" ) {
    toggleDM();
}

const goToURL = (target) => {
    window.open(target, '_blank');
}