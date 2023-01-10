import chromeScripts from './chrome.js';
import dragModals from './dragModals.js';
import doubleClick from './doubleClick.js';
import { openTaskBarApp, openStartMenu, openStartMenuApp } from './taskbar.js';
import calculator from './calculator.js';
import bin from './bin.js';
import { getTime, getDate } from './getTime.js';
import minimiseApp from './minimiseApp.js';

// To be added eventually @_@
import dragItems from './dragIcons.js';
import resize from "./resize.js";

// Will add to 1 event listener eventually
window.addEventListener("load", chromeScripts());
window.addEventListener("load", dragModals());
window.addEventListener("load", doubleClick());
window.addEventListener("load", openTaskBarApp(), openStartMenu(), openStartMenuApp());
window.addEventListener("load", calculator());
window.addEventListener("load", bin());
window.addEventListener("load", minimiseApp());

const confirm = document.getElementById("confirm");
confirm.addEventListener("click", (e) => {
    document.querySelector(".desktop__intro").classList.add("hidden")
})

const time = document.getElementById("time");
const date = document.getElementById("date");
setInterval(() => time.innerText = getTime(), 100);
setInterval(() => date.innerText = getDate(), 100);

// Refactor
// Use this JS file to call util functions
// Make util functions pure, pass args to use them
// Look at Alex's snippet as example