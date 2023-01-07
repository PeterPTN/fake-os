export default function dragItems() {
    // create a variable that references the element we want to drag - initialize to null
    const chromeBackground = document.querySelector(".desktop__chrome-background");
    const chromeWindow = document.querySelector(".desktop__chrome");
    let dragging = null;

    // store some offset coorindates for the element we're dragging

    let dragOffsetX = 0;
    let dragOffsetY = 0;

    document.addEventListener('mousemove', (event) => {
        if (dragging) {
            dragging.style.left = event.clientX - dragOffsetX + 'px';
            dragging.style.top = event.clientY - dragOffsetY + 'px';
        }
    });

    document.addEventListener('mouseup', (event) => {
        if (dragging) {
            dragging.classList.remove('dragging');
            dragging = null;
        }
    });

    document.querySelectorAll('.draggable').forEach((element) => {
        element.addEventListener('mousedown', (event) => {
            if (event.target.classList.value === "desktop__chrome-header-first") {
                dragging = element;
                element.classList.remove("hidden");
                dragOffsetX = event.offsetX;
                dragOffsetY = event.offsetY;
                element.classList.add('dragging');
            }
        });
    });
}
