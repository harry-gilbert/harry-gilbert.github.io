// Script to enable interaction on work page
// By Harry Gilbert, 2023

"use strict";

// Variable declarations
const WORKARTICLES = document.getElementsByClassName("work-article");
const WORKARTICLESL = WORKARTICLES.length;
const NAV = document.getElementsByClassName("sub-page-nav")[0];
const HGMARGIN = getComputedStyle(document.documentElement).getPropertyValue('--hg-margin').replace("px","");
const ANIMDUR = getComputedStyle(document.documentElement).getPropertyValue('--hg-anim-dur').replace("s","") * 1000;

// Get height integer
let getHeightInt = (elem) => {
  return getComputedStyle(elem).height.replace("px","");
}

// toggle hide/show on dividers
let toggleDividers = (dividers) => {
  let dividersL = dividers.length;
  for (let i = 0; i < dividersL; i++) {
    dividers[i].classList.toggle("hidden");
  }
}

// Take element as input, return distance of element’s bottom edge beyond viewable area
let isBelowViewArea = (el) => {
  let elemBottom = el.getBoundingClientRect().bottom;
  let navHeight = getHeightInt(NAV);
  let viewAreaBottom = window.innerHeight - navHeight - HGMARGIN;
  let distBeyondViewArea = elemBottom - viewAreaBottom;
  return (distBeyondViewArea);
}

// Toggle show/hide feature of work page articles
let toggleWorkInfo = (element) => {
  // store article dividers in var
  let dividers = element.getElementsByClassName("work-info-divider");

  // store article contents in var
  let articleInfo = element.getElementsByClassName("work-article-info")[0];

  // store article’s true height in var
  let articleInfoHeight = articleInfo.scrollHeight;

  // store article’s current height in var
  let currentArticleInfoHeight = getComputedStyle(articleInfo).height.replace("px","");

  // if article info is hidden
  if (currentArticleInfoHeight == 0) {
    // toggle divider visibility
    toggleDividers(dividers);

    // after animation duration, do the following:
    setTimeout(() => {

      // set article max height
      articleInfo.style["max-height"] = `${articleInfoHeight}px`;

      // spin summary arrow
      element.getElementsByClassName("work-article-summary-arrow")[0].style.transform = "translateY(-50%) rotate(360deg)";

      // after animation duration, do the following:
      setTimeout(() => {

        // get distance beyond viewable area
        let distBeyondViewArea = isBelowViewArea(articleInfo);

        // if distance beyond viewable area is a positive number:
        if (distBeyondViewArea > 0) {

          // scroll into view
          articleInfo.scrollIntoView({behavior: "smooth", block: "center"});
          // scrollBy({top: distBeyondViewArea, behavior: "smooth"});
        }
      }, ANIMDUR);
    }, ANIMDUR);
  } else {
    articleInfo.style["max-height"] = "0";
    element.getElementsByClassName("work-article-summary-arrow")[0].style.transform = "translateY(-50%) rotate(180deg)";
    setTimeout(() => {
      toggleDividers(dividers);
    }, ANIMDUR);
  }
}

// Add event listeners
for (let i = 0; i < WORKARTICLESL; i++) {
  WORKARTICLES[i].addEventListener("click", function() {
    toggleWorkInfo(this);
  });
  WORKARTICLES[i].addEventListener("keydown", function(evt) {
    if (evt.code == "Enter") {
      toggleWorkInfo(this);
    }
  });
}


// toggle divider visibility
// when animation is finished:
  // toggle article visibility