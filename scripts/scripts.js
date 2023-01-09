import chromeScripts from './chrome.js';
import dragModals from './dragModals.js';
import doubleClick from './doubleClick.js';
import { openTaskBarApp, openStartMenu, openStartMenuApp } from './taskbar.js';
import calculator from './calculator.js';
import bin from './bin.js';
import getTime from './getTime.js';
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
window.addEventListener("load", getTime());
window.addEventListener("load", minimiseApp());

const confirm = document.getElementById("confirm");
confirm.addEventListener("click", (e) => {
    document.querySelector(".desktop__intro").classList.add("hidden")
})
