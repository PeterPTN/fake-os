const calculatorClose = document.getElementById("calculatorClose");
const calculatorApp = document.querySelector(".desktop__calculator");

export default function calculator() {
    // Close Calculator
    calculatorClose.addEventListener("click", (e) => {
        calculatorApp.classList.add("opening");
        setTimeout(() => {
            calculatorApp.classList.remove("openAnimation");
            calculatorApp.classList.add("hidden");
        }, 150);
    })
}