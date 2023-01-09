export default function minimiseApps() {
    const chromeApp = document.querySelector(".desktop__chrome");
    const chromeBackground = document.querySelector(".desktop__chrome-background");
    const calculatorApp = document.querySelector(".desktop__calculator");
    const binApp = document.querySelector(".desktop__bin");

    document.addEventListener("click", (e) => {
        const item = e.target.id;

        if (item === "minimiseBin") binApp.classList.add("opening"), setTimeout(() => binApp.classList.add("hidden"), 150);
        else if (item === "minimiseCalculator") calculatorApp.classList.add("opening"), setTimeout(() => calculatorApp.classList.add("hidden"), 150);
        else if (item === "minimiseChrome") {
            chromeApp.classList.add("opening")
            chromeBackground.classList.add("opening");
            setTimeout(() => {
                chromeApp.classList.add("hidden")
                chromeBackground.classList.add("hidden")
            }, 150);
        }
    })
}