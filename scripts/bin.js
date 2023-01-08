const binClose = document.getElementById("binClose");
const binApp = document.querySelector(".desktop__bin");

export default function bin() {
    // Close Bin
    binClose.addEventListener("click", (e) => {
        binApp.classList.add("opening");
        setTimeout(() => {
            binApp.classList.remove("openAnimation");
            binApp.classList.add("hidden");
        }, 150);
    })
}