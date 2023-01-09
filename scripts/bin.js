const binClose = document.getElementById("binClose");
const binApp = document.querySelector(".desktop__bin");
const binIcon = document.getElementById("binTaskApp")

export default function bin() {
    // Close Bin
    binClose.addEventListener("click", (e) => {
        binApp.classList.add("opening");
        binIcon.classList.add("hidden");
        setTimeout(() => {
            binApp.classList.add("hidden");
        }, 150);
    })
}