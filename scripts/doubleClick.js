const chromeBackground = document.querySelector(".desktop__chrome-background");

export default function doubleClick() {
    let firstClick = 0;
    let app = null;

    document.addEventListener("click", (e) => {
        let desktopIcon = e.target.parentNode.className;

        if (firstClick > 0 && e.timeStamp - firstClick < 350) {
            app.classList.remove("hidden");
            setTimeout(() => app.classList.remove("opening"), 100)
            setTimeout(() => {
                app.classList.add("closeAnimation")

            }, 355);

            // Open Chrome Resizer
            if (app.className.includes("chrome")) {
                chromeBackground.classList.remove("opening")
                chromeBackground.classList.remove("hidden")
            };

            firstClick = 0;
            app = null;
        }

        if (desktopIcon.includes("desktop--icon")) {
            firstClick = e.timeStamp;

            if (desktopIcon.includes("chrome")) {
                app = document.querySelector(".desktop__chrome")
            } else if (desktopIcon.includes("calculator")) {
                app = document.querySelector(".desktop__calculator")
            } else if (desktopIcon.includes("bin")) {
                app = document.querySelector(".desktop__bin")
            }
        }
    })
}