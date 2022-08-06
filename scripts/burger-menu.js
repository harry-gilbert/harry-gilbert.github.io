// Script to handle burger menu functions and dark mode toggle
// Built by Harry Gilbert, 2021

"use strict";

const menuCont = document.getElementsByClassName("menu-container")[0];
const nav = document.getElementsByClassName("nav")[0];
const settings = document.getElementsByClassName("settings")[0];
const burger = document.getElementsByClassName("burger")[0];
const burgerLines = document.getElementsByClassName("burger-line");
const menuItems = document.getElementsByClassName("menu-items");
const lhStatus = document.getElementById("lh-status");
let settingsItems = document.querySelectorAll(".settings-items button");
const menuItemsFlexBox = document.getElementsByClassName("menu-items-flexbox")[0];
let transitionDur = getComputedStyle(document.documentElement).getPropertyValue('--hg-transition-duration');
transitionDur = transitionDur.replace("ms","");

const toggleMenu = () => {
    toggleMenuWidth();
    burgerLines[0].classList.toggle("burger-cross-first-line");
    burgerLines[1].classList.toggle("burger-cross-second-line");
    burgerLines[2].classList.toggle("burger-cross-third-line");
}

const toggleSettings = () => {
    if ( settings.classList.contains("menu-in-view")) {
        settings.classList.toggle("menu-in-view");
        setTimeout(function(){nav.classList.toggle("menu-in-view");}, transitionDur);
    } else {
        nav.classList.toggle("menu-in-view");
        setTimeout(function(){settings.classList.toggle("menu-in-view");}, transitionDur);
    }
}

const toggleMenuWidth = () => {
    if ( settings.classList.contains("menu-in-view")) {
        settings.classList.toggle("menu-in-view");
    } else {
        nav.classList.toggle("menu-in-view");
    };
}

const toggleHandedness = () => {
    menuCont.classList.toggle("menu-container-lh");
    menuItemsFlexBox.classList.toggle("menu-items-flexbox-lh");
    burger.classList.toggle("burger-lh");
    for (let i=0; i<menuItems.length; i++) {
        menuItems[i].classList.toggle("menu-items-lh");
        settingsItems[i].parentNode.appendChild(settingsItems[i]);
    };
    if ( lhStatus.innerHTML == "on" ) {
        lhStatus.innerHTML = "off";
        for (let i=0; i<settingsItems.length; i++) {
            settingsItems[i].parentNode.appendChild(settingsItems[i]);
        };
        localStorage.setItem("currentHandedness", "1");
        userHandedness = 1;
    } else {
        lhStatus.innerHTML = "on";
        for (let i=0; i<settingsItems.length; i++) {
            settingsItems[i].parentNode.insertBefore(settingsItems[i],settingsItems[i].parentNode.children[0]);
        };
        localStorage.setItem("currentHandedness", "0");
        userHandedness = 0;
    };
}

let userHandedness = Number(localStorage.getItem("currentHandedness"));
if ( userHandedness > 0 ) {
    toggleHandedness();
}

let startX = null;
let absDiffX = null;
const getStartPos = (e) => {
    startX = e.touches[0].clientX;
}

const swipeBurger = (e) => {
    let currentX = e.touches[0].clientX;
    let diffX = currentX - startX;
    if ( userHandedness > 0 && diffX < 0 || userHandedness == 0 && diffX > 0 ) {
        burger.style.transform = `translateX(${diffX}px)`;
        absDiffX = Math.abs(diffX);
    }
}

const toggleCheck = () => {
    if ( absDiffX > 40 ) {
        toggleHandedness();
    }
    burger.style.transform = `translateX(0)`
    startX  = null;
    absDiffX = null;
}