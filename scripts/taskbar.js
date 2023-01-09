const taskbarApp = document.querySelector(".taskbar__left-active");
const chromeBackground = document.querySelector(".desktop__chrome-background");
const startMenu = document.querySelector(".desktop__startmenu");
const windowsIcon = document.querySelector(".taskbar__left-windows");

export function openStartMenuApp() {
    startMenu.addEventListener("click", openBySingleClick);
}

export function openTaskBarApp() {
    taskbarApp.addEventListener("click", openBySingleClick)
}

export function openStartMenu() {
    document.addEventListener("click", (e) => {
        let parentNode = e.target.parentNode.className;

        // Refactor
        if (!startMenu.classList.contains("hidden") && (!parentNode.includes("desktop__startmenu"))) {
            windowsIcon.style.backgroundColor = "transparent";

            startMenu.classList.add("start-opening");
            setTimeout(() => {
                startMenu.classList.remove("openAnimation");
                startMenu.classList.add("hidden");
            }, 150);

        } else if (e.target.id === "startMenu") {
            windowsIcon.style.backgroundColor = "rgba(128, 128, 128, 0.650)";

            startMenu.classList.remove("hidden");
            setTimeout(() => {
                startMenu.classList.remove("start-opening");
                startMenu.classList.add("openAnimation")
            }, 150);
        }
    })
}

function openBySingleClick(e) {
    let app = null;
    let parentNode = e.target.parentNode.className;
    let target = e.target.id;
    console.log(target)

    if (target === "chromeTaskApp") {
        document.getElementById("chromeTaskApp").style.borderColor = "rgb(214, 179, 134)";
    } else if (target === "calculatorTaskApp") {
        document.getElementById("calculatorTaskApp").style.borderColor = "rgb(214, 179, 134)";
    } 

    if (parentNode.includes("calculator")) {
        app = document.querySelector(".desktop__calculator")
    } else if (parentNode.includes("chrome")) {
        app = document.querySelector(".desktop__chrome")
    }

    app.classList.remove("hidden");

    setTimeout(() => {
        app.classList.remove("opening");
        app.classList.add("openAnimation");
    }, 150);

    // Open Chrome Resizer
    if (app.className.includes("chrome")) chromeBackground.classList.remove("opening"), chromeBackground.classList.remove("hidden");
}