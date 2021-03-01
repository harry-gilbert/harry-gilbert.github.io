// Script to handle colour themes
// Built by Harry Gilbert, 2021

"use strict";

const themes = [
    {
        name: "azul oscuro",
        text: "#D0D0D0",
        textActive: "#D0D0D050",
        link: "#7AABD2",
        background: "#262626",
        accent: "#16568A"
    },
    {
        name: "azul claro",
        text: "#444444",
        textActive: "#44444480",
        link: "#006FC8",
        background: "#E3E3E3",
        accent: "#ADD3F2"
    },
    {
        name: "candy",
        text: "#4A306D",
        textActive: "#4A306D50",
        link: "#C50720",
        background: "#D3BCCC",
        accent: "#C8A5CA"
    },
    {
        name: "monteverde",
        text: "#E6FDFF",
        textActive: "#E6FDFF50",
        link: "#E7D47F",
        background: "#404E5C",
        accent: "#719470"
    },
    {
        name: "seaside",
        text: "#444444",
        textActive: "#44444450",
        link: "#F54100",
        background: "#ADD2E5",
        accent: "#FAF9C6"
    },
];


const toggleTheme = (index) => {
    if ( index >= themes.length) {
        index = 0;
    };
    document.documentElement.style.setProperty('--hg-bg', themes[index].background);
    document.documentElement.style.setProperty('--hg-text', themes[index].text);
    document.documentElement.style.setProperty('--hg-text-active', themes[index].textActive);
    document.documentElement.style.setProperty('--hg-accent', themes[index].accent);
    document.documentElement.style.setProperty('--hg-link', themes[index].link);
    document.getElementById("theme-status").innerHTML = themes[index].name;
    document.getElementById("theme-index").innerHTML = `${index+1}/${themes.length}`;
    localStorage.setItem("currentTheme", index);
}

const nextTheme = () => {
    let nextIndex = Number(localStorage.getItem("currentTheme")) + 1;
    toggleTheme(nextIndex);
}

let currentTheme = Number(localStorage.getItem("currentTheme"));
if ( currentTheme > 0 ) {
    toggleTheme(currentTheme);
}