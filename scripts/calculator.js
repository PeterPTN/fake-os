const calculatorClose = document.getElementById("calculatorClose");
const calculatorApp = document.querySelector(".desktop__calculator");
const calculatorTaskApp = document.getElementById("calculatorTaskApp");

export default function calculator() {
    // Close Calculator
    calculatorClose.addEventListener("click", (e) => {
        calculatorApp.classList.add("opening");
        calculatorTaskApp.style.borderColor = "transparent";
        setTimeout(() => {
            calculatorApp.classList.add("hidden");
        }, 150);
    })
}