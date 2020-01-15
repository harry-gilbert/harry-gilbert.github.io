//Script to handle stylesheet loading and navigation functions

"use strict";

//const and let declarations
const topBun = document.getElementById('topBun');
const botBun = document.getElementById('botBun');
const filler = document.getElementById('filler');
const navButton = document.getElementById('burgerCont');
const nav = document.getElementsByTagName('nav')[0];
const mobBanner = document.getElementsByClassName("mobBanner")[0];
const layoutIcon = document.getElementById('layoutIcon');
const stylesheet = document.getElementById('stylesheet');
let blueStyle = '';
let redStyle = '';
let homepage = '';
const indexCheck = document.body.getAttribute("data-index");

//function to assign stylesheet relative URLs to variables
const setStylePaths = () => {
  if (indexCheck) {
    blueStyle = 'stylesheets/stylesheetBlue.css';
    redStyle = 'stylesheets/stylesheetRed.css';
    homepage = 'index.html';
  } else {
    blueStyle = '../stylesheets/stylesheetBlue.css';
    redStyle = '../stylesheets/stylesheetRed.css';
    homepage = '../index.html';
  }
}

//the following two functions handle stylesheet loading and sessionStorage
const setBlueStyle = () => {
  stylesheet.setAttribute("href", blueStyle);
  sessionStorage.setItem("currentStyle", "blue");
};

const setRedStyle = () => {
  stylesheet.setAttribute("href", redStyle);
  sessionStorage.setItem("currentStyle", "red");
}

//function to handle navigation showing and hiding
const navToggle = () => {
  mobBanner.classList.toggle("mobBannerHidden");
  topBun.classList.toggle("topBunCross");
  filler.classList.toggle("fillerCross");
  botBun.classList.toggle("botBunCross");
  botBun.classList.toggle("botBun");
  nav.classList.toggle("navShow");
};

//function to swap stylesheets according to current stylesheet at time of calling
const swapStyle = () => {
  let currentStyle = sessionStorage.getItem("currentStyle");
  if ( currentStyle == "blue" ) {
    setRedStyle();
  } else {
    setBlueStyle();
  }
  window.location.assign(homepage);
};

const loadCurrentStyle = () => {
  let currentStyle = sessionStorage.getItem("currentStyle");
  if ( currentStyle != null && currentStyle == "blue" ) {
    setBlueStyle();
  } else {
    setRedStyle();
  };
};

//function calls to set stylesheet file paths and set stylesheet on page load
setStylePaths();
loadCurrentStyle();

//area to add event listeners
navButton.addEventListener("click", navToggle);
layoutIcon.addEventListener("click", function() {
  swapStyle();
  navToggle();
});

const dolbyIcon = document.getElementsByClassName("dolbyTab")[0];
const dmuIcon = document.getElementsByClassName("dmuTab")[0];
const incIcon = document.getElementsByClassName("incTab")[0];
const moreIcon = document.getElementsByClassName("moreTab")[0];
const iconArray = [dolbyIcon, dmuIcon, incIcon, moreIcon];

const toggleTabBody = (data, dataTab) => {
  if (mobBanner.style.display == '') {
    document.getElementsByClassName(dataTab)[0].classList.toggle("folderTabRaised");
  };
  document.getElementById(data).classList.toggle("folderTabsHidden");
};


const arrayEventListeners = () => {
  for (let i = 0; i < iconArray.length; i++) {
    let tabIcon = iconArray[i];
    tabIcon.addEventListener("click", function() {
      let tabCoords = tabIcon.getBoundingClientRect();
      let tabYPos = tabCoords.top;
      let bannerHeight = mobBanner.clientHeight;
      let scrollToY = tabYPos - bannerHeight;
      setTimeout( function(){
        window.scrollTo(0, scrollToY);
      }, 400);
      let data = this.getAttribute("data-exp");
      let dataTab = this.getAttribute("data-expTab");
      toggleTabBody(data, dataTab);
    });
  };
};

arrayEventListeners();
