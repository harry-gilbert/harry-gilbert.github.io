// Script to enable interaction on work page
// By Harry Gilbert, 2023

"use strict";

// Declarations
const workArticles = document.getElementsByClassName("work-article");
const nav = document.getElementsByClassName("sub-page-nav")[0];
const hgMargin = getComputedStyle(document.documentElement).getPropertyValue('--hg-margin').replace("px","");
const animDur = getComputedStyle(document.documentElement).getPropertyValue('--hg-anim-dur').replace("s","") * 1000;

//Begin functions
let getHeightInt = (elem) => {
  return getComputedStyle(elem).height.replace("px","");
}

let toggleDividers = (dividers) => {
  for (let i = 0; i < dividers.length; i++) {
    dividers[i].classList.toggle("hidden");
  }
}

let isBelowViewArea = (el) => {
  let elemBottom = el.getBoundingClientRect().bottom;
  let navHeight = getHeightInt(nav);
  let viewAreaBottom = window.innerHeight - navHeight - hgMargin;

  let distBeyondViewArea = elemBottom - viewAreaBottom;

  return (distBeyondViewArea);
}

let toggleWorkInfo = (e) => {
  let dividers = e.getElementsByClassName("work-info-divider");
  let articleInfo = e.getElementsByClassName("work-article-info")[0]
  let articleInfoHeight = articleInfo.scrollHeight;
  let currentArticleInfoHeight = getComputedStyle(articleInfo).height.replace("px","");
  if (currentArticleInfoHeight == 0) {
    toggleDividers(dividers);
    e.getElementsByClassName("work-article-summary-arrow")[0].style.transform = "translateY(-50%) rotate(360deg)"
    setTimeout(() => {
      articleInfo.style["max-height"] = `${articleInfoHeight}px`;
      setTimeout(() => {
        let distBeyondViewArea = isBelowViewArea(articleInfo);
        if (distBeyondViewArea > 0) {
          articleInfo.scrollIntoView({behavior: "smooth", block: "center"});
          // scrollBy({top: distBeyondViewArea, behavior: "smooth"});
        }
      }, animDur);
    }, animDur);
  } else {
    articleInfo.style["max-height"] = "0";
    e.getElementsByClassName("work-article-summary-arrow")[0].style.transform = "translateY(-50%) rotate(180deg)"
    setTimeout(() => {
      toggleDividers(dividers);
    }, animDur);
  }
}

// Add click event listeners
for (let i = 0; i < workArticles.length; i++) {
  workArticles[i].addEventListener("click", function() {
    toggleWorkInfo(this)
  });
  workArticles[i].addEventListener("keydown", function(evt) {
    if (evt.code == "Enter") {
      toggleWorkInfo(this)
    }
  });
}