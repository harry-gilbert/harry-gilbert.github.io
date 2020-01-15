// Script to handle iframe creation and implementation

//const and let declarations
const pageBody = document.getElementById('incidentsBody');
const importCont = document.getElementById('importIframeContent');
let roseGoldSRC = "SuVJ-6oMLZk";
let blackWhiteSRC = "gaRe7Ew3hls";
let incTab = document.getElementById('incTabInnerBody');

//function to handle iframe package creation
const createIframe = (roseGoldSRC, blackWhiteSRC, activeSRC) => {
  let iframeCont = document.createElement("iframe");
  iframeCont.setAttribute("src", `https://www.youtube.com/embed/${activeSRC}`);
  iframeCont.setAttribute("frameborder", "0");
  iframeCont.setAttribute("allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture");
  iframeCont.setAttribute("allowfullscreen", "");
  iframeCont.setAttribute("id", "incIframe");

  let videoLinksCont = document.createElement("div");
  videoLinksCont.classList.add("videoLinksCont");
  let roseGoldText = document.createElement("p");
  roseGoldText.innerHTML = "Rose Gold";
  roseGoldText.addEventListener("click", function() {
    loadNewIframe(roseGoldSRC);
    roseGoldText.classList.toggle("activeVideoLink");
    blackWhiteText.classList.toggle("activeVideoLink");
  });
  let blackWhiteText = document.createElement("p");
  blackWhiteText.innerHTML = "Black/White Live";
  blackWhiteText.addEventListener("click", function() {
    loadNewIframe(blackWhiteSRC);
    roseGoldText.classList.toggle("activeVideoLink");
    blackWhiteText.classList.toggle("activeVideoLink");
  });

  if (activeSRC == roseGoldSRC) {
    roseGoldText.classList.add("activeVideoLink");
  } else {
    blackWhiteText.classList.add("activeVideoLink");
  }

  videoLinksCont.appendChild(roseGoldText);
  videoLinksCont.appendChild(blackWhiteText);
  importCont.appendChild(iframeCont);
  importCont.appendChild(videoLinksCont);
};

createIframe(roseGoldSRC, blackWhiteSRC, roseGoldSRC);

//function to load a new iframe package
const loadNewIframe = (activeSRC) => {
  importCont.innerHTML = "";
  createIframe(roseGoldSRC, blackWhiteSRC, activeSRC);
}
