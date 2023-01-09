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
                // Needed for Chrome closing animation
                app.classList.add("openAnimation")
            }, 150);

            // Open Chrome Resizer
            if (app.className.includes("chrome")) {
                chromeBackground.classList.remove("opening");
                chromeBackground.classList.remove("hidden");
            };

            if (app.className.includes("bin")) {
                let bin = document.getElementById("binTaskApp")
                bin.classList.remove("hidden");
                bin.style.borderColor = "rgb(214, 179, 134)";
            } else if (app.className.includes("chrome")) {
                document.getElementById("chromeTaskApp").style.borderColor = "rgb(214, 179, 134)";
            } else if (app.className.includes("calculator")) {
                document.getElementById("calculatorTaskApp").style.borderColor = "rgb(214, 179, 134)";
            }


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